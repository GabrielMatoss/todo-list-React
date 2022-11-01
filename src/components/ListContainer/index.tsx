import styles from "./ListContainer.module.css";
import { PlusCircle, Trash }  from "phosphor-react";

export function ListContainer(){
    return(
        <main className={styles.container}>
            <div className={styles.inputContainer}>
                <input placeholder="Adicione uma nova tarefa"/>
                <button>Criar <PlusCircle size={20} weight="bold" /></button>
            </div>

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
                        <input type="checkbox" />
                       <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                       <Trash /> 
                    </li>
                    <li>
                        <input type="checkbox" />
                       <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                       <Trash /> 
                    </li>
                    <li>
                        <input type="checkbox" />
                       <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                       <Trash /> 
                    </li>
                </ul>
            </div>
        </main>
    )
}