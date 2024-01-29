import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <Link to="/posts" >
        Go to posts
      </Link>
    </div>
  )
}

export default Home;