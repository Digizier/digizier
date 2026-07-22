import fs from 'fs';
import path from 'path';

const src = 'C:\\Users\\NB LAPTOP\\.gemini\\antigravity\\brain\\77e99856-a4ed-43d7-95e6-b8be30347190\\.user_uploaded\\media__1784734030009.png';
const publicDir = 'C:\\Users\\NB LAPTOP\\.gemini\\antigravity\\scratch\\digizier-3d-website\\public';
const dest = path.join(publicDir, 'nadir_habib.png');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.copyFileSync(src, dest);
console.log('Successfully copied photo to:', dest);
