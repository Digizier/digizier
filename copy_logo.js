import fs from 'fs';
import path from 'path';

const srcLogo = 'C:\\Users\\NB LAPTOP\\.gemini\\antigravity\\brain\\77e99856-a4ed-43d7-95e6-b8be30347190\\.user_uploaded\\media__1784735538378.png';
const publicDir = 'C:\\Users\\NB LAPTOP\\.gemini\\antigravity\\scratch\\digizier-3d-website\\public';
const destLogo = path.join(publicDir, 'digizier_logo.png');

if (fs.existsSync(srcLogo)) {
  fs.copyFileSync(srcLogo, destLogo);
  console.log('Successfully copied Digizier Logo to:', destLogo);
} else {
  console.error('Source logo file not found');
}
