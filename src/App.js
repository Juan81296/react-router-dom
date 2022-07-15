import './App.css';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';
import UserPage from './pages/UserPage';
import Dashboard from './pages/Dashboard';
import Welcome from './pages/Welcome';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='users' element={<UsersPage />} />
    <Route path='users/:id' element={<UserPage />}/>
    <Route path='/usuarios' element={<Navigate to='/users' />}/>

    <Route path='/dashboard/*' element={<Dashboard />}>
    <Route path='welcome/*' element={<Welcome />}>
      <Route path='welcomeUser' element={<p>Welcome Juan</p>}/>
      </Route>
    <Route path='goodbye' element={<p>goodbye</p>} />

    </Route>
    
    <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
