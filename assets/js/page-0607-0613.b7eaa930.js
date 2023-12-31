(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{680:function(t,s,a){"use strict";a.r(s);var r=a(2),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_0607-0613"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0607-0613"}},[t._v("#")]),t._v(" 0607 - 0613")]),t._v(" "),a("h2",{attrs:{id:"_0609-무중단-배포를-위한-환경-이해하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0609-무중단-배포를-위한-환경-이해하기"}},[t._v("#")]),t._v(" 0609 - 무중단 배포를 위한 환경 이해하기")]),t._v(" "),a("h3",{attrs:{id:"무중단-배포"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#무중단-배포"}},[t._v("#")]),t._v(" 무중단 배포?")]),t._v(" "),a("blockquote",[a("p",[t._v("배포를 중단없이 한다는 것"),a("br"),t._v("\n배포(deploy)란 개발환경에서 새로 개발된 코드를 패키징하여 서버에서 새로운 버전의 애플리케이션을 실행")])]),t._v(" "),a("h3",{attrs:{id:"배포-과정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#배포-과정"}},[t._v("#")]),t._v(" 배포 과정")]),t._v(" "),a("ul",[a("li",[t._v("일반적인 배포에서의 애플리케이션 중단")])]),t._v(" "),a("ol",[a("li",[t._v("이전 버전의 애플리케이션을 종료")]),t._v(" "),a("li",[t._v("새로운 버전 애플리케이션을 실행")]),t._v(" "),a("li",[t._v("새로운 버전 애플리케이션이 요청을 받을 준비가 될 때까지 서비스 중단\n=> 서비스가 중단되는 시간을 다운타임(downtime)이라한다.")])]),t._v(" "),a("h3",{attrs:{id:"무중단-배포-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#무중단-배포-2"}},[t._v("#")]),t._v(" 무중단 배포")]),t._v(" "),a("p",[t._v("애플리케이션 서버와 사용자 사이에서 요청을 중계해주는 "),a("code",[t._v("리버스 프록시(Reverse Proxy)")]),t._v(" 서버를 사용. => "),a("code",[t._v("롤링(Rolling) 배포")])]),t._v(" "),a("ul",[a("li",[t._v("프록시란?\n"),a("ul",[a("li",[t._v("일반적인 프록시는 클라이언트를 숨겨주는 역할")]),t._v(" "),a("li",[t._v("대리자")]),t._v(" "),a("li",[t._v("리버스 프록시는 프록시와 반대로 서버를 숨겨주는 역할")])])]),t._v(" "),a("li",[t._v("로드밸런싱이란?\n"),a("ul",[a("li",[t._v("트래픽을 분산하여 각 서버가 받는 부하를 분산하는 것")])])]),t._v(" "),a("li",[t._v("Nginx\n"),a("ul",[a("li",[t._v("무중단 배포와 로드밸런싱을 위해 사용")])])]),t._v(" "),a("li",[t._v("여러가지 배포 방식\n"),a("ul",[a("li",[t._v("롤링 배포, 블루그린 배포, 카나리 배포")])])])]),t._v(" "),a("h3",{attrs:{id:"트레픽이-많아졌을-때의-로드밸런싱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#트레픽이-많아졌을-때의-로드밸런싱"}},[t._v("#")]),t._v(" 트레픽이 많아졌을 때의 로드밸런싱")]),t._v(" "),a("ol",[a("li",[t._v("Nginx가 실행되는 서버의 Scale-up")]),t._v(" "),a("li",[t._v("네트워크 장치로 로드 밸런싱(하드웨어 적으로)\n"),a("ul",[a("li",[t._v("L4 스위치 또는 L7 스위치")])])]),t._v(" "),a("li",[t._v("DNS 리다리렉션")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_0611-stringtokenizer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0611-stringtokenizer"}},[t._v("#")]),t._v(" 0611 - StringTokenizer")]),t._v(" "),a("h3",{attrs:{id:"stringtokenizer-생성자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stringtokenizer-생성자"}},[t._v("#")]),t._v(" StringTokenizer 생성자")]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 띄어쓰기 기준으로 문자열을 분리")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringTokenizer")]),t._v(" st "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringTokenizer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("문자열"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 구분자를 기준으로 문자열을 분리 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringTokenizer")]),t._v(" st "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringTokenizer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("문자열"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 구분자"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 구분자도 토큰으로 넣을지 (true)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringTokenizer")]),t._v(" st "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringTokenizer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("문자열"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 구분자"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"stringtokenizer-메서드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stringtokenizer-메서드"}},[t._v("#")]),t._v(" StringTokenizer 메서드")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/49400801/121779057-c85d6000-cbd4-11eb-89af-5b76830bc72b.png",alt:"st_메서드"}})]),t._v(" "),a("h3",{attrs:{id:"stringtokenizer-vs-split"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stringtokenizer-vs-split"}},[t._v("#")]),t._v(" StringTokenizer vs Split")]),t._v(" "),a("ol",[a("li",[t._v("StringTokenizer는 java.util에 포함되어 있는 클래스, split는 String클래스에 속해있는 메소드.")]),t._v(" "),a("li",[t._v("StringTokenizer는 문자 또는 문자열을 구분, split는 정규표현식으로 구분")]),t._v(" "),a("li",[t._v("StringTokenizer는 빈 문자열을 토큰으로 인식X, split는 빈 문자열을 토큰으로 인식")]),t._v(" "),a("li",[t._v("StringTokenizer는 결과값이 문자열, split는 결과 값이 문자열 배열")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_0612-tdd-bdd-ddd-rdd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0612-tdd-bdd-ddd-rdd"}},[t._v("#")]),t._v(" 0612 - TDD, BDD, DDD, RDD")]),t._v(" "),a("h3",{attrs:{id:"tdd-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tdd-test"}},[t._v("#")]),t._v(" TDD (Test)")]),t._v(" "),a("ul",[a("li",[t._v("테스트를 먼저 작성하고 해당 테스트 케이스를 통과하는 코드를 작성")]),t._v(" "),a("li",[t._v("그 후 상황에 맞게 리팩토링 과정을 거침")]),t._v(" "),a("li",[t._v("코드 생산성에 문제가 있고, 러닝커브가 크다.")])]),t._v(" "),a("h3",{attrs:{id:"bdd-behavior"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bdd-behavior"}},[t._v("#")]),t._v(" BDD (Behavior)")]),t._v(" "),a("ul",[a("li",[t._v("TDD에서 한발 더 나아가 테스트 케이스 자체가 요구사항이 되는 개발 방식")]),t._v(" "),a("li",[t._v("TDD에서는 유닛 테스트로 작성 된 테스트 케이스에 대한 문서를 작성했지만, BDD는 이것을 결합 테스트와 시나리오 테스트까지 확장하여 각각에 해당하는 문서를 대체한다.")])]),t._v(" "),a("h3",{attrs:{id:"ddd-domain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ddd-domain"}},[t._v("#")]),t._v(" DDD (Domain)")]),t._v(" "),a("ul",[a("li",[t._v("도메인 그 자체와 도메인 로직에 초점을 맞춘다.")]),t._v(" "),a("li",[t._v("일반적으로 사용하는 데이터 중심의 접근법을 탈피하여 순수한 도메인의 모델과 로직에 집중한다.")])]),t._v(" "),a("h3",{attrs:{id:"rdd-responsibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdd-responsibility"}},[t._v("#")]),t._v(" RDD (Responsibility)")]),t._v(" "),a("ul",[a("li",[t._v("책임을 찾고 책임을 수행한 적절한 객체를 찾아 책임을 할당하는 방식으로 협력을 설계하는 방법")]),t._v(" "),a("li",[t._v("객체의 구현이 아닌 채임에 집중")])])])}),[],!1,null,null,null);s.default=e.exports}}]);