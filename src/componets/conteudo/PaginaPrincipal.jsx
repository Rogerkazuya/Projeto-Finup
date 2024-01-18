import styles from "./PaginaPrincipal.module.css"
import img3 from "../../../assets/retrato-de-jovem-em-luz-de-neon-no-fundo-escuro-as-emocoes-humanas-sexta-feira-negra-cyber-segunda-feira-compras-vendas-conceito-de-financas.jpg"
import Image from "next/image"

export default function PaginaPrincipal() {
    return (
        <main className={styles.conteudo}>
            <div className={styles.meio}>





                <div className={styles.texto}>
                    <div className={styles.paragrafo}>
                        <p className={styles.para}>
                            Na vanguarda da revolução financeira, estamos comprometidos em unir
                            a eficiência da tecnologia digital com a segurança da gestão
                            financeira para criar a experiência bancária do futuro. Nossa
                            missão é empoderar nossos clientes, simplificar suas vidas
                            financeiras e prepará-los para o amanhã digital.
                        </p>
                    </div>


                    <div className={styles.paragrafo}>
                        <p className={styles.para}>
                            Reconhecemos a singularidade de cada cliente. Portanto, oferecemos
                            uma experiência bancária personalizada, adaptando nossos serviços às
                            necessidades individuais de cada um. Nossa prioridade é a segurança
                            de suas informações financeiras, e implementamos rigorosas medidas
                            de segurança cibernética para proteger seus dados.
                        </p>
                    </div>
                </div>



                <div className={styles.meio}>
                    <div className={styles.texto}>

                        <div className={styles.paragrafo}>
                            <p className={styles.para}>
                                Inovação é o nosso lema. Buscamos constantemente as mais recentes
                                inovações tecnológicas e soluções financeiras avançadas para atender
                                às necessidades em constante evolução de nossos clientes. Acreditamos
                                que a acessibilidade global é fundamental, permitindo que pessoas em
                                todo o mundo acessem nossos serviços financeiros de forma rápida e
                                segura.
                            </p>
                        </div>

                        <div className={styles.img3} >
                            <Image
                                src={img3}
                                width={830}
                                height={500}
                                style={{
                                    borderRadius: '10rem',
                                }}
                                alt=""
                            />

                        </div>
                    </div>
                </div>
            </div>

        </main>

    )
}
