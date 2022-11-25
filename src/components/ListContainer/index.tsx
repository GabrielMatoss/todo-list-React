
import { useState } from "react";
import { Trash, PlusCircle, ClipboardText } from "phosphor-react";

import styles from "./ListContainer.module.css";

interface TaskProps {
    id: number;
    title: string;
    checked: boolean;
}

export function ListContainer() {
    const [task, setTask] = useState<TaskProps[]>([]);
    const [text, setText] = useState("");

    function handleAddTask() {
        if (!text) return;

        setTask([...task, {
            id: Math.random(),
            title: text,
            checked: false
        }]);
        setText("");
    }

    function handleToggleTask(id: number) {
        const newTasksChecked = task.map(task => task.id === id ? {
            ...task,
            checked: !task.checked
        } : task);

        setTask(newTasksChecked)
    }

    function handleRemoveTask(id: number) {
        const removeTasksFiltered = task.filter(task => task.id !== id);

        setTask(removeTasksFiltered);
    }

    const tasksChecked = task.filter(task => task.checked === true);

    return (
        <main className={styles.container}>
            <header className={styles.inputContainer}>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Adicione uma nova tarefa" type="text" />
                <button type="submit" onClick={handleAddTask}>
                    Criar
                    <PlusCircle size={18} weight="bold" />
                </button>
            </header>

            <div className={styles.contentList}>
                <div className={styles.countSection}>
                    <section>
                        <span>Tarefas criadas</span>
                        <div>{task.length}</div>
                    </section>

                    <section>
                        <span>Concluídas</span>
                        {task.length === 0 ? <div>{task.length}</div>
                            :
                            <div>{tasksChecked.length} de {task.length}</div>}
                    </section>
                </div>
                {task.length === 0 ?
                    <ul className={task.length === 0 ? styles.listTaskEmpty : ""}>
                        <div>
                            <ClipboardText size={80} />
                            <h3>Você ainda não tem tarefas cadastradas</h3>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </ul>
                    :
                    <ul>{task.map(task => (
                        <li key={task.id}>
                            <div className={styles.tasksContainer}>
                                <input
                                    readOnly
                                    type="checkbox"
                                    checked={task.checked}
                                    onClick={() => { handleToggleTask(task.id) }}
                                />

                                <p>{task.title}</p>

                                <button
                                    onClick={() => { handleRemoveTask(task.id) }}
                                    type="button"
                                    className={styles.trashButton}
                                >
                                    <Trash size={18} weight="bold" />
                                </button>
                            </div>
                        </li>
                    ))}
                    </ul>
                }
            </div>
        </main>
    )
}
