import fs from 'fs';
import('./dist/index.js').catch(e => {
    fs.writeFileSync('debug_error_full.txt', e.stack || e.toString());
});
