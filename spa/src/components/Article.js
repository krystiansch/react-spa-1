import React from "react";

const Article = props => {
  const styles = {
    marginTop: "40px"
  };

  return (
    <article style={styles}>
      <h3
        style={{
          marginBottom: 5,
          textTransform: "uppercase"
        }}
      >
        {props.title}
      </h3>
      <span
        style={{
          display: "block",
          marginBottom: 10,
          fontSize: 12
        }}
      >
        {props.author}
      </span>
      <p
        style={{
          fontSize: 15
        }}
      >
        {props.text}
      </p>
    </article>
  );
};

export default Article;
