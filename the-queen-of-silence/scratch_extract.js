const fs = require('fs');
const html = fs.readFileSync('resources/www.houseofhoney.com/www.houseofhoney.com/index.html', 'utf8');
const start = html.indexOf('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1908 304"');
const end = html.indexOf('</svg>', start) + 6;
const svg = html.substring(start, end);
fs.writeFileSync('resources/house_of_honey_logo.svg', svg);
console.log('Saved SVG, length:', svg.length);
