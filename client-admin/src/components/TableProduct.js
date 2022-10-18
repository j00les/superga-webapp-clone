import TableRowProduct from './TableRowProduct';

const TableProduct = ({ products }) => {
  return (
    <div className="overflow-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Main Image</th>
            <th>Category</th>
            <th>Author</th>
            <th>Images</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <TableRowProduct products={products} />
        </tbody>
      </table>
    </div>
  );
};

export default TableProduct;
