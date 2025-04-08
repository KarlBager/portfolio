import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
const _sfc_main = {
  __name: "ProjectPage",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_StoryblokComponent, {
        blok: __props.blok.ProjectPageHeaderBlock[0]
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(__props.blok.ProjectContent, (blok) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          key: blok._uid,
          blok
        }, null, _parent));
      });
      _push(`<!--]--><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/ProjectPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ProjectPage-Da4ZIEFY.js.map
