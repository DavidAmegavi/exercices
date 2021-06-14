import express, { request, response } from "express"
import games from "./games.json";

const app = express();

const tabGame = games.map(game => {
  return {
    name: game.name,
    slug: game.slug,
    cover: game.cover_url
  }
})



app.get("/",(request, response) => {
    response.status(400)
    response.json({error: "Wrong resource"})
});


app.get("/games", (request, response) => {
  response.status(200)
  response.send(tabGame)
 
})

app.get("/games/:game_slug", (request, response) => {
  response.json(games.find((game) => {
    if(request.params.game_slug === game.slug){
      response.status(200)
      return game; 
    } else {
      response.status(404);
    }
  }),
  );
});

app.get("/platforms", (request, response) => {
  response.status(200)
  response.json(games.map((game) => {
      return {
        name: game.name,
        slug: game.slug,
      };
    }),
  );
});


app.get("/platforms/:platform_slug", (request, response) => {
  response.status(200)
  response.send(games.filter((game) => {
    if(request.params.platform_slug === game.platform.slug){
      return {game}; 
    } else{
      return 
    }
  }))
})



export {app}; 