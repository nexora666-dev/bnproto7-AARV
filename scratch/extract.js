const fs = require('fs');
const html = fs.readFileSync('admin/index.html', 'utf8');
const scriptMatch = html.match(/<script>\s*(.*?)\s*<\/script>/s);
if (scriptMatch) {
  fs.writeFileSync('scratch/script.js', scriptMatch[1]);
  console.log('Extracted script.');
} else {
  console.log('No script found.');
}
