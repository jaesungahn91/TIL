(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{559:function(e,a,r){"use strict";r.r(a);var s=r(9),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"_0329-0403"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_0329-0403"}},[e._v("#")]),e._v(" 0329 ~ 0403")]),e._v(" "),r("h2",{attrs:{id:"_0329-requestmapping"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_0329-requestmapping"}},[e._v("#")]),e._v(" 0329 - @RequestMapping")]),e._v(" "),r("p",[e._v("요청을 특정 메서드와 매핑하기 위해 사용.")]),e._v(" "),r("ul",[r("li",[e._v("name : 해당 어노테이션에게 별칭을 붙이기 위해 사용")]),e._v(" "),r("li",[e._v("value : 처리할 uri 패턴들(String 배열)을 기입")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("?: matches one character\n*: matches zero or more characters within a path segment\n**: match zero or more path segments\n")])])]),r("ul",[r("li",[e._v("path : value와 같은 목적")]),e._v(" "),r("li",[e._v("method : 특정 http method만 요청을 처리하고자 할 때 사용")]),e._v(" "),r("li",[e._v("params : 특정 파라미터가 존재하는 경우만 요청을 처리하고자 할 때 사용")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('RequestMapping(value="hello", params="id"): /hello?id=123 처리 가능\nRequestMapping(value="hello", params="id=1234"): /hello?id=123 처리 불가능, /hello?id=1234 처리 가능\n')])])]),r("ul",[r("li",[e._v("headers : 특정 헤더가 존재하는 경우만 요청을 처리하고자 할 때 사용")]),e._v(" "),r("li",[e._v("consumes : 특정 타입의 바디를 가지는 요청만을 처리하고자 할 때 사용")]),e._v(" "),r("li",[e._v("produces : 응답의 타입을 특정 타입으로 설정하고자 할 때 사용")])]),e._v(" "),r("br"),e._v(" "),r("h2",{attrs:{id:"_0330-query-dsl-세팅-by-gradle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_0330-query-dsl-세팅-by-gradle"}},[e._v("#")]),e._v(" 0330 - query dsl 세팅 by gradle")]),e._v(" "),r("p",[e._v("query dsl 설정은 대표적으로 2가지이다. "),r("code",[e._v("querydsl plugin")]),e._v("을 이용하는 방법과 "),r("code",[e._v("annotationProcessor")]),e._v("을 이용하여 생성하는 방법이 있다.")]),e._v(" "),r("h3",{attrs:{id:"querydsl-plugin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#querydsl-plugin"}},[e._v("#")]),e._v(" querydsl plugin")]),e._v(" "),r("div",{staticClass:"language-gradle extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ext {\n    set('queryDSL', '4.3.1')\n}\n\ndependencies {\n    implementation \"com.querydsl:querydsl-jpa:${queryDSL}\"\n    \n    annotationProcessor \"com.querydsl:querydsl-apt:${queryDSL}:jpa\"\n    // 또는\n    annotationProcessor \"com.querydsl:querydsl-apt:${dependencyManagement.importedProperties['querydsl.version']}:jpa\"\n\n    annotationProcessor 'org.hibernate.javax.persistence:hibernate-jpa-2.1-api:1.0.2.Final'\n    annotationProcessor 'javax.annotation:javax.annotation-api:1.3.2'\n    ...\n}\n")])])]),r("h3",{attrs:{id:"annotationprocessor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#annotationprocessor"}},[e._v("#")]),e._v(" annotationProcessor")]),e._v(" "),r("div",{staticClass:"language-gradle extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('plugins {\n    ...\n    id "com.ewerk.gradle.plugins.querydsl" version "1.0.10"\n}\n\ncompileQuerydsl{\n    options.annotationProcessorPath = configurations.querydsl\n}\n\nconfigurations {\n    ...\n    querydsl.extendsFrom compileClasspath\n}\n\ndef querydslSrcDir = \'src/querydsl/generated\'\n\nquerydsl {\n    library = "com.querydsl:querydsl-apt"\n    jpa = true\n    querydslSourcesDir = querydslSrcDir\n}\n\nsourceSets {\n    main {\n        java {\n            srcDirs = [\'src/main/java\', querydslSrcDir]\n        }\n    }\n}\n\nproject.afterEvaluate {\n    project.tasks.compileQuerydsl.options.compilerArgs = [\n            "-proc:only",\n            "-processor", project.querydsl.processors() +\n                    \',lombok.launch.AnnotationProcessorHider$AnnotationProcessor\'\n    ]\n}\n\ndependencies {\n    implementation("com.querydsl:querydsl-jpa") // querydsl\n    implementation("com.querydsl:querydsl-apt") // querydsl\n    ...\n}\n')])])]),r("h3",{attrs:{id:"차이점"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#차이점"}},[e._v("#")]),e._v(" 차이점")]),e._v(" "),r("h4",{attrs:{id:"compliequerydsl-시점"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#compliequerydsl-시점"}},[e._v("#")]),e._v(" complieQuerydsl 시점")]),e._v(" "),r("ul",[r("li",[e._v("querydsl plugin을 사용하게 되면, querydsl을 생성하는 방법은 gradle option에 있는 compileQuerydsl 사용하거나, build를 통해서 compile이 되어야 생성된다.")]),e._v(" "),r("li",[e._v("해당 방식을 이용하게 되면, compileJava 시점에 querydsl QModel이 생성이 된다.")]),e._v(" "),r("li",[e._v("즉, intellij에 Run, Debug를 통해서 서버를 실행할 때도 자동으로 최신 querydsl QModel을 생성하게 된다.")])]),e._v(" "),r("h4",{attrs:{id:"cache-유무"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cache-유무"}},[e._v("#")]),e._v(" Cache 유무")]),e._v(" "),r("ul",[r("li",[e._v("gradle의 cache를 사용하기 위해서는 org.gradle.caching=true 설정을 해주어야 한다.")]),e._v(" "),r("li",[e._v("querydsl plugin을 이용해서도 cache가 가능한지는 모르겠지만 annotationProcessor 방식을 이용하면 Cache가 가능하다.")]),e._v(" "),r("li",[e._v("그 이유는 compileJava 부분에 QModel을 생성하기에 변경이 발생하지 않는다면 gradle에서 증분 컴파일 옵셔에 의해서 cache key를 사용할 수 있게 된다.")])]),e._v(" "),r("h4",{attrs:{id:"마치며"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#마치며"}},[e._v("#")]),e._v(" 마치며")]),e._v(" "),r("ul",[r("li",[e._v("cache를 타기 위해서는 같은 부분에 변경이 없어야지만 cache를 이용하기에 무조건 좋아지는 것은 아니다.")]),e._v(" "),r("li",[e._v("또한, build시에 gradle cache key를 매번 변경시키는 로직이 포함되어 있다면, cache를 이용하지 못 한다.(ex: download files, springboot-buildInfo etc)")]),e._v(" "),r("li",[e._v("querydsl plugin은 더 이상 개발이 되고 있는지 모르겠고, gradle에서 deprecated된 compile을 사용하고 있어 추후 gradle version을 올릴때 제약사항이 될꺼 같아 변경하는 것이 좋아보인다.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);