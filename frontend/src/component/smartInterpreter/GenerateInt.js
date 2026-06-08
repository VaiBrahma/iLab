import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
export var fSmInt = 0;
export var objSmInt;
async function gen(res) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  let s = "";
  for (let i = 0; i < res.length; i++) {
    s += `[${res[i][0]} in ${res[i][1]}], `;
  }
  const prompt = `Provide a Json object of paragraphs(don't make sub-sections) in which there exist a one single paragraph(all in string format do not use * in between) about the level and the corresponding composition. The single paragraph should contain detail about test, symptoms, causes, precautions from the result of such level in about 150 words. The level and test are provided as ${s}. Provide it in order and as json string and avoid any pre-text just provide the object. output format : 
[{detail: Simplified text for first input with all details},....] and don't provide any heading in other words I should be able to use JSON.parse() and detail section should have one paragraph without any subsection in it. For example: for deficiency in Hemoglobin: [{detail: A high lymphocyte count, also known as lymphocytosis, is a condition in which the blood has a higher than normal number of lymphocytes. This can indicate an infection, an autoimmune disorder, or a blood cancer. Treatment for a high lymphocyte count typically involves addressing the underlying cause.}] provide it in same order as the input`;
  const result = await model.generateContent(prompt);
  const response = result.response;
  var text = response.text();

  if (text.startsWith("```json")) {
    text = text.substring(7).trim();
  }
  if (text.endsWith("```")) {
    text = text.substring(0, text.length - 3).trim();
  }
  let obj = JSON.parse(text);
  objSmInt=obj;
  fSmInt++;
  return obj;
}

export default gen;
