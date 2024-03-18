interface UserReplyProps {
  message: string;
  index: number;
}

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
