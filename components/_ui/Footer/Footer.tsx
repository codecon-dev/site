import Image from 'next/image';
import cn from 'classnames';

import { Sponsor } from '@lib/types/all';
import IconDiscord from '@components/_ui/Icons/icon-discord';
import IconTwitter from '@components/_ui/Icons/icon-twitter';
import InstagramIcon from '@components/_ui/Icons/icon-instagram';

import styles from './Footer.module.scss';
import styleUtils from '@components/_ui/Utils/Utils.module.scss';
import { Column, Grid } from '../Grid';
import Link from 'next/link';

type Props = {
  sponsors?: Sponsor[];
};

export default function Footer({ sponsors }: Props) {
  return (
    <footer className={styles.wrapper}>
      {sponsors && (
        <div className={cn('container', styles.grid)}>
          <h2 className={styles.title}>
            A Codecon só é possível graças ao
            <br className={styleUtils['hide-on-mobile']} /> apoio dessas marcas
          </h2>

          {sponsors.map(s => (
            <a
              className={styles.sponsor}
              key={s.slug}
              href={s.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image width={220} height={120} src={s.logo.url} alt={s.name} />
            </a>
          ))}
        </div>
      )}

      <div className={styles.footer}>
        <Grid>
          <Column lg={6} sm={6}>
            A Codecon preza pela inclusão e diversidade.{' '}
            <br className={styleUtils['hide-on-mobile']} />
            Seguimos o{' '}
            <a
              href="https://www.codamos.club/codigo-de-conduta"
              target="_blank"
              rel="noopener noreferrer"
            >
              código de conduta da Codamos
            </a>
            .
          </Column>
          <Column lg={6} sm={6}>
            <div className={styles.social}>
              <Link href="/contato">
                <a>Fale com a gente</a>
              </Link>
              <a
                className={styles.icon}
                href="https://twitter.com/codecondev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconTwitter size={16} color="#fff" />
              </a>

              <a
                className={styles.icon}
                href="https://www.instagram.com/codecon.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon size={16} color="#fff" />
              </a>

              <a
                className={styles.icon}
                href="https://codecon.dev/discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconDiscord size={16} color="#fff" />
              </a>
            </div>
            <div className={styles.vercel}>
              <a
                href="https://vercel.com/?utm_source=codecon&utm_campaign=oss"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  width={215}
                  height={45}
                  src="/powered-by-vercel.svg"
                  alt="Powered by Vercel"
                />
              </a>
            </div>
          </Column>
        </Grid>
      </div>
    </footer>
  );
}
