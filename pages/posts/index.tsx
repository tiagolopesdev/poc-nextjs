
export const getStaticProps = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()

  return {
    props: {
      posts: data
    }
  }
}

const Posts = ({ posts }: any) => {
  return (
    <div>
      <h1>Posts</h1>
      {
        posts.map((item: any) => {
          return <div style={{ margin: '10px' }}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        })
      }
    </div>
  )
}

export default Posts
