import { USER_ICON } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm">
      <img src={USER_ICON} alt="User Icon" className="h-8" />
      <span className="font-bold p-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
