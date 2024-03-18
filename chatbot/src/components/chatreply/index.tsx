import { MESSAGE_QUEUE } from "../../utilities/type";

interface ChatReplyProps {
  index: number;
  item: MESSAGE_QUEUE
  handleClick: (stock: any) => void;
}

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
