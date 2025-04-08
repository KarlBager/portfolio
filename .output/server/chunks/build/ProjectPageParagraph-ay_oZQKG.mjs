import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
  __name: "ProjectPageParagraph",
  __ssrInlineRender: true,
  props: {
    blok: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-page-element-container" }, _attrs))} data-v-c24bb176><div class="project-page-paragraph-container" data-v-c24bb176><p class="project-page-paragraph" data-v-c24bb176>${(_a = __props.blok.Paragraph) != null ? _a : ""}</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/ProjectPageParagraph.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectPageParagraph = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c24bb176"]]);

export { ProjectPageParagraph as default };
//# sourceMappingURL=ProjectPageParagraph-ay_oZQKG.mjs.map
