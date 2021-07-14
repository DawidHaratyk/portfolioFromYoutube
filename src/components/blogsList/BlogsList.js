import React from "react";

function BlogsList({ data }) {
  const blogsList = data.map((blog) => (
    <div className="blogs__item" key={blog.id}>
      <img src={blog.image} alt={blog.title} className="blogs__item-image" />
      <h3 className="blogs__item-headline">{blog.title}</h3>
    </div>
  ));
  return <div className="blogs__items">{blogsList}</div>;
}

export default BlogsList;
