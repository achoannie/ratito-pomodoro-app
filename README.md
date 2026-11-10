# Ratito

Run this
```angular2html
npx expo start --web
```

```r reloads the app.
j opens the debugger (console logs, breakpoints).
m opens the dev menu on the device.
Press a and w together to have both running at once.
```




```agsl
npx expo start --android
```

```
Folder	What goes there	Why
app/	Only screens	Expo-router turns every file in app/ into a page. app/splash.tsx becomes the /splash route.
src/	Everything else the screens use	Files here never become pages. They’re just imported.
```