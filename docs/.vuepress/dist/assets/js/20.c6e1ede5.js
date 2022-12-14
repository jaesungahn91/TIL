(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{516:function(t,a,s){"use strict";s.r(a);var r=s(9),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_0426-0502"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0426-0502"}},[t._v("#")]),t._v(" 0426 - 0502")]),t._v(" "),s("h2",{attrs:{id:"_0426-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0426-value"}},[t._v("#")]),t._v(" 0426 - @Value")]),t._v(" "),s("blockquote",[s("p",[t._v("properties 등록 값을 읽는데 사용가능하다.")])]),t._v(" "),s("h4",{attrs:{id:"기본-사용법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기본-사용법"}},[t._v("#")]),t._v(" 기본 사용법")]),t._v(" "),s("ul",[s("li",[t._v("사용/주입")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" ${test.value} "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" testValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("디폴트 값 설정")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" ${test.value:defaultValue} "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" testValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("properties 파일 지정")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PropertySource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"classpath:test.properties"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("여러 properties 파일")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PropertySource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"classpath:foo.properties"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PropertySource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"classpath:bar.properties"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PropertiesWithJavaConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"주의사항"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#주의사항"}},[t._v("#")]),t._v(" 주의사항")]),t._v(" "),s("p",[t._v("@Value를 사용하는 객체를 반드시 Bean으로 등록해줘야한다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Spring이 자동으로 값을 넣어주거나 의존성을 주입해주는것을 DI라고 한다. 의존성 주입을 위해서는 애플리케이션 소스 코드가 아닌 독립된 컨테이너가 객체의 생성, 사용, 소멸에 대한 제어권을 받아서 처리하도록 하여햐 한다.\n이를 제어의 역전(IoC)이라고 하며, 해당 컨테이너를 IoC 컨테이너라고 한다.  \n\nIoC 컨테이너 내부에 객체를 등록하기 위해서는 Bean이라는 객체로 만들어 줘야 하기때문에\nstereotype이라고 불리는 어노테이션을 객체 위에 명시 해줘야 한다.\n\n// 예\n@Component, @Controller, @Service, @Repository, @Bean, @Configuration ...\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"_0427-cron-crontab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0427-cron-crontab"}},[t._v("#")]),t._v(" 0427 - cron & crontab")]),t._v(" "),s("blockquote",[s("p",[t._v("유닉스/리눅스 계열에서 특정 시간에 특정작업을 하는 데몬은 Cron(크론)"),s("br"),t._v("\nCron이 언제 무슨 일을 하도록 설정해 특정 파일에 저장하는 Crontab(크론탭)이라고 한다.")])]),t._v(" "),s("h4",{attrs:{id:"crontab-설정-방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crontab-설정-방법"}},[t._v("#")]),t._v(" Crontab 설정 방법")]),t._v(" "),s("ol",[s("li",[t._v("/etc/crontab 변경")]),t._v(" "),s("li",[t._v("crontab -e\n"),s("ul",[s("li",[t._v("옵션")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("crontab -e : 명령을 등록, 편집\ncrontab -d : 등록된 명령을 삭제\ncrontab -l : 현재 등록된 리스트 출력\ncrontab -l -u otheruser : otheruser 사용자가 등록한 crontab 리스트 출력\ncrontab -r : 현재 사용자가 등록한 crontab 전체 삭제\n")])])])])]),t._v(" "),s("h4",{attrs:{id:"형식"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#형식"}},[t._v("#")]),t._v(" 형식")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("* * * * *  수행할 명령어\n┬ ┬ ┬ ┬ ┬\n│ │ │ │ │\n│ │ │ │ │\n│ │ │ │ └───────── 요일 (0 - 6) (0:일요일, 1:월요일, 2:화요일, …, 6:토요일)\n│ │ │ └───────── 월 (1 - 12)\n│ │ └───────── 일 (1 - 31)\n│ └───────── 시 (0 - 23)\n└───────── 분 (0 - 59)\n")])])]),s("h4",{attrs:{id:"서비스"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#서비스"}},[t._v("#")]),t._v(" 서비스")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("service cron status\nservice cron start\nservice cron stop\nservice cron restart\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"_0428-알고리즘-관련"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0428-알고리즘-관련"}},[t._v("#")]),t._v(" 0428 - 알고리즘 관련")]),t._v(" "),s("h4",{attrs:{id:"자료구조의-종류"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#자료구조의-종류"}},[t._v("#")]),t._v(" 자료구조의 종류")]),t._v(" "),s("img",{attrs:{width:"725",alt:"웹 개발",src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmC1GI%2Fbtqt8nmjpQc%2FknDauTotHKOkjLo8CdWMak%2Fimg.png"}}),t._v(" "),s("h4",{attrs:{id:"정렬"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#정렬"}},[t._v("#")]),t._v(" 정렬")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("버블 정렬 - 가장 쉽지만, 시간 복잡도가 높아 효율적이지는 않다.\n선택 정렬 - 버블 정렬과 알고리즘이 유사하다. 가장 큰 수를 찾아 배열의 마지막 위치과 교환한다.\n삽입 정렬 - 인덱스를 설정하여 현재 위치의 값을 아래쪽으로 순회하며 알맞은 곳에 넣어준다.\n병합 정렬 - 정렬한 리스트를 반으로 쪼개며 좌우 리스트를 분할해 정렬 후 병합한다. 가장 많이 쓰이는 정렬중 하나이다.\n힙 정렬 - 힙이라는 자료구조를 통해 내림차순으로 숫자를 넣은후, 역순으로 꺼내어 정렬한다.\n퀵 정렬 - pivot기준으로 좌측과 우측의 작은 값과 큰 값을 재배치하고 분할하여 정렬한다.\n")])])]),s("ul",[s("li",[t._v("참고 사이트\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://medium.com/@fiv3star/%EC%A0%95%EB%A0%AC%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-sorting-algorithm-%EC%A0%95%EB%A6%AC-8ca307269dc7",target:"_blank",rel:"noopener noreferrer"}},[t._v("TonyMedium - 정렬 알고리즘"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://namu.wiki/w/%EC%A0%95%EB%A0%AC%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("나무위키 - 정렬 알고리즘"),s("OutboundLink")],1)])])])]),t._v(" "),s("h4",{attrs:{id:"알고리즘-문제-사이트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#알고리즘-문제-사이트"}},[t._v("#")]),t._v(" 알고리즘 문제 사이트")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("국내 사이트")]),t._v(" "),s("ul",[s("li",[t._v("백준(BOJ)")]),t._v(" "),s("li",[t._v("프로그래머스")]),t._v(" "),s("li",[t._v("알고스팟")]),t._v(" "),s("li",[t._v("코딩도장")])])]),t._v(" "),s("li",[s("p",[t._v("해외 사이트")]),t._v(" "),s("ul",[s("li",[t._v("Hackerearth")]),t._v(" "),s("li",[t._v("Hackerrank")]),t._v(" "),s("li",[t._v("Codeforces")])])])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_0430-99콘-이력서후기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0430-99콘-이력서후기"}},[t._v("#")]),t._v(" 0430 - 99콘 이력서후기")]),t._v(" "),s("blockquote",[s("p",[t._v("앞으로 나의 이력을 어떻게 관리하고 어떤 방향으로 좋은 개발자가 되기 위해 노력할지!")])]),t._v(" "),s("h4",{attrs:{id:"앞으로-해야할일"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#앞으로-해야할일"}},[t._v("#")]),t._v(" 앞으로 해야할일")]),t._v(" "),s("ul",[s("li",[t._v("레퍼런스를 쌓을 수 있는 일을 많이 할 것")]),t._v(" "),s("li",[t._v("깃허브 관리와 블로그 관리하기")]),t._v(" "),s("li",[t._v("토이 프로젝트 꾸준히 진행하기")]),t._v(" "),s("li",[t._v("글쓰기에 노력을 투자하기")])]),t._v(" "),s("h4",{attrs:{id:"지향해야-할-점과-지양해야-할-점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#지향해야-할-점과-지양해야-할-점"}},[t._v("#")]),t._v(" 지향해야 할 점과 지양해야 할 점")]),t._v(" "),s("ul",[s("li",[t._v("긍정\n"),s("ul",[s("li",[t._v("경험의 폭이 좁아도 생각의 폭은 넓히자")]),t._v(" "),s("li",[t._v("항상 탐구하고 깊이 파고들자")]),t._v(" "),s("li",[t._v("유연한 사고와 팀원을 배려하자")]),t._v(" "),s("li",[t._v("똑똑한 지원자")]),t._v(" "),s("li",[t._v("호기심이 많은 지원자")]),t._v(" "),s("li",[t._v("많이, 빠르게 학습하려 노력하기")]),t._v(" "),s("li",[t._v("포기하지 않고 끝까지 생각해보고 이야기하기")]),t._v(" "),s("li",[t._v("빈 곳을 주도적으로 채우기")]),t._v(" "),s("li",[t._v("글쓰기, 문서화를 위해 노력하기")])])]),t._v(" "),s("li",[t._v("부정\n"),s("ul",[s("li",[t._v("자신이 한 일을 잘 설명 못하는 사람")]),t._v(" "),s("li",[t._v("나의 기여도를 부풀리는 경우")])])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://baek.dev/post/2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("개발자 이력서 작성 방법 - 99콘 이력서 후기"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);