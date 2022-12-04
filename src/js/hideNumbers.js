function hideNumbers(difficulty) {
    let size;
    switch(difficulty) {
        case 'medium':
            size = 31;
            break;
        case 'hard':
            size = 21;
            break;
        default:
          size = 41;
      }

    let numbers = [];
    for (let i = 0; i <= 80; i++) {
        numbers.push(i);
    }
    for (let j = 0; j < size; j++) {
        let s = Math.floor(Math.random() * numbers.length);
        numbers.splice(s, 1);
    }

    return numbers;
}

export default hideNumbers;