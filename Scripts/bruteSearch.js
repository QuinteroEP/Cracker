function searchPattern(pattern, text) {
      const m = pattern.length;
      const n = text.length;
      let results = [];

      for (let i = 0; i <= n - m; i++) {
        let j = 0;
        while (j < m && text[i + j] === pattern[j]) {
          j++;
        }
        if (j === m) {
          results.push(i);
        }
      }

      return results;
    }

    document.getElementById("patternForm").addEventListener("submit", function(event) {
      event.preventDefault();

      const text = document.getElementById("haystack").value;
      const pattern = document.getElementById("needle").value;

      const matches = searchPattern(pattern, text);
      const resultElement = document.getElementById("ResultadoBusqueda");
      const highlightElement = document.getElementById("highlightedText");

      if (matches.length > 0) {
        resultElement.textContent = "Ocurrencias encontradas en índices: " + matches.join(", ");

        // Build highlighted version of text
        let highlighted = "";
        let lastIndex = 0;

        matches.forEach(index => {
          highlighted += text.slice(lastIndex, index); // normal text
          highlighted += `<span class="highlight">${text.slice(index, index + pattern.length)}</span>`;
          lastIndex = index + pattern.length;
        });
        highlighted += text.slice(lastIndex);

        highlightElement.innerHTML = highlighted;
      } else {
        resultElement.textContent = "No se encontraron ocurrencias";
        highlightElement.textContent = text;
      }
    });