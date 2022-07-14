/*! For license information please see 2.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{78:function(n,e,o){"use strict";var t=o(0),r=o.n(t),a=o(4),i=o.n(a),l=o(6).d.button.withConfig({displayName:"components__Button",componentId:"sc-kjvw77-0"})(["width:100px;height:100px;margin:auto;padding:10px;color:",';text-align:center;font:normal normal normal 54px/60px "Gill Sans",sans-serif;border:1px solid #707070;border-radius:30px;background-color:',";cursor:pointer;transition:0.3s;&:hover{color:#ffffff;background-color:",";border-color:transparent;}&:disabled{opacity:0.5;}"],(function(n){return n.schema.textColour}),(function(n){return n.schema.buttonColour}),(function(n){return n.schema.buttonHoverColour||"#bababa"})),c=o(12),s=o(8);e.a=function(n){var e=n.value,o=n.onBtnClick,t=n.isDisableBtn,a=Object(c.d)((function(n){return n.appReducer})).themeValue,i="Light theme"===a?s.a.appLightTheme:"Colored theme"===a?s.a.colourTheme:s.a.appDarkTheme;return r.a.createElement(l,{schema:i,onClick:o,disabled:t&&"C"!==e},e)};l.propTypes={value:i.a.string,onBtnClick:i.a.func}},88:function(n,e,o){"use strict";o.r(e);var t=o(0),r=o.n(t),a=o(24),i=o(6),l=i.d.div.withConfig({displayName:"components__Settings",componentId:"sc-pw2gmz-0"})(["display:flex;flex-direction:column;align-items:flex-start;max-width:1280px;margin:auto;padding:20px;color:",";background-color:inherit;select{padding:28px;color:",";background-color:",";transition:0.3s;&:hover,&:focus{color:white;background-color:",';}}button{width:400px;height:100px;padding:28px;margin:20px 0;text-align:left;font:normal normal normal 32px/38px "Gill Sans",sans-serif;border:2px solid #434343;border-radius:8px;cursor:pointer;transition:0.3s;&:hover{color:#ffffff;background-color:',";}}"],(function(n){return n.schema.textColour}),(function(n){return n.schema.textColour}),(function(n){return n.schema.buttonColour}),(function(n){return n.schema.buttonHoverColour||"#bababa"}),(function(n){return n.schema.buttonHoverColour||"#bababa"})),c=i.d.h3.withConfig({displayName:"components__Heading",componentId:"sc-pw2gmz-1"})(['color:inherit;font:normal normal normal 64px/77px "Gill Sans",sans-serif;']),s=i.d.h4.withConfig({displayName:"components__SelectHeading",componentId:"sc-pw2gmz-2"})(['margin:20px 0 0 0;font:normal normal normal 24px/29px "Gill Sans",sans-serif;']),u=o(4),p=o.n(u),m=i.d.select.withConfig({displayName:"components__Select",componentId:"sc-5jxxw-0"})(['width:400px;padding:28px;margin:20px 0;font:normal normal normal 32px/38px "Gill Sans",sans-serif;border:2px solid #434343;border-radius:8px;cursor:pointer;option{width:100%;cursor:pointer;}']),d=function(n){var e=n.options,o=n.onChange,t=n.onChangeOption,a=n.themeValue,i=e?e.map((function(n,e){return r.a.createElement("option",{key:n+"-"+e,value:n},n)})):[];return r.a.createElement(m,{onChange:function(n){t&&t(n.currentTarget.value),o&&o(n)},value:a,id:"selectContainer"},i)};m.propTypes={options:p.a.array,onChange:p.a.func,onChangeOption:p.a.func};var h=o(78),f=o(12),g=o(23),x=o(2),b=o(8),C=function(){var n=Object(f.c)(),e=Object(f.d)((function(n){return n.appReducer})).themeValue,o="Light theme"===e?b.a.appLightTheme:"Colored theme"===e?b.a.colourTheme:b.a.appDarkTheme;return r.a.createElement(l,{id:"settingsContainer",schema:o},r.a.createElement(c,{id:"settings"},"Settings"),r.a.createElement(s,null,"Switch theme"),r.a.createElement(d,{options:x.d,themeValue:e,onChangeOption:function(e){return n(g.a.setToggleTheme(e))}}),r.a.createElement(h.a,{value:"Clear all history",onBtnClick:function(){return n(g.a.clearHistory())}},"Clear all history"))};e.default=function(){return r.a.createElement(a.a,null,r.a.createElement(C,null))}}}]);