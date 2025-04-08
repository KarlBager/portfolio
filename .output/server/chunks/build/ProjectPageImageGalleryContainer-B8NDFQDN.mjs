import { ref, resolveComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "ProjectPageImageGalleryContainer",
  __ssrInlineRender: true,
  props: {
    imgPath1: String,
    imgPath2: String,
    blok: Object
  },
  setup(__props) {
    const images = ref([]);
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const showImg = (imageUrl) => {
      indexRef.value = images.value.indexOf(imageUrl);
      visibleRef.value = true;
    };
    const onHide = () => visibleRef.value = false;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _component_VueEasyLightbox = resolveComponent("VueEasyLightbox");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-page-element-container" }, _attrs))} data-v-e7eb4494><!--[-->`);
      ssrRenderList(__props.blok.Imageblock, (blok) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          onImageSelected: showImg,
          key: blok._uid,
          blok
        }, null, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_VueEasyLightbox, {
        visible: unref(visibleRef),
        imgs: unref(images),
        index: unref(indexRef),
        onHide
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/ProjectPageImageGalleryContainer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectPageImageGalleryContainer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e7eb4494"]]);

export { ProjectPageImageGalleryContainer as default };
//# sourceMappingURL=ProjectPageImageGalleryContainer-B8NDFQDN.mjs.map
