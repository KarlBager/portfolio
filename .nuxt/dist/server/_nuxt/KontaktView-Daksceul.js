import { mergeProps, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
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
  __name: "KontaktView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "contact-cell",
        class: "carousel-cell"
      }, _attrs))} data-v-cd0d205b><div class="case-card case-card-container-wide" data-v-cd0d205b><div class="contact-card case-card" data-v-cd0d205b><img id="lille-karl" src="https://media.karlbager.dk/media/karl-portrait.jpg" data-v-cd0d205b><div class="contact-card-typo-container" data-v-cd0d205b><h2 data-v-cd0d205b>Her kan jeg kontaktes:</h2><p data-v-cd0d205b><a href="mailto:kb@karlbager.dk" data-v-cd0d205b>kb@karlbager.dk</a></p><div class="flex social-link-container" data-v-cd0d205b><div data-v-cd0d205b><a href="https://www.linkedin.com/in/karl-emil-bager-jakobsen-87485a1a1/" data-v-cd0d205b><div class="social-link linkedin-link" data-v-cd0d205b></div></a></div><div data-v-cd0d205b><a href="https://www.instagram.com/karlbager" data-v-cd0d205b><div class="social-link instagram-link" data-v-cd0d205b></div></a></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/KontaktView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const KontaktView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cd0d205b"]]);
export {
  KontaktView as default
};
//# sourceMappingURL=KontaktView-Daksceul.js.map
