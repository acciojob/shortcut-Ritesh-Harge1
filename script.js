function shortcut(s1, s2) {
    if (!s1 || !s2) return "";
    return s1[0] + s2[0];
}

let str1 = prompt("Enter first string:");
let str2 = prompt("Enter second string:");

alert(shortcut(str1, str2));


