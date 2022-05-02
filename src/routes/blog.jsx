import { NavLink, Outlet } from "react-router-dom";
import { getBlogPosts } from "../data";

export default function Blog() {
  let blogPosts = getBlogPosts();
  return (
    <main>
      <h2>Blog</h2>
      <div>
        {blogPosts.map((blogPost) => (
          <NavLink to={`/blog/${blogPost.number}`} key={blogPost.number}>
            {`${blogPost.name} `}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </main>
  );
}
