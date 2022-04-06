import {
  BrowserRouter,
  Route,
  Routes,
  Link,
} from 'react-router-dom'
import './App.css';
// import logo from './logo.svg';
import { HomePage } from './components/Home.page'
import { Players } from './components/Players.page'
import { RQPlayers } from './components/RQPlayers.page'

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/players'>Patriots Legends</Link>
            </li>
            <li>
              <Link to='/rq-players'>RQ Patriots Legends</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/players' element={<Players />} />
          <Route path='/rq-players' element={<RQPlayers />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
};

export default App;
