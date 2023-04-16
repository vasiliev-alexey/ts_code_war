class FileNameExtractor {
    static extractFileName (dirtyFileName:string) {
        return dirtyFileName.replace(/^\d+_/, '').replace(/\.\w+$/, '');

    }
}


describe("Tests", () => {
    it("test", () => {
       expect(FileNameExtractor.extractFileName("1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34")).toEqual("FILE_NAME.EXTENSION");
       expect(FileNameExtractor.extractFileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION")).toEqual("FILE_NAME.EXTENSION");
    });
});
