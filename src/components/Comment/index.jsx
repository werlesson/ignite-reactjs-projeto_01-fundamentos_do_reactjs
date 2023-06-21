import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './style.module.css'
import { Avatar } from '../Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/werlesson.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Werlesson Vieira</strong>
                            <time title='21 de Junho às 21:45h' dateTime='2023-06-21 21:45:53'>Há cerca de 1h</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button >
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}