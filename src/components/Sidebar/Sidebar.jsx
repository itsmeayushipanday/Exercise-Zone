//react import
import React, { useContext, useState } from "react";

//component imports
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { useTheme } from "../../context/ThemeContext"; // Import the theme hook

const Sidebar = () => {
  const [extend, setExtend] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);
  const { theme } = useTheme(); // Get the current theme

  //prev prompts
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div
      className="sidebar"
      style={{
        backgroundColor: theme === "light" ? "white" : "#4e4e4e", // Light or dark background
        color: theme === "light" ? "#282828" : "white", // Text color for contrast
        borderRadius: "20px", // Circular border for both themes
      }}
    >
      <div className="top">
        <img
          onClick={() => setExtend((prev) => !prev)} //menu icon of sidebar
          className="menu"
          src={assets.menu_icon}
          alt=""
        />

        {/* + icon */}
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extend ? <p className="font-bold text-xl">New Chat</p> : null}
        </div>
        {extend ? (
          <div className="recent">
            <p className="recent-title">Recent Chats</p>
            {prevPrompts.map((item, index) => (
              <div
                onClick={() => loadPrompt(item)}
                className="recent-entry"
                key={index}
              >
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extend ? <p className="text-2xl">Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extend ? <p className="text-2xl">Activity</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extend ? <p className="text-2xl">Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
