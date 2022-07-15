import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Página não encontrada</title>
      </Head>

      <main className="container marginMainContent contentPageCustom404">
        <div className="boxPhotoError">
          <Image
            src="/icons/404-error.svg"
            alt="ilustração erro 404 com um menino setada em cima do numero 4 um meninos de pe em cima do numero 0 e o outro sentado em cima do numero 4"
            width={300}
            height={200}
            layout="responsive"
            priority
          />
        </div>

        <h1>
          Ops! Desculpe mais não foi possível encontrar a página que você esta
          buscando verifique o endereço e tente novamente ou retorne para o
          início
        </h1>

        <Link href="/">Voltar ao inicio</Link>
      </main>
    </>
  );
};

export default Custom404;
