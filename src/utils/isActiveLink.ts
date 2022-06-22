import { useRouter } from 'next/router';

export const isActiveLink = (href: string): boolean => {
  const { asPath } = useRouter();

  if (href === '/') {
    return href === asPath;
  }

  return asPath.startsWith(href);
};
