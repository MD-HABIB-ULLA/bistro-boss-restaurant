# React Route install

```
npm create vite@latest name-of-your-project -- --template react
cd <your new project directory>
npm install react-router-dom localforage match-sorter sort-by
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
