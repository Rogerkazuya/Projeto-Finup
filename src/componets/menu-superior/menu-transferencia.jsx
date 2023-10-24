import styles from "./transferencia.module.css"
import img from "../../../assets/Untitled_logo_1_free-file.jpg"
import Image from "next/image"


export default function Menu() {
    return (
        <nav className={styles.container}>
            <div className={styles.conteudo}>
            <div  className={styles.image} >
                <a href="#">
                    <Image
                        src={img}
                        width={150}
                        height={150}
                        alt="" />
                </a>

                </div>
                <div className={styles.transferencia}>
                   <p className={styles.paragrafo}>
                   Transferências Bancárias
                   </p>
                </div>

            </div>
        </nav>



      

    )
}

