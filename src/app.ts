const $button = document.getElementById('button') as HTMLButtonElement;
const $input1 = document.getElementById('input1') as HTMLInputElement;
const $input2 = document.getElementById('input2') as HTMLInputElement;

function soma(num1: number, num2: number) {
    return num1 + num2;
}

$button.addEventListener('click', () => {
    return console.log(soma(parseFloat($input1.value), parseFloat($input2.value)))
})