<p align="center">
  <a href="https://ionicframework.com/" target="blank"><img src="src/assets/icon/favicon.png" width="100" alt="Ionic Logo" /></a>
</p>

# Super Likers App - Test in Ionic

## Development Server

Run `ionic serve` for a dev server. Navigate to `http://localhost:8100/`. The application will automatically reload if you change any of the source files.

## Install Packages

Run `npm install` to install all the necessary packages.

## Build

Run `ionic build --prod` to build the project. The build artifacts will be stored in the `www` directory.

To test the build you can do it using the Live Server extension of Visual Studio Code, enter the `www` path and click on Go Live.

## Build Mobile App
First we need to create the android folder with the command `npx cap add android`.

Then run the command `ionic capacitor open android` to open the `android` folder in Android Studio.

Being in Android Studio we look for the option `Generate APKs` this generates an apk in the path: `android > app > build > outputs > apk > debug` the application ends in `.apk`.

As a final step, you can install it on your mobile device and test its operation, or if you don't want to install the application, you can simply run it in the Android Studio emulator.

An additional, but not required, command is `ionic capacitor sync android`, which is used to sync changes in the development with the android folder.

## Server To Bypass Cors

Please wait a few seconds while the server starts automatically. This server is responsible for bypassing `cors` in the application both in development mode and during the mobile app build.
