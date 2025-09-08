// Common utilities used by other modules in this folder,
// and plugins that apply across all content

import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { visit } from "unist-util-visit";
import type { VFile } from "vfile";

import { informativeSlug } from "../constants";

const groupsPath = "guidelines/groups";
export const isGuidelineFile = (file: VFile) =>
  file.dirname?.startsWith(`${file.cwd}/${groupsPath}`);
export const isTermFile = (file: VFile) => file.dirname?.startsWith(`${file.cwd}/guidelines/terms`);

export const isHowtoFile = (file: VFile) =>
  file.dirname?.startsWith(`${file.cwd}/${informativeSlug}`);

/** Determines type of normative content file based on directory depth */
export function getGuidelineFileType(file: VFile) {
  if (!isGuidelineFile(file)) return null;
  const remainingPath = file.dirname!.replace(`${file.cwd}/${groupsPath}/`, "");
  const segments = remainingPath?.split("/");
  if (segments.length === 0) return "group";
  if (segments.length === 1) return "guideline";
  if (segments.length === 2) return "requirement";
  return null;
}

/** Determines type of informative content file based on directory depth */
export function getHowtoFileType(file: VFile) {
  if (!isHowtoFile(file)) return null;
  const remainingPath = file.dirname!.replace(`${file.cwd}/${informativeSlug}/`, "");
  const segments = remainingPath?.split("/");
  if (segments.length === 0) return "guideline";
  if (segments.length === 1) return "requirement";
  if (segments.length === 2) return "method";
  return null;
}

export const getFrontmatter = (file: VFile) => file.data.astro!.frontmatter!;

const customDirectives: RemarkPlugin = () => (tree) => {
  visit(tree, (node) => {
    if (node.type === "containerDirective") {
      if (node.name === "ednote") {
        const data = node.data || (node.data = {});
        data.hName = "div";
        data.hProperties = { class: "ednote" };
      } else if (node.name === "example") {
        const data = node.data || (node.data = {});
        data.hName = "aside";
        data.hProperties = { class: "example" };
      } else if (node.name === "note") {
        const data = node.data || (node.data = {});
        data.hName = "div";
        data.hProperties = { class: "note" };
      }
    } else if (node.type === "textDirective") {
      // Translate :term[...] to <a>...</a>;
      // this is directly handled by ReSpec for normative documents,
      // and will be handled by middleware for informative documents.
      if (node.name === "term") {
        const data = node.data || (node.data = {});
        data.hName = "a";
      }
    }
  });
};

export const commonRemarkPlugins = [customDirectives];
export const commonRehypePlugins = [];
