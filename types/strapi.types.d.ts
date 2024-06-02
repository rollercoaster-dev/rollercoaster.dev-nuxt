import type { BlocksRenderNode } from '@/components/content/StrapiBlocks/types/blocks';

export type ComponentContentTextSection = {
  __typename: 'ComponentContentTextSection';
  id: string;
  headline: string;
  body: BlocksRenderNode[];
};

export type StrapiMedia = {
  __typename: string;
  data: {
    __typename: string;
    attributes: {
      __typename: string;
      url: string;
    };
  };
};

export type ComponentDisplayHeroSection = {
  __typename: 'ComponentDisplayHero';
  id: number;
  headline: string;
  body: BlocksRenderNode[];
  media: StrapiMedia;
  alt: string;
};

export type StrapiPageComponent =
  | ComponentDisplayHeroSection
  | ComponentContentTextSection;

export type PageAttributes = {
  title: string;
  slug: string;
  components?: StrapiPageComponent[];
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
};

export type Page = {
  data: {
    attributes: PageAttributes;
  };
};
export type PageLinks = {
  attributes: {
    title: string;
    slug: string;
  };
};
export type PageLinkAttributes = {
  title: string;
  slug: string;
};
export type PageLinksResponse = {
  pages: {
    data: PageLinks[];
  };
};
export type PageResponse = {
  Page: Page;
};
