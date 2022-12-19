/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5954:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(7055);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (pageClass, starBorder) {pug_mixins["field"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"field\"\u003E";
if ((opts.label)) {
pug_html = pug_html + "\u003Clabel class=\"field__label\"\u003E\u003Cspan class=\"field__label-text\"\u003E" + (pug.escape(null == (pug_interp = (opts.label)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cinput" + (" class=\"field__input js-field__input\""+pug.attr("type", (opts.type), true, true)+pug.attr("name", opts.name, true, true)+pug.attr("placeholder", (opts.placeholder), true, true)+pug.attr("tabindex", (opts.tabindex), true, true)+pug.attr("required", (opts.required), true, true)+" autocomplete=\"off\"") + "\u003E\u003C\u002Flabel\u003E";
}
else {
pug_html = pug_html + "\u003Cinput" + (" class=\"field__input js-field__input\""+pug.attr("type", (opts.type), true, true)+pug.attr("name", opts.name, true, true)+pug.attr("placeholder", (opts.placeholder), true, true)+pug.attr("tabindex", (opts.tabindex), true, true)+pug.attr("required", (opts.required), true, true)+" autocomplete=\"off\"") + "\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["dropdown"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["dropdown","field",(opts.js ? 'js-dropdown' : '')], [false,false,true]), false, true)) + "\u003E";
pug_mixins["content"].call({
block: function(){
block && block();
}
}, opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["content"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var attributes = {
  'data-id': (opts.dropdownId),
  name: (opts.name),
  readonly: (opts.readonly),
  type: (opts.type),
  placeholder: (opts.placeholder),
  tabindex: (opts.tabindex),
  required: (opts.required),
}

if ((opts.label)) {
pug_html = pug_html + "\u003Cdiv class=\"dropdown__label field__label\"\u003E\u003Ch3 class=\"dropdown__label-text field__label-text\"\u003E" + (pug.escape(null == (pug_interp = (opts.label)) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cdiv class=\"dropdown__field\"\u003E\u003Cinput" + (pug.attrs(pug.merge([{"class": pug.classes(["dropdown__input","field__input",(opts.js ? 'js-dropdown__button' : '')], [false,false,true])},attributes]), true)) + "\u003E\u003Cdiv class=\"dropdown__arrow\"\u003E";
pug_mixins["svg"](opts.arrowSvg);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\u003Cdiv class=\"dropdown__field\"\u003E\u003Cinput" + (pug.attrs(pug.merge([{"class": pug.classes(["dropdown__input","field__input",(opts.js ? 'js-dropdown__button' : '')], [false,false,true])},attributes]), true)) + "\u003E\u003Cdiv class=\"dropdown__arrow\"\u003E";
pug_mixins["svg"](opts.arrowSvg);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
if ((opts.js)) {
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["dropdown__menu",(opts.js ? 'js-dropdown__menu' : '')], [false,true]), false, true)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
};
pug_mixins["masked-text-field"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"masked-text-field js-masked-text-field\"\u003E";
pug_mixins["field"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["item-quantity-dropdown"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["dropdown"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv" + (" class=\"iq-dropdown\""+pug.attr("data-id", (opts.id), true, true)) + "\u003E\u003Cdiv class=\"iq-dropdown__items\"\u003E";
// iterate opts.items
;(function(){
  var $$obj = opts.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var item = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv" + (" class=\"iq-dropdown-item\""+pug.attr("data-id", (item.id), true, true)) + "\u003E\u003Cp class=\"iq-dropdown-item__text\"\u003E" + (pug.escape(null == (pug_interp = (item.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"iq-dropdown-item__quantity-control\"\u003E\u003Cbutton class=\"iq-dropdown-item__quantity-button\" type=\"button\" data-action=\"decrement-button\"\u003E-\u003C\u002Fbutton\u003E\u003Cspan class=\"iq-dropdown-item__count\"\u003E" + (pug.escape(null == (pug_interp = (item.itemCount)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cbutton class=\"iq-dropdown-item__quantity-button\" type=\"button\" data-action=\"increment-button\"\u003E+          \u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var item = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv" + (" class=\"iq-dropdown-item\""+pug.attr("data-id", (item.id), true, true)) + "\u003E\u003Cp class=\"iq-dropdown-item__text\"\u003E" + (pug.escape(null == (pug_interp = (item.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"iq-dropdown-item__quantity-control\"\u003E\u003Cbutton class=\"iq-dropdown-item__quantity-button\" type=\"button\" data-action=\"decrement-button\"\u003E-\u003C\u002Fbutton\u003E\u003Cspan class=\"iq-dropdown-item__count\"\u003E" + (pug.escape(null == (pug_interp = (item.itemCount)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cbutton class=\"iq-dropdown-item__quantity-button\" type=\"button\" data-action=\"increment-button\"\u003E+          \u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
if ((opts.buttons)) {
pug_html = pug_html + "\u003Cdiv class=\"iq-dropdown__buttons\"\u003E\u003Cdiv class=\"iq-dropdown__button\" data-name=\"clear\"\u003Eочистить\u003C\u002Fdiv\u003E\u003Cdiv class=\"iq-dropdown__button\" data-name=\"apply\"\u003Eприменить\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
}, opts);
};
pug_mixins["air-datepicker-calendar"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"air-datepicker-calendar js-air-datepicker-calendar js-dropdown\"\u003E\u003Cdiv class=\"air-datepicker-calendar__dropdown-lists\"\u003E\u003Cdiv class=\"air-datepicker-calendar__dropdown js-dropdown__button\"\u003E";
pug_mixins["dropdown"](opts.drop1);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
if ((opts.drop2)) {
pug_html = pug_html + "\u003Cdiv class=\"air-datepicker-calendar__dropdown js-dropdown__button\"\u003E";
pug_mixins["dropdown"](opts.drop2);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"air-datepicker-calendar__menu js-air-datepicker-calendar__menu js-dropdown__menu\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["subscription-text-field"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"subscription-text-field\"\u003E";
pug_mixins["dropdown"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["checkbox-list"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cul class=\"checkbox-list\"\u003E";
// iterate opts.items
;(function(){
  var $$obj = opts.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var item = $$obj[pug_index1];
pug_html = pug_html + "\u003Cli class=\"checkbox-list__item\"\u003E";
pug_mixins["item-checkbox"](item);
pug_html = pug_html + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var item = $$obj[pug_index1];
pug_html = pug_html + "\u003Cli class=\"checkbox-list__item\"\u003E";
pug_mixins["item-checkbox"](item);
pug_html = pug_html + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E";
};








pug_mixins["item-info-row"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"item-info-row\"\u003E\u003Cimg" + (" class=\"item-info-row__image\""+pug.attr("src", opts.imgPath, true, true)+" alt=\"smail\"") + "\u003E\u003Cdiv class=\"item-info-row__content\"\u003E\u003Cdiv class=\"item-info-row__title\"\u003E" + (pug.escape(null == (pug_interp = (opts.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-info-row__text type-body\"\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};






pug_mixins["radio-buttons"] = pug_interp = function(options){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"radio-buttons\"\u003E";
if ((options.title)) {
pug_html = pug_html + "\u003Cdiv class=\"radio-buttons__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (options.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"radio-buttons__body\"\u003E\u003Cdiv class=\"radio-button\"\u003E\u003Clabel class=\"radio-button__label\"\u003E" + (pug.escape(null == (pug_interp = (options.radio__1)) ? "" : pug_interp)) + "\u003Cinput" + (" class=\"radio-button__input\""+" type=\"radio\""+pug.attr("name", options.name, true, true)+pug.attr("checked", true, true, true)) + "\u003E\u003Cspan class=\"radio-button__pseudo-flag\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"radio-button\"\u003E\u003Clabel class=\"radio-button__label\"\u003E" + (pug.escape(null == (pug_interp = (options.radio__2)) ? "" : pug_interp)) + "\u003Cinput" + (" class=\"radio-button__input\""+" type=\"radio\""+pug.attr("name", options.name, true, true)) + "\u003E\u003Cspan class=\"radio-button__pseudo-flag\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["toggle-buttons"] = pug_interp = function(options){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"toggle-buttons\"\u003E";
if ((options.title)) {
pug_html = pug_html + "\u003Cdiv class=\"toggle-buttons__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (options.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"toggle-buttons__body\"\u003E\u003Cdiv class=\"toggle-button\"\u003E\u003Clabel class=\"toggle-button__label\"\u003E" + (pug.escape(null == (pug_interp = (options.text)) ? "" : pug_interp)) + "\u003Cinput class=\"toggle-button__input\" type=\"checkbox\"\u003E\u003Cspan class=\"toggle-button__pseudo-flag\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["like-button"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"like-button\"\u003E";
if ((opts.likeTitle)) {
pug_html = pug_html + "\u003Cdiv class=\"like-button__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.likeTitle)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"like-button__body\"\u003E\u003Cdiv class=\"like-button__image\"\u003E\u003C\u002Fdiv\u003E\u003Cinput" + (" class=\"like-button__value\""+" type=\"text\""+pug.attr("value", (opts.val), true, true)+pug.attr("disabled", true, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["rate-button"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"rate-button\"\u003E";
if ((opts.title)) {
pug_html = pug_html + "\u003Cdiv class=\"rate-button__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"rate-button__row\"\u003E";
let star = starBorder = 0;
while (star < opts.star) {
pug_html = pug_html + "\u003Cdiv class=\"rate-button__star\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(4308), true, true)+" alt=\"star\"") + "\u003E\u003C\u002Fdiv\u003E";
star += 1;
}
while (starBorder < opts.starBorder) {
pug_html = pug_html + "\u003Cdiv class=\"rate-button__star-border\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(8443), true, true)+" alt=\"star-border\"") + "\u003E\u003C\u002Fdiv\u003E";
starBorder += 1;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};







































pug_mixins["button-color"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca class=\"button-color\"\u003E";
if ((opts.text)) {
pug_html = pug_html + "\u003Cspan class=\"button-color__text\"\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
else {
pug_mixins["it"](opts.it);
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
};
pug_mixins["button-border-gradient"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca class=\"button-border-gradient\"\u003E\u003Cdiv class=\"button-border-gradient__text\"\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
};
pug_mixins["button-arrow"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca class=\"button-arrow\" href=\".\u002Fsearch-room.html\"\u003E\u003Cdiv class=\"button-arrow__text\"\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"button-arrow__arrow\"\u003E \u003Csvg width=\"17\" height=\"18\" viewBox=\"0 0 17 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z\" fill=\"#BC9CFF\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
};





















pug_mixins["images-slider"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"images-slider js-images-slider\"\u003E\u003Cdiv class=\"images-slider__filter\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"images-slider__line js-images-slider__line\"\u003E";
// iterate opts
;(function(){
  var $$obj = opts;
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var imgPath = $$obj[pug_index4];
pug_html = pug_html + "\u003Cdiv class=\"images-slider__slide ibg js-images-slider__slide\"\u003E\u003Cimg" + (pug.attr("src", imgPath, true, true)+" alt=\"image room\"") + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var imgPath = $$obj[pug_index4];
pug_html = pug_html + "\u003Cdiv class=\"images-slider__slide ibg js-images-slider__slide\"\u003E\u003Cimg" + (pug.attr("src", imgPath, true, true)+" alt=\"image room\"") + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"images-slider__control\"\u003E\u003Cdiv class=\"images-slider__control-previous js-images-slider__control-previous\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"images-slider__control-next js-images-slider__control-next\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"images-slider__control-progress js-images-slider__control-progress\"\u003E\u003Cdiv class=\"js-images-slider__control-progress-item js-images-slider__control-progress-item--active\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["floating-block"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"header__content js-floating-block\"\u003E\u003Cdiv class=\"contacts-header\"\u003E\u003Ca class=\"contacts-header__phone\" href=\"tel:+74951278280\"\u003E";
pug_mixins["it"]({
          class: 'contacts-header',
          svg: {
            id: '#phone',
            width: 18,
            height: 18,
          },
          text: '8 (495) 127-82-80',
        });
pug_html = pug_html + "\u003C\u002Fa\u003E\u003Cdiv class=\"contacts-header__buttons\"\u003E";
pug_mixins["button-color"]({
          text: 'Напишите нам',
        });
pug_mixins["button-color"]({
          it:{
            class: 'button-color',
            svg: {
              id: '#person',
              width: 14,
              height: 17,
            },
            text: 'Личный кабинет'
          }
        });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["list-items"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate opts
;(function(){
  var $$obj = opts;
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var item = $$obj[pug_index5];
if ((item.submenuItems)) {
pug_html = pug_html + "\u003Cli class=\"menu__item item-menu item-menu--has-submenu js-button js-target\"\u003E\u003Cdiv class=\"item-menu__body\"\u003E\u003Cdiv class=\"item-menu__link\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-menu__arrow\"\u003E";
pug_mixins["svg"]({
              id:'#expand-more',
              width: 13,
              height: 8,
            });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"item-menu__submenu submenu js-openable-element\"\u003E";
// iterate item.submenuItems
;(function(){
  var $$obj = item.submenuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var itemSubmenu = $$obj[pug_index6];
if ((itemSubmenu.submenuItems)) {
pug_html = pug_html + "\u003Cli class=\"submenu__item item-menu item-menu--has-submenu js-button js-target\"\u003E\u003Cdiv class=\"item-menu__body\"\u003E\u003Cdiv class=\"item-menu__link\"\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-menu__arrow\"\u003E";
pug_mixins["svg"]({
                      id:'#expand-more',
                      width: 13,
                      height: 8,
                      });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"item-menu__submenu submenu js-openable-element\"\u003E";
// iterate itemSubmenu.submenuItems
;(function(){
  var $$obj = itemSubmenu.submenuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var itemSubSubmenu = $$obj[pug_index7];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var itemSubSubmenu = $$obj[pug_index7];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var itemSubmenu = $$obj[pug_index6];
if ((itemSubmenu.submenuItems)) {
pug_html = pug_html + "\u003Cli class=\"submenu__item item-menu item-menu--has-submenu js-button js-target\"\u003E\u003Cdiv class=\"item-menu__body\"\u003E\u003Cdiv class=\"item-menu__link\"\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-menu__arrow\"\u003E";
pug_mixins["svg"]({
                      id:'#expand-more',
                      width: 13,
                      height: 8,
                      });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"item-menu__submenu submenu js-openable-element\"\u003E";
// iterate itemSubmenu.submenuItems
;(function(){
  var $$obj = itemSubmenu.submenuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var itemSubSubmenu = $$obj[pug_index8];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var itemSubSubmenu = $$obj[pug_index8];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"menu__item item-menu\"\u003E\u003Ca" + (" class=\"item-menu__link\""+pug.attr("href", (item.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var item = $$obj[pug_index5];
if ((item.submenuItems)) {
pug_html = pug_html + "\u003Cli class=\"menu__item item-menu item-menu--has-submenu js-button js-target\"\u003E\u003Cdiv class=\"item-menu__body\"\u003E\u003Cdiv class=\"item-menu__link\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-menu__arrow\"\u003E";
pug_mixins["svg"]({
              id:'#expand-more',
              width: 13,
              height: 8,
            });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"item-menu__submenu submenu js-openable-element\"\u003E";
// iterate item.submenuItems
;(function(){
  var $$obj = item.submenuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
        var itemSubmenu = $$obj[pug_index9];
if ((itemSubmenu.submenuItems)) {
pug_html = pug_html + "\u003Cli class=\"submenu__item item-menu item-menu--has-submenu js-button js-target\"\u003E\u003Cdiv class=\"item-menu__body\"\u003E\u003Cdiv class=\"item-menu__link\"\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-menu__arrow\"\u003E";
pug_mixins["svg"]({
                      id:'#expand-more',
                      width: 13,
                      height: 8,
                      });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"item-menu__submenu submenu js-openable-element\"\u003E";
// iterate itemSubmenu.submenuItems
;(function(){
  var $$obj = itemSubmenu.submenuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index10 = 0, $$l = $$obj.length; pug_index10 < $$l; pug_index10++) {
        var itemSubSubmenu = $$obj[pug_index10];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index10 in $$obj) {
      $$l++;
      var itemSubSubmenu = $$obj[pug_index10];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index9 in $$obj) {
      $$l++;
      var itemSubmenu = $$obj[pug_index9];
if ((itemSubmenu.submenuItems)) {
pug_html = pug_html + "\u003Cli class=\"submenu__item item-menu item-menu--has-submenu js-button js-target\"\u003E\u003Cdiv class=\"item-menu__body\"\u003E\u003Cdiv class=\"item-menu__link\"\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-menu__arrow\"\u003E";
pug_mixins["svg"]({
                      id:'#expand-more',
                      width: 13,
                      height: 8,
                      });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"item-menu__submenu submenu js-openable-element\"\u003E";
// iterate itemSubmenu.submenuItems
;(function(){
  var $$obj = itemSubmenu.submenuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index11 = 0, $$l = $$obj.length; pug_index11 < $$l; pug_index11++) {
        var itemSubSubmenu = $$obj[pug_index11];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index11 in $$obj) {
      $$l++;
      var itemSubSubmenu = $$obj[pug_index11];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"menu__item item-menu\"\u003E\u003Ca" + (" class=\"item-menu__link\""+pug.attr("href", (item.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

};
pug_mixins["header"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cheader class=\"header js-header\"\u003E\u003Cdiv class=\"container\"\u003E\u003Cdiv class=\"header__body\"\u003E\u003Cdiv class=\"header__logo\"\u003E";
pug_mixins["logo"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
if ((opts.floatingBlock)) {
pug_mixins["floating-block"]();
}
pug_html = pug_html + "\u003Cdiv class=\"header__menu menu js-menu js-target js-not-close\"\u003E\u003Cdiv class=\"menu__icon js-menu__icon js-button\"\u003E";
pug_mixins["burger"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__body js-openable-element\"\u003E\u003Cnav class=\"menu__nav\"\u003E\u003Cul class=\"menu__list\"\u003E";
pug_mixins["list-items"](opts.menuItems);
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fnav\u003E\u003Cdiv class=\"menu__buttons\"\u003E\u003Cdiv class=\"menu__buttons-signin\"\u003E";
pug_mixins["button-border-gradient"]({
                  text: 'войти',
                });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__buttons-signup\"\u003E";
pug_mixins["button-color"]({
                  text: 'зарегистрироваться',
                });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E";
};
pug_mixins["svg"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var width = opts.width || 24 
var height = opts.height || 24 
pug_html = pug_html + "\u003Csvg" + (pug.attr("viewBox", `0 0 ${width} ${height}`, true, true)+pug.attr("width", `${width}`, true, true)+pug.attr("height", `${height}`, true, true)) + "\u003E\u003Cuse" + (pug.attr("xlink:href", opts.id, true, true)) + "\u003E\u003C\u002Fuse\u003E\u003C\u002Fsvg\u003E";
};
pug_mixins["footer"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cfooter class=\"footer\"\u003E\u003Cdiv class=\"footer__container container\"\u003E\u003Cdiv class=\"footer__row\"\u003E\u003Cdiv class=\"footer__block-logo block-logo\"\u003E\u003Cdiv class=\"block-logo__icon\"\u003E";
pug_mixins["logo"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cp class=\"block-logo__text\"\u003E" + (pug.escape(null == (pug_interp = (opts.blockLogoText)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cnav class=\"footer__nav nav-footer\"\u003E";
// iterate opts.navItems
;(function(){
  var $$obj = opts.navItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index12 = 0, $$l = $$obj.length; pug_index12 < $$l; pug_index12++) {
        var navItem = $$obj[pug_index12];
pug_html = pug_html + "\u003Cdiv class=\"nav-footer__item\"\u003E\u003Ch3 class=\"nav-footer__title\"\u003E" + (pug.escape(null == (pug_interp = navItem.title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cul class=\"nav-footer__list nav-footer-list\"\u003E";
// iterate navItem.links
;(function(){
  var $$obj = navItem.links;
  if ('number' == typeof $$obj.length) {
      for (var pug_index13 = 0, $$l = $$obj.length; pug_index13 < $$l; pug_index13++) {
        var navListLink = $$obj[pug_index13];
pug_html = pug_html + "\u003Cli class=\"nav-footer-list__item\"\u003E\u003Ca" + (" class=\"nav-footer-list__link\""+pug.attr("href", navListLink.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = navListLink.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index13 in $$obj) {
      $$l++;
      var navListLink = $$obj[pug_index13];
pug_html = pug_html + "\u003Cli class=\"nav-footer-list__item\"\u003E\u003Ca" + (" class=\"nav-footer-list__link\""+pug.attr("href", navListLink.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = navListLink.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index12 in $$obj) {
      $$l++;
      var navItem = $$obj[pug_index12];
pug_html = pug_html + "\u003Cdiv class=\"nav-footer__item\"\u003E\u003Ch3 class=\"nav-footer__title\"\u003E" + (pug.escape(null == (pug_interp = navItem.title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cul class=\"nav-footer__list nav-footer-list\"\u003E";
// iterate navItem.links
;(function(){
  var $$obj = navItem.links;
  if ('number' == typeof $$obj.length) {
      for (var pug_index14 = 0, $$l = $$obj.length; pug_index14 < $$l; pug_index14++) {
        var navListLink = $$obj[pug_index14];
pug_html = pug_html + "\u003Cli class=\"nav-footer-list__item\"\u003E\u003Ca" + (" class=\"nav-footer-list__link\""+pug.attr("href", navListLink.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = navListLink.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index14 in $$obj) {
      $$l++;
      var navListLink = $$obj[pug_index14];
pug_html = pug_html + "\u003Cli class=\"nav-footer-list__item\"\u003E\u003Ca" + (" class=\"nav-footer-list__link\""+pug.attr("href", navListLink.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = navListLink.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fnav\u003E\u003Cdiv class=\"footer__subscribe subscribe-footer\"\u003E\u003Ch3 class=\"subscribe-footer__title\"\u003E" + (pug.escape(null == (pug_interp = (opts.subscribe.title)) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cp class=\"subscribe-footer__text\"\u003E" + (pug.escape(null == (pug_interp = (opts.subscribe.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"subscribe-footer__field\"\u003E";
pug_mixins["subscription-text-field"](opts.subscribe.field);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__copy copy\"\u003E\u003Cdiv class=\"copy__row\"\u003E\u003Cdiv class=\"copy__logo\"\u003E";
pug_mixins["logo"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cp class=\"copy__text\"\u003E" + (pug.escape(null == (pug_interp = (opts.copy.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"copy__social social\"\u003E";
// iterate opts.copy.icons
;(function(){
  var $$obj = opts.copy.icons;
  if ('number' == typeof $$obj.length) {
      for (var pug_index15 = 0, $$l = $$obj.length; pug_index15 < $$l; pug_index15++) {
        var copyIcon = $$obj[pug_index15];
pug_html = pug_html + "\u003Cimg" + (" class=\"social__icon\""+pug.attr("src", (copyIcon.src), true, true)+pug.attr("alt", (copyIcon.alt), true, true)) + "\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index15 in $$obj) {
      $$l++;
      var copyIcon = $$obj[pug_index15];
pug_html = pug_html + "\u003Cimg" + (" class=\"social__icon\""+pug.attr("src", (copyIcon.src), true, true)+pug.attr("alt", (copyIcon.alt), true, true)) + "\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E";
};
pug_mixins["logo"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca" + (" class=\"logo\""+pug.attr("href", (opts.logo.href), true, true)) + "\u003E\u003Cimg" + (pug.attr("src", (opts.logo.logoIcon), true, true)+" alt=\"logo\"") + "\u003E";
if ((opts.logo.logoText)) {
pug_html = pug_html + "\u003Cimg" + (pug.attr("src", (opts.logo.logoText), true, true)+" alt=\"logo\"") + "\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
};




pug_mixins["it"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cspan" + (pug.attr("class", pug.classes([`${opts.class}__icon`], [true]), false, true)) + "\u003E";
pug_mixins["svg"](opts.svg);
pug_html = pug_html + "\u003C\u002Fspan\u003E\u003Cspan" + (pug.attr("class", pug.classes([`${opts.class}__text`], [true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
};
pug_mixins["burger"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"burger\"\u003E\u003Cdiv class=\"burger__body\"\u003E\u003Cspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};




pug_mixins["item-checkbox"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"item-checkbox\"\u003E\u003Clabel class=\"item-checkbox__label\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug.attr("checked", opts.isChecked, true, true)) + "\u003E\u003Cspan class=\"item-checkbox__pseudo-flag\"\u003E\u003Cspan class=\"item-checkbox__icon\"\u003E";
pug_mixins["svg"]({
            id:'#tick',
            width: 14,
            height: 10,
          });
pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cdiv class=\"item-checkbox__content\"\u003E\u003Cspan class=\"item-checkbox__text\"\u003E" + (pug.escape(null == (pug_interp = opts.text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if ((opts.subtext)) {
pug_html = pug_html + "\u003Cspan class=\"item-checkbox__subtext\"\u003E" + (pug.escape(null == (pug_interp = opts.subtext) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
};
































pug_mixins["field"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"field\"\u003E";
if ((opts.label)) {
pug_html = pug_html + "\u003Clabel class=\"field__label\"\u003E\u003Cspan class=\"field__label-text\"\u003E" + (pug.escape(null == (pug_interp = (opts.label)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cinput" + (" class=\"field__input js-field__input\""+pug.attr("type", (opts.type), true, true)+pug.attr("name", opts.name, true, true)+pug.attr("placeholder", (opts.placeholder), true, true)+pug.attr("tabindex", (opts.tabindex), true, true)+pug.attr("required", (opts.required), true, true)+" autocomplete=\"off\"") + "\u003E\u003C\u002Flabel\u003E";
}
else {
pug_html = pug_html + "\u003Cinput" + (" class=\"field__input js-field__input\""+pug.attr("type", (opts.type), true, true)+pug.attr("name", opts.name, true, true)+pug.attr("placeholder", (opts.placeholder), true, true)+pug.attr("tabindex", (opts.tabindex), true, true)+pug.attr("required", (opts.required), true, true)+" autocomplete=\"off\"") + "\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["dropdown"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["dropdown","field",(opts.js ? 'js-dropdown' : '')], [false,false,true]), false, true)) + "\u003E";
pug_mixins["content"].call({
block: function(){
block && block();
}
}, opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["content"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var attributes = {
  'data-id': (opts.dropdownId),
  name: (opts.name),
  readonly: (opts.readonly),
  type: (opts.type),
  placeholder: (opts.placeholder),
  tabindex: (opts.tabindex),
  required: (opts.required),
}

if ((opts.label)) {
pug_html = pug_html + "\u003Cdiv class=\"dropdown__label field__label\"\u003E\u003Ch3 class=\"dropdown__label-text field__label-text\"\u003E" + (pug.escape(null == (pug_interp = (opts.label)) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cdiv class=\"dropdown__field\"\u003E\u003Cinput" + (pug.attrs(pug.merge([{"class": pug.classes(["dropdown__input","field__input",(opts.js ? 'js-dropdown__button' : '')], [false,false,true])},attributes]), true)) + "\u003E\u003Cdiv class=\"dropdown__arrow\"\u003E";
pug_mixins["svg"](opts.arrowSvg);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\u003Cdiv class=\"dropdown__field\"\u003E\u003Cinput" + (pug.attrs(pug.merge([{"class": pug.classes(["dropdown__input","field__input",(opts.js ? 'js-dropdown__button' : '')], [false,false,true])},attributes]), true)) + "\u003E\u003Cdiv class=\"dropdown__arrow\"\u003E";
pug_mixins["svg"](opts.arrowSvg);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
if ((opts.js)) {
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["dropdown__menu",(opts.js ? 'js-dropdown__menu' : '')], [false,true]), false, true)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
};
pug_mixins["masked-text-field"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"masked-text-field js-masked-text-field\"\u003E";
pug_mixins["field"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["item-quantity-dropdown"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["dropdown"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv" + (" class=\"iq-dropdown\""+pug.attr("data-id", (opts.id), true, true)) + "\u003E\u003Cdiv class=\"iq-dropdown__items\"\u003E";
// iterate opts.items
;(function(){
  var $$obj = opts.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index17 = 0, $$l = $$obj.length; pug_index17 < $$l; pug_index17++) {
        var item = $$obj[pug_index17];
pug_html = pug_html + "\u003Cdiv" + (" class=\"iq-dropdown-item\""+pug.attr("data-id", (item.id), true, true)) + "\u003E\u003Cp class=\"iq-dropdown-item__text\"\u003E" + (pug.escape(null == (pug_interp = (item.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"iq-dropdown-item__quantity-control\"\u003E\u003Cbutton class=\"iq-dropdown-item__quantity-button\" type=\"button\" data-action=\"decrement-button\"\u003E-\u003C\u002Fbutton\u003E\u003Cspan class=\"iq-dropdown-item__count\"\u003E" + (pug.escape(null == (pug_interp = (item.itemCount)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cbutton class=\"iq-dropdown-item__quantity-button\" type=\"button\" data-action=\"increment-button\"\u003E+          \u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index17 in $$obj) {
      $$l++;
      var item = $$obj[pug_index17];
pug_html = pug_html + "\u003Cdiv" + (" class=\"iq-dropdown-item\""+pug.attr("data-id", (item.id), true, true)) + "\u003E\u003Cp class=\"iq-dropdown-item__text\"\u003E" + (pug.escape(null == (pug_interp = (item.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"iq-dropdown-item__quantity-control\"\u003E\u003Cbutton class=\"iq-dropdown-item__quantity-button\" type=\"button\" data-action=\"decrement-button\"\u003E-\u003C\u002Fbutton\u003E\u003Cspan class=\"iq-dropdown-item__count\"\u003E" + (pug.escape(null == (pug_interp = (item.itemCount)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cbutton class=\"iq-dropdown-item__quantity-button\" type=\"button\" data-action=\"increment-button\"\u003E+          \u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
if ((opts.buttons)) {
pug_html = pug_html + "\u003Cdiv class=\"iq-dropdown__buttons\"\u003E\u003Cdiv class=\"iq-dropdown__button\" data-name=\"clear\"\u003Eочистить\u003C\u002Fdiv\u003E\u003Cdiv class=\"iq-dropdown__button\" data-name=\"apply\"\u003Eприменить\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
}, opts);
};
pug_mixins["air-datepicker-calendar"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"air-datepicker-calendar js-air-datepicker-calendar js-dropdown\"\u003E\u003Cdiv class=\"air-datepicker-calendar__dropdown-lists\"\u003E\u003Cdiv class=\"air-datepicker-calendar__dropdown js-dropdown__button\"\u003E";
pug_mixins["dropdown"](opts.drop1);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
if ((opts.drop2)) {
pug_html = pug_html + "\u003Cdiv class=\"air-datepicker-calendar__dropdown js-dropdown__button\"\u003E";
pug_mixins["dropdown"](opts.drop2);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"air-datepicker-calendar__menu js-air-datepicker-calendar__menu js-dropdown__menu\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["subscription-text-field"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"subscription-text-field\"\u003E";
pug_mixins["dropdown"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["checkbox-list"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cul class=\"checkbox-list\"\u003E";
// iterate opts.items
;(function(){
  var $$obj = opts.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index18 = 0, $$l = $$obj.length; pug_index18 < $$l; pug_index18++) {
        var item = $$obj[pug_index18];
pug_html = pug_html + "\u003Cli class=\"checkbox-list__item\"\u003E";
pug_mixins["item-checkbox"](item);
pug_html = pug_html + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index18 in $$obj) {
      $$l++;
      var item = $$obj[pug_index18];
pug_html = pug_html + "\u003Cli class=\"checkbox-list__item\"\u003E";
pug_mixins["item-checkbox"](item);
pug_html = pug_html + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E";
};








pug_mixins["item-info-row"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"item-info-row\"\u003E\u003Cimg" + (" class=\"item-info-row__image\""+pug.attr("src", opts.imgPath, true, true)+" alt=\"smail\"") + "\u003E\u003Cdiv class=\"item-info-row__content\"\u003E\u003Cdiv class=\"item-info-row__title\"\u003E" + (pug.escape(null == (pug_interp = (opts.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-info-row__text type-body\"\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};






pug_mixins["radio-buttons"] = pug_interp = function(options){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"radio-buttons\"\u003E";
if ((options.title)) {
pug_html = pug_html + "\u003Cdiv class=\"radio-buttons__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (options.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"radio-buttons__body\"\u003E\u003Cdiv class=\"radio-button\"\u003E\u003Clabel class=\"radio-button__label\"\u003E" + (pug.escape(null == (pug_interp = (options.radio__1)) ? "" : pug_interp)) + "\u003Cinput" + (" class=\"radio-button__input\""+" type=\"radio\""+pug.attr("name", options.name, true, true)+pug.attr("checked", true, true, true)) + "\u003E\u003Cspan class=\"radio-button__pseudo-flag\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"radio-button\"\u003E\u003Clabel class=\"radio-button__label\"\u003E" + (pug.escape(null == (pug_interp = (options.radio__2)) ? "" : pug_interp)) + "\u003Cinput" + (" class=\"radio-button__input\""+" type=\"radio\""+pug.attr("name", options.name, true, true)) + "\u003E\u003Cspan class=\"radio-button__pseudo-flag\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["toggle-buttons"] = pug_interp = function(options){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"toggle-buttons\"\u003E";
if ((options.title)) {
pug_html = pug_html + "\u003Cdiv class=\"toggle-buttons__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (options.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"toggle-buttons__body\"\u003E\u003Cdiv class=\"toggle-button\"\u003E\u003Clabel class=\"toggle-button__label\"\u003E" + (pug.escape(null == (pug_interp = (options.text)) ? "" : pug_interp)) + "\u003Cinput class=\"toggle-button__input\" type=\"checkbox\"\u003E\u003Cspan class=\"toggle-button__pseudo-flag\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["like-button"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"like-button\"\u003E";
if ((opts.likeTitle)) {
pug_html = pug_html + "\u003Cdiv class=\"like-button__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.likeTitle)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"like-button__body\"\u003E\u003Cdiv class=\"like-button__image\"\u003E\u003C\u002Fdiv\u003E\u003Cinput" + (" class=\"like-button__value\""+" type=\"text\""+pug.attr("value", (opts.val), true, true)+pug.attr("disabled", true, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["rate-button"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"rate-button\"\u003E";
if ((opts.title)) {
pug_html = pug_html + "\u003Cdiv class=\"rate-button__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"rate-button__row\"\u003E";
let star = starBorder = 0;
while (star < opts.star) {
pug_html = pug_html + "\u003Cdiv class=\"rate-button__star\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(4308), true, true)+" alt=\"star\"") + "\u003E\u003C\u002Fdiv\u003E";
star += 1;
}
while (starBorder < opts.starBorder) {
pug_html = pug_html + "\u003Cdiv class=\"rate-button__star-border\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(8443), true, true)+" alt=\"star-border\"") + "\u003E\u003C\u002Fdiv\u003E";
starBorder += 1;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};







































pug_mixins["button-color"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca class=\"button-color\"\u003E";
if ((opts.text)) {
pug_html = pug_html + "\u003Cspan class=\"button-color__text\"\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
else {
pug_mixins["it"](opts.it);
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
};
pug_mixins["button-border-gradient"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca class=\"button-border-gradient\"\u003E\u003Cdiv class=\"button-border-gradient__text\"\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
};
pug_mixins["button-arrow"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca class=\"button-arrow\" href=\".\u002Fsearch-room.html\"\u003E\u003Cdiv class=\"button-arrow__text\"\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"button-arrow__arrow\"\u003E \u003Csvg width=\"17\" height=\"18\" viewBox=\"0 0 17 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z\" fill=\"#BC9CFF\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
};





















pug_mixins["images-slider"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"images-slider js-images-slider\"\u003E\u003Cdiv class=\"images-slider__filter\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"images-slider__line js-images-slider__line\"\u003E";
// iterate opts
;(function(){
  var $$obj = opts;
  if ('number' == typeof $$obj.length) {
      for (var pug_index21 = 0, $$l = $$obj.length; pug_index21 < $$l; pug_index21++) {
        var imgPath = $$obj[pug_index21];
pug_html = pug_html + "\u003Cdiv class=\"images-slider__slide ibg js-images-slider__slide\"\u003E\u003Cimg" + (pug.attr("src", imgPath, true, true)+" alt=\"image room\"") + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index21 in $$obj) {
      $$l++;
      var imgPath = $$obj[pug_index21];
pug_html = pug_html + "\u003Cdiv class=\"images-slider__slide ibg js-images-slider__slide\"\u003E\u003Cimg" + (pug.attr("src", imgPath, true, true)+" alt=\"image room\"") + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"images-slider__control\"\u003E\u003Cdiv class=\"images-slider__control-previous js-images-slider__control-previous\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"images-slider__control-next js-images-slider__control-next\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"images-slider__control-progress js-images-slider__control-progress\"\u003E\u003Cdiv class=\"js-images-slider__control-progress-item js-images-slider__control-progress-item--active\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["floating-block"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"header__content js-floating-block\"\u003E\u003Cdiv class=\"contacts-header\"\u003E\u003Ca class=\"contacts-header__phone\" href=\"tel:+74951278280\"\u003E";
pug_mixins["it"]({
          class: 'contacts-header',
          svg: {
            id: '#phone',
            width: 18,
            height: 18,
          },
          text: '8 (495) 127-82-80',
        });
pug_html = pug_html + "\u003C\u002Fa\u003E\u003Cdiv class=\"contacts-header__buttons\"\u003E";
pug_mixins["button-color"]({
          text: 'Напишите нам',
        });
pug_mixins["button-color"]({
          it:{
            class: 'button-color',
            svg: {
              id: '#person',
              width: 14,
              height: 17,
            },
            text: 'Личный кабинет'
          }
        });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["list-items"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate opts
;(function(){
  var $$obj = opts;
  if ('number' == typeof $$obj.length) {
      for (var pug_index22 = 0, $$l = $$obj.length; pug_index22 < $$l; pug_index22++) {
        var item = $$obj[pug_index22];
if ((item.submenuItems)) {
pug_html = pug_html + "\u003Cli class=\"menu__item item-menu item-menu--has-submenu js-button js-target\"\u003E\u003Cdiv class=\"item-menu__body\"\u003E\u003Cdiv class=\"item-menu__link\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-menu__arrow\"\u003E";
pug_mixins["svg"]({
              id:'#expand-more',
              width: 13,
              height: 8,
            });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"item-menu__submenu submenu js-openable-element\"\u003E";
// iterate item.submenuItems
;(function(){
  var $$obj = item.submenuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index23 = 0, $$l = $$obj.length; pug_index23 < $$l; pug_index23++) {
        var itemSubmenu = $$obj[pug_index23];
if ((itemSubmenu.submenuItems)) {
pug_html = pug_html + "\u003Cli class=\"submenu__item item-menu item-menu--has-submenu js-button js-target\"\u003E\u003Cdiv class=\"item-menu__body\"\u003E\u003Cdiv class=\"item-menu__link\"\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-menu__arrow\"\u003E";
pug_mixins["svg"]({
                      id:'#expand-more',
                      width: 13,
                      height: 8,
                      });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"item-menu__submenu submenu js-openable-element\"\u003E";
// iterate itemSubmenu.submenuItems
;(function(){
  var $$obj = itemSubmenu.submenuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index24 = 0, $$l = $$obj.length; pug_index24 < $$l; pug_index24++) {
        var itemSubSubmenu = $$obj[pug_index24];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index24 in $$obj) {
      $$l++;
      var itemSubSubmenu = $$obj[pug_index24];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index23 in $$obj) {
      $$l++;
      var itemSubmenu = $$obj[pug_index23];
if ((itemSubmenu.submenuItems)) {
pug_html = pug_html + "\u003Cli class=\"submenu__item item-menu item-menu--has-submenu js-button js-target\"\u003E\u003Cdiv class=\"item-menu__body\"\u003E\u003Cdiv class=\"item-menu__link\"\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-menu__arrow\"\u003E";
pug_mixins["svg"]({
                      id:'#expand-more',
                      width: 13,
                      height: 8,
                      });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"item-menu__submenu submenu js-openable-element\"\u003E";
// iterate itemSubmenu.submenuItems
;(function(){
  var $$obj = itemSubmenu.submenuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index25 = 0, $$l = $$obj.length; pug_index25 < $$l; pug_index25++) {
        var itemSubSubmenu = $$obj[pug_index25];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index25 in $$obj) {
      $$l++;
      var itemSubSubmenu = $$obj[pug_index25];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"menu__item item-menu\"\u003E\u003Ca" + (" class=\"item-menu__link\""+pug.attr("href", (item.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index22 in $$obj) {
      $$l++;
      var item = $$obj[pug_index22];
if ((item.submenuItems)) {
pug_html = pug_html + "\u003Cli class=\"menu__item item-menu item-menu--has-submenu js-button js-target\"\u003E\u003Cdiv class=\"item-menu__body\"\u003E\u003Cdiv class=\"item-menu__link\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-menu__arrow\"\u003E";
pug_mixins["svg"]({
              id:'#expand-more',
              width: 13,
              height: 8,
            });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"item-menu__submenu submenu js-openable-element\"\u003E";
// iterate item.submenuItems
;(function(){
  var $$obj = item.submenuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index26 = 0, $$l = $$obj.length; pug_index26 < $$l; pug_index26++) {
        var itemSubmenu = $$obj[pug_index26];
if ((itemSubmenu.submenuItems)) {
pug_html = pug_html + "\u003Cli class=\"submenu__item item-menu item-menu--has-submenu js-button js-target\"\u003E\u003Cdiv class=\"item-menu__body\"\u003E\u003Cdiv class=\"item-menu__link\"\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-menu__arrow\"\u003E";
pug_mixins["svg"]({
                      id:'#expand-more',
                      width: 13,
                      height: 8,
                      });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"item-menu__submenu submenu js-openable-element\"\u003E";
// iterate itemSubmenu.submenuItems
;(function(){
  var $$obj = itemSubmenu.submenuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index27 = 0, $$l = $$obj.length; pug_index27 < $$l; pug_index27++) {
        var itemSubSubmenu = $$obj[pug_index27];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index27 in $$obj) {
      $$l++;
      var itemSubSubmenu = $$obj[pug_index27];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index26 in $$obj) {
      $$l++;
      var itemSubmenu = $$obj[pug_index26];
if ((itemSubmenu.submenuItems)) {
pug_html = pug_html + "\u003Cli class=\"submenu__item item-menu item-menu--has-submenu js-button js-target\"\u003E\u003Cdiv class=\"item-menu__body\"\u003E\u003Cdiv class=\"item-menu__link\"\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-menu__arrow\"\u003E";
pug_mixins["svg"]({
                      id:'#expand-more',
                      width: 13,
                      height: 8,
                      });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"item-menu__submenu submenu js-openable-element\"\u003E";
// iterate itemSubmenu.submenuItems
;(function(){
  var $$obj = itemSubmenu.submenuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index28 = 0, $$l = $$obj.length; pug_index28 < $$l; pug_index28++) {
        var itemSubSubmenu = $$obj[pug_index28];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index28 in $$obj) {
      $$l++;
      var itemSubSubmenu = $$obj[pug_index28];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"menu__item item-menu\"\u003E\u003Ca" + (" class=\"item-menu__link\""+pug.attr("href", (item.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

};
pug_mixins["header"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cheader class=\"header js-header\"\u003E\u003Cdiv class=\"container\"\u003E\u003Cdiv class=\"header__body\"\u003E\u003Cdiv class=\"header__logo\"\u003E";
pug_mixins["logo"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
if ((opts.floatingBlock)) {
pug_mixins["floating-block"]();
}
pug_html = pug_html + "\u003Cdiv class=\"header__menu menu js-menu js-target js-not-close\"\u003E\u003Cdiv class=\"menu__icon js-menu__icon js-button\"\u003E";
pug_mixins["burger"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__body js-openable-element\"\u003E\u003Cnav class=\"menu__nav\"\u003E\u003Cul class=\"menu__list\"\u003E";
pug_mixins["list-items"](opts.menuItems);
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fnav\u003E\u003Cdiv class=\"menu__buttons\"\u003E\u003Cdiv class=\"menu__buttons-signin\"\u003E";
pug_mixins["button-border-gradient"]({
                  text: 'войти',
                });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__buttons-signup\"\u003E";
pug_mixins["button-color"]({
                  text: 'зарегистрироваться',
                });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E";
};
pug_mixins["svg"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var width = opts.width || 24 
var height = opts.height || 24 
pug_html = pug_html + "\u003Csvg" + (pug.attr("viewBox", `0 0 ${width} ${height}`, true, true)+pug.attr("width", `${width}`, true, true)+pug.attr("height", `${height}`, true, true)) + "\u003E\u003Cuse" + (pug.attr("xlink:href", opts.id, true, true)) + "\u003E\u003C\u002Fuse\u003E\u003C\u002Fsvg\u003E";
};
pug_mixins["footer"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cfooter class=\"footer\"\u003E\u003Cdiv class=\"footer__container container\"\u003E\u003Cdiv class=\"footer__row\"\u003E\u003Cdiv class=\"footer__block-logo block-logo\"\u003E\u003Cdiv class=\"block-logo__icon\"\u003E";
pug_mixins["logo"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cp class=\"block-logo__text\"\u003E" + (pug.escape(null == (pug_interp = (opts.blockLogoText)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cnav class=\"footer__nav nav-footer\"\u003E";
// iterate opts.navItems
;(function(){
  var $$obj = opts.navItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index29 = 0, $$l = $$obj.length; pug_index29 < $$l; pug_index29++) {
        var navItem = $$obj[pug_index29];
pug_html = pug_html + "\u003Cdiv class=\"nav-footer__item\"\u003E\u003Ch3 class=\"nav-footer__title\"\u003E" + (pug.escape(null == (pug_interp = navItem.title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cul class=\"nav-footer__list nav-footer-list\"\u003E";
// iterate navItem.links
;(function(){
  var $$obj = navItem.links;
  if ('number' == typeof $$obj.length) {
      for (var pug_index30 = 0, $$l = $$obj.length; pug_index30 < $$l; pug_index30++) {
        var navListLink = $$obj[pug_index30];
pug_html = pug_html + "\u003Cli class=\"nav-footer-list__item\"\u003E\u003Ca" + (" class=\"nav-footer-list__link\""+pug.attr("href", navListLink.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = navListLink.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index30 in $$obj) {
      $$l++;
      var navListLink = $$obj[pug_index30];
pug_html = pug_html + "\u003Cli class=\"nav-footer-list__item\"\u003E\u003Ca" + (" class=\"nav-footer-list__link\""+pug.attr("href", navListLink.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = navListLink.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index29 in $$obj) {
      $$l++;
      var navItem = $$obj[pug_index29];
pug_html = pug_html + "\u003Cdiv class=\"nav-footer__item\"\u003E\u003Ch3 class=\"nav-footer__title\"\u003E" + (pug.escape(null == (pug_interp = navItem.title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cul class=\"nav-footer__list nav-footer-list\"\u003E";
// iterate navItem.links
;(function(){
  var $$obj = navItem.links;
  if ('number' == typeof $$obj.length) {
      for (var pug_index31 = 0, $$l = $$obj.length; pug_index31 < $$l; pug_index31++) {
        var navListLink = $$obj[pug_index31];
pug_html = pug_html + "\u003Cli class=\"nav-footer-list__item\"\u003E\u003Ca" + (" class=\"nav-footer-list__link\""+pug.attr("href", navListLink.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = navListLink.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index31 in $$obj) {
      $$l++;
      var navListLink = $$obj[pug_index31];
pug_html = pug_html + "\u003Cli class=\"nav-footer-list__item\"\u003E\u003Ca" + (" class=\"nav-footer-list__link\""+pug.attr("href", navListLink.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = navListLink.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fnav\u003E\u003Cdiv class=\"footer__subscribe subscribe-footer\"\u003E\u003Ch3 class=\"subscribe-footer__title\"\u003E" + (pug.escape(null == (pug_interp = (opts.subscribe.title)) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cp class=\"subscribe-footer__text\"\u003E" + (pug.escape(null == (pug_interp = (opts.subscribe.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"subscribe-footer__field\"\u003E";
pug_mixins["subscription-text-field"](opts.subscribe.field);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__copy copy\"\u003E\u003Cdiv class=\"copy__row\"\u003E\u003Cdiv class=\"copy__logo\"\u003E";
pug_mixins["logo"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cp class=\"copy__text\"\u003E" + (pug.escape(null == (pug_interp = (opts.copy.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"copy__social social\"\u003E";
// iterate opts.copy.icons
;(function(){
  var $$obj = opts.copy.icons;
  if ('number' == typeof $$obj.length) {
      for (var pug_index32 = 0, $$l = $$obj.length; pug_index32 < $$l; pug_index32++) {
        var copyIcon = $$obj[pug_index32];
pug_html = pug_html + "\u003Cimg" + (" class=\"social__icon\""+pug.attr("src", (copyIcon.src), true, true)+pug.attr("alt", (copyIcon.alt), true, true)) + "\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index32 in $$obj) {
      $$l++;
      var copyIcon = $$obj[pug_index32];
pug_html = pug_html + "\u003Cimg" + (" class=\"social__icon\""+pug.attr("src", (copyIcon.src), true, true)+pug.attr("alt", (copyIcon.alt), true, true)) + "\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E";
};
pug_mixins["logo"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca" + (" class=\"logo\""+pug.attr("href", (opts.logo.href), true, true)) + "\u003E\u003Cimg" + (pug.attr("src", (opts.logo.logoIcon), true, true)+" alt=\"logo\"") + "\u003E";
if ((opts.logo.logoText)) {
pug_html = pug_html + "\u003Cimg" + (pug.attr("src", (opts.logo.logoText), true, true)+" alt=\"logo\"") + "\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
};




pug_mixins["it"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cspan" + (pug.attr("class", pug.classes([`${opts.class}__icon`], [true]), false, true)) + "\u003E";
pug_mixins["svg"](opts.svg);
pug_html = pug_html + "\u003C\u002Fspan\u003E\u003Cspan" + (pug.attr("class", pug.classes([`${opts.class}__text`], [true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
};
pug_mixins["burger"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"burger\"\u003E\u003Cdiv class=\"burger__body\"\u003E\u003Cspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};




pug_mixins["item-checkbox"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"item-checkbox\"\u003E\u003Clabel class=\"item-checkbox__label\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug.attr("checked", opts.isChecked, true, true)) + "\u003E\u003Cspan class=\"item-checkbox__pseudo-flag\"\u003E\u003Cspan class=\"item-checkbox__icon\"\u003E";
pug_mixins["svg"]({
            id:'#tick',
            width: 14,
            height: 10,
          });
pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cdiv class=\"item-checkbox__content\"\u003E\u003Cspan class=\"item-checkbox__text\"\u003E" + (pug.escape(null == (pug_interp = opts.text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if ((opts.subtext)) {
pug_html = pug_html + "\u003Cspan class=\"item-checkbox__subtext\"\u003E" + (pug.escape(null == (pug_interp = opts.subtext) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
};






































pug_mixins["account-registration"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cform class=\"account-registration card\" action=\"#\"\u003E\u003Cdiv class=\"account-registration__item\"\u003E\u003Ch3 class=\"account-registration__title\"\u003E" + (pug.escape(null == (pug_interp = opts.title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"account-registration__item\"\u003E\u003Cdiv class=\"account-registration__group\"\u003E";
pug_mixins["field"](opts.fieldName);
pug_mixins["field"](opts.fieldSurname);
pug_mixins["radio-buttons"](opts.radioButtons);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"account-registration__item\"\u003E";
pug_mixins["masked-text-field"](opts.maskedTextField);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"account-registration__item\"\u003E\u003Cdiv class=\"account-registration__group\"\u003E";
pug_mixins["field"](opts.fieldEmail);
pug_mixins["field"](opts.fieldPassword);
pug_mixins["toggle-buttons"](opts.toggleButton);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"account-registration__item\"\u003E";
pug_mixins["button-arrow"](opts.buttonArrow);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"account-registration__item\"\u003E\u003Cdiv class=\"account-registration__space-between\"\u003E\u003Cp class=\"account-registration__account-actions-text\"\u003EУже есть аккаунт на Toxin\u003C\u002Fp\u003E";
pug_mixins["button-border-gradient"](opts.buttonBorder);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E";
};

































var title = 'Toxin';
var description = 'Бронирование отелей';
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"ru\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Ctitle\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E\u003Cmeta" + (" name=\"description\""+pug.attr("content", description, true, true)) + "\u003E\u003C\u002Fhead\u003E\u003Cbody" + (pug.attr("class", pug.classes([pageClass], [true]), false, true)) + "\u003E\u003Csvg display=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\n  \u003Csymbol id ='expand-more'\u003E\n    \u003Cpath d=\"M11.3301 0.578125L12.7363 1.98438L6.73633 7.98438L0.736328 1.98438L2.14258 0.578125L6.73633 5.17188L11.3301 0.578125Z\"\u002F\u003E\n  \u003C\u002Fsymbol\u003E\n\n  \u003Csymbol id ='arrow-forward'\u003E\n    \u003Cpath d=\"M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z\" \u002F\u003E\n  \u003C\u002Fsymbol\u003E\n\n\n  \u003Csymbol id='phone'\u003E\n    \u003Cpath d=\"M0.766667 5.50834C1.39896 8.37759 2.83884 11.0061 4.91638 13.0836C6.99393 15.1612 9.62242 16.601 12.4917 17.2333C13.3936 17.415 14.3308 17.2556 15.1221 16.7861C15.9133 16.3166 16.5022 15.5703 16.775 14.6917L17.2 13.3583L13.0333 11.2833L11.05 13.2667C9.64082 12.6594 8.3555 11.7978 7.25833 10.725C6.20046 9.62438 5.35314 8.33929 4.75833 6.93334L6.71667 4.95001L4.64167 0.78334L3.30833 1.20834C2.42623 1.48129 1.67731 2.07282 1.20746 2.86772C0.737613 3.66261 0.580479 4.60394 0.766667 5.50834V5.50834Z\"  \u002F\u003E\n  \u003C\u002Fsymbol\u003E\n\n  \u003Csymbol id='person'\u003E\n    \u003Cpath d=\"M7.00001 7.33334C7.65928 7.33334 8.30375 7.13784 8.85191 6.77157C9.40007 6.4053 9.82732 5.8847 10.0796 5.27562C10.3319 4.66653 10.3979 3.99631 10.2693 3.34971C10.1407 2.7031 9.82321 2.10916 9.35703 1.64298C8.89086 1.17681 8.29691 0.85934 7.65031 0.730722C7.00371 0.602105 6.33349 0.668116 5.7244 0.920408C5.11531 1.1727 4.59472 1.59994 4.22844 2.14811C3.86217 2.69627 3.66668 3.34074 3.66668 4.00001C3.66668 4.88406 4.01787 5.73191 4.64299 6.35703C5.26811 6.98215 6.11596 7.33334 7.00001 7.33334ZM13.425 12.5C11.7192 10.7993 9.40874 9.84434 7.00001 9.84434C4.59128 9.84434 2.2808 10.7993 0.57501 12.5L0.333344 12.75V16.5H13.6667V12.75L13.425 12.5Z\" \u002F\u003E\n  \u003C\u002Fsymbol\u003E\n\n  \u003Csymbol id=\"tick\" \u003E\n    \u003Cpath d=\"M1.16666 4.58334L4.91666 8.33334L12.4167 0.833344\" stroke=\"\" stroke-width=\"1.8\"\u002F\u003E\n  \u003C\u002Fsymbol \u003E\n\u003C\u002Fsvg\u003E\n\u003Cdiv class=\"wrapper\"\u003E";
pug_mixins["header"]({
				floatingBlock: false,
				logo: {
					href: 'index.html',
					logoIcon: __webpack_require__(8985),
					logoText: __webpack_require__(8003),
				},
				menuItems: [
					



					{text: 'О нас', href: "http://processing", submenuItems: false},
					
					{text: 'Услуги', href: "http://processing24", submenuItems: [

						{text: 'submenuItem', href: "http://1", submenuItems: false},
						
						{text: 'submenuItem', href: "http://2", submenuItems: [

							{text: 'submenuItem', href: "http://1", submenuItems: false},
							{text: 'submenuItem', href: "http://2", submenuItems: false},
							{text: 'submenuItem', href: "http://3", submenuItems: false},
						]},

						{text: 'submenuItem', href: "http://3", submenuItems: false},
					]},

					{text: 'Вакансии', href: "http://Вакансии", submenuItems: [

						{text: 'submenuItem', href: "http://1", submenuItems: false},
						{text: 'submenuItem', href: "http://2", submenuItems: false},
						{text: 'submenuItem', href: "http://3", submenuItems: false},
					]},

					{text: 'Новости', href: "http://processing24", submenuItems: false},

					{text: 'Соглашения', href: "http://processing24", submenuItems: [
						
						{text: 'submenuItem', href: "http://1", submenuItems: false},
						{text: 'submenuItem', href: "http://2", submenuItems: false},
						{text: 'submenuItem', href: "http://3", submenuItems: false},
					]},
				],
			});
pug_html = pug_html + "\u003Cmain class=\"main\"\u003E\u003Csection class=\"signup\"\u003E\u003Cdiv class=\"signup__image ibg\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(7194), true, true)+" alt=\"room\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"container\"\u003E";
pug_mixins["account-registration"]({
					title: 'Регистрация аккаунта',
					fieldName: {
						label: false,
						type: 'text',
						name: 'name',
						placeholder: 'Имя',
						tabindex: 1,
						required: true,
					},
					fieldSurname: {
						label: false,
						type: 'text',
						name: 'surname',
						placeholder: 'Фамилия',
						tabindex: 1,
						required: true,
					},
					radioButtons: {
						title: false,
						radio__1: 'Мужчина', 
						radio__2: 'Женщина', 
						name: 'radio'
					},
					maskedTextField: {
						label: 'дата рождения',
						type: 'text',
						name: 'birthday',
						placeholder: 'ДД.ММ.ГГГГ',
						tabindex: 1,
						required: true,
					},
					fieldEmail: {
						label: 'данные для входа в сервис',
						type: 'email',
						name: 'email',
						placeholder: 'Email',
						tabindex: 1,
						required: true,
					},
					fieldPassword: {
						label: false,
						type: 'password',
						name: 'password',
						placeholder: 'Пароль',
						tabindex: 1,
						required: true,
					},
					toggleButton: {
						title: false, 
						text: 'Получать спецпредложения'
					},
					buttonArrow: {
						text: 'перейти к оплате',
					},
					accountActionsText: 'Уже есть аккаунт на Toxin',
					buttonBorder: {
						text: 'войти',
					}
				});
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fmain\u003E";
pug_mixins["footer"]({
				logo:{
					href: 'index.html',
					logoIcon: __webpack_require__(8985),
					logoText: __webpack_require__(8003),
				},
				blockLogoText: 'Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»',
				navItems:[
					{
						title: "навигация", 
						links: [
							{href: 'http://chagneme', text: 'О нас'},
							{href: 'http://chagneme', text: 'Новости'},
							{href: 'http://chagneme', text: 'Служба поддержки'},
							{href: 'http://chagneme', text: 'Услуги'},
						]
					},
					{
						title: "о нас", 
						links: [
							{href: 'http://chagneme', text: 'О сервисе'},
							{href: 'http://chagneme', text: 'Наша команда'},
							{href: 'http://chagneme', text: 'Вакансии'},
							{href: 'http://chagneme', text: 'Инвесторы'},
						]
					},
					{
						title: "Служба поддержки", 
						links: [
							{href: 'http://chagneme', text: 'Соглашения'},
							{href: 'http://chagneme', text: 'Сообщества'},
							{href: 'http://chagneme', text: 'Связь с нами'},
						]
					}
				],
				subscribe: {
					title: 'Подписка',
					text: 'Получайте специальные предложения и новости сервиса',
					field: {
						js: false, 
						dropdownId: false,
						label: false, 
						type: 'email', 
						placeholder: 'Email', 
						tabindex: 1,
						arrowSvg: {
							id:'#arrow-forward',
							width: 17,
							height: 18,
						}
					}
				},
				copy:{
					text: 'Copyright © 2018 Toxin отель. Все права защищены.',
					icons:[
						{src: __webpack_require__(218), alt: 'facebook'},
						{src: __webpack_require__(7891), alt: 'instagramm'},
						{src: __webpack_require__(7216), alt: 'twiter'},
					]
				}
			});
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"pageClass" in locals_for_with?locals_for_with.pageClass:typeof pageClass!=="undefined"?pageClass:undefined,"starBorder" in locals_for_with?locals_for_with.starBorder:typeof starBorder!=="undefined"?starBorder:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ 7055:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(7835).readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ 8003:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/TOXIN.bb5455ebdcd51f8853c8.png";

/***/ }),

/***/ 8985:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/logo-toxin.3c6f79edfa2ce99846e1.png";

/***/ }),

/***/ 4308:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/star.ea976b03fa3cb68d425f.svg";

/***/ }),

/***/ 8443:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/star_border.f55146dc1e373bc88fee.svg";

/***/ }),

/***/ 7194:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/fullsignup.ef7f0b00b3915da2606f.jpg";

/***/ }),

/***/ 218:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/facebook.a2b9442ba8713c73cd52.svg";

/***/ }),

/***/ 7891:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/instagramm.cfda2a605082f5741cf6.svg";

/***/ }),

/***/ 7216:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/twiter.bb0b20f0c48bb354f7d8.svg";

/***/ }),

/***/ 7835:
/***/ (function() {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/* harmony import */ var _signup_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5954);
/* harmony import */ var _signup_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_signup_pug__WEBPACK_IMPORTED_MODULE_0__);


}();
/******/ })()
;