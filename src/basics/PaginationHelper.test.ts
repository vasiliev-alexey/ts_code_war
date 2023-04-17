class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
        // The constructor takes in an array of items and a integer indicating how many
        // items fit within a single page
    }
    itemCount() {
        // returns the number of items within the entire collection
        return this.collection.length;
    }
    pageCount() {
        // returns the number of pages
        return Math.ceil( this.itemCount()/ this.itemsPerPage)
    }
    pageItemCount(pageIndex) {
        const pageNumber = pageIndex + 1
        const pageCount = this.pageCount()

        if (pageNumber < pageCount && pageNumber > 0) {
            return this.itemsPerPage
        }

        if (pageNumber === pageCount) {
            return this.itemCount() - ((pageCount - 1) * this.itemsPerPage)
        }

        return -1
    }
    pageIndex(itemIndex) {
        const itemCount = this.itemCount()
        const itemNumber = itemIndex + 1

        if (itemCount > 0 && itemNumber >= 0 && itemNumber <= itemCount) {
            const pageNumber = Math.ceil(itemNumber / this.itemsPerPage)
            return pageNumber - 1
        }

        return -1
    }

}
//https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript
describe("Tests suite", () => {
    const { strictEqual } = require('chai').assert;

    function doTest(instance, methodName, expected, ...args) {
        const actual = instance[methodName](...args);
        strictEqual(actual, expected, `for ${methodName}(${args.join(', ')})`);
    }

    it("sample test : 24 items with 10 per page", () => {
        const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
        const helper = new PaginationHelper(collection, 10)

        doTest(helper, 'pageCount', 3);
        doTest(helper, 'itemCount', 24);

        doTest(helper, 'pageItemCount', 10, 1);
        doTest(helper, 'pageItemCount', 4, 2);
        doTest(helper, 'pageItemCount', -1, 3);
        doTest(helper, 'pageIndex', -1, 40);

        doTest(helper, 'pageIndex', 2, 22);
        doTest(helper, 'pageIndex', 0, 3);
        doTest(helper, 'pageIndex', 0, 0);
        doTest(helper, 'pageIndex', -1, -1);
        doTest(helper, 'pageIndex', -1, -23);
        doTest(helper, 'pageIndex', -1, -15);
    });

    it ('empty collection', () => {
        const empty = new PaginationHelper([], 10);

        doTest(empty, 'pageCount', 0);
        doTest(empty, 'itemCount', 0);
        doTest(empty, 'pageIndex', -1, 0);
        doTest(empty, 'pageItemCount', -1, 0);
    });



});
