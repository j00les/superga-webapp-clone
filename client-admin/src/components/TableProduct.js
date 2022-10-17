import TableRow from './TableRow';

const TableProduct = ({ products }) => {
  return (
    <div className="overflow-auto">
      <table className="table w-full">
        {/* <!-- head --> */}
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
          <TableRow products={products} />
        </tbody>
      </table>
    </div>
  );
};

export default TableProduct;
