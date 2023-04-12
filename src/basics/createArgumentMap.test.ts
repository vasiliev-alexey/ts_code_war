function createArgumentMap(fn, ...rest) {
    const fnStr = fn.toString();
    const startArgPos = fnStr.indexOf('(') + 1;
    const endArgPos = fnStr.indexOf(')');
    const argByNames = fnStr.slice(startArgPos, endArgPos).split(',');

    if (!rest.length) {
        return rest;
    }

    return argByNames.reduce((acc, curr, index) => {
        acc[curr] = rest[index];
        return acc;
    }, {});
}


