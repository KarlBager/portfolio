import { _ as _export_sfc, b as useRoute, a as __nuxt_component_0 } from './server.mjs';
import { withAsyncContext, resolveComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { u as useAsyncStoryblok } from './useAsyncStoryblok-Drmi3ClY.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { slug } = useRoute().params;
    const story = ([__temp, __restore] = withAsyncContext(() => useAsyncStoryblok(
      slug && slug.length > 0 ? slug.join("/") : "",
      { version: "draft" }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "case-content-outer-container" }, _attrs))} data-v-4b29f73c><div class="case-content-container" data-v-4b29f73c>`);
      if (unref(story)) {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          blok: unref(story).content
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="backbutton-bottom drop-shadow-lg" data-v-4b29f73c>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="back-button-el" data-v-4b29f73c${_scopeId}>&lt; Tilbage</div>`);
          } else {
            return [
              createVNode("div", { class: "back-button-el" }, "< Tilbage")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4b29f73c"]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_-Y6aC73qg.mjs.map
