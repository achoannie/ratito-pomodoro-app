<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <h2 align="center">｡˚✦⋆ Ratito ⋆✦˚｡</h2>

  <p align="center">
    <em>focus un ratito</em> — a cozy pixel-pet focus timer, so you never have to study alone.
    <br />
    <br />
    <a href="https://ratito-pomodoro-app.vercel.app"><strong>✦ Try the live demo ✦</strong></a>
    <br />
    <sub>demo login in <a href="#usage">Usage</a></sub>
    <br />
    <br />
    <a href="#getting-started"><strong>Run it locally »</strong></a>
    ·
    <a href="#usage">How it works</a>
    ·
    <a href="#roadmap">Roadmap</a>
    ·
    <a href="ART.md">Art &amp; sprites ✎</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#meet-the-companions">Meet the companions</a></li>
        <li><a href="#target-audience">Target Audience</a></li>
        <li><a href="#competitors">Competitors</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#art--sprites">Art &amp; sprites</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- Add a screenshot of the Home screen here once it's final:
[![Ratito Screen Shot][product-screenshot]](#) -->

**Ratito** is a Pomodoro-style focus app where a little pixel pet keeps you company while you work.
*"Un ratito"* is Spanish for *"a little while"* — exactly how long a focus session is (and it also sounds like *little rat*, though so far, there isn't any rats yet for the sprites). 

Studying or working alone for hours can feel lonely, boring and hard to keep up. Some pomodoro apps only track time.
Ratito turns focus time into **time spent with/for someone**:

* **Three timer modes** — **Timer** (count down from 25/30/60/90 min), **Stopwatch** (count up until you stop) and **Pomodoro** (pick a focus + break length; it switches between them by itself, or asks you first if you tick *"Ask me before each switch"*).
* **A pixel companion? pet? competnion!** — your companion (Perrito, Michi, …) lives in its own little pixel room on the focus page. It reads while you focus, plays with its toys when you pause, and naps during Pomodoro breaks.
* **Pet notices** — when a session ends, a little pixel window pops up with your companion: proud and happy when you finish (*"You nailed it!"* and other random messages), a bit sad but still loving when you give up.
* <img src="assets/icons/strawberry.png" width="16" alt=""> **Strawberries** — the in-app currency you and your companion earn while focusing, later used for skins, decor and new pets.
* <img src="assets/icons/heart_full.png" width="16" alt=""> **Ratitude** — every companion has its own Ratitude (shown as hearts) that grows the more time you spend together. *(The name came from a dream.)*
* **Not alone** *(planned)* — add friends, see who's focusing, and leave each other little notes that are delivered when a session ends.

The design should be **calm, cozy and whimsical**: hand-drawn pixel art, soft colors, slow animations — a focus app that feels like a small, cute place rather than a bland productivity dashboard.

### Meet the companions
*More companions in production (✧˶˘ ᵕ ˘˶)*
<div align="center">
    <table>
    <tr>
        <td align="center">
        <img src="assets/pets/perrito/perrito_idle.gif" width="128" alt="Perrito"><br>
        <b>Perrito</b>
        </td>
        <td align="center">
        <img src="assets/pets/michi/michi_idle.gif" width="128" alt="Michi"><br>
        <b>Michi</b>
        </td>
    </tr>
    </table>
</div>

Each companion has two kinds of sprites: **front-facing** ones for the notices (idle, happy, sad) and a **top-down room** for the focus page.
Curious how they're made? → **[Art & sprites process](ART.md)**

Ratitude: <img src="assets/icons/heart_full.png" width="16"><img src="assets/icons/heart_full.png" width="16"><img src="assets/icons/heart_full.png" width="16"><img src="assets/icons/heart_empty.png" width="16"><img src="assets/icons/heart_empty.png" width="16">


### Target Audience

* **Students or anyone** working on a project who want to keep track of how much time they spend on it.
* People who want a **gentle push to stay productive** without pressure or guilt.
* People who enjoy *a sprinkle of* **whimsical and cute aesthetic** besides the focusing function.
* Fans of **cute animals, collecting, decor and gacha-style rewards**.
* People who like to **express themselves** and make their space their own.
* Anyone who feels **lonely while studying or working** and wants a companion (or friends) by their side.

### Competitors

| App | What it does | How Ratito is different |
|---|---|---|
| **Forest** | Grow a sprite tree while you stay off your phone, or pay a subscription to plant an actual tree | Ratito's reward is a *relationship*: a pet that reacts to you and grows Ratitude |
| **Focus Tree** | Similar reward system focus timer with 3D NFTs collection to decorate your garden | Hand-drawn pixel pets, a cozy whimsical style and a social/notes layer against loneliness |

Both are established apps backed by bigger teams or organization that have been around for years. Ratito focuses on something they don't: **companionship and a personal, cute aesthetic**.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Expo][Expo-badge]][Expo-url]
* [![React Native][ReactNative-badge]][ReactNative-url]
* [![TypeScript][TypeScript-badge]][TypeScript-url]
* [![Supabase][Supabase-badge]][Supabase-url]
* **Expo Router** — file-based navigation
* **Zustand** — app state (auth store)
* **expo-image** — animated pixel-art GIFs
* **Clip Studio Paint** & **Aseprite** — all pets, rooms and icons, drawn by me
* **[pixel-up](https://github.com/achoannie/pixel-up)** — my own Rust CLI (I built during autumn break) that crops and enlarges the pixel-art sprites without blurring or breaking the original quality

Runs as a **PWA** (web) and on **iOS / Android** from one codebase.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Art & sprites

All the art is hand-drawn pixel art (pets, rooms, icons, notice window). The full process (canvas sizes, room layers, export script, assembled previews) lives in its own page so this README can stay about the app:

**→ [ART.md: Art & sprites process](ART.md)**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (LTS)
* npm
  ```sh
  npm install npm@latest -g
  ```
* Optional: Android Studio (Android emulator), Xcode (iOS simulator, macOS only) or the Expo Go app on your phone
* A free [Supabase](https://supabase.com) project (for real accounts)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/achoannie/ratito-pomodoro-app.git
   cd ratito-pomodoro-app
   ```
2. Install packages
   ```sh
   npm install
   ```
3. Create a `.env` file in the project root with your Supabase keys
   (*Project Settings → API* in the Supabase dashboard)
   ```sh
   EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
4. In Supabase, go to *Authentication → Sign In / Providers → Email* and turn off **Confirm email** (for easy testing)
5. Start the app
   ```sh
   npx expo start
   ```
   Press `w` for web, `a` for Android, `i` for iOS.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE -->
## Usage

1. **Splash** — tap anywhere to begin.
2. **Register or log in** with email (no need to verify) and password.
  Log in with:
    - **Name:** `dedemomo` (you wouldn't need it to log in)
    - **Email:** `demo@ratito.app`
    - **Password:** `i-love-pompompurin`
    - *Running in dev mode (`npx expo start`)? There's also a "Skip login" button on the login screen, just in case...*
3. **Home** — choose your companion with the ⇄ button, then pick a mode: **Timer**, **Stopwatch** or **Pomodoro** (with focus + break length and the *"Ask me before each switch"* checkbox). Press **Start**.
4. While the timer runs, your pet reads in its room. **Pause** and it plays with its toys, **Resume** to continue. In Pomodoro it naps in its box during breaks.
5. **Finish** (or let the timer run out) and a notice pops up with your happy pet. **Give up** and you get the sad-but-still-loving version (no guilt ♡).
6. Finish a session to earn <img src="assets/icons/strawberry.png" height="16" alt="strawberry"> strawberries and grow your pet's <img src="assets/icons/heart_empty.png" width="16" alt=""> Ratitude <img src="assets/icons/heart_full.png" width="16" alt="">.
7. Open the ☰ menu to visit the other pages and log out from **Settings**.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

**Phase 1 — PWA (first assignment)**
- [x] Splash screen with hand-drawn pets
- [x] Register, login and logout with Supabase Auth
- [x] Home screen: focus timer (start / pause / resume / give up)
- [x] Pixel pets with mood animations and a pet switcher
- [x] Strawberry counter and Ratitude hearts (UI)
- [x] Side menu with placeholder pages
- [x] Installable PWA (manifest, icons, offline)
- [x] quick login without registering for dev|tester|teacher in case supabase *pause*
- [x] Sounds effect for pomodoro activities: start, pause, finish, give up; and switch pet button on home page
- [x] Setting screen: see your account info (dummy avatar/account name & email, volume setting) and log out
- [x] Installable PWA (manifest, service worker, offline) — still wearing the starter's default icon, wupsi... (｡•́︿•̀｡) a Ratito icon is coming in phase 2

**Phase 2 — Final app (native iOS & Android)**
- [x] New home idea: front-facing sprites for notices, a top-down pixel room for the focus page
- [x] Michi's room drawn in Aseprite and exported as layers (see [ART.md](ART.md))
- [x] Michi happy sprite + notice window art
- [ ] Focus page shows the layered room (focus / pause / rest animations)
- [ ] Timer modes: Timer, Stopwatch, Pomodoro (auto or ask-first switching)
- [ ] Pet notice: happy / sad sprite with random messages
- [ ] Perrito's room (Hispanic home, naps in a hammock)
- [ ] app icon / logo
- [ ] more sprites for mood
- [ ] add pixel-up in `/script`: animated GIF output, then use it for all pet sprites
- [ ] Save strawberries, Ratitude and focus history in Supabase
- [ ] Rewards: earn strawberries and Ratitude when a session finishes
- [ ] Profile: stats of how long and on what you focused
- [ ] Sad sprites for both pets, happy sprite for Perrito
- [ ] Friends: add friends and see who's focusing
- [ ] Notes: leave a friend a message, delivered after their session
- [ ] End-to-end tests (Cypress)

**Later / ideas**
- [ ] Shop: skins and decor for strawberries
- [ ] Shelter: a cozy room with all your pets
- [ ] Room decor as rewards (each decor is already its own layer, ready to unlock)
- [ ] More pets (bird, hamster, fish) and seasonal skins
- [ ] Daily check-in rewards and gentle streaks
- [ ] Gacha for rare pets and outfits

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- PROJECT STRUCTURE -->
## Project Structure

```
app/                  screens (Expo Router: every file is a page)
  splash.tsx          welcome screen
  login.tsx           login
  register.tsx        create an account
  (app)/              pages that need a logged-in user
    _layout.tsx       auth gate + ☰ menu
    index.tsx         Home: pet + focus timer
    settings.tsx      settings + log out
assets/
  pets/               front-facing pet sprites (notices)
  rooms/<pet>/        room layers (PNG) + pet animations (GIF), all 330×330
  notice/             notice window art
  icons/, fonts/, sounds/
src/
  components/         reusable UI (room scene, counter, hearts, side menu, …)
  rooms/rooms.ts      which layers each pet's room has, in stacking order
  lib/supabase.ts     Supabase connection
  pets/pets.ts        pet catalog (names + mood animations)
  services/           talks to Supabase (auth)
  state/              app state (auth store, session)
  theme/              colors and fonts
ART.md                how the art and sprites are made
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Anh — UCLL, Mobile Applications

Project Link: [ratito-pomodoro-app](https://github.com/achoannie/ratito-pomodoro-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [UCLL Mobile Applications starter code](https://github.com/ucllmobileapplications/boilerplate) - **[Niels Jacobs](https://github.com/NielsJacobsDev)**
* GIF and assets: drawn by **[Annie](https://github.com/achoannie)** in Clip Studio Paint and [Aseprite](https://www.aseprite.org)
* Fonts: Grape Soda and Kiwi Soda ([DaFont](https://www.dafont.com)), [DotGothic16](https://fonts.google.com/specimen/DotGothic16)
* Inspiration: Forest, Focus Tree and cozy old-web pages like [cinni.net](https://cinni.net)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* Sound Effect: 
  - make your own sound effect: [sfxr.me](https://sfxr.me/)
  - free bubble effects: [pixabay.com](https://pixabay.com/sound-effects/search/bubble/)
* [Some symbol effects inspo ✩₊˚୨☆( ◜⩊◝ )☆୧˚₊✩](https://kaomojis.jp)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[Expo-badge]: https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white
[Expo-url]: https://expo.dev/
[ReactNative-badge]: https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[ReactNative-url]: https://reactnative.dev/
[TypeScript-badge]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Supabase-badge]: https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white
[Supabase-url]: https://supabase.com/