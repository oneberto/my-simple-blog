import React, { useCallback, useEffect, useRef, useState } from "react";
import { api } from "../../services/api";
import Article from "../article";
import Header from "../header";

interface IProps {
  onClickShowForm(): void;
}

const ListArticles = ({ onClickShowForm }: IProps) => {
  const [loading, setLoading] = useState(false);

  const [articles, setArticles] = useState<any[]>([]);

  const wasRequested = useRef(false);

  const requestArticles = useCallback(async () => {
    if (wasRequested.current) {
      return;
    }

    setLoading(true);

    wasRequested.current = true;

    const { data } = await api.get("/articles");

    console.log({ data });

    // const data = [
    //   {
    //     title: "Meu titulo de teste",
    //     content: "Meu conteudo",
    //   },
    //   {
    //     title: "Meu titulo de teste 2",
    //     content: "Meu conteudo 2",
    //   },
    // ];

    setArticles(data);

    setLoading(false);
  }, []);

  useEffect(() => {
    requestArticles();
  }, [requestArticles]);

  console.log({ articles });

  return (
    <div>
      <Header
        title="Welcome to my blog!"
        button={{ onClick: onClickShowForm, label: "Create new article" }}
      />

      {loading
        ? "Carregando..."
        : articles.map((article, index) => (
            <Article
              title={article.title}
              content={article.content}
              key={index}
            />
          ))}
    </div>
  );
};

export default ListArticles;
