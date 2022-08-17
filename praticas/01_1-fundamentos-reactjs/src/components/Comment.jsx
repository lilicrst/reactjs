import { ThumbsDown, ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/diego3g.png" alt="" />

            <div className={styles.commentBox}>
                
                <div className={styles.commentContent}>
                  <header>
                    <div className={styles.authorAndTime}>
                      <strong>Diego Fernandes</strong>
                      <time title='01 de Julho às 16h17' dateTime='2022-07-01 16:17:40'>Cerca de 1h atrás</time>
                    </div>

                    <button title='Deletar comentário'>
                      <Trash size={20} />
                    </button>
                  </header>

                  <p>Muito bom Devon, parabéns!! 👏👏</p>
                   
                    <footer>
                        <button>
                          <ThumbsUp />
                          Aplaudir <span>20</span>
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}