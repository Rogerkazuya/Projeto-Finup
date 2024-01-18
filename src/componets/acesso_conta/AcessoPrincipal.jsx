
import { Main } from "next/document"
import styles from "./PrincipalCSS.module.css"

export default function Acesso() {
    return (

<main className={styles.conteudo}>
        {/* //    EMAIL */}

        <form action="" className={styles.form}>
            <div className={styles.email}>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    required=""
                />
            </div>

            {/* SENHA */}

            <div className={styles.senha}>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Senha"
                    required=""
                />

            </div>
            <div></div>
        </form>
</main>
    )
}


