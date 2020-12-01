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
                  buildHookId: '5fc699e46c3c563d3b10f438',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-og3iok97',
                  apiId: '368f8e1f-fbab-439f-a2e1-37da2dd75fc0'
                },
                {
                  buildHookId: '5fc699e46c3c5639bf10fe09',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gn69aij7',
                  apiId: '760b7370-95ef-4b5a-84de-daf21bf9e25f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/javaniecampbell/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gn69aij7.netlify.app', category: 'apps'}
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
