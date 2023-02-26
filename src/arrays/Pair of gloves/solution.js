export function numberOfPairs(gloves) {

    let rez = 0;
    let t = gloves.reduce((a, b) => a.set(b, (a.get(b) || 0) + 1), new Map());

    for (const e of t) {
        if (e[1] > 1) {

            rez = rez + Math.floor(e[1] / 2);
        }
    }    return rez
}


