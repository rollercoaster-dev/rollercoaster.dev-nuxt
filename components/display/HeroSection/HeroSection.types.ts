import DisplayHeroSection from "@/components/display/HeroSection/index.vue"
import type {BlocksRenderNode} from "@/components/content/StrapiBlocks/types/blocks";

export type HeroSectionProps = {
    headline: string;
    body?: BlocksRenderNode[] | string;
    media?: {
        url: string;
        alt: string;
    }
}

export type HeroSectionComponent = {
    props: HeroSectionProps;
    id: string;
    component: typeof DisplayHeroSection;
    type: "DisplayHero"
}