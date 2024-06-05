import type * as Attribute from "./base";

export interface TextInlineNode {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

export interface BaseNode {
  type: string;
  children: unknown[];
}

export interface LinkInlineNode extends BaseNode {
  type: "link";
  url: string;
  children: TextInlineNode[];
}

export interface ListItemInlineNode extends BaseNode {
  type: "list-item";
  children: DefaultInlineNode[];
}

type InlineNode = TextInlineNode | LinkInlineNode | ListItemInlineNode;

export type DefaultInlineNode = Exclude<InlineNode, ListItemInlineNode>;
export type NonTextInlineNode = Exclude<InlineNode, TextInlineNode>;

export interface ParagraphBlockNode extends BaseNode {
  type: "paragraph";
  children: DefaultInlineNode[];
}

export interface QuoteBlockNode extends BaseNode {
  type: "quote";
  children: DefaultInlineNode[];
}

export interface CodeBlockNode extends BaseNode {
  type: "code";
  children: DefaultInlineNode[];
}

export interface HeadingBlockNode extends BaseNode {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: DefaultInlineNode[];
}

export interface ListBlockNode extends BaseNode {
  type: "list";
  format: "ordered" | "unordered";
  children: (ListItemInlineNode | ListBlockNode)[];
  indentLevel?: number;
}

export interface ImageBlockNode extends BaseNode {
  type: "image";
  image: Attribute.GetValue<{
    type: "media";
    allowedTypes: ["images"];
    multiple: false;
  }>;
  children: [{ type: "text"; text: "" }];
}

// Block node types
export type RootNode =
  | ParagraphBlockNode
  | QuoteBlockNode
  | CodeBlockNode
  | HeadingBlockNode
  | ListBlockNode
  | ImageBlockNode;

export type Blocks = Attribute.OfType<"blocks"> &
  // Options
  Attribute.ConfigurableOption &
  Attribute.PrivateOption &
  Attribute.RequiredOption &
  Attribute.WritableOption &
  Attribute.VisibleOption;

export type BlocksValue = RootNode[];

export type GetBlocksValue<T extends Attribute.Attribute> = T extends Blocks
  ? BlocksValue
  : never;

// Type utils needed for the blocks renderer and the blocks editor
export type BlocksNode = RootNode | NonTextInlineNode;
export type BlocksInlineNode = NonTextInlineNode;
export type BlocksTextNode = TextInlineNode;

export type BlocksRenderNode =
  | InlineNode
  | ParagraphBlockNode
  | ListBlockNode
  | ImageBlockNode
  | HeadingBlockNode
  | QuoteBlockNode
  | CodeBlockNode
  | ListItemInlineNode
  | LinkInlineNode
  | TextInlineNode;
