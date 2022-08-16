import React from "react";
import "./styles.scss";

interface IProps {
  title: string;
  content: string;
}

const Article = ({ title, content }: IProps) => {
  return (
    <div className="article">
      <h2>{title}</h2>
      <div className="content">{content}</div>
    </div>
  );
};

export default Article;
