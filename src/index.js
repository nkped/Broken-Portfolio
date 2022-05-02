//React
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Styles
import "./index.css";
//App
import App from "./App";
import Om from "./routes/om";
import Apps from "./routes/apps";
import Blog from "./routes/blog";
import BlogPost from "./routes/blogPost";
import Home from "./routes/home";
import NoMatch from "./routes/no_match";

//Testing
import reportWebVitals from "./reportWebVitals";
//Render med createRoot
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="om" element={<Om />} />
          <Route path="apps" element={<Apps />} />
          <Route path="blog" element={<Blog />}>
            <Route path=":blogPostId" element={<BlogPost />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
