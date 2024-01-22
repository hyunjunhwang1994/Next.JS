export default async function Read(props){
  const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`)
  const topic = await resp.json()

  return(
      <>
        <h2>Read</h2>
        <h3>{topic.title}</h3>
        <p>{topic.body}</p>
      </>
  )
}