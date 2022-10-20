import { ModalCategory } from './ModalCategory';
import { ModalCategoryButton } from './ModalCategoryButton';
import RowCategory from './RowCategory';

const TableCategory = () => {
  return (
    <>
      <div>
        <ModalCategoryButton />
      </div>
      <div className="overflow-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>created at</th>
              <th>updated at</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <RowCategory />
          </tbody>
        </table>
        <ModalCategory />
      </div>
    </>
  );
};

export default TableCategory;
