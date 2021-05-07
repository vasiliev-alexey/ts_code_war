export function reverseWords(str : string){
  return str.split(' ').map( (el, index , arr) => {
    return arr[arr.length -1 - index]
  }).join(' ');  
}