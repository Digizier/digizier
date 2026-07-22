import fs from 'fs';
import path from 'path';

const userUploadedDir = 'C:\\Users\\NB LAPTOP\\.gemini\\antigravity\\brain\\77e99856-a4ed-43d7-95e6-b8be30347190\\.user_uploaded';
const techDir = 'C:\\Users\\NB LAPTOP\\.gemini\\antigravity\\scratch\\digizier-3d-website\\public\\tech';

const srcHostinger = path.join(userUploadedDir, 'media__1784747425402.png');
const destHostinger = path.join(techDir, 'hostinger_logo.png');

if (fs.existsSync(srcHostinger)) {
  fs.copyFileSync(srcHostinger, destHostinger);
  console.log('Successfully copied official Hostinger logo to:', destHostinger);
} else {
  console.error('Source Hostinger logo file not found');
}
