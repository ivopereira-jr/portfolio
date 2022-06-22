import Link from 'next/link';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

interface NavMenuProps {
  isOpen: boolean;
}

const variants = {
  show: {
    transform: 'translateX(0em)',
    opacity: 1,
  },
  hide: {
    transform: 'translateX(5em)',
    opacity: 0,
  },
};

export function MenuList({ isOpen }: NavMenuProps) {
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'show' : 'hide'}
      variants={{
        show: {
          ...variants.show,
          transition: { delay: 0, duration: 0.5 },
          display: 'block',
        },
        hide: {
          ...variants.hide,
          transition: { delay: 0.3, duration: 0.4 },
          display: 'none',
        },
      }}
      className={styles.navMenu}
    >
      <motion.ul>
        <motion.li
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.05, duration: 0.05 },
            },
          }}
        >
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </motion.li>
        <motion.li
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
        >
          <Link href="/sobre">
            <a>Quem sou</a>
          </Link>
        </motion.li>
        <motion.li
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <Link href="/tecnologias">
            <a>Tecnologias</a>
          </Link>
        </motion.li>
        <motion.li
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.6, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 },
            },
          }}
        >
          <Link href="/contato">
            <a>Contato</a>
          </Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
