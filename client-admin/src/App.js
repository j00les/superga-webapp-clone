import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './store';
import router from './routes';
import { SkeletonTheme } from 'react-loading-skeleton';

export default function App() {
  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <ReduxProvider store={store}>
          <RouterProvider router={router} />
        </ReduxProvider>
      </SkeletonTheme>
    </>
  );
}
