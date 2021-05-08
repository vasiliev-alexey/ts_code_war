export function killer(suspectInfo : Record<string, string[]>, dead : string[]) {
  return  Object.entries(suspectInfo).filter ((el : [string , string[]]) => {
  return  dead.every( d => el[1].includes(d))
          }
     )[0][0];

}