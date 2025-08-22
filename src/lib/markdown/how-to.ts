import type { RemarkPlugin } from "@astrojs/markdown-remark";

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

export const howtoRemarkPlugins = [customDirectives];
export const howtoRehypePlugins = [];
