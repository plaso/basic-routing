import { Link } from "react-router-dom"

const Card = ({ title, id, body }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <Link to={`/posts/${id}`} className="text-decoration-none">
          <h5 className="card-title">{title}</h5>
        </Link>
        <p className="card-text">{body}</p>
      </div>
    </div>
  )
}

export default Card