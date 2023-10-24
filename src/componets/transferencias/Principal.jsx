import styles from "./Principal.module.css"



export default function Transferencias() {
    return (
        <main className={styles.principal}>

            <div className={styles.caixa}>
                <ul className={styles.meio}>
                    <li className={styles.link}>
                        Transferências
                    </li>

                    <li className={styles.link}>
                        Extrato Bancarios
                    </li>

                </ul>
            </div>
        </main>
    )
} 