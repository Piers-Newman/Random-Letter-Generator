function generateRandomCharacters() {
    const caseOption = document.getElementById('case').value;
    const length = parseInt(document.getElementById('length').value);
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecial = document.getElementById('includeSpecial').checked;
    let characters = '';

    if (caseOption === 'uppercase') {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else if (caseOption === 'lowercase') {
        characters += 'abcdefghijklmnopqrstuvwxyz';
    } else {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    }

    if (includeNumbers) {
        characters += '0123456789';
    }

    if (includeSpecial) {
        characters += '!@#$%^&*()_+[]{}|;:,.<>?';
    }

    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    document.getElementById('output').innerText = result;
}