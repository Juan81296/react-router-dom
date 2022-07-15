import {NavLink} from 'react-router-dom'
import './Navbar.css'

export default function NavBar() {
  return (
    <div>
        <ul>
        <li>
               <NavLink className={({isActive}) => (isActive ? 'active' : 'blue')} to='/'>Home</NavLink>  
            </li>
            <li>
               <NavLink className={({isActive}) => (isActive ? 'active' : 'green')} to='/about'>About</NavLink>  
            </li>
            <li>
               <NavLink className={({isActive}) => (isActive ? 'active' : 'yellow')} to='/users'>Users</NavLink>  
            </li>
        </ul>
    </div>
  )
}
