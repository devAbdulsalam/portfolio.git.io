import React from "react";

const Bot = () => {
  return (
    <a href="#contact"  rel="noopener noreferrer">
      <div  className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 hover:bg-cyan-400  w-16 h-16 flex transition-all items-center justify-center rounded-full animate-bounce">
        <ion-icon name="chatbubble-ellipses"></ion-icon>
      </div>
    </a>
  );
};

export default Bot;
