import { Navbar, Container } from "react-bootstrap";
import { Robot } from "react-bootstrap-icons";
import { CHATBOT_NAME } from "../../utilities/constants";

/*
  This is a navbar component for the chat window.
  It will be displayed at the top of the chat window.
*/
const ChatNavbar = () => {
  return (
    <div>
      <Navbar bg="primary" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand className="d-flex align-items-center text-white justify-content-center gap-3">
            <Robot size={40} color="white" />
            <span>{CHATBOT_NAME}</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default ChatNavbar;
