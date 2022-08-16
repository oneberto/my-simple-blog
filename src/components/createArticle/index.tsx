import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import Header from "../header";
import "./styles.scss";

interface IProps {
  onSubmitSuccess(): void;
}

const CreateArticle = ({ onSubmitSuccess }: IProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const { data } = await api.post("/articles", {
        title,
        content,
      });

      toast.success("Seu artigo foi criado com sucesso!");

      onSubmitSuccess();

      console.log({ data });
    },
    [title, content, onSubmitSuccess]
  );

  return (
    <div>
      <Header title="Create new article" />
      <form className="createArticle" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateArticle;
