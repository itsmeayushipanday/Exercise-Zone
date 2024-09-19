// react imports
import { useContext } from "react";
// component imports
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { useTheme } from "../../context/ThemeContext";
import submitImage from "../../assets/submit.png";

import "./Main.css";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const { theme } = useTheme();
  const isDarkTheme = theme === "dark"; // Assuming 'theme' is a string in context

  return (
    <div className={`main ${isDarkTheme ? "dark-theme" : ""}`}>
      <div className="nav">
        <p
          className="font-bold animate__animated animate__fadeIn"
          style={{ color: isDarkTheme ? "white" : "#585858" }}
        >
          Exercise Genie
        </p>
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/609/615/desktop-wallpaper-black-haired-female-anime-digital-art-anime-girls-pfp-cute-girls-anime-girl-cute-pfp.jpg"
          alt=""
          height={55}
          width={65}
        />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, User</span>
              </p>
              <p>How can I help you?</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() => {
                  const prompt = "Suggest exercises related to abs";
                  //console.log("Card clicked with input:", prompt);
                  setInput(prompt);
                  onSent(prompt); // Pass the prompt directly
                }}
              >
                <p>Suggest exercises related to abs</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() => {
                  const prompt = "Suggest a healthy exercise routine";
                  //console.log("Card clicked with input:", prompt);
                  setInput(prompt);
                  onSent(prompt);
                }}
              >
                <p>Suggest a healthy exercise routine</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() => {
                  const prompt = "Suggest suryanamaskar yoga";
                  //console.log("Card clicked with input:", prompt);
                  setInput(prompt);
                  onSent(prompt);
                }}
              >
                <p>Suggest suryanamaskar yoga</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() => {
                  const prompt = "Suggest gym exercises for girls";
                  //console.log("Card clicked with input:", prompt);
                  setInput(prompt);
                  onSent(prompt);
                }}
              >
                <p>Suggest gym exercises for girls</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img
                src="https://e1.pxfuel.com/desktop-wallpaper/609/615/desktop-wallpaper-black-haired-female-anime-digital-art-anime-girls-pfp-cute-girls-anime-girl-cute-pfp.jpg"
                alt=""
                height={55}
                width={65}
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img height={55} width={65} src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter your prompt here..."
              className={isDarkTheme && input ? "dark-input" : ""}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={isDarkTheme ? submitImage : assets.send_icon} // Swap the image based on theme
                  alt="submit"
                  className="h-12 w-12"
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info font-bold text-2xl">
            Exercise Genie may display inaccurate information, including about
            people, so double check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
