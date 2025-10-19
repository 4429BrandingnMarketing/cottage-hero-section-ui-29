# Red Vision Music Admin - Desktop App

This is the desktop version of the Red Vision Music admin panel built with Electron.

## Building the .dmg (Mac Installer)

### Prerequisites
1. You must be on a Mac computer to build a .dmg
2. Export this project to GitHub and clone it locally
3. Run `npm install` in the project directory

### Build Steps

1. **Build the web app:**
   ```bash
   npm run build
   ```

2. **Build the .dmg installer:**
   ```bash
   npm run electron:build
   ```

3. **Find your installer:**
   The .dmg file will be created in the `release` folder at the root of the project.

## Development Mode

To test the desktop app during development:

1. **Start the Vite dev server:**
   ```bash
   npm run dev
   ```

2. **In another terminal, start Electron:**
   ```bash
   npm run electron:dev
   ```

## Distribution

Once you have the .dmg file:
- Share it directly with your admin users
- They can drag the app to their Applications folder
- The app will run standalone without needing a browser

## Notes

- The app is configured for both Intel (x64) and Apple Silicon (arm64) Macs
- First build may take a few minutes as it downloads platform-specific dependencies
- The app will automatically use dark mode based on system preferences
