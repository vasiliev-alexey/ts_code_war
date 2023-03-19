function pyramid(n) {

    let ret = "";
     for (let i = 0; i < n; i++) {
        let padVal = i == n - 1 ? "___" : " ";
        ret = ret + "".padStart(n - i - 1, " ") + "/" + "".padStart(i * 2, padVal) + "\\\n"
    }
    return ret;

}


describe("Basic tests", () => {
    it("Tests", () => {
        expect(pyramid(1)).toEqual("/\\\n");
        expect(pyramid(2)).toEqual(" /\\\n/__\\\n");
        expect(pyramid(4)).toEqual("   /\\\n  /  \\\n /    \\\n/______\\\n");
        expect(pyramid(6)).toEqual("     /\\\n    /  \\\n   /    \\\n  /      \\\n /        \\\n/__________\\\n");
        expect(pyramid(10)).toEqual("         /\\\n        /  \\\n       /    \\\n      /      \\\n     /        \\\n    /          \\\n   /            \\\n  /              \\\n /                \\\n/__________________\\\n");
    })
})


/* Return pyramids
https://www.codewars.com/kata/5a1c28f9c9fc0ef2e900013b/train/javascript
The task is very simple.

You must to return pyramids. Given a number n you print a pyramid with n floors

For example , given a n=4 you must to print this pyramid:
   /\
  /  \
 /    \
/______\

Other example, given a n=6 you must to print this pyramid:

     /\
    /  \
   /    \
  /      \
 /        \
/__________\
Another example, given a n=10, you must to print this pyramid:

         /\
        /  \
       /    \
      /      \
     /        \
    /          \
   /            \
  /              \
 /                \
/__________________\

 */
