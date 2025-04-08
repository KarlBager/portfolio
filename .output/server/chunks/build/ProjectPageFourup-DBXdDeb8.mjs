import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "ProjectPageFourup",
  __ssrInlineRender: true,
  props: {
    imgPath1: String,
    imgPath2: String,
    imgPath3: String,
    imgPath4: String,
    cols: String,
    blok: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { gridTemplateColumns: __props.blok.Fractions },
        class: "project-page-twoup-container"
      }, _attrs))} data-v-23ee3710><div style="${ssrRenderStyle({ backgroundImage: "url(" + __props.blok.Image1.filename + ")" })}" class="twoup-image" data-v-23ee3710></div><div style="${ssrRenderStyle({ backgroundImage: "url(" + __props.blok.Image2.filename + ")" })}" class="twoup-image" data-v-23ee3710></div><div style="${ssrRenderStyle({ backgroundImage: "url(" + __props.blok.Image3.filename + ")" })}" class="twoup-image" data-v-23ee3710></div><div style="${ssrRenderStyle({ backgroundImage: "url(" + __props.blok.Image4.filename + ")" })}" class="twoup-image" data-v-23ee3710></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/ProjectPageFourup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectPageFourup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23ee3710"]]);

export { ProjectPageFourup as default };
//# sourceMappingURL=ProjectPageFourup-DBXdDeb8.mjs.map
