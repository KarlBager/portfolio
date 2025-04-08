import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { ref, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "destr";
function useTools() {
  const toolbox = {
    ai: {
      name: "Adobe Illustrator",
      src: "https://media.karlbager.dk/tool-logos/ai-bw.png",
      hoverSrc: "https://media.karlbager.dk/tool-logos/ai.png"
    },
    ps: {
      name: "Adobe Photoshop",
      src: "https://media.karlbager.dk/tool-logos/ps-bw.png",
      hoverSrc: "https://media.karlbager.dk/tool-logos/ps.png"
    },
    ae: {
      name: "Adobe After Effects",
      src: "https://media.karlbager.dk/tool-logos/ae-bw.png",
      hoverSrc: "https://media.karlbager.dk/tool-logos/ae.png"
    },
    id: {
      name: "Adobe InDesign",
      src: "https://media.karlbager.dk/tool-logos/id-bw.png",
      hoverSrc: "https://media.karlbager.dk/tool-logos/id.png"
    },
    pr: {
      name: "Adobe Premiere Pro",
      src: "https://media.karlbager.dk/tool-logos/pr-bw.png",
      hoverSrc: "https://media.karlbager.dk/tool-logos/pr.png"
    },
    vs: {
      name: "VSCode",
      src: "https://media.karlbager.dk/tool-logos/vs-bw.png",
      hoverSrc: "https://media.karlbager.dk/tool-logos/vs.png"
    },
    c1: {
      name: "Capture One",
      src: "https://media.karlbager.dk/tool-logos/c1-bw.png",
      hoverSrc: "https://media.karlbager.dk/tool-logos/c1.png"
    },
    fig: {
      name: "Figma",
      src: "https://media.karlbager.dk/tool-logos/fig-bw.png",
      hoverSrc: "https://media.karlbager.dk/tool-logos/fig.png"
    },
    pro: {
      name: "Processing",
      src: "https://media.karlbager.dk/tool-logos/pro-bw.png",
      hoverSrc: "https://media.karlbager.dk/tool-logos/pro.png"
    },
    p5: {
      name: "p5.js",
      src: "https://media.karlbager.dk/tool-logos/p5-bw.png",
      hoverSrc: "https://media.karlbager.dk/tool-logos/p5.png"
    },
    three: {
      name: "Three.js",
      src: "https://media.karlbager.dk/tool-logos/three.png",
      hoverSrc: "https://media.karlbager.dk/tool-logos/three.png"
    },
    nuxt: {
      name: "Nuxt.js",
      src: "https://media.karlbager.dk/tool-logos/nuxt-bw.png",
      hoverSrc: "https://media.karlbager.dk/tool-logos/nuxt.png"
    },
    npm: {
      name: "Node Package Manager",
      src: "https://media.karlbager.dk/tool-logos/npm-bw.png",
      hoverSrc: "https://media.karlbager.dk/tool-logos/npm.png"
    },
    blender: {
      name: "Blender",
      src: "https://media.karlbager.dk/tool-logos/blender-bw.png",
      hoverSrc: "https://media.karlbager.dk/tool-logos/blender.png"
    },
    sql: {
      name: "SQL",
      src: "https://media.karlbager.dk/tool-logos/sql-bw.png",
      hoverSrc: "https://media.karlbager.dk/tool-logos/sql.png"
    },
    php: {
      name: "PHP",
      src: "https://media.karlbager.dk/tool-logos/php-bw.png",
      hoverSrc: "https://media.karlbager.dk/tool-logos/php.png"
    }
  };
  return { toolbox };
}
const _sfc_main = {
  __name: "ProjectPageHeaderBlock",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    const { toolbox } = useTools();
    const props = __props;
    let tools = [];
    if (props.blok.tools) {
      tools = props.blok.tools.split(", ");
    }
    const hoveredTool = ref(null);
    const currentImage = (toolKey) => {
      var _a, _b, _c;
      if (hoveredTool.value === toolKey) {
        return ((_a = toolbox[toolKey]) == null ? void 0 : _a.hoverSrc) || ((_b = toolbox[toolKey]) == null ? void 0 : _b.src);
      }
      return (_c = toolbox[toolKey]) == null ? void 0 : _c.src;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div class="highlight-carousel case-card case-card-container-wide project-page-header" data-v-b73da263><div style="${ssrRenderStyle({ backgroundImage: "url(" + __props.blok.headerImagePath + ")" })}" class="case-card case-card-wide" data-v-b73da263><div class="back-button drop-shadow-lg" data-v-b73da263>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="back-button-el" data-v-b73da263${_scopeId}>&lt; Tilbage</div>`);
          } else {
            return [
              createVNode("div", { class: "back-button-el" }, "< Tilbage")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="project-page-title-container drop-shadow-lg" data-v-b73da263><h2 data-v-b73da263>${ssrInterpolate(__props.blok.title)}</h2><h4 data-v-b73da263>${ssrInterpolate(__props.blok.subtitle)}, ${ssrInterpolate(__props.blok.year)}</h4><div class="toolbox-container" data-v-b73da263><!--[-->`);
      ssrRenderList(unref(tools), (toolKey) => {
        var _a, _b;
        _push(`<div class="tool-container" data-v-b73da263><img loading="lazy" class="tool"${ssrRenderAttr("src", currentImage(toolKey))}${ssrRenderAttr("alt", (_a = unref(toolbox)[toolKey]) == null ? void 0 : _a.name)} data-v-b73da263>`);
        if (unref(hoveredTool) == toolKey) {
          _push(`<div class="tool-hoverbox" data-v-b73da263><p data-v-b73da263>${ssrInterpolate((_b = unref(toolbox)[toolKey]) == null ? void 0 : _b.name)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/ProjectPageHeaderBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectPageHeaderBlock = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b73da263"]]);
export {
  ProjectPageHeaderBlock as default
};
//# sourceMappingURL=ProjectPageHeaderBlock-BdiFqQpP.js.map
