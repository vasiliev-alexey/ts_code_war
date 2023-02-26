import  {assert} from "chai";
import {numberOfPairs} from "./solution";

describe("Fixed Tests", () => {
  it("Should work for Example tests", function(){
    let tests = [
      //   [['red','red'],1],
      // [['red','green','blue'],0],
      // [['gray','black','purple','purple','gray','black'],3],
       [[
        'Gray',   'Navy',    'Maroon', 'Olive',
        'Black',  'Olive',   'Silver', 'Olive',
        'Black',  'Gray',    'Silver', 'Olive',
        'Silver', 'Purple',  'Lime',   'Yellow',
        'Blue',   'Fuchsia', 'Black',  'Black',
        'Olive',  'Aqua',    'Blue',   'Purple',
        'Black',  'Black',   'Silver', 'Maroon',
        'Gray',   'White',   'Navy',   'Blue',
        'Aqua',   'White',   'Black',  'Black',
        'Lime',   'Olive',   'Red',    'Aqua',
        'Silver', 'White',   'Black',  'Black',
        'Teal'
      ], 18]
    ];

    tests.forEach(a=>{
      assert.strictEqual(numberOfPairs(a[0]),a[1], `Testing for ${a[0]}`);
    });
  });
})
