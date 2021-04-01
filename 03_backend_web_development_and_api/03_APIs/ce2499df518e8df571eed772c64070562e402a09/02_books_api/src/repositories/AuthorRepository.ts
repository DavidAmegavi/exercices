import fetch from "node-fetch";
import { Author } from "../@types/author";
import { Book } from "../@types/book";

class AuthorRepository {
  baseUrl = process.env.BASE_URL

  getAll(): Promise<Author[]>{
   return fetch(`${this.baseUrl}/authors`)
    .then((getAllAuthor) => getAllAuthor.json())
    .then((result) => {
      console.log(result);
      return result;  
    })
    .catch((error) => {
      console.error(error); 
    })
  }

  getOne(idAuthor: number): Promise<number>{
    return fetch(`${this.baseUrl}/authors/${idAuthor}`)
       .then((id) => id.json())
       .catch((error) => {
       console.error(error); 
     })
   }

   getAuthorBooks(id: number){
    return fetch(`${this.baseUrl}/authors/${id}/books`)
   }


//    searchByname(){

//    }



}

const test = new AuthorRepository();
test.getAll();
console.log(test)

// Leave the line below for tests to work
export {
  AuthorRepository
}
