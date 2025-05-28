import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <div className="ml-4 p-2 w-full h-[600px] border border-black rounded-lg bg-slate-50">
      <ChatMessage
        name={"Naturo Uzumaki"}
        message={"This is my ninjutsu! Believe it!"}
      />
      <ChatMessage
        name={"Naturo Uzumaki"}
        message={"This is my ninjutsu! Believe it!"}
      />
      <ChatMessage
        name={"Naturo Uzumaki"}
        message={"This is my ninjutsu! Believe it!"}
      />
      <ChatMessage
        name={"Naturo Uzumaki"}
        message={"This is my ninjutsu! Believe it!"}
      />
    </div>
  );
};

export default LiveChat;
