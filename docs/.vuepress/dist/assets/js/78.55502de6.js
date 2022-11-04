(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{430:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_1031-1106"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1031-1106"}},[t._v("#")]),t._v(" 1031 ~ 1106")]),t._v(" "),a("h2",{attrs:{id:"_1031-gradle-implementation-vs-compile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1031-gradle-implementation-vs-compile"}},[t._v("#")]),t._v(" 1031 - [Gradle] implementation vs compile")]),t._v(" "),a("p",[a("strong",[t._v("[ api(compile) ]")])]),t._v(" "),a("blockquote",[a("p",[t._v("The dependencies required to compile the production source of the project which are part of the API exposed by the project. For example the project uses Guava and exposes public interfaces with Guava classes in their method signatures.")])]),t._v(" "),a("p",[a("strong",[t._v("[ implementation ]")])]),t._v(" "),a("blockquote",[a("p",[t._v("The dependencies required to compile the production source of the project which are not part of the API exposed by the project. For example the project uses Hibernate for its internal persistence layer implementation.")])]),t._v(" "),a("p",[t._v("compile은 상위 모듈까지 가져온다. compile은 implementation 보다 더 많은 라이브러리를 빌드한다. 예를 들어 다음과 같이 의존하는 관계의 프로젝트 세 개가 있다고 가정했을 때")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("myApp -> mySpring -> myJava\n")])])]),a("p",[t._v("compile을 사용해서 mySpring을 빌드하게 되면 의존하고 있는 myJava까지 함께 빌드한다."),a("br"),t._v("\nimplementation을 사용해서 빌드하면 mySpring 모듈만 가져오기 때문에 빌드 속도가 빠르고 필요한 API만 노출해서 사용할 수 있다. 또한 complie은 deprecated 되고 api로 대체됐다.")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_1103-커서-기반-페이지네이션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1103-커서-기반-페이지네이션"}},[t._v("#")]),t._v(" 1103 - 커서 기반 페이지네이션")]),t._v(" "),a("p",[a("strong",[t._v("[ 오프셋 기반 페지 네션의 한계 ]")])]),t._v(" "),a("ul",[a("li",[t._v("각각의 페이지를 요청하는 사이에 데이터의 변화가 있는 경우 중복 데이터가 노출된다.")]),t._v(" "),a("li",[t._v("대부분의 RDBMS에서 OFFSET 쿼리의 퍼포먼스 이슈가 있다.")])]),t._v(" "),a("blockquote",[a("p",[t._v("오프셋은 단순히 레코드를 조회하기 전에 데이터 베이스가 건너 뛰는 레코드의 수다."),a("br"),t._v("\n즉, 요청한 데이터를 바로 조회하는 것이 아니라 이전의 데이터를 모두 조회하고 그 ResultSet에서 오프셋을 조건으로 잘라내는 것이다.")])]),t._v(" "),a("h3",{attrs:{id:"커서-기반-페이지네이션-cursor-based-pagination-이란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#커서-기반-페이지네이션-cursor-based-pagination-이란"}},[t._v("#")]),t._v(" 커서 기반 페이지네이션(Cursor-based Pagination)이란?")]),t._v(" "),a("ul",[a("li",[t._v("커서 개념을 사용한다. 사용자에게 응답해준 마지막의 데이터의 식별자 값이 Cursor가 된다.")]),t._v(" "),a("li",[t._v("커서를 기준으로 다음 n개의 데이터를 응답해주는 방식이다.")])]),t._v(" "),a("p",[a("strong",[t._v("[ 구현 ]")])]),t._v(" "),a("ul",[a("li",[t._v("Querydsl")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Page")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Club")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findClubsByCondition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" cursorId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClubFindCondition")]),t._v(" condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Account")]),t._v(" loginAccount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                       "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pageable")]),t._v(" pageable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountClub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" findAccountClubs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" queryFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectFrom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("accountClub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("where")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cursorId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cursorId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("limit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pageable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPageSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BooleanExpression")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cursorId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" cursorId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cursorId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" club"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cursorId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BookPaginationDto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("paginationNoOffset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" bookId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" pageSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" queryFactory\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Projections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BookPaginationDto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("as")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bookId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bookNo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("where")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ltBookId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bookId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("like")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("orderBy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("limit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pageSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BooleanExpression")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ltBookId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" bookId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bookId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BooleanExpression 자리에 null이 반환되면 조건문에서 자동으로 제거된다")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bookId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("[ 단점 ]")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("where에 사용되는 기준 Key가 중복이 가능할 경우")]),t._v(" "),a("ul",[a("li",[t._v("이를 테면 group by 등으로 기준으로 잡을 Key가 중복이 될 경우 정확한 결과를 반환할 수 없어서 사용할 수가 없다.")])])]),t._v(" "),a("li",[a("p",[t._v("UX관점에서 페이징 버튼 형식으로 해야할 경우 사용불가")])])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_1104-커버링-인덱스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1104-커버링-인덱스"}},[t._v("#")]),t._v(" 1104 - 커버링 인덱스")]),t._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);s.default=e.exports}}]);