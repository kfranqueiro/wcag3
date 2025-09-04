import { rehypeHeadingIds, type RehypePlugin, type RemarkPlugin } from "@astrojs/markdown-remark";

import { isHowtoFile } from "./common";

const customDirectives: RemarkPlugin = () => (tree, file) => {
  if (!isHowtoFile(file)) return;

  if (!tree.children.length) {
    tree.children.push({
      type: "containerDirective",
      name: "ednote",
      children: [
        {
          type: "paragraph",
          children: [{ type: "text", value: "This content needs to be written." }],
        },
      ],
    });
  }
};

const headingIds: RehypePlugin = () => (tree, file) => {
  if (!isHowtoFile(file)) return;

  // @ts-ignore(2554) - rehypeHeadingIds' typings require 3rd param, but it's unused
  rehypeHeadingIds({ experimentalHeadingIdCompat: true })!(tree, file);
};

export const howtoRemarkPlugins = [customDirectives];
export const howtoRehypePlugins = [headingIds];
