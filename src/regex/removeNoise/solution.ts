export function removeNoise(str : string){
   return  str.replaceAll(/%|&|\$|\/|#|·|@|\||º|\\|ª/g, '').replaceAll('·', '')
}
//%$&/#·@|º\ª
