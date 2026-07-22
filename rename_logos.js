import fs from 'fs';
import path from 'path';

const publicDir = 'C:\\Users\\NB LAPTOP\\.gemini\\antigravity\\scratch\\digizier-3d-website\\public';
const techDir = path.join(publicDir, 'tech');
const userUploadedDir = 'C:\\Users\\NB LAPTOP\\.gemini\\antigravity\\brain\\77e99856-a4ed-43d7-95e6-b8be30347190\\.user_uploaded';

if (!fs.existsSync(techDir)) {
  fs.mkdirSync(techDir, { recursive: true });
}

fs.copyFileSync(path.join(userUploadedDir, 'media__1784746268081.png'), path.join(techDir, 'claude_logo.png'));
fs.copyFileSync(path.join(userUploadedDir, 'media__1784746304814.png'), path.join(techDir, 'n8n_flow_logo.png'));
fs.copyFileSync(path.join(userUploadedDir, 'media__1784746317810.png'), path.join(techDir, 'antigravity_logo.png'));
fs.copyFileSync(path.join(userUploadedDir, 'media__1784746357264.png'), path.join(techDir, 'digizier_logo.png'));
fs.copyFileSync(path.join(userUploadedDir, 'media__1784746357264.png'), path.join(publicDir, 'digizier_logo.png'));

console.log('Successfully created all friendly tech logos!');
