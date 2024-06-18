import DisplayHeroSection from "@/components/display/HeroSection/index.vue"
import type {BlocksRenderNode} from "@/components/content/StrapiBlocks/types/blocks";
import type {ComponentBaseLink} from "~/types/strapi.types";

export type HeroSectionProps = {
    headline: string;
    body?: BlocksRenderNode[] | string;
    media?: {
        url: string;
        alt: string;
    }
    CTA?: ComponentBaseLink
}

export type HeroSectionComponent = {
    props: HeroSectionProps;
    id: string;
    component: typeof DisplayHeroSection;
    type: "DisplayHero"
}