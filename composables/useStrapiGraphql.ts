import type {
  PageAttributes,
  PageLinksResponse,
  StrapiPageComponent,
} from '@/types/strapi.types';
import type { NavLinkItem } from '@/components/nav/links.vue';
import type {
  HeroSectionProps,
} from '@/components/display/HeroSection/HeroSection.types';
import type { PageComponent } from '@/types/global';
import type {TextSectionProps} from "@/components/content/TextSection/TextSection.types";
import ContentTextSection from "@/components/content/TextSection/index.vue";
import DisplayHeroSection from "@/components/display/HeroSection/index.vue";



export const useStrapiGraphql = () => {
  const runtimeConfig = useRuntimeConfig()
  const getPageLinks = async () => {
    const query = gql`
      query {
        pages {
          data {
            attributes {
              title
              slug
            }
          }
        }
      }
    `;

    const { data } = await useAsyncQuery<PageLinksResponse>(query);

    function parsePageData(
      pagesResponse: PageLinksResponse | null
    ): NavLinkItem[] {
      if (!pagesResponse) return [];
      return pagesResponse.pages.data.map((page) => ({
        title: page.attributes.title,
        url: page.attributes.slug,
      }));
    }
    console.log({ data: data.value });
    return data.value !== null ? parsePageData(data.value) : [];
  };

  const getPage = async (page: string) => {
    const query = gql`
      query {
        pages: pages(filters: { slug: { eq: "${page}" } }) {
          data {
            attributes {
              title
              slug
              components {
                __typename
                ... on ComponentDisplayHero {
                  id
                  headline
                  body
                  media {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                ... on ComponentContentTextSection {
                  id
                  headline
                  body
                }
              }
              createdAt
              updatedAt
              publishedAt
            }
          }
        }
      }
    `;
    const { data } = await useAsyncQuery<PageLinksResponse>(query);
    console.log({ home: data.value });
    return data.value?.pages.data[0].attributes as PageAttributes;
  };
  const getCleanComponents = (page: PageAttributes ): PageComponent[] => {
    const components =  page.components?.map((component: StrapiPageComponent) => {
      const componentName = component.__typename?.replace('Component', '');
      console.log({component})
      const media =
        component.__typename === 'ComponentDisplayHero'
          ? runtimeConfig.public.strapiBaseUrl + component.media?.data.attributes.url
          : '';
      const alt =
        component.__typename === 'ComponentDisplayHero' ? component.alt : '';
      switch (componentName) {
        case 'DisplayHero':
          return {
            id: component.id,
            type: 'DisplayHeroSection',
            component: DisplayHeroSection,
            props: {
              headline: component.headline,
              body: component.body,
              media: {
                url: media,
                alt,
              },
            } as unknown as HeroSectionProps,
          };
        case 'ContentTextSection':
          return {
            id: component.id,
            component: ContentTextSection,
            type: 'ContentTextSection',
            props: {
              headline: component.headline,
              body: component.body,
            } as unknown as TextSectionProps,
          };
        default:
          return [] as PageComponent[];
      }
    }) as unknown as PageComponent[];
    console.log({raw: page.components, components})
    return components;
  };

  return { getPageLinks, getPage, getCleanComponents };
};
