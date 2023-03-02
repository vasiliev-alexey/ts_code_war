export function multiplicationTable (size: number): number[][] {
   return  new Array(size).fill(0).map( (_ , i) => Array(size).fill(0).map( (__ , j) => (i+1)* (j+1) ))
}

//(1..=n).map(|i| (1..=n).map(|j| i*j).collect()).collect()

import { assert } from 'chai'

describe('Example Tests', () => {
    it('should work work with example tests', () => {
        assert.deepStrictEqual(multiplicationTable(1), [[1]])
        assert.deepStrictEqual(multiplicationTable(2), [[1, 2], [2, 4]])
        assert.deepStrictEqual(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]])
    })
})


function removeExclamationMarks(s : string) : string {
    return  s.replaceAll("!", '');
}
