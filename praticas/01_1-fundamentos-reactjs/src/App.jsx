import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css'

export function App() {
  return (
    <>
      <Header />

      <Post
        author="Lisandra"
        content="Texto qualquer"
      />
      <Post
        author="Ferdinando"
        content="Texto qualquer só que de ferdi"
      />
    </>
  )
}
