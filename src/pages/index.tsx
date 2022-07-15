import Image from 'next/image';
import type { NextPage } from 'next';

import { Layout } from '../components/Layout';

import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
  return (
    <Layout title="Inicio | Portfólio Ivo Pereira">
      <div className={`flexAlignCenterSpacebetween ${styles.container}`}>
        <div className={styles.description}>
          <h1>
            Olá &nbsp;
            <Image
              src="/icons/hand-waving.gif"
              alt="gif de mão acenando"
              width={28}
              height={28}
            />
            , eu sou
            <br />
            <strong>Ivo Pereira</strong>
          </h1>
          <h2>Desenvolvedor Front-end.</h2>

          <a
            className={`link ${styles.linkDownloadCv}`}
            href="https://github.com/ivopereira-jr/portfolio/raw/main/.github/ivo-pereira.pdf"
            target="_blank"
          >
            Download CV
          </a>
        </div>

        <div className={styles.photo}>
          <Image
            src="/icons/coding.svg"
            alt="Imagem de um homem sentado em uma cadeira em frente a uma mesa ao lado de um vaso com uma planta e a frente dele tem algumas telas"
            width={400}
            height={400}
            layout="responsive"
            priority
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
