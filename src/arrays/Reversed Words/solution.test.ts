import {reverseWords} from './solution'
describe("reverseWords",function(){
  it("should work for some examples", function(){
    expect(reverseWords("hello world!")).toEqual("world! hello")
    expect(reverseWords("yoda doesn't speak like this" )).toEqual( "this like speak doesn't yoda")
    expect(reverseWords("foobar"                       )).toEqual(  "foobar")
    expect(reverseWords("kata editor"                  )).toEqual(  "editor kata")
    expect(reverseWords("row row row your boat"        )).toEqual( "boat your row row row")
  });
});