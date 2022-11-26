import { PlusCircle } from "phosphor-react";
import styles from "../styles/InputHeader.module.css";


export function InputHeader({text, setText, handleAddTask}: any){
    return(
        <header className={styles.inputContainer}>
             <input
             value={text}
             onChange={(e) => setText(e.target.value)}
             placeholder="Adicione uma nova tarefa" type="text"
             />
        <button type="submit" onClick={handleAddTask}>
           Criar
          <PlusCircle size={18} weight="bold" />
         </button>
    </header>
    )
}

