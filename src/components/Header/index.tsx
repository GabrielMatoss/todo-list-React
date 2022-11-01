import styles from "./Header.module.css";
import imageLogo from "../../assets/Logo.svg"

export function Header(){
    return(
        <header className={styles.header}>
            <img src={imageLogo} alt="Logo lista de tarefas" />
        </header>
    )
}