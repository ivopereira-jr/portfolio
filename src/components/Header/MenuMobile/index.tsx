import { useState } from 'react';
import { motion } from 'framer-motion';

import { MenuToggle } from './MenuToggle';
import { MenuList } from './MenuList';

import styles from './styles.module.scss';

export function MenuMobile() {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <motion.div
      className={styles.menuMobile}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <MenuToggle toggle={() => SetIsOpen(isOpen => !isOpen)} />
      <MenuList isOpen={isOpen} />
    </motion.div>
  );
}
