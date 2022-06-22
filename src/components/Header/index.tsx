import Link from 'next/link';
import Image from 'next/image';

import { Navigation } from './Navigation';
import { MenuMobile } from './MenuMobile';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className="container">
      <div className={styles.containerHeader}>
        <Link href="/">
          <a className={styles.containerLogo}>
            <Image
              src="/logo.svg"
              alt="Imagem escrito nunca pare de aprender em inglês"
              width={300}
              height={56}
              layout="responsive"
              priority
            />
          </a>
        </Link>

        <Navigation />
        <MenuMobile />
      </div>
    </header>
  );
}
