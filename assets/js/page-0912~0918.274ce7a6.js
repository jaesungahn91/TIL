(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{733:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_0912-0918"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0912-0918"}},[t._v("#")]),t._v(" 0912 ~ 0918")]),t._v(" "),a("h2",{attrs:{id:"_0913-http의-진화-과정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0913-http의-진화-과정"}},[t._v("#")]),t._v(" 0913 - HTTP의 진화 과정")]),t._v(" "),a("ul",[a("li",[t._v("HTTP/1.1: ASCII over TCP")]),t._v(" "),a("li",[t._v("HTTP/2: Binary Multiplexed over SPDY(TCP)")]),t._v(" "),a("li",[t._v("HTTP/3: Binary over Multiplexed QUIC(UDP)")])]),t._v(" "),a("h3",{attrs:{id:"http-1-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1"}},[t._v("#")]),t._v(" HTTP/1.1")]),t._v(" "),a("ul",[a("li",[t._v("연결 상태 유지")]),t._v(" "),a("li",[t._v("파이프라이닝")]),t._v(" "),a("li",[t._v("HOLB 문제")]),t._v(" "),a("li",[t._v("헤더 중복 문제")]),t._v(" "),a("li",[t._v("HTTPS/RESTful API의 탄생")])]),t._v(" "),a("h3",{attrs:{id:"http-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-2"}},[t._v("#")]),t._v(" HTTP/2")]),t._v(" "),a("ul",[a("li",[t._v("TCP 기반의 SPDY 프로토콜 -> HTTPS 강제")]),t._v(" "),a("li",[t._v("이진 프로토콜(바이너리 프레이밍)")]),t._v(" "),a("li",[t._v("스트림, 메시지, 프레임으로 구분")]),t._v(" "),a("li",[t._v("멀티플렉싱(응답 다중화) -> HOLB 문제 해결")]),t._v(" "),a("li",[t._v("HPACK -> 헤더 중복 문제 해결")]),t._v(" "),a("li",[t._v("서버 푸시")]),t._v(" "),a("li",[t._v("스트림 별 우선 순위 설정")]),t._v(" "),a("li",[t._v("TCP 자체의 HOLB 문제")])]),t._v(" "),a("h3",{attrs:{id:"http-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-3"}},[t._v("#")]),t._v(" HTTP/3")]),t._v(" "),a("ul",[a("li",[t._v("UDP 기반의 QUIC 프로토콜")]),t._v(" "),a("li",[t._v("독립 스트림 -> TCP HOLB 문제 해결")]),t._v(" "),a("li",[t._v("QPACK -> 헤더 압축 문제 개선")]),t._v(" "),a("li",[t._v("캐싱을 이용한 ORTT")]),t._v(" "),a("li",[t._v("서버 푸시")]),t._v(" "),a("li",[t._v("스트림 별 우선 순위")]),t._v(" "),a("li",[t._v("Connection ID 기반")]),t._v(" "),a("li",[t._v("TLS -> HTTPS 강제")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_0914-비트-연산"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0914-비트-연산"}},[t._v("#")]),t._v(" 0914 - 비트 연산")]),t._v(" "),a("h3",{attrs:{id:"비트-단위-연산-bitwise-operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비트-단위-연산-bitwise-operation"}},[t._v("#")]),t._v(" 비트 단위 연산(bitwise operation)")]),t._v(" "),a("p",[t._v("컴퓨터는 모든 데이터를 비트(bit) 단위로 표현하고 처리한다."),a("br"),t._v("\n과거에는 개발자가 직접 비트 단위 연산을 사용하여, 복잡한 연산을 훨씬 더 빠르고 효율적으로 수행해야만 했다."),a("br"),t._v("\n하지만 하드웨어의 발달로 이제는 비트 단위까지 생각하지 않더라도, 충분히 빠른 프로그램을 작성할 수 있게 됐다.")]),t._v(" "),a("p",[t._v("그러나 아직도 하드웨어 관련 프로그래밍이나 시스템 프로그래밍등 제한된 자원을 가진 시스템을 위한 프로그램에서는 비트 단위의 연산이 자주 사용되고 있다."),a("br"),t._v("\n이러한 비트 단위 연산을 통해 사용되는 메모리 공간을 줄이거나, 성능의 향상을 기대할 수 있다.")]),t._v(" "),a("h3",{attrs:{id:"비트-연산자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비트-연산자"}},[t._v("#")]),t._v(" 비트 연산자")]),t._v(" "),a("p",[t._v("비트 연산자는 비트(bit) 단위로 논리 연산을 할 때 사용하는 연산자이다."),a("br"),t._v("\n또한, 왼쪽이나 오른쪽으로 전체 비트를 이동시킬 때에도 사용한다.")]),t._v(" "),a("ul",[a("li",[t._v("~ : 비트를 1이면 0으로, 0이면 1로 반전시킴. (비트 NOT 연산)")]),t._v(" "),a("li",[t._v("& : 대응되는 비트가 모두 1이면 1을 반환함. (비트 AND 연산)")]),t._v(" "),a("li",[t._v("| : 대응되는 비트 중에서 하나라도 1이면 1을 반환함. (비트 OR 연산)")]),t._v(" "),a("li",[t._v("^ : 대응되는 비트가 서로 다르면 1을 반환함. (비트 XOR 연산)")]),t._v(" "),a("li",[t._v("<< : 지정한 수만큼 비트들을 전부 왼쪽으로 이동시킴. (left shift 연산)")]),t._v(" "),a("li",[a("blockquote",[a("blockquote",[a("p",[t._v(": 지정한 수만큼 비트들을 전부 오른쪽으로 이동시킴. (right shift 연산)")])])])])]),t._v(" "),a("h3",{attrs:{id:"비트연산-관련-용어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비트연산-관련-용어"}},[t._v("#")]),t._v(" 비트연산 관련 용어")]),t._v(" "),a("h4",{attrs:{id:"비트-필드-bit-field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비트-필드-bit-field"}},[t._v("#")]),t._v(" 비트 필드(bit field)")]),t._v(" "),a("p",[t._v("인접한 비트들의 연속적인 공간"),a("br"),t._v("\nex)")]),t._v(" "),a("ul",[a("li",[t._v("char : 8bit(1byte) 비트 필드를 갖는 자료형")]),t._v(" "),a("li",[t._v("int, float : 32bit(4byte) 비트 필드를 갖는 자료형")])]),t._v(" "),a("h4",{attrs:{id:"비트-플래그-bit-flag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비트-플래그-bit-flag"}},[t._v("#")]),t._v(" 비트 플래그(bit flag)")]),t._v(" "),a("p",[t._v("비트 필드에서 비트들의 상태값을 확인 하기 위한 특정 값"),a("br"),t._v("\n(깃발을 통해 어떤 상태를 확인하듯이, bit를 통해 어떤 상태를 확인 한다는 의미)"),a("br"),t._v("\n비트 플래그는 특정 상태값을 확인하거나, 비트를 조작하는데 사용 될 수 있다."),a("br"),t._v("\n플래그(flag)라고도 한다. 굳이 구분하자면 어감상 다음과 같은 차이가 있을 수 있다.")]),t._v(" "),a("ul",[a("li",[t._v("bit flag : 특정 단일 비트 값이 1로 세팅 되어 있는 경우")]),t._v(" "),a("li",[t._v("flag : 1개 이상의 bit값이 1로 되어 있는 경우, bit flag를 결합해서 하나의 새로운 flag를 만들 수 있따.")])]),t._v(" "),a("h4",{attrs:{id:"비트마스트-bit-masking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비트마스트-bit-masking"}},[t._v("#")]),t._v(" 비트마스트(bit masking)")]),t._v(" "),a("p",[t._v("비트 연산에 사용되는 플래그"),a("br"),t._v("\n즉, 플래그인데 특정 연산에 사용될 때 마스크라고도 한다."),a("br"),t._v("\n마스크를 사용한 비트 연사을 '비트 마스킹'이라고 한다."),a("br"),t._v("\n활용 예\n이미지 마스킹, IP 주소의 mask 값, 해시 테이블")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_0918-reflectiontestutils를-통한-private-메소드-테스트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0918-reflectiontestutils를-통한-private-메소드-테스트"}},[t._v("#")]),t._v(" 0918 - ReflectionTestUtils를 통한 private 메소드 테스트")]),t._v(" "),a("p",[t._v("private 메소드를 테스트 하는 방법은 크게 두가지가 있다.")]),t._v(" "),a("ol",[a("li",[t._v("스프링 테스트 유틸")]),t._v(" "),a("li",[t._v("자바 lang에서 제공하는 기능")])]),t._v(" "),a("h3",{attrs:{id:"reflectiontestutils"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflectiontestutils"}},[t._v("#")]),t._v(" ReflectionTestUtils")]),t._v(" "),a("blockquote",[a("p",[t._v("ReflectionTestUtils is a collection of reflection-based utility methods. You can use these methods in testing scenarios where you need to change the value of a constant, set a non-public field, invoke a non-public setter method, or invoke a non-public configuration or lifecycle callback method when testing application code for use cases such as the following:")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Getter")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReflectionTestUtilsComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" privateValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("privateMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        privateValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        privateValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" privateValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("private 변수 주입")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" targetClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" targetClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" targetObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" targetClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" targetObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" targetObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testPrivateValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReflectionTestUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reflectionTestUtilsComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"privateValue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ReflectionTestUtils.setField(대상 객체, "변수명", 원하는 값);')]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Assertions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEquals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reflectionTestUtilsComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrivateValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("private 메소드 테스트")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invokeMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" targetClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invokeMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" targetObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" targetClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invokeMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testPrivateMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReflectionTestUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reflectionTestUtilsComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"privateValue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ReflectionTestUtils.setField(대상 객체, "변수명", 원하는 값);')]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Assertions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEquals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("103")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReflectionTestUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invokeMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reflectionTestUtilsComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"privateMethod"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ReflectionTestUtils.invokeMethod(대상 객체, "메소드(함수)명", 인자);')]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Assertions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEquals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("103")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reflectionTestUtilsComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrivateValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);