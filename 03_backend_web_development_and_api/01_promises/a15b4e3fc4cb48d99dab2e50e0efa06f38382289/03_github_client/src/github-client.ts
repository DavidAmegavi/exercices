import { Response } from "node-fetch";
import { getReposUrlByNickname, listRepos, getOneRepoInfos } from "../utils";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string |number |boolean |null;
}

export type GitHub = {
  message: string;
  repos_url: string;
}

export class GithubClient {
  static getReposUrl(nickname: string): Promise<string>{
    // You code goes here
    return getReposUrlByNickname(nickname).then((url) => {
        if(url.message === "Not found") {
          throw new Error ("User does not exist")
        } else {
          return url.repos_url;
        }
      });
    }
  

  static getRepos(url: string): Promise<Repo[]> {
    // You code goes here
    return listRepos(url)
  }

  static printRepos(print: Repo[]): Promise<Repo[]> {
    // You code goes here
    print.forEach((element, index) => console.log(`${index + 1} - ${element.name}`))
    return print
    }


  
  static printRepository(newRepo: Repo): void {
    // You code goes here
      console.log(`${newRepo.name}`);
      console.log(`${newRepo.description}`);
      console.log(`${newRepo.subscribers_count}`);
      console.log(`${newRepo.stargazers_count}`);
      console.log(`${newRepo.language}`);
      console.log(`${newRepo.url}`);
  }
  
  static getProjectInformations(url: string): Promise<Repo>{
    // You code goes here
    return getOneRepoInfos(url)
  }
 
}
