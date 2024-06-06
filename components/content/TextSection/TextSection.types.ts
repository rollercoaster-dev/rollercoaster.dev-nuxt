import type {BlocksRenderNode} from "@/components/content/StrapiBlocks/types/blocks";
import type {ComponentContentTextSection} from "@/types/strapi.types";
import ContentTextSection from "@/components/content/TextSection/index.vue";

export type TextSectionProps = {
    headline: string;
    headlineLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    body: BlocksRenderNode[]
}

export type TextSectionComponent = {
    props: TextSectionProps;
    id: string;
    component: typeof ContentTextSection;
    type: "ContentTextSection"
}