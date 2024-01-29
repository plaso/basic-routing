import Card from "../../components/Card/Card"

const Posts = ({ posts }) => {

  return (
    <div>
      <h1>Posts</h1>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {posts.map((post) => (
          <div className="col" key={post.id}>
              <Card {...post} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Posts