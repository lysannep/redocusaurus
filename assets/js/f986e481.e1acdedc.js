/*! For license information please see f986e481.e1acdedc.js.LICENSE.txt */
(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[256,612],{3890:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var c=n(5773),r=n(7378),o=n(2731),s=n(4291);var u=function(e){var t=e.layoutProps,n=e.spec,u=t||{},i=u.title,a=void 0===i?"API Docs":i,p=u.description,l=void 0===p?"Open API Reference Docs for the API":p,d="object"===n.type?n.content:void 0,f="url"===n.type?n.content:void 0;return r.createElement(o.Z,(0,c.Z)({},t,{title:a,description:l}),r.createElement(s.Z,{spec:d,specUrl:f||n.specUrl}))}},4291:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var c=n(7378),r=n(1869),o=n(9237),s=n(200);var u=function(e){var t=(0,o.Z)().isDarkTheme,n=(0,r.usePluginData)("docusaurus-theme-redoc"),u=n.lightTheme,i=n.darkTheme,a=n.redocOptions,p=t?i:u,l=e.spec,d=e.specUrl,f=(0,c.useMemo)((function(){return l?new s.AppStore(l,d,Object.assign({},a,{theme:p})):null}),[l,d,a,p]);return c.createElement("div",{className:"redocusaurus"},f?c.createElement(s.Redoc,{store:f}):c.createElement(s.RedocStandalone,{spec:l,specUrl:d,options:Object.assign({},a,{theme:p})}))}},3231:function(e,t,n){"use strict";n.r(t);var c=n(7378),r=n(3890),o=n(8948);t.default=function(){return c.createElement(r.default,{layoutProps:{title:"Open API Docs",description:"Open API Reference Docs for API"},spec:{type:"url",content:(0,o.Z)("/openapi-page.yaml")}})}},9184:function(){},8002:function(){},6466:function(){},1632:function(){},1450:function(){}}]);