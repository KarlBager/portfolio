import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "ProjectPageVideo",
  __ssrInlineRender: true,
  props: {
    blok: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-page-element-container" }, _attrs))} data-v-3bf2dc7f><div class="project-page-video-container" data-v-3bf2dc7f><video controls${ssrIncludeBooleanAttr(__props.blok.autoplay) ? " autoplay" : ""} loop data-v-3bf2dc7f><source${ssrRenderAttr("src", __props.blok.videoPath)} type="video/mp4" data-v-3bf2dc7f></video></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/ProjectPageVideo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectPageVideo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3bf2dc7f"]]);

export { ProjectPageVideo as default };
//# sourceMappingURL=ProjectPageVideo-CMheizIr.mjs.map
