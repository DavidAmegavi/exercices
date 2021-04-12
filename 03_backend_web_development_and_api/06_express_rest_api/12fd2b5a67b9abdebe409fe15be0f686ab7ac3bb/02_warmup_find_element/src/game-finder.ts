
export function findGameFromSlug(games: Game[], slug: string): Game {
  const found = games.find(game => game.slug === slug); 
  return found
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
  platform: string;
}
