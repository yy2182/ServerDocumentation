export default {
    '/zh_CN/Bedrock/BDS/': {
        base: '/zh_CN/Bedrock/',
        items: [
            {
                collapsed: false,
                items: [
                    { 
                      text: '前言',
                    base: '/zh_CN/Bedrock/BDS/',
                    link: 'index'
                    },
                    { 
                      text: '快速开始',
                      base: '/zh_CN/Bedrock/BDS/',
                      link: 'QuickStart'
                    },
                    { 
                      text: '进阶',
                      collapsed: false,
                      base: '/zh_CN/Bedrock/BDS/Advanced/',
                      items: [
                        { text: '配置文件', link: 'config' },
                      ]
                   },
                   { 
                    text: '常见问题',
                    base: '/zh_CN/Bedrock/BDS/',
                    link: 'FAQ'
                  },
                ],
            }
        ]
    },
}
