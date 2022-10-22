export const Header = props => {
  return (
    <>
      {props.view === 'category' && (
        <p className="underline text-4xl underline-offset-8 uppercase">
          Categories
        </p>
      )}

      {props.view === 'product' && (
        <p className="underline text-4xl underline-offset-8 uppercase">
          Products
        </p>
      )}

      {props.view === 'register' && (
        <p className="underline text-4xl underline-offset-8 uppercase">
          Register
        </p>
      )}
    </>
  );
};
