import Header from './products/Header';
import { Outlet } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
