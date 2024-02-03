function isPalindrome(str: string): boolean {
    // Menghapus karakter non-alfanumerik dan mengonversi string menjadi huruf kecil
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Memeriksa apakah string adalah palindrome
    for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
        if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Contoh penggunaan
const str1 = "level";
console.log(`"${str1}" is palindrome: ${isPalindrome(str1)}`);

const str2 = "Hello";
console.log(`"${str2}" is palindrome: ${isPalindrome(str2)}`);