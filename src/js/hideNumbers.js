function hideNumbers(difficulty) {
    let size = 40;
    if (difficulty === 'medium') {size = 30};
    if (difficulty === 'hard') {size = 20};

    let numbers = [];
    for (let i = 0; i <= 80; i++) {
        numbers.push(String(i));
    }
    for (let j = 0; j < size; j++) {
        let s = String(Math.floor(Math.random() * numbers.length));
        numbers.splice(s, 1);
    }

    return numbers;
}

export default hideNumbers;