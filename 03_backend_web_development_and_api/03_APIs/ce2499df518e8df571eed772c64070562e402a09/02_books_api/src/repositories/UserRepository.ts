import fetch from "node-fetch";
import { Comment } from "../@types/comment";
import { User } from "../@types/user";

class UserRepository {
  baseUrl = process.env.BASE_URL
  getAll(): Promise<string[]>{
    return fetch(`${this.baseUrl}/users`)
     .then((getAllUsers) => getAllUsers.json())
     .catch((error) => {
       console.error(error); 
     })
   }
 
   getOne(idUser: number): Promise<number>{
     return fetch(`${this.baseUrl}/users/${idUser}`)
        .then((id) => id.json())
        .catch((error) => {
        console.error(error); 
      })
    }


    // getUserComments(){

    // }
 
 
    // searchByname(){
 
    // }

}


// Leave the line below for tests to work
export {
  UserRepository
}
