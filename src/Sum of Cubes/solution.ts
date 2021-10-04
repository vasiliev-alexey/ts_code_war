export function sumCubes(n : number){
  return [...Array(n+1).keys()].reduce( (ag, v) => {
     return  ag += (v ** 3)
    } , 0)
}
