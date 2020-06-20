export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eee67a869e70d4877a5005c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink2-studio-ts6aynn2',
                  apiId: '02735077-5dae-426f-b98d-77d6d1b3d89e'
                },
                {
                  buildHookId: '5eee67a869e70d339ba5059b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink2-web-1zcbszg8',
                  apiId: '7c2f7b67-24dc-4d3c-8db4-3b5a5b8bf83e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gravityatl/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink2-web-1zcbszg8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
