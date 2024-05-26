export type ComponentDisplayHero = {
    id: string;
    headline: string;
    body: JSON;
    media: {
        data: {
            attributes: {
                url: string;
            }
        }
    }
}

export type ComponentContentTextSection = {
    id: string;
    headline: string;
    body: JSON;
}

export type PageComponents = ComponentDisplayHero | ComponentContentTextSection;

export type PageAttributes = {
    title: string;
    slug: string;
    components?: PageComponents[];
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
}

export type Page = {
    data: {
        attributes: PageAttributes;
    }
}
export type PageLinks = {
        attributes: {
            title: string;
            slug: string;
        }
}
export type PageLinkAttributes = {
    title: string;
    slug: string;
}
export type PageLinksResponse = {
    pages: {
        data: PageLinks[];
    };
}
export type PageResponse = {
    Page: Page;
}