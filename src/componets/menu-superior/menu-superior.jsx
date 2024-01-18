import styles from "./menu.module.css"
import img from "../../../assets/Untitled_logo_1_free-file.jpg"
import Image from "next/image"


export default function Menu() {
  return (
    <nav className={styles.container}>
      <div className={styles.conteudo}>

        <a className={styles.image} href="#">
          <Image
            src={img}
            width={100}
            height={100}
            alt="" />
        </a>

        <div className={styles.menu} id="navbarNav">
          <ul className={styles.opcoes}>
            <li className={styles.li}>
              <a className={styles.link} aria-current="page" href="default.asp" target="_blank">Home</a>
            </li>

            <li className={styles.li}>

              <a className={styles.link} href="#">Sobre</a>

            </li>

            <li className={styles.li}>

              <a className={styles.link} href="default.asp" target="_blank" rel="noopener noreferrerhref=">Criar uma conta</a>

            </li>

            <li className={styles.li}>

              <a className={styles.link} href="acesso_conta" rel="">
              Acessar conta
               </a>

            </li>


          </ul>
        </div>
      </div>
    </nav>

  )
}

