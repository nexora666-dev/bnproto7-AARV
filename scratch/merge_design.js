const fs = require('fs');
const path = require('path');

const srcPath = path.join('C:\\Users\\AARV\\Documents\\BlueNile\\ashtu proto', 'index.html');
const destPaths = [
    path.join('C:\\Users\\AARV\\Documents\\BlueNile\\bnproto7-AARV', 'index.html'),
    path.join('C:\\Users\\AARV\\Documents\\BlueNile\\bnproto7-AARV', 'menu.html')
];

let srcContent = fs.readFileSync(srcPath, 'utf8');

// Extract style block
const styleMatch = srcContent.match(/<style>[\s\S]*?<\/style>/);
// Extract svg block
const svgMatch = srcContent.match(/<svg[\s\S]*?<\/svg>/);
// Extract Bakery Pack data
const bakeryMatch = srcContent.match(/\{id:"bakery-pack"[\s\S]*?\]\}/);

if (!styleMatch || !svgMatch || !bakeryMatch) {
    console.error("Could not find required blocks in source file.");
    process.exit(1);
}

for (const destPath of destPaths) {
    let destContent = fs.readFileSync(destPath, 'utf8');

    // Replace style block
    destContent = destContent.replace(/<style>[\s\S]*?<\/style>/, styleMatch[0]);
    
    // Replace svg block
    destContent = destContent.replace(/<svg[\s\S]*?<\/svg>/, svgMatch[0]);

    // Check if bakery pack already exists, if not, append before the closing bracket of D array
    if (!destContent.includes('id:"bakery-pack"')) {
        // Find the last ]} before the end of the D array
        destContent = destContent.replace(/(\s*\]\s*\}\s*)\n(\s*\]\s*;)/, `$1,\n\n  ${bakeryMatch[0]}\n$2`);
        // If the regex didn't work due to different formatting (like `let D=[`), let's just do a simpler replace
        if (!destContent.includes('bakery-pack')) {
            // Usually the array ends with:
            //   ]}
            // ];
            destContent = destContent.replace(/\]\}\s*\n\]\s*;/, `]},\n\n  ${bakeryMatch[0]}\n];`);
        }
    }

    // Also update the header text "Authentic Irani" to "RESTAURANT · CAFE · BAKERY" if it hasn't been
    destContent = destContent.replace(/Authentic Irani.*?Biryani/, "RESTAURANT · CAFE · BAKERY");

    fs.writeFileSync(destPath, destContent, 'utf8');
    console.log(`Updated ${destPath}`);
}
