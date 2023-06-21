import {PencilLine} from 'phosphor-react'

import styles from './style.module.css';
import { Avatar } from '../Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
                className={styles.cover}
            />
            
            <div className={styles.profile}>
                <Avatar src="http://github.com/werlesson.png" />
                <strong>Werlesson Vieira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}