(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{753:function(_,v,a){"use strict";a.r(v);var t=a(2),l=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"_0614"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0614"}},[_._v("#")]),_._v(" 0614")]),_._v(" "),a("h1",{attrs:{id:"chapter-01-대규모-웹-서비스-개발-오리엔테이션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-01-대규모-웹-서비스-개발-오리엔테이션"}},[_._v("#")]),_._v(" CHAPTER 01. 대규모 웹 서비스 개발 오리엔테이션")]),_._v(" "),a("ul",[a("li",[_._v("대규모 웹 서비스란, 요컨대 거대한 데이터를 처리해야만 하는 웹 서비스를 말한다.")]),_._v(" "),a("li",[_._v("제1장에서는 이 책의 테마인 '대규모'의 전체 그림을 떠울릴 수 있도록 하는 것을 목표로 한다.")])]),_._v(" "),a("h2",{attrs:{id:"강의0-이-책의-근간-이-책에서-설명하는-것과-설명하지-않는-것"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#강의0-이-책의-근간-이-책에서-설명하는-것과-설명하지-않는-것"}},[_._v("#")]),_._v(" 강의0. 이 책의 근간 : 이 책에서 설명하는 것과 설명하지 않는 것")]),_._v(" "),a("h3",{attrs:{id:"이-책에서-설명하는-것"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이-책에서-설명하는-것"}},[_._v("#")]),_._v(" 이 책에서 설명하는 것")]),_._v(" "),a("ul",[a("li",[_._v("대규모 웹 서비스 개발이란?")]),_._v(" "),a("li",[_._v("대규모 데이터를 다룰 때의 과제, 다루기 위한 기본적인 사고방식과 요령.\n예를 들어 OS의 캐시(cache) 기능이나 대규모 데이터를 전제로 한 DB 운영방법")]),_._v(" "),a("li",[_._v("알고리즘과 데이터 구조 선택의 중요성, 대규모 데이터를 예로 생각해본다.")]),_._v(" "),a("li",[_._v("RDBMS로 모두 다룰 수 없는 규모의 데이터 처리방법. 그 예로 전문 검색 엔진 만드는 법을 살펴본다.")]),_._v(" "),a("li",[_._v("대규모 서비스가 될 것을 전제로 한 서버/인프라 시스템의 예와 개념")])]),_._v(" "),a("h3",{attrs:{id:"설명하지-않는-것"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설명하지-않는-것"}},[_._v("#")]),_._v(" 설명하지 않는 것")]),_._v(" "),a("ul",[a("li",[_._v("웹 애플리케이션 개발과 관련된 기본적이 How-To. MVC 프레임워크나 O/R 매퍼(mapper)사용법 등")]),_._v(" "),a("li",[_._v("각종 소프트웨어 사용법, 아파치(Apache), MySQL의 설정방법이나 명령 등")]),_._v(" "),a("li",[_._v("Perl이나 C++의 구문이나 기법 등 프로그래밍 언어에 대한 설명, 노하우")]),_._v(" "),a("li",[_._v("기본적인 알고리즘이나 데이터 구조(예를 들어 정렬, 탐색, 리스트, 해시 등)에 대한 세세한 설명")])]),_._v(" "),a("h2",{attrs:{id:"강의1-대규모-서비스와-소규모-서비스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#강의1-대규모-서비스와-소규모-서비스"}},[_._v("#")]),_._v(" 강의1. 대규모 서비스와 소규모 서비스")]),_._v(" "),a("h3",{attrs:{id:"하테나의-서비스-규모"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#하테나의-서비스-규모"}},[_._v("#")]),_._v(" 하테나의 서비스 규모")]),_._v(" "),a("p",[_._v("2009년 당시 하테나 서비스의 규모")]),_._v(" "),a("ul",[a("li",[_._v("등록 사용자는 100만 명 이상, 1,500만 UU(Unique User, 고유 사용자)/월")]),_._v(" "),a("li",[_._v("수십 억 액세스/월(이미지 등으로의 액세스는 제외)")]),_._v(" "),a("li",[_._v("피크(peak) 시 회선 트래픽 양은 430Mbps")]),_._v(" "),a("li",[_._v("하드웨어(서버)는 500대 이상")])]),_._v(" "),a("blockquote",[a("p",[_._v("텍스트 전송이 중심임에도 이 정도의 트래픽이라면 그 당시 유통량이 상당했음")])]),_._v(" "),a("h3",{attrs:{id:"하테나는-대규모-구글-및-페이스북은-초대규모"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#하테나는-대규모-구글-및-페이스북은-초대규모"}},[_._v("#")]),_._v(" 하테나는 대규모, 구글 및 페이스북은 초대규모")]),_._v(" "),a("ul",[a("li",[_._v("페이스북과 같은 세계의 Top 클래스 사이트는 서버 대수가 수백만 대규모이고, 처리하는 데이터는 테라바이트~페타바이트(pteabyte)급의 초대규모 서비스다.")])]),_._v(" "),a("h3",{attrs:{id:"소규모-서비스와-대규모-서비스의-차이"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#소규모-서비스와-대규모-서비스의-차이"}},[_._v("#")]),_._v(" 소규모 서비스와 대규모 서비스의 차이")]),_._v(" "),a("p",[_._v("대규모 서비스에만 있는 문제")]),_._v(" "),a("h4",{attrs:{id:"확장성-확보-부하분산-필요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#확장성-확보-부하분산-필요"}},[_._v("#")]),_._v(" 확장성 확보, 부하분산 필요")]),_._v(" "),a("ul",[a("li",[_._v("대량의 액세스가 있는 서비스에서는 서버 1대로 처리할 수 없는 부하\n"),a("ul",[a("li",[_._v("스케일아웃(scale-out)이 전략의 기초")])])]),_._v(" "),a("li",[_._v("스케일 아웃이란 서버를 횡으로 전개, 즉 서버의 역할을 분담하거나 대수를 늘림으로써 시스템의 전체적인 처리능력을 높여서 부하를 분산하는 방법")]),_._v(" "),a("li",[_._v("스케일업(scale-up)은 하드웨어의 성능을 높여 처리능력을 끌엉올리는 방법이다.")]),_._v(" "),a("li",[_._v("중요한건 하드웨어의 성능과 가격은 비례하지 않기 때문에 저가의 하드웨어를 횡으로 나열해서 확장성을 확보하는것이 주가 된다.")]),_._v(" "),a("li",[_._v("스케일아웃시 발생하는 문제\n"),a("ul",[a("li",[_._v("사용자로부터의 요청 분배 문제 -> 로드밸런서 사용")]),_._v(" "),a("li",[_._v("데이터 동기화, DB를 분산시켰을 때 한쪽에 저장된 갱신 내용을 다른 한쪽 DB가 알지 못한다면 애플리케이션에 비정상 사태가 발생")]),_._v(" "),a("li",[_._v("네트워크 동신의 지연시간(latency)")])])])]),_._v(" "),a("h4",{attrs:{id:"다중성-확보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#다중성-확보"}},[_._v("#")]),_._v(" 다중성 확보")]),_._v(" "),a("ul",[a("li",[_._v("시스템은 다중성을 지닌 구성, 즉 특정 서버가 고장 나거나 성능이 저하되더라도 서비스를 계속할 수 있는 구성으로 할 필요가 있다.")]),_._v(" "),a("li",[_._v("스케일아웃을 해서 서버 대수가 늘어나면 서버의 고장률도 필연적으로 올라가게 된다.")]),_._v(" "),a("li",[_._v("서비스가 대규모화되면 될수록 시스템 정지의 사회적 충격도 늘어나므로 더욱 더 다중성 확보가 중요해진다.")]),_._v(" "),a("li",[_._v("웹 서비스는 언제 어떠한 경우라도 고장에 대해 견고해야한다.")])]),_._v(" "),a("h4",{attrs:{id:"효율적-운용-필요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#효율적-운용-필요"}},[_._v("#")]),_._v(" 효율적 운용 필요")]),_._v(" "),a("ul",[a("li",[_._v("서버가 늘어나면 감시대상이 늘어난다. 따라서 감시용 소프트웨어를 사용하고 정보관리를 위한 툴을 사용하는 등 자동화화가 필요")]),_._v(" "),a("li",[_._v("일손을 거치지 않고 대규모 시스템을 건강한 상태로 얼마나 계속 유지해갈 수 있을 것인가를 위한 효율적 운용을 수행해야만 한다.")])]),_._v(" "),a("h4",{attrs:{id:"개발자-수-개발방법의-변화"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#개발자-수-개발방법의-변화"}},[_._v("#")]),_._v(" 개발자 수, 개발방법의 변화")]),_._v(" "),a("ul",[a("li",[_._v("대규모 서비스가 되면 여러 기술자가 역할을 분담하게 된다.")]),_._v(" "),a("li",[_._v("사람 수가 늘어나면 고려해야 할 과제가 늘어남\n"),a("ul",[a("li",[_._v("개발 표준화는 어떻게 할 것인가?")]),_._v(" "),a("li",[_._v("소스코드 관리를 버전관리 시스템으로 제대로 하기.")])])]),_._v(" "),a("li",[_._v("팀 매니지먼트가 필요하다.")])]),_._v(" "),a("h3",{attrs:{id:"대규모-데이터량에-대한-대처"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#대규모-데이터량에-대한-대처"}},[_._v("#")]),_._v(" 대규모 데이터량에 대한 대처")]),_._v(" "),a("ul",[a("li",[_._v("디스크 -> 메모리 -> 캐시 메모리 -> CPU")]),_._v(" "),a("li",[_._v("하드디스크에서 데이터를 읽어들이는 것은 메모리와 비교하면 10^6 ~ 10^10배나 되는 속도차가 난다.")]),_._v(" "),a("li",[_._v("속도차를 흡수하기 위해 OS는 데이터를 메모리에 캐싱")]),_._v(" "),a("li",[_._v("DB를 비롯한 미들웨어도 기본적으로 이러한 속도차를 의식한 데이터 구조, 구현을 채용")]),_._v(" "),a("li",[_._v("데이터량이 많아지면 처음부터 캐시 미스(cache miss)가 발생\n"),a("ul",[a("li",[_._v("저속의 디스크로의 I/O가 많이 발생")])])])]),_._v(" "),a("h2",{attrs:{id:"강의2-계속-성장하는-서비스와-대규모화의-벽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#강의2-계속-성장하는-서비스와-대규모화의-벽"}},[_._v("#")]),_._v(" 강의2. 계속 성장하는 서비스와 대규모화의 벽")]),_._v(" "),a("h3",{attrs:{id:"웹-서비스의-어려움"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#웹-서비스의-어려움"}},[_._v("#")]),_._v(" 웹 서비스의 어려움")]),_._v(" "),a("ul",[a("li",[_._v("웹 서비스는 계속해서 성장\n"),a("ul",[a("li",[_._v("따라서 성장해감에 따라 시스템 구성을 변화시켜 갈 필요가 있다.")])])]),_._v(" "),a("li",[_._v("데이터뿐만 아니라 트래픽도 증가 -> 시스템 확장 필요")])]),_._v(" "),a("h3",{attrs:{id:"하테나가-성장하기까지"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#하테나가-성장하기까지"}},[_._v("#")]),_._v(" 하테나가 성장하기까지")]),_._v(" "),a("ul",[a("li",[_._v("분산, 다중화, 효율적 운용면에서 낙제점\n"),a("ul",[a("li",[_._v("Hang-Up된 서버를 수동으로 재기동")]),_._v(" "),a("li",[_._v("서버 증설에 대처하지 못해 전류 부족으로 인한 전류 차단기 내려감")])])]),_._v(" "),a("li",[_._v("데이터 센터로 이전\n"),a("ul",[a("li",[_._v("병목지점을 측정, 판정하여 I/O부하와 CPU부하를 구분하여 최적의 구성을 갖는 하드웨어를 준비")])])]),_._v(" "),a("li",[_._v("다중화의 경우 로드밸런서 + 가동감시 기능을 하는 오픈소스 소프트웨어 도입")]),_._v(" "),a("li",[_._v("OS 가상화 진행하여 서버 가동률을 높임과 동시에 유지보수성을 높임")]),_._v(" "),a("li",[_._v("서버의 정보관리를 위해 정보관리 시스템 개발")])]),_._v(" "),a("h3",{attrs:{id:"시스템의-성장전략-미니멈-스타트-변화를-내다본-관리와-설계"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시스템의-성장전략-미니멈-스타트-변화를-내다본-관리와-설계"}},[_._v("#")]),_._v(" 시스템의 성장전략 - 미니멈 스타트, 변화를 내다본 관리와 설계")]),_._v(" "),a("ul",[a("li",[_._v("너무 이른 최적화가 좋은 방침이라고는 할 수 없다.")]),_._v(" "),a("li",[_._v("캐시 미스가 발생하기 시작한 후 오래지 않아 갑자기 문제가 복잡해지므로, 알아차렸을 때에는 이미 시스템이 저속화하고 있는 경우가 자주 있다.\n"),a("ul",[a("li",[_._v("수용능력 관리나 서비스설계 시에 필요 이상으로 데이터를 증가시키지 않도록 설계")])])]),_._v(" "),a("li",[_._v("서비스 성장을 예측한 구성으로 해두면서, 필요 이상으로는 비용을 들이지 않고 미니멈 스타트가 필요하다.")])]),_._v(" "),a("h2",{attrs:{id:"강의3-서비스-개발의-현장"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#강의3-서비스-개발의-현장"}},[_._v("#")]),_._v(" 강의3. 서비스 개발의 현장")]),_._v(" "),a("h3",{attrs:{id:"하테나의-기술팀-체제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#하테나의-기술팀-체제"}},[_._v("#")]),_._v(" 하테나의 기술팀 체제")]),_._v(" "),a("ul",[a("li",[_._v("하테나 엔지니어링관계 팀\n"),a("ul",[a("li",[_._v("서비스 개발부 : 하테나의 각종 서비스 구현을 담당하는 팀. 매일 애플리케이션 측면의 개선을 담당한다.")]),_._v(" "),a("li",[_._v("인프라부 : 서버/인프라 시스템의 운용을 담당하는 팀. 서버 준비, 데이터 센터 운용, 부하 분산 등을 담당한다.")])])]),_._v(" "),a("li",[_._v("개발부는 서비스의 성능을 트래킹하고 있으며, 응답시간을 정량화한 지표로 한계값(threshold)을 밑돌지 않도록 목표를 설정해서 개선")])])])}),[],!1,null,null,null);v.default=l.exports}}]);