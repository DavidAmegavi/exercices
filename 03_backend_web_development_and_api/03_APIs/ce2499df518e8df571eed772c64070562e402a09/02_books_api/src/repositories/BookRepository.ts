import fetch from "node-fetch";
import { Book } from "../@types/book";
import { Comment } from "../@types/comment";

class BookRepository {
  baseUrl = process.env.BASE_URL

  getAll(): Promise<string[]>{
    return fetch(`${this.baseUrl}/books`)
     .then((getAllBooks) => getAllBooks.json())
     .catch((error) => {
       console.error(error); 
     })
   }
 
   getOne(idBooks: number): Promise<number>{
     return fetch(`${this.baseUrl}/books/${idBooks}`)
        .then((id) => id.json())
        .catch((error) => {
        console.error(error); 
      })
    }

    // getBooksComments(){

    // }
 
 
    // searchByname(){
 
    // }



}

// Leave the line below for tests to work
export {
  BookRepository
}
