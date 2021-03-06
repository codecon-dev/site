import Image from 'next/image';

import { Grid, Column } from '@components/_ui/Grid';

import styles from './Newsletter.module.scss';

export default function Newsletter() {
  return (
    <section>
      <Grid align="center">
        <Column lg={8} sm={9}>
          <h2>Uma newsletter com curadoria de links para pessoas desenvolvedoras</h2>
        </Column>
        <Column lg={3} sm={1} xsm={0} />
        <Column lg={1} sm={2} xsm={0}>
          <div className={styles['image__wrapper']}>
            <Image src="/icons/mail.svg" width={48} height={48} />
          </div>
        </Column>
      </Grid>
      <Grid>
        <Column lg={6} sm={6}>
          <p>
            Toda semana eu, Gabriel Nunes, te envio uma coletânea com 7 links de artigos, notícias,
            repositórios e tudo que há de bom. No final ainda temos um bônus com memes e links
            divertidos.
          </p>
        </Column>
        <Column lg={2} sm={0} xsm={0} />
        <Column lg={4} sm={6}>
          <form
            action="https://www.getrevue.co/profile/codecon/add_subscriber"
            method="post"
            name="revue-form"
            target="_blank"
            className={styles.form}
          >
            <input
              className={styles['form__input']}
              placeholder="Seu melhor e-mail"
              type="email"
              name="member[email]"
              required
            />

            <input
              className={styles['form__button']}
              type="submit"
              value="Inscrever-se"
              name="member[subscribe]"
              id="member_submit"
            />
          </form>
        </Column>
      </Grid>
    </section>
  );
}
