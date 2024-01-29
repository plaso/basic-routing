import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div>
      <h1>404 Not Found</h1>

      <Link to="/">Vuelve a la home</Link>
    </div>
  )
}

export default Error