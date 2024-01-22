'use client' // Client Component(onSubmit)으로 사용하기 위해

import {useRouter} from "next/navigation";

export default function Create(){
  // 글 작성 시 Redirect를 하기 위해
  const router = useRouter()

  return(
      <form onSubmit={(e) =>{
        e.preventDefault()
        const title = e.target.title.value
        const body = e.target.body.value
        const options ={
          method: "POST",
          headers:{
            'Content-Type': "application/json"
          },
          body: JSON.stringify({title, body})
        }

        fetch("http://localhost:9999/topics", options)
            .then(resp => resp.json())
            .then(result => {
              console.log(result) // POST로 요청하면 json-server는 해당 데이터를 생성하고 생성된 데이터를 리턴해준다.
              const lastId = result.id
              router.push(`/read/${lastId}`) // 생성된 글로 리다이렉트 후
              router.refresh() // 서버 컴포넌트 재 랜더링
            })
      }}>
        <p>
          <input type="text" name='title' placeholder="title"/>
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="create"/>
        </p>
      </form>
  )
}