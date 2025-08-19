def search_pattern(pattern, text):
    # Get the lengths of the pattern and the text
    m = len(pattern)
    n = len(text)

    # A loop to slide pattern over text one by one
    for i in range(n - m + 1):
        # For current index i, check for pattern match
        j = 0
        while j < m and text[i + j] == pattern[j]:
            j += 1

        # If the entire pattern matches the text starting at index i
        if j == m:
            print(f"Ocurrencia encontrada en {i}")

if __name__ == "__main__":
    print("Ingrese el Haystack")
    text = input()
    print("Ingrese el Needle")
    pattern = input()
    search_pattern(pattern, text)