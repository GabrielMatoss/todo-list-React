import { Trash } from "phosphor-react"
import { ListContainerProps } from "./ListContainer";

import styles from "../styles/Tasks.module.css";

interface TaskProps {
    task: ListContainerProps;
    handleToggleTask: (id: number) => void;
    handleRemoveTask: (id: number) => void;
}

export function Tasks({ task, handleRemoveTask, handleToggleTask }: TaskProps) {
    return (
        <li>
            <div className={task.checked ? styles.tasksChecked : styles.tasksContainer}>
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
    )
}