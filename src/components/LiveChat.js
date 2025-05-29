import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessages, setLiveMessages] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      // console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(25),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-4 p-2 w-full h-[600px] border border-black rounded-lg bg-slate-50 overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-4 border border-black rounded-lg flex justify-between"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Naruto Uzumaki",
              message: liveMessages,
            })
          );
          setLiveMessages("");
        }}
      >
        <input
          type="text"
          className="w-full px-2"
          value={liveMessages}
          onChange={(e) => {
            setLiveMessages(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-500 rounded-lg text-white">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
