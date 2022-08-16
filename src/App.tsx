import React, { useState } from "react";
import CreateArticle from "./components/createArticle";
import ListArticles from "./components/listArticles";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container">
      {showForm ? (
        <CreateArticle onSubmitSuccess={() => setShowForm(false)} />
      ) : (
        <ListArticles onClickShowForm={() => setShowForm(true)} />
      )}

      <ToastContainer />
    </div>
  );
};

export default App;
