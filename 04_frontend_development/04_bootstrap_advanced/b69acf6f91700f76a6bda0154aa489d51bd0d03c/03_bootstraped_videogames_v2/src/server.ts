import express, { response } from "express";
import * as core from "express-serve-static-core";
import { GameModel } from "./models/game";
import * as nunjucks from "nunjucks";

export function makeApp(gameModel: GameModel): core.Express {
  const app = express();

  app.use("/assets", express.static("assets"));

  nunjucks.configure("views", {
    autoescape: true,
    express: app,
  });

  const clientWantsJson = (request: express.Request): boolean => {
    if (request.get("accept") === "application/json") {
      return true;
    } else {
      return false;
    }
  };

  const formParser = express.urlencoded({ extended: true });

  app.set("view engine", "njk");

  app.get("/", (request, response) => {
    if (clientWantsJson(request)) {
      response.status(400).json({ error: "Wrong resource" });
    } else {
      response.render("home");
    }
  });

  app.get("/games", (request, response) => {
    gameModel.getAll().then((games) => {
      if (clientWantsJson(request)) {
        response.json(games);
      } else {
        response.render("games", { games });
      }
    });
  });

  app.get("/games/:game_slug", (request, response) => {
    gameModel.findBySlug(request.params.game_slug).then((game) => {
      if (!game) {
        response.status(404).render("Not-Found");
      } else {
        if (clientWantsJson(request)) {
          response.json(game);
        } else {
          response.render("game-by-slug", { game });
        }
      }
    });
  });

  app.get("/platforms", (request, response) => {
    gameModel.getPlatforms().then((platforms) => {
      if (clientWantsJson(request)) {
        response.json(platforms);
      } else {
        response.render("platforms", { platforms });
      }
    });
  });

  app.get("/platforms/:platform_slug", (request, response) => {
    gameModel.findByPlatform(request.params.platform_slug).then((gamesForPlatform) => {
      if (clientWantsJson(request)) {
        response.json(gamesForPlatform);
      } else {
        response.render("platform-by-slug", { gamesForPlatform });
      }
    });
  });

  app.get("/games/:game_slug", (request, response) => {
    gameModel.findBySlug(request.params.game_slug).then((game) => {
      if (!game) {
        response.status(404).end();
      } else {
        if (clientWantsJson(request)) {
          response.json(game);
        } else {
          response.render("game-by-slug", { game });
        }
      }
    });
  });

  app.get("/cart", (request, response) => {
    response.render("cart");
  });

  app.post("/cart:addgames", formParser, (request, response) => {
    console.log(request.body);
    gameModel.addGameToCart(request.params.addgames, {
      name: request.body.game_slug,
    });
  });

  app.get("/login", (request, response) => {
    response.render("login");
  });

  app.get("/*", (request, response) => {
    response.status(200).render("Not-Found");
  });

  return app;
}
