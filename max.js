'use strict';
let a = 0;
while(true) {
    a++;
    let b = confirm('Иди нахуй номер '  + a);
    if (b === true) {
        alert('Умница');
        break;
    } else {
        alert('Попробуй нажать ок');
    }
}
// для максима)