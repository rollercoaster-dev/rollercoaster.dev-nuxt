import type {
  Link,
  NavLinksResponse,
  PageAttributes,
  PageLinksResponse,
  StrapiPageComponent,
} from '@/types/strapi.types';
import type {HeroSectionProps,} from '@/components/display/HeroSection/HeroSection.types';
import type {PageComponent} from '@/types/global';
import type {TextSectionProps} from "@/components/content/TextSection/TextSection.types";
import ContentTextSection from "@/components/content/TextSection/index.vue";
import DisplayHeroSection from "@/components/display/HeroSection/index.vue";

export type ErrorInfo = {
  statusCode: number;
  message: string;
  fatal: boolean;
};

export const useStrapiGraphql = () => {
  const runtimeConfig = useRuntimeConfig()

  const getPageLinks = async (navigationNames: string | string[]): Promise<Record<string,Link[]>> => {
    const query = gql`
      query ($navigationNames: [String!]!) {
        navigations(filters: { name: { in: $navigationNames } }) {
          data {
            attributes {
              name
              link {
                label
                url
              }
            }
          }
        }
      }
    `;

    const variables = {
      navigationNames: Array.isArray(navigationNames) ? navigationNames : [navigationNames],
    };

    const { data } = await useAsyncQuery<NavLinksResponse>(query, variables);

    function parseNavData(pagesResponse: NavLinksResponse | null): Record<string,Link[]> {
      if (!pagesResponse) {
        return {};
      }

      return pagesResponse.navigations.data.reduce((acc, navigation) => {
        if (!navigation.attributes) return acc;
        acc[navigation.attributes.name] = navigation.attributes.link;
        return acc;
      }, {} as { [name: string]: Link[] });
    }

    return data.value !== null ? parseNavData(data.value) : {};
  };

  const getPage = async (pageSlug: string): Promise<PageAttributes | undefined> => {
    const query = gql`
    query GetPage($pageSlug: String!) {
      pages(filters: { slug: { eq: $pageSlug } }) {
        data {
          attributes {
            title
            slug
            description
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
                headlineLevel
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

    try {
      const { data } = await useAsyncQuery<PageLinksResponse>(query, { pageSlug });
      const pageData = data.value?.pages.data[0];
      console.log({pageData})
      if (!pageData || !pageData.attributes) {
        console.log({pageData})
        return
        /*throw createError({
          statusCode: 404,
          message: 'Page not found',
          fatal: true
        });*/
      }
      // if(pageData.attributes && pageData.attributes satisfies PageAttributes) {
      return pageData.attributes;
      // }
    } catch (error: unknown) {
      console.error("fetchStrapiData", error);
        const castError = error as ErrorInfo;
        throw createError({
          statusCode: castError.statusCode || 500,
          message: castError.message || 'An unexpected error occurred',
          fatal: true
        });

    }
  };

  const getCleanComponents = (page: PageAttributes ): PageComponent[] | undefined => {
    if (!page || page.components?.length === 0) return;
    return page.components?.map((component: StrapiPageComponent) => {
      const componentName = component.__typename?.replace('Component', '');

      const media = () => {
        if (component.__typename !== 'ComponentDisplayHero') return "";
        if (!component.media?.data) return ""
        return runtimeConfig.public.strapiBaseUrl + component.media?.data.attributes?.url

      }
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
                url: media(),
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
              headlineLevel: component.__typename === "ComponentContentTextSection" ? component.headlineLevel : undefined,
              body: component.body,
            } as unknown as TextSectionProps,
          };
        default:
          return [] as PageComponent[];
      }
    }) as unknown as PageComponent[];
  };

  return { getPageLinks, getPage, getCleanComponents };
};


`query {
  navigations: navigations(filters: name: {eq:main}) {
    data {
      attributes {
        Link
        name
      }
    }
  }
 }`
