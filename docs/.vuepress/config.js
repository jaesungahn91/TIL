var CONST = require("./const");

module.exports = {
    theme: 'vuepress-theme-hope',
    title: '안재성 TIL',
    description: 'Today I Learned',
    base: '/TIL/',
    themeConfig: {
        pageInfo: [],
        sidebar: [
            {
                title: '2023',
                children: CONST.twentyThree
            },
            {
                title: '2022',
                children: CONST.twentyTwo
            },
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
            link: 'https://velog.io/@ahnjs' // 링크 주소
          },
        ]
      }
}