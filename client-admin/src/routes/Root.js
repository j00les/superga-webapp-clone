import SideBar from '../components/SideBar';
import ModalForm from '../components/ModalForm';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <section className="grid h-screen  grid-cols-6 grid-rows-2">
      <SideBar />

      <div className="flex flex-col col-start-2 col-end-7 row-start-1 row-end-3 mx-4">
        {/* <TableProduct products={products} /> */}
        <Outlet />
      </div>
    </section>
  );
};

export default Root;
