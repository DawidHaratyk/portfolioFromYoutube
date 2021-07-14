import React from "react";
import blogs from "./data";
import Headline from "../../components/headline/Headline";
import BlogsList from "../../components/blogsList/BlogsList";

function Blogs() {
  return (
    <div className="blogs">
      <Headline text="Recent blogs" />
      <BlogsList data={blogs} />
    </div>
  );
}

export default Blogs;
