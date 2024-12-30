console.assert(groupThousands('12') === '12', 'groupThousands');
console.assert(groupThousands('1234') === '1 234', 'groupThousands');
console.assert(groupThousands('12345') === '12 345', 'groupThousands');
console.assert(groupThousands('1234567') === '1 234 567', 'groupThousands');
console.assert(groupThousands('12345678') === '12 345 678', 'groupThousands');

console.assert(groupThousands('-12') === '-12', 'groupThousands');
console.assert(groupThousands('-1234') === '-1 234', 'groupThousands');
console.assert(groupThousands('-12345') === '-12 345', 'groupThousands');
console.assert(groupThousands('-1234567') === '-1 234 567', 'groupThousands');
console.assert(groupThousands('-12345678') === '-12 345 678', 'groupThousands');

console.assert(groupThousands('12.98765432') === '12.987 654 32', 'groupThousands');
console.assert(groupThousands('1234.7654321') === '1 234.765 432 1', 'groupThousands');
console.assert(groupThousands('12345.654321') === '12 345.654 321', 'groupThousands');
console.assert(groupThousands('1234567.4321') === '1 234 567.432 1', 'groupThousands');
console.assert(groupThousands('12345678.21') === '12 345 678.21', 'groupThousands');

console.assert(groupThousands('-12.98765432') === '-12.987 654 32', 'groupThousands');
console.assert(groupThousands('-1234.7654321') === '-1 234.765 432 1', 'groupThousands');
console.assert(groupThousands('-12345.654321') === '-12 345.654 321', 'groupThousands');
console.assert(groupThousands('-1234567.4321') === '-1 234 567.432 1', 'groupThousands');
console.assert(groupThousands('-12345678.21') === '-12 345 678.21', 'groupThousands');

console.assert(groupThousands('0.4321') === '0.432 1', 'groupThousands');
console.assert(groupThousands('.21') === '.21', 'groupThousands');

console.assert(groupThousands('-0.4321') === '-0.432 1', 'groupThousands');
console.assert(groupThousands('-.21') === '-.21', 'groupThousands');
