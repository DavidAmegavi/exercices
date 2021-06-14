import React from "react";

const CardBody = (props) => {
  const { game } = props;
  return (
    <div>
      <div className="cover">
        <img src={game.cover.url} alt="" />
      </div>
      <div className="realease">
        <p>{game.first_release_date}</p>
        <p>{game.genres.map((genre) => genre.name)}</p>
        <p>{game.summary}</p>
      </div>
      <div className="sreenchots">
        <img src={game.screenshots.map((screenshot) => screenshot.url)} alt="" />
      </div>
    </div>
  );
};

export default CardBody;
