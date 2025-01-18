import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyDjn0KuOOES2F4PSA_g0AH8DQknENSVdyM";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  try {
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text();
  } catch (error) {
    if (error.message.includes("RATE_LIMIT_EXCEEDED")) {
      console.log("Error: API rate limit exceeded. Please try again later.");
      // Return a user-friendly message
      return "Error: API rate limit exceeded. Please try again later.";
    } else {
      console.error("Error occurred:", error.message);
      throw error; // Rethrow other types of errors
    }
  }
}

export default run;
