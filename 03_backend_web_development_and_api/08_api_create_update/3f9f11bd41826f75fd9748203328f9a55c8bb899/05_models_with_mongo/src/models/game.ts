import { Collection } from "mongodb";

export type Game = {
  name: string;
  slug: string;
  [key: string]: any;
};

export type Platform = {
  name: string;
  slug: string;
  [key: string]: any;
};

const result: Platform[] = [];

export class GameModel {
  private collection: Collection;

  constructor(collection: Collection) {
    this.collection = collection;
  }

  getAll(): Promise<Game[]> {
    return this.collection
      .find()
      .toArray()
      .then((games) => {
        return games.map((game) => {
          return {
            name: game.name,
            slug: game.slug,
            cover: game.cover_url,
          };
        });
      });
  }

  findBySlug(slug: string): Promise<Game | null> {
    return this.collection.findOne({
      slug: slug,
    });
    // .toArray()
    // .then((games) => {
    //   const getGameBySlug = games.find((game) => {
    //     return game.slug === slug;
    //   });
    //   if (getGameBySlug === undefined) {
    //     return null;
    //   }
    //   return getGameBySlug;
    // });
  }

  findByPlatform(platform_slug: string): Promise<Game[]> {
    return this.collection
      .find()
      .toArray()
      .then((games) => {
        return games.filter((game) => {
          if (game.platform.slug === platform_slug) {
            return {
              name: game.name,
              slug: game.slug,
            };
          }
        });
      });
  }

  getPlatforms(): Promise<Platform[]> {
    return this.collection
      .find()
      .toArray()
      .then((games) => {
        games.forEach((game) => {
          const firstStep = result.find((element) => {
            return element.slug === game.platform.slug;
          });
          if (!firstStep) {
            result.push({
              name: game.platform.name,
              slug: game.platform.slug,
            });
          }
        });
        return result;
      });
  }
}
