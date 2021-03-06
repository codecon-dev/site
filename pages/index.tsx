import { GetStaticProps } from 'next';

import { getAllSpeakers, getAllSponsors } from '@lib/cms-api';
import { Sponsor } from '@lib/types/all';
import { Speaker } from '@lib/types/speakers';

import Layout from '@components/_ui/Layout';
import Page from '@components/_ui/Page';
import Hero from '@components/home/Hero';
import About from '@components/home/About';
import ClaimCards from '@components/home/ClaimCards';
import Gather from '@components/home/Gather';
import Speakers from '@components/home/Speakers';
import Newsletter from '@components/home/Newsletter';

type Props = {
  speakers: Speaker[];
  sponsors: Sponsor[];
};

export default function Conf({ speakers, sponsors }: Props) {
  return (
    <Page>
      <Layout sponsors={sponsors}>
        <Hero />
        <About />
        <ClaimCards />
        <Gather />
        <Speakers speakers={speakers} />
        <Newsletter />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const speakers = await getAllSpeakers(8);
  const sponsors = await getAllSponsors();

  return {
    props: {
      speakers,
      sponsors
    }
  };
};
