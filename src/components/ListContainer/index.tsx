import { Trash, PlusCircle } from "phosphor-react";
import styles from "./ListContainer.module.css";



export function ListContainer() {
    return (
        <main className={styles.container}>
            <header className={styles.inputContainer}>
                <input placeholder="Adicione uma nova tarefa" />
                <button>Criar <PlusCircle size={18} weight="bold" /></button>
            </header>

            <div className={styles.contentList}>
                <div className={styles.countSection}>
                    <section>
                        <span>Tarefas criadas</span>
                        <div>5</div>
                    </section>

                    <section>
                        <span>Concluídas</span>
                        <div>2 de 5</div>
                    </section>
                </div>

                <ul>
                    <li>
                      <div className={styles.tasksContainer}>
                        <label className="checkbox-container">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                        <button type="button" className={styles.trashButton}>
                        <Trash size={18} weight="bold" />
                        </button>
                      </div>
                    </li>

                </ul>
            </div>
        </main>
    )
}
