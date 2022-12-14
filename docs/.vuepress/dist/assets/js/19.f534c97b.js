(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{518:function(e,a,t){"use strict";t.r(a);var s=t(9),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_0419-0425"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0419-0425"}},[e._v("#")]),e._v(" 0419 - 0425")]),e._v(" "),t("h2",{attrs:{id:"_0420-rest-resource-naming-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0420-rest-resource-naming-guide"}},[e._v("#")]),e._v(" 0420 - REST Resource Naming Guide")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("A resource can be a singleton or a collection."),t("br"),e._v("\n하나의 리소스는 싱글턴 또는 컬랙션이 될 수 있다.")])]),e._v(" "),t("li",[t("p",[e._v("A resource may contain sub-collection resources also"),t("br"),e._v("\n리소스는 sub-collection 리소스를 포함할 수 있다."),t("br"),e._v(" "),t("code",[e._v("/customers/{Id}/accounts")])])])]),e._v(" "),t("h4",{attrs:{id:"rest-resource-네이밍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rest-resource-네이밍"}},[e._v("#")]),e._v(" REST Resource 네이밍")]),e._v(" "),t("p",[e._v("Use nouns to represent resources. (리소스를 표한하기 위해서 명사를 사용)"),t("br"),e._v("\nRESTful URI는 반드시 리소스 그 자체를 언급해야 하며, 리소스의 행동을 언급해서는 안된다."),t("br"),e._v("\n예를 들면, 아래와 같은 리소스들이 있을 때 URI는 다음과 같이 디자인 될 수 있다.")]),e._v(" "),t("ul",[t("li",[e._v("Users of the system")]),e._v(" "),t("li",[e._v("User Accounts")]),e._v(" "),t("li",[e._v("Network Devices etc")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://api.example.com/device-management/managed-devices \nhttp://api.example.com/device-management/managed-devices/{device-id} \nhttp://api.example.com/user-management/users/\nhttp://api.example.com/user-management/users/{id}\n")])])]),t("ol",[t("li",[e._v("document 리소스\n문서의 유형을 나타날 때는 '단수'를 사용.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://api.example.com/device-management/managed-devices/{device-id}\nhttp://api.example.com/user-management/users/{id}\nhttp://api.example.com/user-management/users/admin\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("collection 리소스\nCollection 단위의 리소스를 표시할 때는 '복수'를 사용")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://api.example.com/device-management/managed-devices\nhttp://api.example.com/user-management/users\nhttp://api.example.com/user-management/users/{id}/accounts\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("store 리소스\n저장에 관한 요청은 클라이언트가 관리하는 리소스 저장소이다. 따라서 '복수'를 사용한다")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://api.example.com/song-management/users/{id}/playlists\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[e._v("controller 리소스\n컨트롤러 리소스는 실행 가능한 기능과 함께 파라미터 혹은 리턴 값으로 이름 짓는다."),t("br"),e._v("\n이 때는 '동사'를 사용한다.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://api.example.com/cart-management/users/{id}/cart/checkout\nhttp://api.example.com/song-management/users/{id}/playlist/play\n")])])]),t("h4",{attrs:{id:"uri의-일관성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uri의-일관성"}},[e._v("#")]),e._v(" URI의 일관성")]),e._v(" "),t("ol",[t("li",[e._v("계층 구조를 표현하기 위해서 '/'를 사용한다.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://api.example.com/device-management\nhttp://api.example.com/device-management/managed-devices\nhttp://api.example.com/device-management/managed-devices/{id}\nhttp://api.example.com/device-management/managed-devices/{id}/scripts\nhttp://api.example.com/device-management/managed-devices/{id}/scripts/{id}\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[e._v("끝에 '/'가 붙지 않도록 한다.")])]),e._v(" "),t("li",[t("p",[e._v("언더바 사용은 피하며 '-'을 사용한다.")])]),e._v(" "),t("li",[t("p",[e._v("편리함 + 컨벤션을 시키지 위해서 소문자를 사용한다.")])]),e._v(" "),t("li",[t("p",[e._v("파일 확장자를 포함 하지 않는다.")])]),e._v(" "),t("li",[t("p",[e._v("URI를 사용해서 CRUD 기능의 수행되었음을 표시해서는 안된다."),t("br"),e._v("\nURI는 자원에 대ㅑ한 어떠한 행동을 나타내면 안되고, 자원을 독립적으로 식별하는 방식으로 사용되어야 한다. 어떤 기능이 수행되는지 표시하기 위해서는 HTTP 요청 방법을 사용한다.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("HTTP GET http://api.example.com/device-management/managed-devices  //Get all devices\nHTTP POST http://api.example.com/device-management/managed-devices  //Create new Device\n\nHTTP GET http://api.example.com/device-management/managed-devices/{id}  //Get device for given Id\nHTTP PUT http://api.example.com/device-management/managed-devices/{id}  //Update device for given Id\nHTTP DELETE http://api.example.com/device-management/managed-devices/{id}  //Delete device for given Id\n")])])]),t("ol",{attrs:{start:"7"}},[t("li",[e._v("쿼리스트링을 이용하는 것을 고려해라"),t("br"),e._v("\n특정 리소스의 속성을 기준으로 정렬, 필터링을 자주하게 될 수 있다.\n이를 위해서 새로운 API를 만들기보단, 입력 매개변수를 쿼리스트링에 전달하도록 한다.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);