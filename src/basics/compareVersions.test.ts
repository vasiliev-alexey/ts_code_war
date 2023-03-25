function compareVersions(version1, version2) {
    let v2 = version2.split(".").map(e => +e).concat(new Array(6).fill(0).map(String))
        .slice(0, 10);
    let v1 = version1.split(".").map(e => +e).concat(new Array(6).fill(0).map(String))
        .slice(0, 10);
    for (let i = 0; i < v1.length; i++) {
        if (v1[i] == v2[i]) continue;
        return v1[i] > v2[i]
    }
    return true
}


const {assert} = require("chai");

describe("Sample tests", () => {
    it("Testing versions without subversion", () =>
        assert.isTrue(compareVersions("11", "10")));

    it("Test equal versions", () =>
        assert.isTrue(compareVersions("11", "11")));

    it("Adding a subversion should make this version \"larger\"", () =>
        assert.isTrue(compareVersions("10.4.6", "10.4")));

    it("Subversion precedence is smaller than Version", () =>
        assert.isFalse(compareVersions("10.4", "11")));

    it("Version value is not the same as its decimal value", () =>
        assert.isFalse(compareVersions("10.4", "10.10")));

    it("Adding subversion does not make it larger than a greater version", () =>
        assert.isFalse(compareVersions("10.4.9", "10.5")));

    it("Adding subversion does not make 183.43.82.119.85 78.17.5.169.2", () =>
        assert.isTrue(compareVersions("183.43.82.119.85", "78.17.5.169.2")));
});


export function nextVersion(version : string) : string {
    let vers = version.split(".").map( Number);
    vers[vers.length -1] =  vers[vers.length -1]+1;
    for (let i = vers.length - 1; i >= 1; i--) {
        vers[i-1] = vers[i-1] +  Math.floor(vers[i]/10);
        vers[i]= vers[i]%10
    }

    return vers.join(".");
}




describe("solution", function(){
    it("basicTests", function(){
        assert.equal(nextVersion("1.2.3"),"1.2.4");
        assert.equal(nextVersion("0.9.9"),"1.0.0");
        assert.equal(nextVersion("1"),"2");
        assert.equal(nextVersion("1.2.3.4.5.6.7.8"),"1.2.3.4.5.6.7.9");
        assert.equal(nextVersion("9.9"),"10.0");
    });
});
