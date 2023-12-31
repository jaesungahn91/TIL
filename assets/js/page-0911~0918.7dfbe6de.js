(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{758:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_0911-0918"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0911-0918"}},[t._v("#")]),t._v(" 0911 ~ 0918")]),t._v(" "),a("h2",{attrs:{id:"_0911-ci-cd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0911-ci-cd"}},[t._v("#")]),t._v(" 0911 - CI/CD")]),t._v(" "),a("p",[t._v("https://www.redhat.com/ko/topics/devops/what-cicd-pipeline\n"),a("img",{attrs:{src:"https://github.com/jaesungahn91/hanghae-plus-2/raw/main/week1/image/ci-cd-flow-desktop_0.png",alt:"ci-cd-flow-desktop_0.png"}})]),t._v(" "),a("h3",{attrs:{id:"ci-cd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ci-cd"}},[t._v("#")]),t._v(" CI/CD?")]),t._v(" "),a("ul",[a("li",[t._v("지속적 통합(Continuous Integration, CI)\n"),a("ul",[a("li",[t._v('"CI"는 개발자를 위한 자동화 프로세스인 지속적인 통합(Continuous Integration)을 의미')]),t._v(" "),a("li",[t._v("지속적인 통합이 제대로 구현되면 애플리케이션 코드의 새로운 변경 사항이 정기적으로 빌드 및 테스트를 거쳐 공유 리포지토리에 병합된다.")])])]),t._v(" "),a("li",[t._v("지속적 제공(Continuous Delivery, CD)\n"),a("ul",[a("li",[t._v("지속적인 제공이란 개발자들이 애플리케이션에 적용한 변경 사항이 버그 테스트를 거쳐 리포지토리(예: GitHub 또는 컨테이너 레지스트리)에 자동으로 업로드되는 것을 뜻한다.")])])]),t._v(" "),a("li",[t._v("지속적 배포(Continuous Deployment, CD)\n"),a("ul",[a("li",[t._v('지속적인 배포(또 다른 의미의 "CD": Continuous Deployment)란 개발자의 변경 사항을 리포지토리에서 고객이 사용 가능한 프로덕션 환경까지 자동으로 릴리스하는 것을 의미')])])])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_0912-github-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0912-github-actions"}},[t._v("#")]),t._v(" 0912 - GitHub Actions")]),t._v(" "),a("p",[t._v("https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions")]),t._v(" "),a("ul",[a("li",[t._v("GitHub Actions는 빌드, 테스트 및 배포 파이프라인을 자동화할 수 있는 CI/CD(지속적 통합 및 지속적 전달) 플랫폼")])]),t._v(" "),a("h3",{attrs:{id:"the-components-of-github-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-components-of-github-actions"}},[t._v("#")]),t._v(" The components of GitHub Actions")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/jaesungahn91/hanghae-plus-2/raw/main/week1/image/overview-actions-simple.webp",alt:"overview-actions-simple.webp"}})]),t._v(" "),a("ul",[a("li",[t._v("Events\n"),a("ul",[a("li",[t._v("이벤트는 워크플로우 실행을 트리거하는 저장소의 특정 활동")]),t._v(" "),a("li",[t._v("pushes a commit to a repository, pull reques, opens an issue...")])])]),t._v(" "),a("li",[t._v("Workflows\n"),a("ul",[a("li",[t._v("워크플로우는 하나 이상의 Job을 실행하는 구성 가능한 자동화된 프로세스")])])]),t._v(" "),a("li",[t._v("Jobs\n"),a("ul",[a("li",[t._v("Job은 동일한 Runner에서 실행되는 워크플로우의 step의 집합")])])]),t._v(" "),a("li",[t._v("step\n"),a("ul",[a("li",[t._v("각 step은 실행될 셸 스크립트 또는 action")])])]),t._v(" "),a("li",[t._v("action\n"),a("ul",[a("li",[t._v("액션은 복잡하지만 자주 반복되는 작업을 수행하는 GitHub 액션 플랫폼용 사용자 지정 애플리케이션")]),t._v(" "),a("li",[t._v("액션은 GitHub에서 Git 리포지토리를 가져오거나, 빌드 환경에 맞는 올바른 도구 체인을 설정하거나, 클라우드 제공업체에 대한 인증을 설정할 수 있다.")])])]),t._v(" "),a("li",[t._v("Runners\n"),a("ul",[a("li",[t._v("러너는 워크플로우가 트리거될 때 워크플로우를 실행하는 서버")]),t._v(" "),a("li",[t._v("각각의 Job은 개별의 Runner에서 실행")])])])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_0915-workflow-예시"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0915-workflow-예시"}},[t._v("#")]),t._v(" 0915 - Workflow 예시")]),t._v(" "),a("h3",{attrs:{id:"build-and-deploy-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-and-deploy-yml"}},[t._v("#")]),t._v(" build-and-deploy.yml")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("and"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy  \n  \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pull_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("AWS_REGION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("northeast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ECR_REPOSITORY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ecr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("continuous\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ECS_SERVICE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service  \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ECS_CLUSTER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cluster\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("CONTAINER_NAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" app  \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("TASK_FAMILY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("task\n  \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest  \n  \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v3  \n  \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Set up JDK 17  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("java@v3  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("java-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'17'")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("distribution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'temurin'")]),t._v("  \n  \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Cache SonarCloud packages  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/cache@v3.3.2  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ~/.sonar/cache  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runner.os "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sonar  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restore-keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runner.os "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sonar  \n  \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Cache Gradle packages  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/cache@v3.3.2  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ~/.gradle/caches  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runner.os "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gradle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hashFiles('"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/*.gradle')")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restore-keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runner.os "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gradle  \n  \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build and analyze  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GITHUB_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITHUB_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SONAR_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.SONAR_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./gradlew build jacocoTestReport sonar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("info  \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/upload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("artifact@v3.1.3  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build/libs/"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*.jar")]),t._v("  \n  \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Configure AWS credentials  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("actions/configure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("aws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("credentials@v2  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("aws-access-key-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.AWS_ACCESS_KEY_ID "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("aws-secret-access-key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.AWS_SECRET_ACCESS_KEY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("aws-region")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" env.AWS_REGION "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n  \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Login to Amazon ECR  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ecr  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("actions/amazon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ecr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("login@v1  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mask-password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),t._v("  \n  \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" and push docker image to Amazon ECR  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("image  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ECR_REGISTRY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" steps.login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ecr.outputs.registry "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("IMAGE_TAG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" latest  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('  \n          docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG .  \n          docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG  \n          echo "image=$ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG" >> $GITHUB_OUTPUT  ')]),t._v("\n  \n\t  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Download task definition\n\t\t"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" retrieve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("def\n\t    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n\t      aws ecs describe-task-definition --task-definition $TASK_FAMILY --query taskDefinition > task-task-definition.json\n\t      echo "::set-output name=task-def-file::task-definition.json"')]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy Amazon ECS task definition  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("actions/amazon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ecs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("definition@v1  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task-definition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" steps.retrieve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("def.outputs.task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("def"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("file "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" env.ECS_SERVICE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" env.ECS_CLUSTER "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("wait-for-service-stability")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("  \n  \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("slack  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 8398a7/action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("slack@v3  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" job.status "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" repo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("author"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("eventName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("took  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SLACK_WEBHOOK_URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.SLACK_WEBHOOK_URL "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always()\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br"),a("span",{staticClass:"line-number"},[t._v("58")]),a("br"),a("span",{staticClass:"line-number"},[t._v("59")]),a("br"),a("span",{staticClass:"line-number"},[t._v("60")]),a("br"),a("span",{staticClass:"line-number"},[t._v("61")]),a("br"),a("span",{staticClass:"line-number"},[t._v("62")]),a("br"),a("span",{staticClass:"line-number"},[t._v("63")]),a("br"),a("span",{staticClass:"line-number"},[t._v("64")]),a("br"),a("span",{staticClass:"line-number"},[t._v("65")]),a("br"),a("span",{staticClass:"line-number"},[t._v("66")]),a("br"),a("span",{staticClass:"line-number"},[t._v("67")]),a("br"),a("span",{staticClass:"line-number"},[t._v("68")]),a("br"),a("span",{staticClass:"line-number"},[t._v("69")]),a("br"),a("span",{staticClass:"line-number"},[t._v("70")]),a("br"),a("span",{staticClass:"line-number"},[t._v("71")]),a("br"),a("span",{staticClass:"line-number"},[t._v("72")]),a("br"),a("span",{staticClass:"line-number"},[t._v("73")]),a("br"),a("span",{staticClass:"line-number"},[t._v("74")]),a("br"),a("span",{staticClass:"line-number"},[t._v("75")]),a("br"),a("span",{staticClass:"line-number"},[t._v("76")]),a("br"),a("span",{staticClass:"line-number"},[t._v("77")]),a("br"),a("span",{staticClass:"line-number"},[t._v("78")]),a("br"),a("span",{staticClass:"line-number"},[t._v("79")]),a("br"),a("span",{staticClass:"line-number"},[t._v("80")]),a("br"),a("span",{staticClass:"line-number"},[t._v("81")]),a("br"),a("span",{staticClass:"line-number"},[t._v("82")]),a("br"),a("span",{staticClass:"line-number"},[t._v("83")]),a("br"),a("span",{staticClass:"line-number"},[t._v("84")]),a("br"),a("span",{staticClass:"line-number"},[t._v("85")]),a("br"),a("span",{staticClass:"line-number"},[t._v("86")]),a("br"),a("span",{staticClass:"line-number"},[t._v("87")]),a("br"),a("span",{staticClass:"line-number"},[t._v("88")]),a("br"),a("span",{staticClass:"line-number"},[t._v("89")]),a("br"),a("span",{staticClass:"line-number"},[t._v("90")]),a("br"),a("span",{staticClass:"line-number"},[t._v("91")]),a("br"),a("span",{staticClass:"line-number"},[t._v("92")]),a("br"),a("span",{staticClass:"line-number"},[t._v("93")]),a("br"),a("span",{staticClass:"line-number"},[t._v("94")]),a("br"),a("span",{staticClass:"line-number"},[t._v("95")]),a("br"),a("span",{staticClass:"line-number"},[t._v("96")]),a("br"),a("span",{staticClass:"line-number"},[t._v("97")]),a("br")])]),a("ul",[a("li",[a("p",[t._v("https://github.com/ScaCap/action-ktlint")])]),t._v(" "),a("li",[a("p",[t._v("https://github.com/mikepenz/action-junit-report")])]),t._v(" "),a("li",[a("p",[t._v("https://github.com/Madrapps/jacoco-report")])]),t._v(" "),a("li",[a("p",[t._v("https://docs.github.com/en/actions/deployment/deploying-to-your-cloud-provider/deploying-to-amazon-elastic-container-service")])]),t._v(" "),a("li",[a("p",[t._v("https://github.com/8398a7/action-slack")])]),t._v(" "),a("li",[a("p",[t._v("https://github.com/marketplace/actions/slack-send")]),t._v(" "),a("ul",[a("li",[t._v("https://velog.io/@insutance/github-action-slack-send")])])]),t._v(" "),a("li",[a("p",[t._v("https://github.com/slackapi/slack-github-action")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);