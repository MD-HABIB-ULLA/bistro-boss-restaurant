# React Route install

```
npm create vite@latest name-of-your-project -- --template react
cd <your new project directory>
npm install react-router-dom 
npm run dev
```

### Simple route tamplete

```javascript
import _ as React from "react";
import _ as ReactDOM from "react-dom/client";
import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
{
path: "/",
element: <div>Hello world!</div>,
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
)
```

# Tailwind setup

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Add this in `tailwind.config.js`

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Add this in `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Daisy UI install

```
npm i -D daisyui@latest
```

### Add this in `tailwind.config.js`

```javascript
plugins: [require("daisyui")];
```

# Firebase set up

```
npm install firebase
```

### Also

add this in `firebase.config.js` file

```javascript

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAANWlmacKUrlHLqpOmj65h-4caaoqHICc",
  authDomain: "bistroboss-70669.firebaseapp.com",
  projectId: "bistroboss-70669",
  storageBucket: "bistroboss-70669.appspot.com",
  messagingSenderId: "1008434256407",
  appId: "1:1008434256407:web:70217ac8fbec34034b9a52",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
```

# The technology / package I used

- [Swiper](https://swiperjs.com/)
- [React-icons](https://react-icons.github.io/react-icons/)
- [React-responsive-carousel](https://www.npmjs.com/package/react-responsive-carousel)
- [React-halmet](https://www.npmjs.com/package/react-helmet)
- [React-hook-form](https://react-hook-form.com/)
- [React-icons](https://www.npmjs.com/package/react-icons)
- [React-simple-captcha](https://www.npmjs.com/package/react-simple-captcha)
- [React-tabs](https://www.npmjs.com/package/react-tabs)
