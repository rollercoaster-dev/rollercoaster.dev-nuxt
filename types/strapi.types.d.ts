import type { BlocksRenderNode } from '@/components/content/StrapiBlocks/types/blocks';

export type ComponentContentTextSection = {
  __typename: 'ComponentContentTextSection';
  id: string;
  headline: string;
  headlineLevel: number;
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

export type ComponentBaseLink = {
  label: string;
  url: string;
}

export type ComponentDisplayHeroSection = {
  __typename: 'ComponentDisplayHero';
  id: number;
  headline: string;
  body: BlocksRenderNode[];
  media: StrapiMedia;
  alt: string;
  CTA: ComponentBaseLink
};

export type StrapiPageComponent =
  | ComponentDisplayHeroSection
  | ComponentContentTextSection;

export type PageAttributes = {
  title: string;
  slug: string;
  description: string;
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
  attributes: PageAttributes
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

interface Link {
  label: string;
  url: string;
}

interface NavigationAttributes {
  name: string;
  link: Link[];
}

interface NavigationData {
  attributes: NavigationAttributes;
}

interface NavigationsData {
  data: NavigationData[];
}

interface NavLinksResponse {

    navigations: NavigationsData;

}
