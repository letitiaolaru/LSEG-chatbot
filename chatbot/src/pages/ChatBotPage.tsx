import ChatNavbar from "../components/chatnavbar";
import ChatContent from "../components/chatcontent";
import ChatFooter from "../components/chatfooter";

/*
  This is the main page for the chat window. It contains the chat navbar, chat content, and chat footer.
*/
const ChatBotPage = () => {
  return (
    <div>
      <ChatNavbar />
      <ChatContent />
      <ChatFooter />
    </div>
  );
}

export default ChatBotPage;
