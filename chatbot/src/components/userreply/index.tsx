interface UserReplyProps {
  message: string;
  index: number;
}

/*
  This is the user reply component that will be displayed when the user sends a message.
  * message - The message to be displayed.
  * index - The index of the message in the message queue.
*/
const UserReply = (props: UserReplyProps) => {
  const { message, index } = props;

  return (
    <div 
      key={index}
      className='d-flex justify-content-end'
      >
      <span 
        className='px-3 py-2 rounded'
        style={{
          backgroundColor: '#EDEDEE',
        }}
      >
          {message}
      </span>
    </div>
  );
}

export default UserReply;
