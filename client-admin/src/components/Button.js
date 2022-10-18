const Button = props => {
  return (
    <button
      type={props.type}
      className={props.type === 'submit' ? 'btn-primary' : 'btn-error'}
    >
      Button
    </button>
  );
};

export default Button;
