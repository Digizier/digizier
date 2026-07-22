# 🚀 Digizier 3D Web Application - Deployment Guide

This is the production-ready 3D Web Application for **Digizier** (Founded by **Nadir Habib**).

## 🛠 Tech Stack
- **Frontend**: React 18 + Vite
- **3D WebGL Engine**: Three.js
- **Styling**: Tailwind CSS + Glassmorphism + Custom Shaders
- **Containerization**: Docker + Nginx (EasyPanel ready)

---

## 🐙 Step 1: Push to GitHub

Run these commands inside the project folder (`digizier-3d-website`):

```bash
git init
git add .
git commit -m "Initial commit: Digizier 3D Web App by Nadir Habib"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/digizier-3d-website.git
git push -u origin main
```

---

## ⚡ Step 2: Deploy to EasyPanel Server

1. Open your **EasyPanel Dashboard**.
2. Click **+ Create Service** ➔ Select **App**.
3. Name your app: `digizier-website`.
4. Under **Source**:
   - Select **GitHub**.
   - Paste your GitHub repository URL (`https://github.com/YOUR_GITHUB_USERNAME/digizier-3d-website`).
   - Select branch: `main`.
5. Under **Build Method**:
   - Select **Dockerfile** (EasyPanel will automatically use the included `Dockerfile` & `nginx.conf`).
6. Click **Deploy**! EasyPanel will automatically build and deploy your 3D website with SSL/HTTPS enabled.

---

## 📞 Direct Contact & Links
- **WhatsApp Direct**: `+92 322-2685868`
- **YouTube Channel**: `https://www.youtube.com/@Digizier`
- **Fiverr Account**: `https://fiverr.com/s/XL5Nbme`
- **Upwork Account**: `https://upwork.com/freelancers/~01b5235bf28b7d4ee0`
- **Skool Community**: `https://skool.com/digizier-4902/classroom`
- **Appointment Booking**: `https://digizier.com/appointment-booking`
- **WhatsApp Group**: `https://chat.whatsapp.com/FNTVH9rAtIjGm4fRPPQxr9`
