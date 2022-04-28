import { useParams } from "react-router-dom";
import { getBlogPost } from "../data";

export default function BlogPost() {
  let params = useParams();
  let blogPost = getBlogPost(parseInt(params.blogPostId, 10));
  return (
    <main>
      <h2>Total Due: {blogPost.amount}</h2>
      <p>
        {blogPost.name}: {blogPost.number}
      </p>
      <p>Due Date: {blogPost.due}</p>
    </main>
  );
}
