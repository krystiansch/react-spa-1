import React from "react";
import Article from "../components/Article";
const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Marek Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, cum sunt id a nesciunt illum nemo quis libero adipisci possimus laudantium necessitatibus molestias quibusdam quidem eius nobis ipsa nisi natus?"
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego?",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, cum sunt id a nesciunt illum nemo quis libero adipisci possimus laudantium necessitatibus molestias quibusdam quidem eius nobis ipsa nisi natus?"
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia?",
    author: "Jan Kowalski",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, cum sunt id a nesciunt illum nemo quis libero adipisci possimus laudantium necessitatibus molestias quibusdam quidem eius nobis ipsa nisi natus?"
  }
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));

  return <div className="home">{artList}</div>;
};

export default HomePage;
