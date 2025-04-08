import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
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
  __name: "presentation",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "homepage-container" }, _attrs))} data-v-df35c360><img class="pres-slides" src="https://www.media.karlbager.dk/media/pres/pres_01.jpg" data-v-df35c360><img class="pres-slides" src="https://www.media.karlbager.dk/media/pres/pres_02.jpg" data-v-df35c360><img class="pres-slides" src="https://www.media.karlbager.dk//media/pres/pres_03.jpg" data-v-df35c360><img class="pres-slides" src="https://www.media.karlbager.dk/media/pres/pres_04.jpg" data-v-df35c360><img class="pres-slides" src="https://www.media.karlbager.dk/media/pres/pres_05.png" data-v-df35c360><img class="pres-slides" src="https://www.media.karlbager.dk/media/pres/pres_06.png" data-v-df35c360><img class="pres-slides" src="https://www.media.karlbager.dk/media/pres/pres_07.png" data-v-df35c360><img class="pres-slides" src="https://www.media.karlbager.dk/media/pres/pres_08.png" data-v-df35c360><img class="pres-slides" src="https://www.media.karlbager.dk/media/pres/pres_09.png" data-v-df35c360></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/presentation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const presentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-df35c360"]]);
export {
  presentation as default
};
//# sourceMappingURL=presentation-GherqCwt.js.map
