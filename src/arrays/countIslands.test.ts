function countIslands(image){

    const  exploreMap =  (x,y, image)  =>{
        if (x >= 0 && x < image[0].length && y >= 0 && y < image.length && image[y][x] != 0) {
            image[y][x] = 0;
            exploreMap(x - 1, y, image);
            exploreMap(x + 1, y, image);
            exploreMap(x, y - 1, image);
            exploreMap(x, y + 1, image);
            exploreMap(x + 1, y + 1, image);
            exploreMap(x - 1, y + 1, image);
            exploreMap(x - 1, y - 1, image);
            exploreMap(x + 1, y - 1, image);
        }
    }

    let islandCount = 0;
    for(let y = 0; y < image.length; y++) {
        for(let x = 0; x < image[0].length; x++) {
            if (image[y][x] === 1) {
                islandCount++;
                exploreMap(x,y,image);
            }
        }
    }
    return islandCount;
}



describe('simple cases', function(){

    it('should return zero when there are no islands', function(){
        var image = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
        ];

        expect(countIslands(image)).toEqual( 0);
    });

    it('should find single island', function(){
        var image = [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
        ];

        expect(countIslands(image)).toEqual(1);
    });

    it('should handle example case', function(){
        var image = [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,1,1,0,0,0,0,0,0],
            [0,0,1,1,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,1,0],
            [0,0,0,0,0,1,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0],
        ];
        expect(countIslands(image)).toEqual(2);
    });


});

/* Count the Islands
https://www.codewars.com/kata/55a4f1f67157d8cbe200007b/train/javascript
Implement an algorithm which analyzes a two-color image and determines how many isolated areas of a single color the image contains.
Islands

An "island" is a set of adjacent pixels of one color (1) which is surrounded by pixels of a different color (0). Pixels are considered adjacent if their coordinates differ by no more than 1 on the X or Y axis.

Below you can see an example with 2 islands:

    on the left in the form of a matrix of 1's and 0's
    on the right in an equivalent stringified form using "X" and "~" characters for better readability

[
  [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
  [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
  [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
  [0,0,0,0,0,0,0,0,1,0],          "~~~~~~~~X~"
  [0,0,0,0,0,1,1,1,0,0],          "~~~~~XXX~~"
  [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
]

Specification

Your task is to implement a function which accepts a matrix containing the numbers 0 and 1. It should return the number of islands as an integer.
* */

