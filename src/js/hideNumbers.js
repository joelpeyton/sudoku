function hideNumbers() {
    let numbers = [];
    for (let i = 0; i <= 80; i++) {
        numbers.push(i);
    }
    for (let j = 0; j < 40; j++) {
        let s = Math.floor(Math.random() * numbers.length);
        numbers.splice(s, 1);
    }

    return numbers;
}

export default hideNumbers;