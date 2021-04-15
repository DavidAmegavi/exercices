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
  collection: Game[];

  constructor(collection: Game[]) {
    this.collection = collection;
  }

  getAll(): Promise<Game[]> {
    return new Promise((resolve) => {
      resolve(
        this.collection.map((game) => {
          return {
            name: game.name,
            slug: game.slug,
            cover: game.cover_url,
          };
        }),
      );
    });
  }

  findBySlug(slug: string): Promise<Game | null> {
    return new Promise((resolve) => {
      const getGameBySlug = this.collection.find((game) => {
        return game.slug === slug;
      });
      if (getGameBySlug === undefined) {
        resolve(null);
      }
      resolve(getGameBySlug);
    });
  }

  findByPlatform(platform_slug: string): Promise<Game[]> {
    return new Promise((resolve) => {
      resolve(
        this.collection.filter((game) => {
          if (game.platform.slug === platform_slug) {
            return {
              name: game.name,
              slug: game.slug,
            };
          }
        }),
      );
    });
  }

  getPlatforms(): Promise<Platform[]> {
    return new Promise((resolve) => {
      this.collection.forEach((game) => {
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
      resolve(result);
    });
  }
}
