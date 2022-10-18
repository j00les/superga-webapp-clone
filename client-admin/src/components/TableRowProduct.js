const TableRowProduct = ({ products }) => {
  return (
    <>
      {products?.map((el, i) => (
        <tr key={i}>
          <th>{i + 1}</th>
          <td>{el.name}</td>
          <td>{el.description}</td>
          <td>{el.price}</td>
          <td>
            <img src={el.mainImg} alt="" />
          </td>
          <td>{el.category}</td>
          <td>{el.author}</td>
          <td>
            {/* modal for image */}
            <button className="btn">Show</button>
          </td>
          <td>
            <button className="btn">edit</button>
            <button className="btn">delete</button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableRowProduct;
