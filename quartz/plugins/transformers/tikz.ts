import { PluggableList } from "unified"
import { Root, Code } from "mdast"
import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"

export const TikzJax: QuartzTransformerPlugin = () => {
  return {
    name: "TikzJax",
    markdownPlugins() {
      return [() => {
        return (tree: Root, _file) => {
          visit(tree, "code", (node: Code) => {
            if (node.lang === "tikz") {
              node.type = "html"
              node.value = `<div style='display: flex; justify-content: center;'><script type='text/tikz'>${node.value}</script></div>`
            }
          })
        }
      }]
    },
    externalResources() {
      return {
        css: ["https://tikzjax.com/v1/fonts.css"],
        js: [{
          src: "https://tikzjax.com/v1/tikzjax.js",
          loadTime: "afterDOMReady",
          contentType: "external",
        }],
      }
    },
  }
}
