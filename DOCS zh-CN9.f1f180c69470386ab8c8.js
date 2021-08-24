(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[361],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/card.md?vue&type=template&id=30887aa2

var cardvue_type_template_id_30887aa2_hoisted_1 = {
  class: "content element-doc"
};

var cardvue_type_template_id_30887aa2_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Card 卡片 ");

var cardvue_type_template_id_30887aa2_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "将信息聚合在卡片容器中展示。", -1);

var cardvue_type_template_id_30887aa2_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("基础用法 ");

var cardvue_type_template_id_30887aa2_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "包含标题，内容和操作。", -1);

var cardvue_type_template_id_30887aa2_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Card 组件包括"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "header"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("部分，"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "header"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("部分需要有显式具名 slot 分发，同时也是可选的。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-card class=\"box-card\">\n  <template #header>\n    <div class=\"card-header\">\n      <span>卡片名称</span>\n      <el-button class=\"button\" type=\"text\">操作按钮</el-button>\n    </div>\n  </template>\n  <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n    {{'列表内容 ' + o }}\n  </div>\n</el-card>\n\n<style>\n  .card-header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n  }\n    \n  .text {\n    font-size: 14px;\n  }\n\n  .item {\n    margin-bottom: 18px;\n  }\n\n  .box-card {\n    width: 480px;\n  }\n</style>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("简单卡片 ");

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "卡片可以只有内容区域。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-card class=\"box-card\">\n  <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n    {{'列表内容 ' + o }}\n  </div>\n</el-card>\n\n<style>\n  .text {\n    font-size: 14px;\n  }\n\n  .item {\n    padding: 18px 0;\n  }\n\n  .box-card {\n    width: 480px;\n  }\n</style>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("带图片 ");

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "可配置定义更丰富的内容展示。", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("配置"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "body-style"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性来自定义"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("部分的"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "style"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("，我们还使用了布局组件。")])], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-row>\n  <el-col :span=\"8\" v-for=\"(o, index) in 2\" :key=\"o\" :offset=\"index > 0 ? 2 : 0\">\n    <el-card :body-style=\"{ padding: '0px' }\">\n      <img src=\"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png\" class=\"image\">\n      <div style=\"padding: 14px;\">\n        <span>好吃的汉堡</span>\n        <div class=\"bottom\">\n          <time class=\"time\">{{ currentDate }}</time>\n          <el-button type=\"text\" class=\"button\">操作按钮</el-button>\n        </div>\n      </div>\n    </el-card>\n  </el-col>\n</el-row>\n\n<style>\n  .time {\n    font-size: 13px;\n    color: #999;\n  }\n  \n  .bottom {\n    margin-top: 13px;\n    line-height: 12px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .button {\n    padding: 0;\n    min-height: auto;\n  }\n\n  .image {\n    width: 100%;\n    display: block;\n  }\n</style>\n\n<script>\nexport default {\n  data() {\n    return {\n      currentDate: new Date()\n    };\n  }\n}\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const currentDate = ref(new Date());\n\n      return {\n        currentDate,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("卡片阴影 ");

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "可对阴影的显示进行配置。", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("通过"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "shadow"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性设置卡片阴影出现的时机："), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "always"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("或"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "never"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("。")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-row :gutter=\"12\">\n  <el-col :span=\"8\">\n    <el-card shadow=\"always\">\n      总是显示\n    </el-card>\n  </el-col>\n  <el-col :span=\"8\">\n    <el-card shadow=\"hover\">\n      鼠标悬浮时显示\n    </el-card>\n  </el-col>\n  <el-col :span=\"8\">\n    <el-card shadow=\"never\">\n      从不显示\n    </el-card>\n  </el-col>\n</el-row>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Attributes ");

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>header</td><td>设置 header，也可以通过 <code>slot#header</code> 传入 DOM</td><td>string</td><td>—</td><td>—</td></tr><tr><td>body-style</td><td>设置 body 的样式</td><td>object</td><td>—</td><td>{ padding: &#39;20px&#39; }</td></tr><tr><td>shadow</td><td>设置阴影显示时机</td><td>string</td><td>always / hover / never</td><td>always</td></tr></tbody></table>", 1);

function cardvue_type_template_id_30887aa2_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", cardvue_type_template_id_30887aa2_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "card-qia-pian",
    content: "Card 卡片",
    href: "#card-qia-pian",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [cardvue_type_template_id_30887aa2_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#card-qia-pian"
      })];
    }),
    _: 1
  }), cardvue_type_template_id_30887aa2_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [cardvue_type_template_id_30887aa2_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ji-chu-yong-fa"
      })];
    }),
    _: 1
  }), cardvue_type_template_id_30887aa2_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [cardvue_type_template_id_30887aa2_hoisted_6];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "jian-dan-qia-pian",
    content: "简单卡片",
    href: "#jian-dan-qia-pian",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#jian-dan-qia-pian"
      })];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "dai-tu-pian",
    content: "带图片",
    href: "#dai-tu-pian",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#dai-tu-pian"
      })];
    }),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "qia-pian-yin-ying",
    content: "卡片阴影",
    href: "#qia-pian-yin-ying",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#qia-pian-yin-ying"
      })];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#attributes"
      })];
    }),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/card.md?vue&type=template&id=30887aa2

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/card.md?vue&type=script&lang=ts


