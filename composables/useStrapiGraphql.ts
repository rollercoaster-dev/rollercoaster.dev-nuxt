import type {PageAttributes, PageLinksResponse,} from '@/types/strapi.types';
import type {NavLinkItem} from '@/components/nav/links.vue';

export const useStrapiGraphql = () => {
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

  const getHomePage = async () => {
    const query = gql`
      query {
        pages: pages(filters: { slug: { eq: "home" } }) {
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
    console.log({home: data.value})
      return data.value?.pages.data[0].attributes as PageAttributes;
  };
  return { getPageLinks, getHomePage };
};
