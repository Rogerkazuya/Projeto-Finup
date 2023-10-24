import styles from "./PaginaPrincipal.module.css"
import img1 from "../../../assets/muie2.png"
import img2 from "../../../assets/conceito-de-seguranca-de-pagamento-online-telefone-3d-e-conta.jpg"
import img3 from "../../../assets/mao-3d-usando-o-aplicativo-bancario-on-line-no-smartphone.jpg"
import Image from "next/image"

export default function PaginaPrincipal() {
    return (
        <main className={styles.conteudo}>
            <div className={styles.meio}>

                <div className={styles.img}>

                    <div className={styles.img1}>
                        <Image
                            src={img1}
                            width={500}
                            height={400}
                            alt="" />
                    </div>
                </div>

                <div className={styles.texto}>
                    <div className={styles.paragrafo1}>
                        <p className={styles.para}>
                            Na vanguarda da revolução financeira, estamos comprometidos em unir
                            a eficiência da tecnologia digital com a segurança da gestão
                            financeira para criar a experiência bancária do futuro. Nossa
                            missão é empoderar nossos clientes, simplificar suas vidas
                            financeiras e prepará-los para o amanhã digital.
                        </p>
                    </div>

                    <div className={styles.paragrafo2}>
                        <p className={styles.para}>
                            Inovação é o nosso lema. Buscamos constantemente as mais recentes
                            inovações tecnológicas e soluções financeiras avançadas para atender
                            às necessidades em constante evolução de nossos clientes. Acreditamos
                            que a acessibilidade global é fundamental, permitindo que pessoas em
                            todo o mundo acessem nossos serviços financeiros de forma rápida e
                            segura.
                        </p>
                    </div>

                    <div className={styles.paragrafo3}>
                        <p className={styles.para}>
                            Reconhecemos a singularidade de cada cliente. Portanto, oferecemos
                            uma experiência bancária personalizada, adaptando nossos serviços às
                            necessidades individuais de cada um. Nossa prioridade é a segurança
                            de suas informações financeiras, e implementamos rigorosas medidas
                            de segurança cibernética para proteger seus dados.
                        </p>
                    </div>
                </div>
            </div>
        </main>

    )
}
