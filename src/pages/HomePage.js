import {Link} from 'react-router-dom'

export default function HomePage() {

  const userId = 'Juan';

  return (
    <div>


      <h1>Application</h1>


      <Link to={`users/${userId}`}>Usuarios</Link>

    </div>
  )
}
