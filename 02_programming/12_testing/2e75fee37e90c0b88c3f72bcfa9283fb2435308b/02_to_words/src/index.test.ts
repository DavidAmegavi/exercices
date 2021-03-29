import { toWords } from "./index"; 


test("toWords should return Word with space", () => {
  const result = toWords("chipolata gang")
  expect(result).toMatchObject(["chipolata", "gang"]);
 
})

test("toWords should return Word with space and - ", () => {
  const resultSplit = toWords("chipo-lata gang")
  expect(resultSplit).toMatchObject(["chipo","lata", "gang"]);
   
})
