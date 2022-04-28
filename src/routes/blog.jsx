import { useSearchParams, NavLink, Outlet } from "react-router-dom";
import { getBlogPosts } from "../data";

export default function Blog() {
  let blogPosts = getBlogPosts();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <main>
      <h2>Blog</h2>
      <div>
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {blogPosts
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((blogPost) => (
            <NavLink to={`/blog/${blogPost.number}`} key={blogPost.number}>
              {blogPost.name}
            </NavLink>
          ))}
      </div>
      <Outlet />
    </main>
  );
}
