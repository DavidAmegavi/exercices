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
  static getReposUrl(nickname: string): Promise<string> {
    // You code goes here
    return new Promise((resolve, reject) => {
      resolve(getReposUrlByNickname(nickname).then(url)

      });
  }

  static getRepos(url: string): Promise<string[]>  {
    // You code goes here
    return new Promise ((resolve, reject ) => {
      
    }
  }

  static printRepos() {
    // You code goes here
  }

  
  static printRepository() {
    // You code goes here
  }
  
  static getProjectInformations() {
    // You code goes here
  }
}
