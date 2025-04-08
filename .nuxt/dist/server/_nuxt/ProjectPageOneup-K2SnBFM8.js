import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main = {
  __name: "ProjectPageOneup",
  __ssrInlineRender: true,
  props: {
    imgPath: String,
    blok: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueEasyLightbox = resolveComponent("VueEasyLightbox");
      _push(`<!--[--><div class="twoup-image" data-v-01453ac2><img class="grid-image" loading="lazy"${ssrRenderAttr("src", __props.blok.Image1.filename)} data-v-01453ac2></div>`);
      _push(ssrRenderComponent(_component_VueEasyLightbox, {
        visible: _ctx.visibleRef,
        imgs: __props.blok.Image1.filename,
        index: _ctx.indexRef,
        onHide: _ctx.onHide
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/ProjectPageOneup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectPageOneup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-01453ac2"]]);
export {
  ProjectPageOneup as default
};
//# sourceMappingURL=ProjectPageOneup-K2SnBFM8.js.map
