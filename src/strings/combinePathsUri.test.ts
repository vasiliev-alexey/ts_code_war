function combinePathsUri(...paths) {
    if(paths ==null || paths.length == 0) {
        return  "/";
    }
    let processed = paths.map( v =>   v.replaceAll(" " , "").trim().replaceAll("\\", "/")).filter( v => v.length !== 0);

    if(processed.length) {
        processed =  processed.map( v => v.replaceAll(/\/$/g, ""));
    }


    return ("/"+ processed.join("/")).replaceAll("//", "/")

//https://www.codewars.com/kata/564b323d7ff0ed401400015f/train/javascript
}


describe("Tests", () => {
    it("test", () => {
        expect(combinePathsUri()).toEqual("/");
        expect(combinePathsUri("google", "search", "test")).toEqual("/google/search/test");
        expect(combinePathsUri("   /testing", "", "", "  \\  empty", "\\parts/", " and ", "", "with/different\\slashes    ")).toEqual("/testing/empty/parts/and/with/different/slashes");
        expect(combinePathsUri(" .. ", "/complex/path/with/slashes/inside/", " . ", "\\complex\\path\\with\\back\\slashes\\inside\\")).toEqual("/../complex/path/with/slashes/inside/./complex/path/with/back/slashes/inside");
    });
});
