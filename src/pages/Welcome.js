import { Link,Outlet } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
        <h1>Welcome User</h1>
        <Link to='WelcomeUser'>Say welcome to User</Link>
        <Outlet />
    </div>
  )
}
