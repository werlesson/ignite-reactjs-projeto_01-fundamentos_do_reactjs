import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './global.css'

import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header title="Ignite Feed"/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Teste 01" content="Aqui vai o conteúdo da postagem mesmo. Aqui vai o conteúdo da postagem mesmo. Aqui vai o conteúdo da postagem mesmo. Aqui vai o conteúdo da postagem mesmo. Aqui vai o conteúdo da postagem mesmo." />
          <Post author="Teste 02" content="Aqui vai o conteúdo da postagem mesmo" />
        </main>
      </div>
    </div>
  )
}