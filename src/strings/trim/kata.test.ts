import {trim} from './kata';

describe('trim the string', function () {


    it('should remove leading and trailing whitespaces', () => {
        expect(trim("foo      ")).toEqual("foo");
        expect(trim("      foo      ")).toEqual("foo");
    });

    /*
    assertString("      foo".trim(), "foo", "leading spaces");
    assertString("      foo      ".trim(), "foo", "leading and trailing spaces");
    assertString("foo    bar".trim(), "foo    bar", "spaces in between");
    assertString("    ".trim(), "", "only spaces");
    * */

});



