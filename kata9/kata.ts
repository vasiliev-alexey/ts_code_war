export function accum(s: string): string {

    return s.split('').reduce( (p , c , i) => {
       return  p + '-' +  c.toUpperCase()+c.toLowerCase().repeat(i).toString();
    });

}