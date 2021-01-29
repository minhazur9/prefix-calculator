const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calcData = (inputArr) => {
    const stack = [];
    for(let i = inputArr.length-1; i >= 0; i--) {
        switch(inputArr[i]) {
            case '+':
                stack.push(stack.shift() + stack.shift())
                break
            case '-':
                stack.push(stack.shift() - stack.shift())
                break
            case '*':
                stack.push(stack.shift() * stack.shift())
                break
            case '/':
                stack.push(stack.shift() / stack.shift())
                break
            default:
                stack.push(Number(inputArr[i]))
        }
    }
    return stack.pop()
}

const calculator = () => {
    let answer = 0;
    rl.question('Input Numbers\n', (input) => {
        answer = calcData(input.split(' '));
        console.log(answer)
        rl.close()
    })
    return answer;
}

calculator();