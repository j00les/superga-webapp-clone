const Button = props => {
  return (
    <button
      onClick={props?.handleCancel}
      type={props.type}
      className={
        'btn-sm mr-2 ' +
        (props.type === 'submit' ? 'btn btn-primary' : 'btn btn-error')
      }
    >
      {props.type === 'submit' ? 'submit' : 'cancel'}
    </button>
  );
};

export default Button;