/* harmony default export */ var cardvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */];
      var _hoisted_1 = {
        class: "card-header"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "卡片名称", -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("操作按钮");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_card = _resolveComponent("el-card");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_card, {
          class: "box-card"
        }, {
          header: _withCtx(function () {
            return [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_button, {
              class: "button",
              type: "text"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (o) {
              return _createVNode("div", {
                key: o,
                class: "text item"
              }, _toDisplayString('列表内容 ' + o), 1);
            }), 64))];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_card = _resolveComponent("el-card");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_card, {
          class: "box-card"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (o) {
              return _createVNode("div", {
                key: o,
                class: "text item"
              }, _toDisplayString('列表内容 ' + o), 1);
            }), 64))];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("img", {
        src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        class: "image"
      }, null, -1);

      var _hoisted_2 = {
        style: {
          "padding": "14px"
        }
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", null, "好吃的汉堡", -1);

      var _hoisted_4 = {
        class: "bottom"
      };
      var _hoisted_5 = {
        class: "time"
      };

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("操作按钮");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_card = _resolveComponent("el-card");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, null, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(2, function (o, index) {
              return _createVNode(_component_el_col, {
                span: 8,
                key: o,
                offset: index > 0 ? 2 : 0
              }, {
                default: _withCtx(function () {
                  return [_createVNode(_component_el_card, {
                    "body-style": {
                      padding: '0px'
                    }
                  }, {
                    default: _withCtx(function () {
                      return [_hoisted_1, _createVNode("div", _hoisted_2, [_hoisted_3, _createVNode("div", _hoisted_4, [_createVNode("time", _hoisted_5, _toDisplayString(_ctx.currentDate), 1), _createVNode(_component_el_button, {
                        type: "text",
                        class: "button"
                      }, {
                        default: _withCtx(function () {
                          return [_hoisted_6];
                        }),
                        _: 1
                      })])])];
                    }),
                    _: 1
                  })];
                }),
                _: 2
              }, 1032, ["offset"]);
            }), 64))];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            currentDate: new Date()
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 总是显示 ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" 鼠标悬浮时显示 ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode(" 从不显示 ");

      function render(_ctx, _cache) {
        var _component_el_card = _resolveComponent("el-card");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          gutter: 12
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_card, {
                  shadow: "always"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_card, {
                  shadow: "hover"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_card, {
                  shadow: "never"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/card.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/card.md



cardvue_type_script_lang_ts.render = cardvue_type_template_id_30887aa2_render

/* harmony default export */ var card = __webpack_exports__["default"] = (cardvue_type_script_lang_ts);

/***/ })

}]);