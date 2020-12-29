function wrapExpressHandler(fn) {
    if (Array.isArray(fn)) {
        return fn.map(wrapExpressHandler);
    }

    if (typeof fn !== 'function') {
        throw new TypeError('Function expected');
    }

    if (fn.length >= 4) {
        return function (a, b, c, d) {
            const next = typeof c === 'function' ? c : d;

            new Promise(resolve => { resolve(fn(a, b, c, d)); })
            .catch(next);
        };
    }

    return function (a, b, next) {
        new Promise(resolve => { resolve(fn(a, b, next)); })
        .catch(next);
    };
}

module.exports = wrapExpressHandler;
