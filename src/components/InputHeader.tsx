import { PlusCircle } from "phosphor-react";
import styles from "../styles/InputHeader.module.css";

interface InputHeaderProps{
    text: string;
    setText: (e: string) => void;
    handleAddTask: () => void;
}

export function InputHeader({text, setText, handleAddTask}: InputHeaderProps){

    return(
        <form onSubmit={handleAddTask} className={styles.inputContainer}>
             <input
             value={text}
             onChange={(e) => setText(e.target.value)}
             placeholder="Adicione uma nova tarefa" type="text"
             />
        <button type="submit">
           Criar
          <PlusCircle size={18} weight="bold" />
         </button>
    </form>
    )
}

