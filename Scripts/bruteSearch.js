function searchPattern(pattern, text) {
    // Get the lengths of the pattern and the text
    const m = pattern.length;
    const n = text.length;

    // Loop to slide pattern over text one by one
    for (let i = 0; i <= n - m; i++) {
        let j = 0;

        // Check for pattern match at current index
        while (j < m && text[i + j] === pattern[j]) {
            j++;
        }

        // If full pattern matched
        if (j === m) {
            console.log(`Ocurrencia encontrada en ${i}`);
        }
    }
}

// Example usage with prompt (Node.js)
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese el Haystack: ", text => {
    readline.question("Ingrese el Needle: ", pattern => {
        searchPattern(pattern, text);
        readline.close();
    });
});
