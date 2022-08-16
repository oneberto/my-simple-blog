import React from "react";
import Article from "../article";
import Header from "../header";

const ListArticles = () => {
  return (
    <div>
      <Header
        title="Welcome to my blog!"
        button={{ onClick: () => {}, label: "Create new article" }}
      />

      <Article />
      <Article />
    </div>
  );
};

export default ListArticles;
