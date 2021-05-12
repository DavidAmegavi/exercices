import React from "react";
import { Platform } from "../../types/Platform";
import { Game } from "../../types/Platform";

const PlatformPage = (): JSX.Element => {
  const [platforms, setPlatform] = React.useState<Platform[]>([]);
  const [games, setGames] = React.useState<Platform[]>([]);
  const [click, setClick] = React.useState<string>("");
  React.useEffect(() => {
    fetch("https://videogames-sparta.herokuapp.com/platforms", {
      headers: { accept: "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((platforms) => {
        setPlatform(platforms);
      })

      .catch((error: Error) => {
        console.error(error);
      });

    fetch("https://videogames-sparta.herokuapp.com/platforms", {
      headers: { accept: "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((games) => {
        setGames(games);
      })

      .catch((error: Error) => {
        console.error(error);
      });
  }, []);
  console.log(click);

  return (
    <div>
      <select
        onChange={(event): void => {
          setClick(event.target.value);
        }}
      >
        {platforms.map((platform) => (
          <option key={platform.name}>{platform.name}</option>
        ))}
      </select>
      <div className="gameSelection">
        <ul className="list-group">
          {games.map((game) => (
            <li className="list-group-item" key={game.name}>
              {game.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlatformPage;
