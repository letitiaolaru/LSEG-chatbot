import { MESSAGE_QUEUE } from "../../utilities/type";

interface ChatReplyProps {
  index: number;
  item: MESSAGE_QUEUE
  handleClick: (stock: any) => void;
}
/*
  This is the chat reply component that will be displayed when the bot sends a message.
  * index - The index of the message in the message queue.
  * item - The message object.
  * handleClick - The function to handle the click event.

  The component will display the message and the options if available.After the user clicks on an option,
  the handleClick function will be called.
*/
const ChatReply = (props: ChatReplyProps) => {
  const { index, item, handleClick } = props;

  return (
    <div 
      key={index}
      className="m-2 w-75"
      >
      <span 
          className='px-3 py-2 rounded'
          style={{
          backgroundColor: '#E4F2F7',
          }}
      >
          {item.message}
      </span>
      {item.options && item.options.length > 0 && (
          <ul className="list-group mt-2">
          {item.options.map((stock, index) => (
              <li
              key={index}
              className={`list-group-item list-group-item-action ${item.isDisabled ? 'disabled' : ''}`}
              onClick={() => handleClick(stock)}
              >
              <span className="d-flex justify-content-center">{stock.name}</span>
              </li>
          ))}
          </ul>
      )}
    </div>
  );
}

export default ChatReply;
