interface ErrorMessageProps {
  error: string;
}

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
