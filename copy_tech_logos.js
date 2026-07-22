import fs from 'fs';
import path from 'path';

const userUploadedDir = 'C:\\Users\\NB LAPTOP\\.gemini\\antigravity\\brain\\77e99856-a4ed-43d7-95e6-b8be30347190\\.user_uploaded';
const techDir = 'C:\\Users\\NB LAPTOP\\.gemini\\antigravity\\scratch\\digizier-3d-website\\public\\tech';

if (!fs.existsSync(techDir)) {
  fs.mkdirSync(techDir, { recursive: true });
}

// Copy the latest uploaded image files to tech directory
const files = [
  'media__1784746268081.png', // Claude Starburst
  'media__1784746304814.png', // Workflow Nodes
  'media__1784746317810.png', // Cloud Code / Antigravity 2.0
  'media__1784746357264.png', // Digizier Logo
];

files.forEach(f => {
  const src = path.join(userUploadedDir, f);
  const dest = path.join(techDir, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${f} to ${dest}`);
  }
});
