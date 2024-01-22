import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "강의 사이트", // 웹 제목
  description: "무료로 만든 강의 사이트입니다.", // 설명
};

export default async function RootLayout({children}) {

  const resp = await fetch("http://localhost:9999/topics",
      {cache:'no-store'}
      )
  const topics = await resp.json()

  return (
      <html>
      <body>
      <h1><a href="/">Hello Next.JS</a></h1>
      <ol>
        {
          topics.map((topic) => {
            return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
          })
        }
      </ol>
      {children}
      <ul>
        <li><Link href="/create">Create</Link></li>
        <li><Link href="/update/1">Update</Link></li>
        <li><input type="button" value="delete"/></li>
      </ul>
      </body>
      </html>
  );
}
