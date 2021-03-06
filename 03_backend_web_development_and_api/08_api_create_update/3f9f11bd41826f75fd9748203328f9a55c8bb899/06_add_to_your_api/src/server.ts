import express from "express";
import * as core from "express-serve-static-core";
import { Game, GameModel } from "./models/game";
import bodyParser from "body-parser";

// creer le crud sur le fichier game ts
// sur app.post 2 conditions si clé pas valide faux sinon appel methode et envoi du bon code
//

// const jsonParser = bodyParser.json();
const jsonParser = bodyParser.json();

export function makeApp(gameModel: GameModel): core.Express {
  const app = express();

  app.get("/", (request, response) => {
    response.status(400).json({ error: "Wrong resource" });
  });

  app.get("/games", (request, response) => {
    gameModel.getAll().then((games) => {
      response.json(games);
    });
  });

  app.get("/games/:game_slug", (request, response) => {
    gameModel.findBySlug(request.params.game_slug).then((game) => {
      if (!game) {
        response.status(404).end();
      } else {
        response.json(game);
      }
    });
  });

  app.get("/platforms", (request, response) => {
    gameModel.getPlatforms().then((platforms) => {
      response.json(platforms);
    });
  });

  app.get("/platforms/:platform_slug", (request, response) => {
    gameModel.findByPlatform(request.params.platform_slug).then((gamesForPlatform) => {
      response.json(gamesForPlatform);
    });
  });

  app.post("/games", jsonParser, (request, response) => {
    const games = request.body;
    if (games.name === undefined || games.slug === undefined) {
      response.status(400).end();
    } else
      gameModel.insertGames(games).then(() => {
        response.status(201).json(games);
      });
  });

  return app;
}
