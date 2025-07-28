import fg from 'fast-glob';
import fs from 'fs';

async function generatePrecacheEntries() {
    const jsFiles = await fg([
        '.next/static/**/*.js',
        'public/**/*.*',
        '.next/static/**/*.css',
    ], {
        dot: true
    });

    const entries = jsFiles.map((file) => ({
        url: file.replace(/^public\//, '/')
        .replace(/^.next/, '/_next'),
        revision: null
    }));

    fs.writeFileSync('precache-manifest.json', JSON.stringify(entries, null, 2));
    console.log('✅ Precache manifest generated with', entries.length, 'entries.');
}

generatePrecacheEntries();
