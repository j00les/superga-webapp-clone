const Button = props => {
  return (
    <button
      type={props.type}
      className={props.type === 'submit' ? 'btn btn-primary' : 'btn btn-error'}
    >
      {props.type === 'submit' ? 'submit' : 'cancel'}
    </button>
  );
};

export default Button;
