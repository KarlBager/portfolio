import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
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
  __name: "ProjectPageTwoup",
  __ssrInlineRender: true,
  props: {
    imgPath1: String,
    imgPath2: String,
    cols: String,
    blok: Object
  },
  setup(__props, { emit: __emit }) {
    const props = __props;
    const imageClass1 = computed(() => ({
      "twoup-image": true,
      "contain-image": props.blok.contain1
    }));
    const imageClass2 = computed(() => ({
      "twoup-image": true,
      "contain-image": props.blok.contain2
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { gridTemplateColumns: __props.blok.Fractions },
        class: "project-page-twoup-container"
      }, _attrs))} data-v-e0844d7c><div class="${ssrRenderClass(unref(imageClass1))}" data-v-e0844d7c><img class="grid-image" loading="lazy"${ssrRenderAttr("src", __props.blok.Image1.filename)} data-v-e0844d7c></div><div class="${ssrRenderClass(unref(imageClass2))}" data-v-e0844d7c><img class="grid-image" loading="lazy"${ssrRenderAttr("src", __props.blok.Image2.filename)} data-v-e0844d7c></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/ProjectPageTwoup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectPageTwoup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e0844d7c"]]);
export {
  ProjectPageTwoup as default
};
//# sourceMappingURL=ProjectPageTwoup-O-m21xAd.js.map
