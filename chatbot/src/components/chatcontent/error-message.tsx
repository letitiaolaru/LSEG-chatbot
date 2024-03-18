interface ErrorMessageProps {
  error: string;
}

/*
This is the error message component that will be displayed
when an error occurs in the chatbot.
*/
const ErrorMessage = (props: ErrorMessageProps) => {
  const { error } = props;

  return (
    <span 
      className='px-3 py-2 rounded w-auto'
      style={{
        backgroundColor: '#F8D7DA',
      }}
    >
      {error}
    </span>
  );
}

export default ErrorMessage;
