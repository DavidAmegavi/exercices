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
    // if(nickname === )
    return getReposUrlByNickname(nickname)
      .then((dataBase) => {
        return dataBase.repos_url
      }).catch((error) => {
         throw(error); 
      })
    }
  

  static getRepos(url: string): Promise<string[]> {
    // You code goes here
    return listRepos(url)
    .then((repository) =>{
      return repository
    })
  }

  static printRepos(repos: string) {
    // You code goes here
  }

  
  static printRepository() {
    // You code goes here
  }
  
  static getProjectInformations(url: string) {
    // You code goes here
      return getOneRepoInfos(url)
      .then 
  }
}
