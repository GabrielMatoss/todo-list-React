import { Trash, PlusCircle } from "phosphor-react";
import { useState } from "react";
import styles from "./ListContainer.module.css";

interface taskProps{
    id: number;
    text: string;
    checked: boolean;
}

export function ListContainer() {
   const [task, setTask] = useState<taskProps[]>([]);
   const [text, setText] = useState("");

   function handleAddTask(text:any){
    setTask([])
   }

   

    return (
        <main className={styles.container}>
            <header className={styles.inputContainer}>
                <input 
                value={text} 
                onChange={(e) => setText(e.target.value)}
                placeholder="Adicione uma nova tarefa" type="text"/>
                <button onClick={() => { 
                setText("");
                handleAddTask(text);
                }}>
                    Criar
                    <PlusCircle size={18} weight="bold" />
                </button>
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
                        <label>
                            <input type="checkbox"/>
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
