// Jed Finch
// 24 April 2026
// EVIDENCE: JS Functions

function getTriangle() {
const base = parseFloat(prompt("enter the base here"));

const length = parseFloat(prompt("enter the length here"));

return {
    base: base,
    length: length
}
}

function getHeight() {
    const height = parseFloat(prompt("enter the height here"));
  return  {
        height: height,
    }
}

function triangleArea(base, height) {
const area = 0.5 * base * height;
return `the triangle with a base of ${base} ft and a height of ${height} ft has an area of ${area} sq. ft.`;
}

console.log(triangleArea(15,10));
