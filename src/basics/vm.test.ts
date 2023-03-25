const vm = function (version?: string) {

    const release = function (): string {
        return `${majorV}.${minorV}.${patchV}`
    }

    let innerVersion = "";
    let prevVersion  =  [];

    if (!version || version == "") {
        innerVersion = "0.0.1"
    } else {
        innerVersion = version
    }

    let [majorV = '', minorV = '0', patchV = '0'] = innerVersion.split(".")

    if(!release().match(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/g)) {
        throw  new  Error ("Error occured while parsing version!")
    }


    //prevVersion.push(release());
    // console.log(majorV, minorV , patchV)


    const major = function () {
        prevVersion.push( release());
        majorV = (+majorV + 1).toString()
        minorV = "0"
        patchV = minorV;

        return this
    }
    const minor = function () {
        prevVersion.push( release());
        minorV = (+minorV + 1).toString()
        patchV = "0";
        return this
    }
    const patch = function () {
        prevVersion.push( release());
        patchV = (+patchV + 1).toString()
        return this
    }

    const rollback = function () {

        if(prevVersion.length == 0) {

            throw      Error ('Cannot rollback!')
        }

        let prev = prevVersion.pop();

        [majorV , minorV , patchV ] = prev.split(".")
        return this
    }

    return {release, major, minor, patch , rollback};
};


const {assert} = require('chai');

describe('VersionManager tests', () => {
    it('Initialization tests', () => {
        assert.strictEqual(vm().release(), '0.0.1', 'Default initial version');
        assert.strictEqual(vm('').release(), '0.0.1', 'Default initial version');
        assert.strictEqual(vm('1.2.3').release(), '1.2.3', 'No version changes');
        assert.strictEqual(vm('1.2.3.4').release(), '1.2.3', 'No version changes');
        assert.strictEqual(vm('1.2.3.d').release(), '1.2.3', 'No version changes');
        assert.strictEqual(vm('1').release(), '1.0.0', 'Default minor version is 0');
        assert.strictEqual(vm('1.1').release(), '1.1.0', 'Default patch is 0');
    });

    it('Major releases tests', () => {
        assert.strictEqual(vm().major().release(), '1.0.0', "First major release");
        assert.strictEqual(vm('1.2.3').major().release(), '2.0.0', "Major release after 1.2.3");
        assert.strictEqual(vm('1.2.3').major().major().release(), '3.0.0', "Second major release after 1.2.3");
    });

    it('Minor releases tests', () => {
        assert.strictEqual(vm().minor().release(), '0.1.0', "First minor relase");
        assert.strictEqual(vm('1.2.3').minor().release(), '1.3.0', "Minor release after 1.2.3");
        assert.strictEqual(vm('1').minor().release(), '1.1.0', "Minor relase after 1");
        assert.strictEqual(vm('4').minor().minor().release(), '4.2.0', "Second minor release after 4");
    });

    it('Patch releases tests', () => {
        assert.strictEqual(vm().patch().release(), '0.0.2', "First patch release");
        assert.strictEqual(vm('1.2.3').patch().release(), '1.2.4', "First patch release");
        assert.strictEqual(vm('4').patch().patch().release(), '4.0.2', "Second patch release after 4");
    });

    it('Rollbacks tests', () => {
        assert.strictEqual(vm().major().rollback().release(), '0.0.1', "Rollback of major release");
        assert.strictEqual(vm().minor().rollback().release(), '0.0.1', "Rollback of minor release");
        assert.strictEqual(vm().patch().rollback().release(), '0.0.1', "Rollback of patch release");
        assert.strictEqual(vm().major().patch().rollback().release(), '1.0.0', "Rollback of patch after major release");
        let m = vm().major().patch().rollback().major();
        assert.doesNotThrow(m.rollback.bind(m), undefined, undefined, "major -> patch -> rollback -> major -> rollback");
        assert.strictEqual(m.release(), '1.0.0', "major -> patch -> rollback -> major -> rollback");
        let m2 = vm().major().patch().rollback();
        assert.doesNotThrow(m2.rollback.bind(m2), undefined, undefined, "Multiple rollbacks right after another: major -> patch -> rollback -> rollback");
        assert.strictEqual(m2.release(), '0.0.1', "Multiple rollbacks right after another: major -> patch -> rollback -> rollback");
    });

    it('Seperated calls', () => {
        const m = vm('1.2.3');
        m.major();
        m.minor();
        assert.strictEqual(m.release(), '2.1.0');
    });

    it('Invalid initial versions', () => {
        for (const version of ["a", "a.b.c", "1.a", "0.1.a.5"]) {
            assert.throws(() => vm(version), Error, "Error occured while parsing version!", "Should throw when initial version cannot be parsed: " + JSON.stringify(version));
        }
    });

    it('Invalid rollbacks', () => {
        let m = vm();
        assert.throws(m.rollback.bind(m), Error, 'Cannot rollback!');
       assert.doesNotThrow(m.major.bind(m), undefined, undefined, "VersionManager should still be useable after failed rollback");
       assert.doesNotThrow(m.rollback.bind(m), undefined, undefined, "VersionManager can rollback once");
        assert.throws(m.rollback.bind(m), Error, 'Cannot rollback!', "Cannot rollback twice after one release");
    });
});


/* Versions manager
https://www.codewars.com/kata/5bc7bb444be9774f100000c3/train/javascript
In this kata we are going to mimic a software versioning system.

You have to implement a vm function returning an object.

It should accept an optional parameter that represents the initial version. The input will be in one of the following formats: "{MAJOR}", "{MAJOR}.{MINOR}", or "{MAJOR}.{MINOR}.{PATCH}". More values may be provided after PATCH but they should be ignored. If these 3 parts are not decimal values, an exception with the message "Error occured while parsing version!" should be thrown. If the initial version is not provided or is an empty string, use "0.0.1" by default.

This class should support the following methods, all of which should be chainable (except release):

major() - increase MAJOR by 1, set MINOR and PATCH to 0
minor() - increase MINOR by 1, set PATCH to 0
patch() - increase PATCH by 1
rollback() - return the MAJOR, MINOR, and PATCH to their values before the previous major/minor/patch call, or throw an exception with the message "Cannot rollback!" if there's no version to roll back to. Multiple calls to rollback() should be possible and restore the version history
release() - return a string in the format "{MAJOR}.{MINOR}.{PATCH}"
May the binary force be with you!
* */
