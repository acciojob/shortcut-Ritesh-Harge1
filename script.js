const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line.trim());
}).on("close", function() {
    let [str1, str2] = input[0].split(" ");

    function shortcut(a, b) {
        if (!a || !b) return "";
        return a[0] + b[0];
    }

    console.log(shortcut(str1, str2));
});

