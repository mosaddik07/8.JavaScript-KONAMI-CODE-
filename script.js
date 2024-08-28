// সিক্রেট কোড : rahi

let pressed = [];
let secretCode = 'rahi';

const key = window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        cornify_add()
    }
})