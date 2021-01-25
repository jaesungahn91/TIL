var CONST = require("./const");

module.exports = {
    title: 'Today JS Learned',
    description: 'Today I Learned',
    base: '/TIL/',
    themeConfig: { //테마별 설정 항목입니다.
        sidebar: [
            {
                title: 'JAVA',
                children: [
                    CONST.JavaList
                ]
            },
            {
                title: 'SPRING',
                children: [
                    '/Spring/spring.md'
                ]
            }
        ],
        
        nav: [ // 레이아웃 헤더의 우측 네비게이션 항목을 설정합니다.
          {
            text: 'GitHub', // 메뉴에 표시될 이름
            link: 'https://github.com/jaesungahn91' // 링크 주소
          },
          {
            text: 'Blog', // 메뉴에 표시될 이름
            link: 'https://js91.tistory.com/' // 링크 주소
          }, // 다음과 같은 포맷으로 작성해주시면 됩니다.
        ]
        
        // copyright: 'Copyright 2010-2019 AKE.kr all rights reserved.', // 레이아웃 푸터의 카피라이트를 작성합니다.
        // github: 'mAKEkr', // 우측 github 링크를 추가하고싶다면 주소 혹은 저장소(저장소같은 경우 mAKEkr/blog 와 같이 작성해주시면 됩니다)를 적어주시면 됩니다.
        // feed: true, // rss 피드를 발행중이시라면 true로 작성해주시면 feed.xml의 주소에 맞추어 아이콘이 뜨게됩니다.
        // comment: { // https://utteranc.es/ 서비스의 코멘트를 이용할 수 있습니다. 해당 comment 항목 전체가 없다면(아예 삭제되었다면) 코멘트 서비스를 이용하지 않는것으로 간주합니다. 
        //   // 차후 vssue등의 서비스를 적용할 예정입니다.
        //   // 아래 설정들은 utteranc.es 에서 attribute로 들어가는 설정들중 서비스 설정만 넣어주시면 됩니다. 기본 스크립트 로드(src), crossorigin, async등의 설정은 기본으로 들어갑니다.
        //   'repo': 'mAKEkr/blog', 
        //   'issue-term': 'url'
        // }
      }
}