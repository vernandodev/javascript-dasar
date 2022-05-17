let result = 1 + 2;
document.writeln("<p> 1 + 2 = " + result + "</p>");
let originalResult = result; // hasil 3

result -= 1; // hasil 2
document.writeln("<p>" + originalResult + " - 1 = " + result + "</p>")
originalResult = result; // hasil 2

result *= 2;
document.writeln("<p>" + originalResult + " x 2 = " + result + "</p>")
