import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react";
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from "phosphor-react";
import { Tasks } from "./Tasks";

import imgClipBoard from "../assets/Clipboard.svg";
import styles from "../styles/ListContainer.module.css";

export interface ListContainerProps {
  id: string;
  title: string;
  checked: boolean;
}

export function ListContainer() {
  const [task, setTask] = useState<ListContainerProps[]>([]);
  const [text, setText] = useState<string>("");

  function handleAddTask(event: FormEvent) {
    event?.preventDefault();

    if (!text) return;

    setTask([
      ...task,
      {
        id: uuidv4(),
        title: text,
        checked: false,
      },
    ]);

    setText("");
  }

  function handleToggleTask(id: string) {
    const newTasksChecked = task.map((task) =>
      task.id === id
        ? {
            ...task,
            checked: !task.checked,
          }
        : task
    );

    setTask(newTasksChecked);
  }

  function handleRemoveTask(id: string) {
    const removeTasksFiltered = task.filter((task) => task.id !== id);

    setTask(removeTasksFiltered);
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setText(event.target.value);
  }

  function handleInvalidComment(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Preencha este Campo!");
  }

  const tasksChecked = task.filter((task) => task.checked === true);

  return (
    <main className={styles.container}>
      <form onSubmit={handleAddTask} className={styles.inputContainer}>
        <input
          value={text}
          placeholder="Adicione uma nova tarefa"
          type="text"
          onChange={handleNewCommentChange}
          onInvalid={handleInvalidComment}
          required
        />
        <button type="submit">
          Criar
          <PlusCircle size={18} weight="bold" />
        </button>
      </form>
      <div className={styles.contentList}>
        <div className={styles.countSection}>
          <section>
            <span>Tarefas criadas</span>
            <div>{task.length}</div>
          </section>

          <section>
            <span>Concluídas</span>
            {task.length === 0 ? (
              <div>{task.length}</div>
            ) : (
              <div>
                {tasksChecked.length} de {task.length}
              </div>
            )}
          </section>
        </div>
        {task.length === 0 ? (
          <ul className={task.length === 0 ? styles.listTaskEmpty : ""}>
            <div>
              <img src={imgClipBoard} alt="Lista vazia" />
              <h3>Você ainda não tem tarefas cadastradas</h3>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </ul>
        ) : (
          <ul>
            {task.map((task) => (
              <Tasks
                task={task}
                key={task.id}
                handleRemoveTask={handleRemoveTask}
                handleToggleTask={handleToggleTask}
              />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
