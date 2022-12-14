(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{531:function(t,a,s){"use strict";s.r(a);var n=s(9),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_0823-0829"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0823-0829"}},[t._v("#")]),t._v(" 0823 - 0829")]),t._v(" "),s("h2",{attrs:{id:"_0824-configurationproperties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0824-configurationproperties"}},[t._v("#")]),t._v(" 0824 - @ConfigurationProperties")]),t._v(" "),s("h3",{attrs:{id:"configurationproperties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configurationproperties"}},[t._v("#")]),t._v(" @ConfigurationProperties")]),t._v(" "),s("blockquote",[s("p",[t._v("ConfigurationProperties는 properties 파일에 설정한 property 값을 자바 object에 매핑하여 해당 값을 사용하기 편하게 해준다.")])]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConfigurationProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test.sample"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestSampleProperties")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" testStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" testInt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("java class의 변수명은 camel case")]),t._v(" "),s("li",[t._v("properties는 -하이픈을 사용한 snake case")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("test.sample.test-str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("테스트 문자열 값 test.sample.test-int=1234")]),t._v("\n")])])]),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableConfigurationProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestSampleProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PropertySource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"classpath:TestSample.properties"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestSampleConfiguration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("@EnableConfigurationProperties 선언은 해당 Properties class로 object를 생성.")]),t._v(" "),s("li",[t._v("@PropertySource는 properties 파일을 호출\n"),s("ul",[s("li",[t._v("여러개 선언 가능 prefix로 구분")])])])]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Service")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestSampleService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestSampleProperties")]),t._v(" testSampleProperties"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" testStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" testSampleProperties"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTestStr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 해당 값을 사용 ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"conditional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conditional"}},[t._v("#")]),t._v(" @Conditional*")]),t._v(" "),s("h4",{attrs:{id:"conditionalonclass"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conditionalonclass"}},[t._v("#")]),t._v(" @ConditionalOnClass")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EnableAspectJAutoProxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aspect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Advice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotatedElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[t._v("해당 설정된 class가 있는지 여부를 확인. 참조된 jar강 있는지 파악")])]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spring.aop"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auto"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" havingValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" matchIfMissing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[t._v("설정된 property값이 있는지 확인")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_0825-git-hub-인증-관련-이슈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0825-git-hub-인증-관련-이슈"}},[t._v("#")]),t._v(" 0825 - git hub 인증 관련 이슈")]),t._v(" "),s("h3",{attrs:{id:"소스트리-계정정보-수동-삭제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#소스트리-계정정보-수동-삭제"}},[t._v("#")]),t._v(" 소스트리 계정정보 수동 삭제")]),t._v(" "),s("ul",[s("li",[t._v("소스트리를 이용할 시 권한 오류로 실패")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("remote: HTTP Basic: Access denied fatal: Authentication failed for https://gitlab.com/{{project}}\n")])])]),s("ul",[s("li",[t._v("설정 파일 제거")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("* Windows \n~\\AppData\\Local\\Atlassian\\SourceTree\\userhost ~\\AppData\\Local\\Atlassian\\SourceTree\\passwd \n\n* Mac OS \n~/Library/Application Support/SourceTree\n")])])]),s("ul",[s("li",[s("code",[t._v("hostusernamemap")]),t._v(", "),s("code",[t._v("{계정}@STAuth-github.com")]),t._v(" 파일 삭제")])]),t._v(" "),s("h3",{attrs:{id:"소스트리-토큰으로-인증하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#소스트리-토큰으로-인증하기"}},[t._v("#")]),t._v(" 소스트리 토큰으로 인증하기")]),t._v(" "),s("blockquote",[s("p",[t._v("8월 13일 이후 github 인증 정책 변경")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Github\nSettings\nDeveloper settings\nPersonal access tokens\nGenerate new token\n")])])]),s("ul",[s("li",[t._v("토큰 발행")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("계정추가\n깃허브 선택\n베이직 선택\n사용자 이름\n암호 = Access token \n프로토콜 SSH\n")])])]),s("ul",[s("li",[t._v("소스트리 계정추가")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_0826-어노테이션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0826-어노테이션"}},[t._v("#")]),t._v(" 0826 - 어노테이션")]),t._v(" "),s("h3",{attrs:{id:"어노테이션이란"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#어노테이션이란"}},[t._v("#")]),t._v(" 어노테이션이란?")]),t._v(" "),s("blockquote",[s("p",[t._v("어노테이션이란 메타데이터라고 볼 수 있다. 프로그램 실행 관점에서 보면 프로그램이 처리할 메인 데이터가 아니라 실행과정에서 데이터를 어떻게 처리할 것인지 알려주는 서브데이터라고 볼 수 있다.")])]),t._v(" "),s("h3",{attrs:{id:"어노테이션의-기능"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#어노테이션의-기능"}},[t._v("#")]),t._v(" 어노테이션의 기능")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("컴파일러에 코드 문법 에러를 체크하도록 정보 제공")])]),t._v(" "),s("li",[s("p",[t._v("개발 툴에서 빌드나 배치시 코드를 자동으로 생성할 수 있는지 정보 제공")])]),t._v(" "),s("li",[s("p",[t._v("실행 시 특정 기능을 실행하도록 정보 제공")])]),t._v(" "),s("li",[s("p",[t._v("사용이유?"),s("br"),t._v("\n=> 코드에 부가적인 설명의 역할. 반복적으로 처리해야하는 일들을 자동화")])])]),t._v(" "),s("h3",{attrs:{id:"어노테이션-정의"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#어노테이션-정의"}},[t._v("#")]),t._v(" 어노테이션 정의")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("적용대상"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("정보유지되는 대상"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("어노테이션명"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" 타입 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("elementName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" 값"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("p",[t._v("@Target({ElementType.[적용대상]}) : 어떠한 값에 어노테이션을 적용할 것인지")]),t._v(" "),s("ul",[s("li",[t._v("TYPE : 클래스, 인터페이스, 열거 타입")]),t._v(" "),s("li",[t._v("ANNOTATION_TYPE : 어노테이션")]),t._v(" "),s("li",[t._v("FIELD : 필드")]),t._v(" "),s("li",[t._v("CONSTRUCTOR : 생성자")]),t._v(" "),s("li",[t._v("METHOD : 메소드")]),t._v(" "),s("li",[t._v("LOCAL_VARIABLE : 로컬 변수")]),t._v(" "),s("li",[t._v("PACKAGE : 패키지")])])]),t._v(" "),s("li",[s("p",[t._v("@Retention(RetentionPolicy.[정보유지되는 대상]) : 어노테이션 값들은 언제까지 유지할 것인지 값을 입력. 대부분 어노테이션은 Runtime시에 사용")]),t._v(" "),s("ul",[s("li",[t._v("SOURCE : 소스상에서만 어노테이션 정보를 유지한다. 소스 코드를 분석할때만 의미가 있으며, 바이트 코드 파일에는 정보가 남지 않는다.")]),t._v(" "),s("li",[t._v("CLASS : 바이트 코드 파일까지 어노테이션 정보를 유지한다. 하지만 리플렉션을 이용해서 어노테이션 정보를 얻을 수는 없다.")]),t._v(" "),s("li",[t._v("RUNTIME : 바이트 코드 파일까지 어노테이션 정보를 유지하면서 리플렉션을 이용해서 런타임에 어노테이션 정보를 얻을 수 있다.")])])])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_0827-http-live-streaming-hls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0827-http-live-streaming-hls"}},[t._v("#")]),t._v(" 0827 - HTTP Live Streaming (HLS)")]),t._v(" "),s("h3",{attrs:{id:"hls란"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hls란"}},[t._v("#")]),t._v(" HLS란?")]),t._v(" "),s("blockquote",[s("p",[t._v("HTTP 기반 적응 비트레이트 스트리밍 통신 프로토콜."),s("br"),t._v("\n스트리밍 데이터를 MPEG-2 Transport Stream에 담아 시간 단위로 잘게 쪼개서 전송한다. 그리고 어떤 파일을 재생해야 하는 지에 대한 정보는 m3u8 파일을 이용하여 플레이어에 전달한다.")])]),t._v(" "),s("h3",{attrs:{id:"특징"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#특징"}},[t._v("#")]),t._v(" 특징")]),t._v(" "),s("ul",[s("li",[t._v("HTTP를 전송 채널로 사용. HTTP는 양방 방식이 아니기 때문에 라이브 스트리밍을 위해서는 단점을 극복할 별도의 방식이 필요하지만, 방화벽에서 HTTP 서버로의 요청만 통과시키기면 되기 때문에 방화벽의 설정이 단순.")]),t._v(" "),s("li",[t._v("요청과 응답이 1:1로 대응되므로 NAT 환경에서도 서버와 동신하는것이 쉽다.")]),t._v(" "),s("li",[t._v("웹 서비스를 위한 캐시 구조를 그대로 사용할 수 있고, 기존에 구축되어 있는 CDN(Content Delivery Network)도 특별히 변경하지 않고 그대로 이용.")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_0829-백앤드-개발자-로드맵"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0829-백앤드-개발자-로드맵"}},[t._v("#")]),t._v(" 0829 - 백앤드 개발자 로드맵")]),t._v(" "),s("h3",{attrs:{id:"백앤드-개발자-로드맵-현재-시점-파악하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#백앤드-개발자-로드맵-현재-시점-파악하기"}},[t._v("#")]),t._v(" 백앤드 개발자 로드맵(현재 시점 파악하기)")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("학습과 적용, 응용에 대한 태도 -> \n클린 코드, 좋은 설계를 이끄는 단위 테스트 -> \n웹 기술과 웹 프로그래밍 -> \n스프링 프레임워크 -> \n데이터베이스 -> \nORM 프레임워크 -> \n… -> \nCI/CD를 위한 인프라스트럭처 -> \n클린 아키텍처 -> \nDDD -> \n분산 시스템 -> \n인프라스트럭처 -> \nMSA -> \n…\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);