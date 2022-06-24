import { ReactNode } from 'react';
import { Image, Talk, Workshop } from './all';

export type Speaker = {
  id: string;
  name: string;
  bio: string;
  title: string;
  slug: string;
  twitter: string;
  github: string;
  linkedin: string;
  company: string;
  talks?: Talk[];
  workshops?: Workshop[];
  image: Image;
  character: Image;
};

export type PropsTitle = {
  children: string;
};

export type PropsImage = {
  href?: string;
  src: string;
  alt: string;
};

export type PropsAbout = {
  children: ReactNode;
};

export type SocialData = {
  label: 'GitHub' | 'Twitter' | 'Linkedin';
  url: string;
};

type Character = {
  alt: string;
  src: string;
};

export type PropsSocial = {
  data?: SocialData[];
  character?: Character;
  horizontal?: boolean;
};

export type PropsSpeakerCard = {
  children: ReactNode;
};
