import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
/* empty css                        */
import { _ as _export_sfc } from './_plugin-vue_export-helper_ceIx8-CJ.mjs';

const _sfc_main = {
  __name: 'Modal',
  props: {
  show: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Modal'
  },
  maxWidth: {
    type: String,
    default: 'max-w-lg'
  }
},
  emits: ['close'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();


const props = __props;

const emits = __emit;

const __returned__ = { props, emits };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.show) {
    _push(`<div${
      ssrRenderAttrs(mergeProps({ class: "modal-mask fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" }, _attrs))
    }><div class="${
      ssrRenderClass(['modal-container bg-white rounded-lg shadow-xl w-full mx-4 p-6 relative max-h-[90vh] overflow-y-auto', $props.maxWidth])
    }"><button class="modal-close-button absolute top-3 right-3 text-gray-500 hover:text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button><div class="modal-header mb-4">`);
    ssrRenderSlot(_ctx.$slots, "header", {}, () => {
      _push(`<h3 class="text-xl font-semibold text-gray-800">${ssrInterpolate($props.title)}</h3>`);
    }, _push, _parent);
    _push(`</div><div class="modal-body mb-4">`);
    ssrRenderSlot(_ctx.$slots, "body", {}, null, _push, _parent);
    _push(`</div><div class="modal-footer text-right">`);
    ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
      _push(`<button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"> Fermer </button>`);
    }, _push, _parent);
    _push(`</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/common/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const Modal = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

export { Modal as M };
