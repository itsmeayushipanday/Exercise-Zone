//react imports
import { createContext, useState } from "react";
//component imports
import run from "../config/reactgenie";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [prevPromptsResults, setPrevPromptsResults] = useState({});

  //typing effect function
  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  //new chat function
  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setInput("");
    setResultData("");
  };

  //exercise related keywords
  const exerciseKeywords = [
    "exercise",
    "workout",
    "fitness",
    "gym",
    "training",
    "muscle",
    "cardio",
    "strength",
    "yoga",
    "running",
    "cycling",
    "weightlifting",
    "calories",
    "stretching",
    "push-ups",
    "strong",
    "body",
    "breathing",
  ];

  //checks whether the input query is exercise related or not
  const isExerciseRelated = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    return exerciseKeywords.some((keyword) => lowerCaseQuery.includes(keyword));
  };

  //send the request to AI api
  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);

    //set query to prompt or input based on the condition
    let query = prompt || input;

    //if not exercise related query
    if (!isExerciseRelated(query)) {
      setResultData("Please enter a query specific to exercise only...");
      setLoading(false);
      setInput("");
      return;
    }

    // Check if the prompt already exists in the history
    if (prevPrompts.includes(query)) {
      // Display the existing result for this prompt
      setResultData(prevPromptsResults[query] || "No result found.");
      setLoading(false);
      setInput("");
      return;
    }

    let response = await run(query);

    setRecentPrompt(query);
    setPrevPrompts((prev) => [...prev, query]); // Save the current prompt
    setPrevPromptsResults((prev) => ({ ...prev, [query]: response })); // Save result for future reference

    let responseArray = response.split("**");

    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");

    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }
    setLoading(false);
    setInput("");
  };

  //previous response
  const handlePreviousChatClick = (prompt) => {
    setInput(prompt);
    setResultData(prevPromptsResults[prompt] || "No result found.");
    setShowResult(true);
    setLoading(false);
  };

  //all shared state and functions that will be shared with child
  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
    handlePreviousChatClick, // Add the click handler to the context
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
