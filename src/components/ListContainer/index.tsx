import { Trash, PlusCircle } from "phosphor-react";
import { useState } from "react";
import styles from "./ListContainer.module.css";

interface TaskProps{
    id: number;
    title: string;
    checked: boolean;
  }

export function ListContainer() {
   const [task, setTask] = useState<TaskProps[]>([]);
   const [text, setText] = useState("");

   function handleAddTask(){
    if(!task) return;
    
    setTask([...task,{
        id: Math.random(),
        title: text,
        checked: false
    }]);
    setText("")
   }

   function handleToggleTask(taskId: number){
    const novasTasksCheckadas = task.map( task => task.id === taskId ? {
        ...task,
        isComplete: !task.checked
      }: task);
  
      setTask(novasTasksCheckadas)
   }


   

    return (
        <main className={styles.container}>
            <header className={styles.inputContainer}>
                <input 
                value={text} 
                onChange={(e) => setText(e.target.value)}
                placeholder="Adicione uma nova tarefa" type="text"/>
                <button type="submit" onClick={handleAddTask}>
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
                    {task.map(task => (
                    <li key={task.id}>
                      <div className={styles.tasksContainer}>
                        <label>
                            <input 
                            type="checkbox"
                            checked={task.checked}
                            onClick={() => {handleToggleTask(task.id)}}
                            />
                        </label>
                        <p>{task.title}</p>
                        <button 
                        type="button" 
                        className={styles.trashButton}
                        >
                            <Trash size={18} weight="bold" />
                        </button>
                      </div>
                    </li>
                    ))};
                </ul>
            </div>
        </main>
    )
}
