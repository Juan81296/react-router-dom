import { Link, useNavigate,Outlet } from "react-router-dom";


export default function Dashboard() {

    const navigate = useNavigate()


    const handleClick = () =>{
        navigate('/')
    }
  return (
    <>

    <h1>Dashboard</h1>
    <button onClick={handleClick}>LogOut</button>
    <br />

    <Link to='welcome'>say welcome</Link>
    <br />

    <Link to='goodbye'>say goodbye</Link>

    <Outlet />

    </>
  )
}
