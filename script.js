const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on("line", line => input.push(line.trim()))
  .on("close", () => {
    const lines = input; // trimmed lines, empty lines become ""
    if (lines.length === 0) return;

    function shortcut(a, b) {
      if (!a || !b) return "";
      return a[0] + b[0];
    }

    const outputs = [];
    let idx = 0;

    // If first line is an integer, treat as T test cases
    if (/^\d+$/.test(lines[0])) {
      const T = parseInt(lines[0], 10);
      idx = 1;
      for (let t = 0; t < T; t++) {
        let a = "", b = "";
        if (idx >= lines.length) {
          // missing input -> treat as empty strings
          a = ""; b = "";
        } else {
          const line = lines[idx];
          if (line.includes(" ")) {
            // both strings on one line
            const parts = line.split(/\s+/);
            a = parts[0] || "";
            b = parts[1] || "";
            idx++;
          } else {
            // first string on this line, second string on next line (could be empty)
            a = line;
            idx++;
            b = idx < lines.length ? lines[idx] : "";
            idx++;
          }
        }
        outputs.push(shortcut(a, b));
      }
    } else {
      // Single test case (no T). Could be:
      // - two lines: lines[0], lines[1]
      // - one line with both strings separated by space
      let a = "", b = "";
      if (lines.length === 1) {
        if (lines[0].includes(" ")) {
          const parts = lines[0].split(/\s+/);
          a = parts[0] || "";
          b = parts[1] || "";
        } else {
          a = lines[0];
          b = "";
        }
      } else {
        a = lines[0];
        b = lines[1];
      }
      outputs.push(shortcut(a, b));
    }

    console.log(outputs.join("\n"));
  });

