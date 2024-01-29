import { useParams } from "react-router-dom"

const PostDetail = ({ posts }) => {
  const { postId } = useParams()

  const post = posts.find((post) => post.id.toString() === postId);
  console.log(post)

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
    
          <p>{post.body}</p>
        </>
      ) : null}
    </div>
  )
}

export default PostDetail