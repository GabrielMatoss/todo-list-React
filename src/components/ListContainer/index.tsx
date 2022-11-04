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
                        <label className={styles.checkboxContainer}>
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

/*
 <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Adicionar novo todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
*/