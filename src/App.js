import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routers } from './routers/Router';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto bg-black text-white overflow-hidden'>
      <RouterProvider router={routers}>
      </RouterProvider>
    </div>
  );
}

export default App;
