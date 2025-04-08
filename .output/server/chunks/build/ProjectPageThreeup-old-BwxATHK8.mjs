import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "ProjectPageThreeup-old",
  __ssrInlineRender: true,
  props: {
    imgPath1: String,
    imgPath2: String,
    imgPath3: String,
    cols: String,
    blok: Object
  },
  setup(__props, { emit: __emit }) {
    const props = __props;
    const imageId1 = computed(() => props.blok.Image1.filename.split("/")[7].split(".")[0]);
    const imageId2 = computed(() => props.blok.Image2.filename.split("/")[7].split(".")[0]);
    const imageId3 = computed(() => props.blok.Image3.filename.split("/")[7].split(".")[0]);
    const imageClass1 = computed(() => ({
      "twoup-image": true,
      "contain-image": props.blok.contain1
    }));
    const imageClass2 = computed(() => ({
      "twoup-image": true,
      "contain-image": props.blok.contain2
    }));
    const imageClass3 = computed(() => ({
      "twoup-image": true,
      "contain-image": props.blok.contain3
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { gridTemplateColumns: __props.blok.Fractions },
        class: "project-page-twoup-container"
      }, _attrs))} data-v-86dfedba><div${ssrRenderAttr("id", { imageId1: unref(imageId1) })} class="${ssrRenderClass(unref(imageClass1))}" style="${ssrRenderStyle({ backgroundImage: "url(" + __props.blok.Image1.filename + ")" })}" data-v-86dfedba></div><div${ssrRenderAttr("id", { imageId2: unref(imageId2) })} class="${ssrRenderClass(unref(imageClass2))}" style="${ssrRenderStyle({ backgroundImage: "url(" + __props.blok.Image2.filename + ")" })}" data-v-86dfedba></div><div${ssrRenderAttr("id", { imageId3: unref(imageId3) })} class="${ssrRenderClass(unref(imageClass3))}" style="${ssrRenderStyle({ backgroundImage: "url(" + __props.blok.Image3.filename + ")" })}" data-v-86dfedba></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/ProjectPageThreeup-old.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectPageThreeupOld = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-86dfedba"]]);

export { ProjectPageThreeupOld as default };
//# sourceMappingURL=ProjectPageThreeup-old-BwxATHK8.mjs.map
