import { u as useAsyncStoryblok, a as useState } from './useAsyncStoryblok-Drmi3ClY.mjs';
import { _ as _export_sfc, P as Pe, a as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, withAsyncContext, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
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

const categories = [
  {
    categoryId: 1,
    categoryName: "Grafisk / Konceptuelt"
  },
  {
    categoryId: 2,
    categoryName: "Fotografi & Retouch"
  },
  {
    categoryId: 3,
    categoryName: "Videoproduktion"
  },
  {
    categoryId: 4,
    categoryName: "UI / UX"
  }
];
const _sfc_main$4 = {
  __name: "ProjectGridCard",
  __ssrInlineRender: true,
  props: { projectId: String },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    let stories = useState(() => ({}), "$eUADzGDXLt");
    const storyblokApi = Pe();
    try {
      const { data } = ([__temp, __restore] = withAsyncContext(() => storyblokApi.get("cdn/stories", {
        version: "draft",
        per_page: 100
        // Set to a value that fits your needs, maximum is 100
      })), __temp = await __temp, __restore(), __temp);
      stories = data.stories;
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
    const projectIdToFilter = props.projectId;
    const filteredProjects = stories.filter((story) => {
      return story.content.id == projectIdToFilter;
    });
    function getCategory(categoryId, categories2) {
      return categories2.filter((category) => category.categoryId === categoryId);
    }
    getCategory(props.categoryId, categories);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="case-card case-card-container drop-shadow-lg" data-v-22a4a79a><a${ssrRenderAttr("href", unref(filteredProjects)[0].slug)} data-v-22a4a79a><div class="case-card" data-v-22a4a79a>`);
      if (unref(filteredProjects)[0].content.ProjectPageHeaderBlock[0].headerVideo) {
        _push(`<div class="case-card-video-overlay" data-v-22a4a79a><div class="video-container" data-v-22a4a79a><video playsinline autoplay muted loop data-v-22a4a79a><source${ssrRenderAttr("src", unref(filteredProjects)[0].content.ProjectPageHeaderBlock[0].headerVideoPath)} type="video/mp4" data-v-22a4a79a></video></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="image-wrapper" data-v-22a4a79a><img loading="lazy" class="grid-cell-image"${ssrRenderAttr("src", unref(filteredProjects)[0].content.ProjectPageHeaderBlock[0].headerImagePath)} data-v-22a4a79a></div><div class="case-card-hover-overlay" data-v-22a4a79a></div></div></a></div><div class="case-card-label-container text-center" data-v-22a4a79a><h2 data-v-22a4a79a>${ssrInterpolate(unref(filteredProjects)[0].content.ProjectPageHeaderBlock[0].title)}</h2><h4 data-v-22a4a79a>${ssrInterpolate(unref(filteredProjects)[0].content.ProjectPageHeaderBlock[0].subtitle)}, ${ssrInterpolate(unref(filteredProjects)[0].content.ProjectPageHeaderBlock[0].year)}</h4></div><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectGridCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-22a4a79a"]]);
const _sfc_main$3 = {
  __name: "ProjectGrid",
  __ssrInlineRender: true,
  props: {
    categoryId: Number
  },
  async setup(__props) {
    let __temp, __restore;
    let stories = useState(() => ({}), "$s6d0cFPnwA");
    const storyblokApi = Pe();
    try {
      const { data } = ([__temp, __restore] = withAsyncContext(() => storyblokApi.get("cdn/stories", {
        version: "draft",
        per_page: 100
        // Set to a value that fits your needs, maximum is 100
      })), __temp = await __temp, __restore(), __temp);
      stories = data.stories;
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
    const props = __props;
    let categoryIdToFilter;
    let filteredProjects;
    if (props.categoryId != 4) {
      let getCategory = function(categoryId, categories2) {
        return categories2.filter((category) => category.categoryId === categoryId);
      };
      categoryIdToFilter = props.categoryId;
      filteredProjects = stories.filter((story) => {
        return story.content.category == categoryIdToFilter;
      });
      getCategory(props.categoryId, categories);
    } else {
      filteredProjects = stories;
    }
    const customOrder = [6, 3, 9, 2, 5, 0, 8, 4, 7, 1];
    const orderedItems = customOrder.map((i) => filteredProjects[i] || null);
    const remainingItems = filteredProjects.filter((item) => !orderedItems.includes(item));
    filteredProjects = [...orderedItems.filter(Boolean), ...remainingItems];
    console.log(filteredProjects);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectGridCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid-container" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(filteredProjects), (item, index2) => {
        _push(`<div class="grid-cell">`);
        _push(ssrRenderComponent(_component_ProjectGridCard, {
          projectId: unref(filteredProjects)[index2].content.id
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectGrid.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ProjectHighlightCarouselCard",
  __ssrInlineRender: true,
  props: {
    projectId: String
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    let stories = useState(() => ({}), "$kVOBJvfjUs");
    const storyblokApi = Pe();
    try {
      const { data } = ([__temp, __restore] = withAsyncContext(() => storyblokApi.get("cdn/stories", {
        version: "draft",
        per_page: 100
        // Set to a value that fits your needs, maximum is 100
      })), __temp = await __temp, __restore(), __temp);
      stories = data.stories;
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
    const projectIdToFilter = props.projectId;
    const filteredProjects = stories.filter((story) => {
      return story.content.id == projectIdToFilter;
    });
    function getCategory(categoryId, categories2) {
      return categories2.filter((category) => category.categoryId === categoryId);
    }
    getCategory(props.categoryId, categories);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "case-card case-card-container-wide" }, _attrs))}><a${ssrRenderAttr("href", unref(filteredProjects)[0].slug)}><div style="${ssrRenderStyle({ backgroundImage: "url(" + unref(filteredProjects)[0].content.ProjectPageHeaderBlock[0].headerImagePath + ")" })}" class="case-card case-card-wide">`);
      if (unref(filteredProjects)[0].content.ProjectPageHeaderBlock[0].headerVideo) {
        _push(`<div class="pointer-events-none case-card-wide-video-overlay"><div class="video-container"><video class="headerVideo" preload="none" playsinline autoplay muted loop><source${ssrRenderAttr("src", unref(filteredProjects)[0].content.ProjectPageHeaderBlock[0].headerVideoPath)} type="video/mp4"></video></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="case-card-wide-hover-overlay"></div></div></a></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectHighlightCarouselCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ProjectHighlightCarousel",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let stories = useState(() => ({}), "$kEpWoXWioO");
    const storyblokApi = Pe();
    try {
      const { data } = ([__temp, __restore] = withAsyncContext(() => storyblokApi.get("cdn/stories", {
        version: "draft",
        per_page: 100
        // Set to a value that fits your needs, maximum is 100
      })), __temp = await __temp, __restore(), __temp);
      stories = data.stories;
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
    const filteredProjects = stories.filter((story) => {
      return story.content.highlighted == true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="carousel highlight-carousel drop-shadow-lg" data-flickity="{&quot;autoPlay&quot;: 5000, &quot;wrapAround&quot;: true, &quot;arrowShape&quot;: &quot;m72.58,60.84l18.84,6.41v20.25S0,52.9,0,52.9v-17.65S91.42.85,91.42.85v20.25s-18.84,6.35-18.84,6.35l-15.26,5.14-34.22,11.49,34.22,11.62,15.26,5.14Z&quot;}"><div class="carousel-cell"><div class="case-card case-card-container-wide"><div class="bio-case-card case-card"><div class="bio-card-typo-container">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        external: "",
        to: "AboutView"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1${_scopeId}>Visuel designstuderende med kode som materiale</h1><h4${_scopeId}>S\xF8ger praktik i perioden 20. oktober 2025 \u2013 6. marts 2026</h4>`);
          } else {
            return [
              createVNode("h1", null, "Visuel designstuderende med kode som materiale"),
              createVNode("h4", null, "S\xF8ger praktik i perioden 20. oktober 2025 \u2013 6. marts 2026")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><!--[-->`);
      ssrRenderList(unref(filteredProjects), (item, index2) => {
        _push(`<div class="carousel-cell">`);
        _push(ssrRenderComponent(_sfc_main$2, {
          projectId: unref(filteredProjects)[index2].content.id
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectHighlightCarousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __default__ = {
  updated() {
    this.$nextTick(() => {
      this.runScript();
    });
  },
  methods: {
    runScript() {
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    [__temp, __restore] = withAsyncContext(() => useAsyncStoryblok("home", { version: "draft" })), __temp = await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectGrid = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "homepage-container" }, _attrs))} data-v-c66b4df5>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_component_ProjectGrid, { categoryId: 1 }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c66b4df5"]]);

export { index as default };
//# sourceMappingURL=index-Dagkb3ov.mjs.map
