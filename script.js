const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line.trim());
}).on("close", function() {
    let str1 = input[0] || "";
    let str2 = input[1] || "";

    function shortcut(s1, s2) {
        if (!s1 || !s2) return "";
        return s1[0] + s2[0];
    }

    console.log(shortcut(str1, str2));
});


