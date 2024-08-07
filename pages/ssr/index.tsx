
export const getServerSideProps = async () => {

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
      <h1>Posts - SSR</h1>
      {
        posts.map((item: any) => {
          return <div style={{ margin: '10px' }} key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        })
      }
    </div>
  )
}

export default Posts
