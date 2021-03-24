var CONST = require("./const");

module.exports = {
    title: 'TIL',
    description: 'Today I Learned',
    base: '/TIL/',
    themeConfig: { //테마별 설정 항목입니다.
        sidebar: [
            {
                title: '2021',
                children: CONST.twentyOne
            }
        ],
        nav: [
          {
            text: 'GitHub', // 메뉴에 표시될 이름
            link: 'https://github.com/jaesungahn91' // 링크 주소
          },
          {
            text: 'Blog', // 메뉴에 표시될 이름
            link: 'https://js91.tistory.com/' // 링크 주소
          },
        ]
      }
}