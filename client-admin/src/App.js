import { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import TableProduct from './components/TableProduct';
import RegisterForm from './components/RegisterForm';
import ModalButton from './components/ModalButton';
import LoginPage from './pages/LoginPage';

function App() {
  const [products, setProduct] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'get',
      });

      if (!response.ok) throw new Error("Can't fetch data");

      const data = await response.json();
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <section className="grid h-screen  grid-cols-6 grid-rows-2">
        <SideBar />

        <div className="flex flex-col col-start-2 col-end-7 row-start-1 row-end-3 mx-4">
          <div>
            <ModalButton />
          </div>
          <TableProduct products={products} />
        </div>
        <RegisterForm />
      </section>
      <LoginPage />
    </>
  );
}
// }

export default App;
