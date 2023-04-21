(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{434:function(v,_,t){"use strict";t.r(_);var e=t(56),o=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"浏览器面试常考知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器面试常考知识点"}},[v._v("#")]),v._v(" 浏览器面试常考知识点")]),v._v(" "),t("h2",{attrs:{id:"目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[v._v("#")]),v._v(" 目录")]),v._v(" "),t("h3",{attrs:{id:"从输入url到页面呈现发生了什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从输入url到页面呈现发生了什么"}},[v._v("#")]),v._v(" 从输入URL到页面呈现发生了什么？")]),v._v(" "),t("p",[v._v("主要可分为两大过程：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("加载过程")]),v._v(" "),t("ol",[t("li",[v._v("DNS 解析：域名 -> IP 地址")]),v._v(" "),t("li",[v._v("浏览器根据 IP 地址（利用 TCP 协议通过三次握手）向 web 服务器发起 http 请求")]),v._v(" "),t("li",[v._v("服务器处理 http 请求，并返回给浏览器")])])]),v._v(" "),t("li",[t("strong",[v._v("渲染过程")]),v._v(" "),t("ol",[t("li",[v._v("根据 HTML 代码生成 DOM Tree")]),v._v(" "),t("li",[v._v("根据 CSS 代码生成 CSSOM")]),v._v(" "),t("li",[v._v("将 DOM Tree 和 CSSOM 整合构造成 Render Tree")]),v._v(" "),t("li",[v._v("根据 Render Tree 渲染页面")]),v._v(" "),t("li",[v._v("遇到"),t("code",[v._v("<script>")]),v._v("则暂停渲染，优先加载并执行 JS 代码，完成后再继续")]),v._v(" "),t("li",[v._v("直至把 Render Tree 渲染完成")])])])]),v._v(" "),t("h3",{attrs:{id:"能不能说一说浏览器缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#能不能说一说浏览器缓存"}},[v._v("#")]),v._v(" 能不能说一说浏览器缓存?")]),v._v(" "),t("p",[v._v("浏览器缓存又分为"),t("strong",[v._v("强缓存")]),v._v("和"),t("strong",[v._v("协商缓存")]),v._v("：")]),v._v(" "),t("ul",[t("li",[v._v("首先通过 "),t("code",[v._v("Cache-Control")]),v._v(" 验证"),t("strong",[v._v("强缓存")]),v._v("是否可用，如果强缓存可用，那么直接读取缓存；")]),v._v(" "),t("li",[v._v("如果不可以，那么进入"),t("strong",[v._v("协商缓存")]),v._v("阶段，发起"),t("code",[v._v("HTTP")]),v._v("请求，服务器通过请求头中是否带上 "),t("code",[v._v("If-Modified-Since")]),v._v(" 和 "),t("code",[v._v("If-None-Match")]),v._v(" 这些条件请求字段检查资源是否更新：\n"),t("ul",[t("li",[v._v("若资源更新，那么返回资源和 "),t("strong",[t("code",[v._v("200")])]),v._v(" 状态码；")]),v._v(" "),t("li",[v._v("若资源未更新，那么告诉浏览器直接使用缓存获取资源，并返回**"),t("code",[v._v("304")]),v._v("**状态码。")])])])]),v._v(" "),t("h3",{attrs:{id:"前端代码文件如何实现缓存管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端代码文件如何实现缓存管理"}},[v._v("#")]),v._v(" 前端代码文件如何实现缓存管理？")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("这里特指除了 HTML 外的代码文件，因为 HTML 文件一般不缓存或者缓存时间很短。")])]),v._v(" "),t("li",[t("p",[v._v("一般来说，现在都会使用工具（比如"),t("code",[v._v("Webpack")]),v._v("）来打包代码，那么我们就可以对文件名进行"),t("strong",[v._v("哈希处理")]),v._v("，只有当代码修改后才会生成新的文件名。基于此，我们就可以给代码文件设置缓存有效期，比如一年时间 "),t("code",[v._v("Cache-Control: max-age=31536000")]),v._v("，这样只有当 HTML 文件中引入的文件名发生了改变才会去下载最新的代码文件，否则就一直使用缓存。")])])]),v._v(" "),t("h3",{attrs:{id:"cookie-localstorage-sessionstorage-indexdb之间的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie-localstorage-sessionstorage-indexdb之间的区别"}},[v._v("#")]),v._v(" cookie，localStorage，sessionStorage，indexDB之间的区别？")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("特性\\存储方式")]),v._v(" "),t("th",[v._v("cookie")]),v._v(" "),t("th",[v._v("localStorage")]),v._v(" "),t("th",[v._v("sessionStorage")]),v._v(" "),t("th",[v._v("indexDB")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("数据生命周期")]),v._v(" "),t("td",[v._v("一般由服务器生成，可以设置过期时间")]),v._v(" "),t("td",[v._v("除非被清理，否则一直存在")]),v._v(" "),t("td",[v._v("页面关闭就清理")]),v._v(" "),t("td",[v._v("除非被清理，否则一直存在")])]),v._v(" "),t("tr",[t("td",[v._v("数据存储大小")]),v._v(" "),t("td",[v._v("4K")]),v._v(" "),t("td",[v._v("5M")]),v._v(" "),t("td",[v._v("5M")]),v._v(" "),t("td",[v._v("无限")])]),v._v(" "),t("tr",[t("td",[v._v("与服务端通信")]),v._v(" "),t("td",[v._v("每次都会携带在 header 中，影响请求性能")]),v._v(" "),t("td",[v._v("不参与")]),v._v(" "),t("td",[v._v("不参与")]),v._v(" "),t("td",[v._v("不参与")])])])]),v._v(" "),t("ul",[t("li",[v._v("从上表可知，"),t("code",[v._v("cookie")]),v._v(" 已经不建议用于存储。如果没有大量数据存储需求的话，可以使用 "),t("code",[v._v("localStorage")]),v._v(" 和 "),t("code",[v._v("sessionStorage")]),v._v("。对于不怎么改变的数据尽量使用 "),t("code",[v._v("localStorage")]),v._v(" 存储，否则可以用 "),t("code",[v._v("sessionStorage")]),v._v(" 存储。另外，对于 "),t("code",[v._v("cookie")]),v._v(" 来说，我们还需要注意安全性，在"),t("code",[v._v("HttpOnly")]),v._v("为 false 的情况下，"),t("code",[v._v("cookie")]),v._v("信息能直接通过 JS 脚本来读取。")])])])}),[],!1,null,null,null);_.default=o.exports}}]);