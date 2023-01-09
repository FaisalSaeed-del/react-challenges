import React, { useState } from "react";

const Lightdarkmode = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`page ${darkMode && "dark-mode"} gap-10`}>
      <button
        className=" border-black border-2 px-4 text-white bg-black"
        onClick={() => setDarkMode(true)}
      >
        Dark Mode
      </button>
      <button
        className=" border-black border-2 px-4 text-black bg-white"
        onClick={() => setDarkMode(false)}
      >
        Light Mode
      </button>
    </div>
  );
};

export default Lightdarkmode;
