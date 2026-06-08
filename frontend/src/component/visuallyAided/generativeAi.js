import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
export var fVis = 0;
export var objVis;
async function genVis(res) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  let s = "";
  for (let i = 0; i < res.length; i++) {
    s += `[${res[i][0]}, ${res[i][1]}], `;
  }
  const prompt = `i will provide you pairs of [level and, test parameter name] and i need you to me a json object which have keys for-> 1. body part (prefferably internal organ it may be blood) to which the parameter closely associated to (1 word) , 2. problem it may lead in detail (about 80 words), 3. Potential reason for such result (80-100 words), 4.array of 3 lifestyle tips which should be implemented (in 50 words each). the pairs are ${s}. keys name are: body_part, problem, reason, tips, respectively. format: [{body_part:... ,problem:...., reason:....,tips:[tip1, tip2, tip3]}, {and so on..}] and give result in same order as i provide input and avoid writing and pre and post text so i can easily use json.parse on it`;
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
  fVis++;
  objVis = obj;
  return obj;
}

export default genVis;
