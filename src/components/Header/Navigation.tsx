import { LayoutGroup, motion } from 'framer-motion';
import { isActiveLink } from '../../utils/isActiveLink';

import { ActiveLink } from '../ActiveLink';

import styles from './styles.module.scss';

interface LinksProps {
  name: string;
  href: string;
}

const links: LinksProps[] = [
  {
    name: 'Inicio',
    href: '/',
  },
  {
    name: 'Quem sou',
    href: '/sobre',
  },
  {
    name: 'Tecnologias',
    href: '/tecnologias',
  },
  {
    name: 'Contato',
    href: '/contato',
  },
];

export function Navigation() {
  return (
    <LayoutGroup>
      <nav className={styles.menuDesktop}>
        <ul className={styles.paths}>
          {links.map(({ name, href }) => (
            <li key={name}>
              <ActiveLink href={href} activeClassName={styles.pathActive}>
                <a>
                  {name}
                  {isActiveLink(href) && (
                    <motion.span
                      layoutId="navigation-underline"
                      className="navigation-underline"
                      animate
                    />
                  )}
                </a>
              </ActiveLink>
            </li>
          ))}
        </ul>
      </nav>
    </LayoutGroup>
  );
}
