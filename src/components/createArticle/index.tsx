import React from "react";
import Header from "../header";
import "./styles.scss";

const CreateArticle = () => {
  return (
    <div>
      <Header title="Create new article" />
      <form className="createArticle">
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" placeholder="Title" />
        </div>

        <div className="input-group">
          <label htmlFor="content">Content</label>
          <textarea name="content" id="content" placeholder="Content" />
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateArticle;
