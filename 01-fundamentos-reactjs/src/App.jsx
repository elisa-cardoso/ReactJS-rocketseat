import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>

        <aside>
          <Sidebar/>
        </aside>

        <main>
          <Post
            author="Elisa Pessamilio"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita aliquam reprehenderit, ab obcaecati maiores molestiae aperiam impedit provident ad ratione porro officia necessitatibus, dolorem et blanditiis nemo eveniet repudiandae architecto!"
          />
          <Post
            author="Lucas Pessamilio"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita aliquam reprehenderit, ab obcaecati maiores molestiae aperiam impedit provident ad ratione porro officia necessitatibus, dolorem et blanditiis nemo eveniet repudiandae architecto!"
          />
        </main>

      </div>
    </div>
  )
}