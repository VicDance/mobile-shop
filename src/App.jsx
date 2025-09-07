import { Outlet } from 'react-router-dom';
import Header from './products/Header';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App;
