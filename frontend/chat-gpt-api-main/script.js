import { config } from "dotenv"
config()
//console.log(process.env.API_KEY)

import { Configuration, OpenAIApi } from "openai"
import readline from "readline"

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
)

const interpreter = async (level, test)=>{
  var s=`Write interpretation in less than 100 words about ${level} in ${test}.It should include about test, symptoms, causes, what are it's diseases.`
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: s }],
  })
  
  console.log(response.data.choices[0].message.content)
}
interpreter('deficiency', 'CBC');
export default interpreter;
