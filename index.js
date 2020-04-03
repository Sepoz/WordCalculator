let n = '10';
let b = n.split('');
let c, d, e;

function ten(b) {
    let element = b.length - 1;

    if (b[element] === '0') {
        return c = 'zero';
    } else if (b[element] === '1') {
        return c = 'one';
    } else if (b[element] === '2') {
        return c = 'two';
    } else if (b[element] === '3') {
        return c = 'three';
    } else if (b[element] === '4') {
        return c = 'four';
    } else if (b[element] === '5') {
        return c = 'five';
    } else if (b[element] === '6') {
        return c = 'six';
    } else if (b[element] === '7') {
        return c = 'seven';
    } else if (b[element] === '8') {
        return c = 'eight';
    } else if (b[element] === '9') {
        return c = 'nine';
    };
};

function anotherTen(n) {

    if (n === '10') {
        return d = 'ten';
    } else if (n === '11') {
        return d = 'eleven';
    } else if (n === '12') {
        return d = 'twelve';
    } else if (n === '13') {
        return d = 'thirteen';
    } else if (n === '14') {
        return d = 'fourteen';
    } else if (n === '15') {
        return d = 'fifteen';
    } else if (n === '16') {
        return d = 'sixteen';
    } else if (n === '17') {
        return d = 'seventeen';
    } else if (n === '18') {
        return d = 'eighteen';
    } else if (n === '19') {
        return d = 'nineteen';
    };
};

function oneh(b) {
    let element = b.length - 2;

    if (b[element] === '2') {
        return e = 'twenty';
    } else if (b[element] === '3') {
        return e = 'thirty';
    } else if (b[element] === '4') {
        return e = 'forty';
    } else if (b[element] === '5') {
        return e = 'fifty';
    } else if (b[element] === '6') {
        return e = 'sixty';
    } else if (b[element] === '7') {
        return e = 'seventy';
    } else if (b[element] === '8') {
        return e = 'eighty';
    } else if (b[element] === '9') {
        return e = 'ninety';
    };
};

function calculator(n, b) {
    let x = Number(n);

    if (x >= 0 && x < 10) {
        ten(b);
        console.log(c);
    } else if (x >= 10 && x < 20) {
        anotherTen(n);
        console.log(d);
    } else if (x >= 20 && x < 100) {
        oneh(b);
        ten(b);
        console.log(`${e}-${c}`);
    };
};

calculator(n, b);