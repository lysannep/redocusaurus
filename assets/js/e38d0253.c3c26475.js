"use strict";(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[814],{5318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3128:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(5773),o=n(808),a=(n(7378),n(5318)),s=["components"],i={title:"Installation",sidebar_position:0,author:"Rohit Gohri",author_url:"https://rohit.page"},u=void 0,l={unversionedId:"getting-started/Installation",id:"getting-started/Installation",title:"Installation",description:"1. Install redocusaurus:",source:"@site/docs/getting-started/Installation.md",sourceDirName:"getting-started",slug:"/getting-started/Installation",permalink:"/redocusaurus/docs/getting-started/Installation",draft:!1,editUrl:"https://github.com/rohit-gohri/redocusaurus/edit/main/website/docs/getting-started/Installation.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Installation",sidebar_position:0,author:"Rohit Gohri",author_url:"https://rohit.page"},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/redocusaurus/docs/"},next:{title:"Plugin Options",permalink:"/redocusaurus/docs/getting-started/plugin-options"}},p={},c=[{value:"Options",id:"options",level:2},{value:"specs",id:"specs",level:3},{value:"theme",id:"theme",level:3}],d={toc:c},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install redocusaurus:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/v/redocusaurus?style=flat-square",alt:"npm"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm i --save redocusaurus\n# OR\nyarn add redocusaurus\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add it as a preset to your docusaurus config along with ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/using-plugins#docusauruspreset-classic"},"@docusaurus/preset-classic")," and pass options:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pass it a path to a local OpenAPI YAML file"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// docusaurus.config.js\n\nmodule.exports = {\n  // ...\n  presets: [\n    // .. Your other presets' config \n    '@docusaurus/preset-classic',\n    // Redocusaurus config\n    [\n      'redocusaurus',\n      {\n        // Plugin Options for loading OpenAPI files\n        specs: [\n          {\n            spec: 'openapi/openapi.yaml',\n            route: '/api/',\n          },\n        ],\n        // Theme Options for modifying how redoc renders them\n        theme: {\n          // Change with your site colors\n          primaryColor: '#1890ff',\n        },\n      },\n    ],\n  ],\n  // ...\n};\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pass it a OpenAPI spec URL"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// docusaurus.config.js\n\nmodule.exports = {\n  // ...\n  presets: [\n    // .. Your other presets' config \n    '@docusaurus/preset-classic',\n    // Redocusaurus config\n    [\n      'redocusaurus',\n      {\n        // Plugin Options for loading OpenAPI files\n        specs: [\n          {\n            spec: 'https://redocly.github.io/redoc/openapi.yaml',\n            route: '/api/',\n          },\n        ],\n        // Theme Options for modifying how redoc renders them\n        theme: {\n          // Change with your site colors\n          primaryColor: '#1890ff',\n        },\n      },\n    ],\n  ],\n  // ...\n};\n")))))),(0,a.kt)("p",null,"The API Doc will be available at the path specific by ",(0,a.kt)("inlineCode",{parentName:"p"},"route"),". To skip adding a\nroute altogether just don't set the ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," property. You will still be\nable to reference schema elements manually using ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/schema-imports"},"Schema Imports")," or create Custom React Pages using the data and theme components."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"specs"},"specs"),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"array")," of plugin options, see ",(0,a.kt)("a",{parentName:"p",href:"/redocusaurus/docs/getting-started/plugin-options"},"plugin options")," for individual option details."),(0,a.kt)("h3",{id:"theme"},"theme"),(0,a.kt)("p",null,"Pass options to customize the theme, see ",(0,a.kt)("a",{parentName:"p",href:"/redocusaurus/docs/getting-started/theme-options"},"theme options")," for individual option details."))}f.isMDXComponent=!0}}]);