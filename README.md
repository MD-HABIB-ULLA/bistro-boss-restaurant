# React Route install

```
npm create vite@latest name-of-your-project -- --template react
cd <your new project directory>
npm install react-router-dom localforage match-sorter sort-by
npm run dev
```

### Simple route tamplete

``` javascript 
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
);
