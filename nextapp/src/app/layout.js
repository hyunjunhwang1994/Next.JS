import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "강의 사이트", // 웹 제목
  description: "무료로 만든 강의 사이트입니다.", // 설명
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <h1><a href="/">Hello Next.JS</a></h1>
      <ol>
        <li><Link href="/read/1">HTML</Link></li>
        <li><Link href="/read/2">CSS</Link></li>
        <li><Link href="/read/3">JavaScript</Link></li>
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
