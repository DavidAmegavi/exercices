import slugify from "slugify"

function slugger (sentence: string):string {
  return slugify(sentence);
}

function sluggerWithUnderscores(sentence: string ): string{
  return slugify(sentence,"_");
}

 




export {slugger, sluggerWithUnderscores} 