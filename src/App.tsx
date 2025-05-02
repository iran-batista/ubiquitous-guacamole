import { useState } from "react";
import { Start } from "./components/Start";
import { Chat } from "./components/Chat";
import background from "./assets/bg.png";

export const App = () => {
  const [started, setStarted] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-repeat-round bg-size-[600px] relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-primary-100 opacity-80"></div>
      <div className="z-10">
        {started ? <Chat /> : <Start onStart={() => setStarted(true)} />}
      </div>
    </div>
  );
};
