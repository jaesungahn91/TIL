(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{524:function(s,a,t){"use strict";t.r(a);var n=t(9),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_0524-0530"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0524-0530"}},[s._v("#")]),s._v(" 0524 - 0530")]),s._v(" "),t("h2",{attrs:{id:"_0524-클라우드에-도커이미지-배포하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0524-클라우드에-도커이미지-배포하기"}},[s._v("#")]),s._v(" 0524 - 클라우드에 도커이미지 배포하기")]),s._v(" "),t("h3",{attrs:{id:"요구사항"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#요구사항"}},[s._v("#")]),s._v(" 요구사항")]),s._v(" "),t("ul",[t("li",[s._v("15분")]),s._v(" "),t("li",[s._v("JDK 1.8 이상")]),s._v(" "),t("li",[s._v("Gradle 4+ 또는 Maven 3.2+")]),s._v(" "),t("li",[s._v("Spring Toll Suite 또는 IntelliJ IDEA")])]),s._v(" "),t("h3",{attrs:{id:"도커-파일-생성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#도커-파일-생성"}},[s._v("#")]),s._v(" 도커 파일 생성")]),s._v(" "),t("div",{staticClass:"language-Docker extra-class"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" openjdk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("jdk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("alpine\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ARG")]),s._v(" JAR_FILE=target/*.jar\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("JAR_FILE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" app.jar\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-jar"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app.jar"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("h3",{attrs:{id:"docker-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-command"}},[s._v("#")]),s._v(" docker command")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("// 빌드\ndocker build -t sung431/spring-boot-cpu-bound "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n// 로컬 실행\ndocker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 sung431/spring-boot-cpu-bound\n\n// 도커 로그인\ndocker login\n\n// 원격저장소에 등록\ndocker push sung431/spring-boot-cpu-bound\n")])])]),t("h3",{attrs:{id:"도커-설치-및-실행"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#도커-설치-및-실행"}},[s._v("#")]),s._v(" 도커 설치 및 실행")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("// 설치\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker\n\n// 실행\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start docker\n\n// 이미지 받아오기\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker pull sung431/spring-boot-cpu-bound\n\n// 도커 이미지 실행\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 sung431/spring-boot-cpu-bound\n")])])]),t("br"),s._v(" "),t("h2",{attrs:{id:"_0525-mac-node-완전히-삭제"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0525-mac-node-완전히-삭제"}},[s._v("#")]),s._v(" 0525 - (Mac) Node 완전히 삭제")]),s._v(" "),t("ol",[t("li",[s._v("shell을 열어 두 줄의 코드를 입력한다.")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" lsbom -f -l -s -pf /var/db/receipts/org.nodejs.pkg.bom | while read f; do  sudo rm /usr/local/${f}; done\n sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("/usr/local/lib 에 있는 node로 시작하는 directory를 삭제한다.")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" cd /usr/local/lib\n sudo rm -rf node*\n\n sudo rm -rf /usr/local/{lib/node{,/.npm,_modules},bin,share/man}/{npm*,node*,man1/node*}\n sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node* /usr/local/lib/dtrace/node.d ~/.npm ~/.node-gyp\n\n /usr/local/lib 로 이동하여 node 및 node_modules를 삭제\n /usr/local/include 로 이동하여 node 및 node_modules 디렉토리를 삭제\n brew install node로 설치 한 경우 터미널에서 brew uninstall node 를 실행\n 홈 디렉토리에 로컬 또는 lib 또는 포함 폴더가 있는지 확인 하고 거기에서 node 또는 node_modules 를 삭제\n /usr/local/bin으로 이동하여 모든 노드 실행 파일을 삭제\n\n sudo rm -rf /opt/local/bin/node /opt/local/include/node /opt/local/lib/node_modules\n sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node.1 /usr/local/lib/dtrace/node.d\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("/usr/local/include에 있는 node로 시작하는 directory를 삭제한다.")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd /usr/local/include\nsudo rm -rf node*\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("brew에 설치된 node를 삭제한다.")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("brew uninstall node\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("/usr/local/bin 에 있는 node 또는 node_modules를 삭제한다.")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo rm -rf /usr/local/bin/npm\nsudo rm -rf /usr/local/bin/node\nls -las\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("추가적인 것들을 삭제한다.")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo rm -rf /usr/local/share/man/man1/node.1\nsudo rm -rf /usr/local/lib/dtrace/node.d\nsudo rm -rf ~/.npm\nsudo rm -rf ~/.nvm\nrm -rf ~/.node-gyp\n")])])]),t("br"),s._v(" "),t("h2",{attrs:{id:"_0526-nvm-node-version-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0526-nvm-node-version-manager"}},[s._v("#")]),s._v(" 0526 - nvm(Node Version Manager)")]),s._v(" "),t("h3",{attrs:{id:"nvm-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm-설치"}},[s._v("#")]),s._v(" nvm 설치")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("git")]),s._v(" "),t("ul",[t("li",[s._v("https://github.com/nvm-sh/nvm")])])]),s._v(" "),t("li",[t("p",[s._v("설치")])])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),t("ul",[t("li",[s._v("환경변수 설정")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NVM_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -z "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${XDG_CONFIG_HOME-}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" %s "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOME")]),s._v("}")]),s._v('/.nvm"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" %s "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${XDG_CONFIG_HOME}")]),s._v('/nvm"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This loads nvm")]),s._v("\n")])])]),t("p",[s._v("적용")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("bash: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc\n      "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bash_profile  \n\nzsh: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n\nksh: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" ~/.profile\n")])])]),t("h3",{attrs:{id:"옵션-및-사용-방법"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#옵션-및-사용-방법"}},[s._v("#")]),s._v(" 옵션 및 사용 방법")]),s._v(" "),t("ul",[t("li",[s._v("node.js 설치")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("nvm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nnvm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.13")]),s._v(".1\n")])])]),t("ul",[t("li",[s._v("node 목록 확인")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("nvm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])])]),t("ul",[t("li",[s._v("사용 버전 지정")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("nvm use "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.13")]),s._v(".1\n")])])]),t("br"),s._v(" "),t("h2",{attrs:{id:"_0527-bash-zsh-환경변수-따로-등록되어-있을때"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0527-bash-zsh-환경변수-따로-등록되어-있을때"}},[s._v("#")]),s._v(" 0527 - bash, zsh 환경변수 따로 등록되어 있을때")]),s._v(" "),t("ul",[t("li",[s._v("각 환경별 환경변수 설정")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("~/.bash_profile\n~/.zshrc\n")])])]),t("p",[s._v("따라서 bash 환경설정에 변수를 설정하고 zsh 환경에서 실행했을경우\n당연히 실행하고자하는 커맨드는 "),t("code",[s._v("zsh: command not found")]),s._v(" 가 됨")]),s._v(" "),t("ul",[t("li",[s._v("zshrc에서 bash가 작동하도록 등록")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -f ~/.bash_profile "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bash_profile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),t("br"),s._v(" "),t("h2",{attrs:{id:"_0528-postgres-data-directory-변경"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0528-postgres-data-directory-변경"}},[s._v("#")]),s._v(" 0528 - postgres data_directory 변경")]),s._v(" "),t("ol",[t("li",[s._v("현재 data directory 확인")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ psql\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("postgres")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# show data_directory;")]),s._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("기존 데이터 복사")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" 현재디렉토리 옮길디렉토리\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("환경변수 또는 설정파일 변경\n"),t("ul",[t("li",[s._v("PGDATA 환경변수 변경")]),s._v(" "),t("li",[s._v("postgres config파일 변경")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);