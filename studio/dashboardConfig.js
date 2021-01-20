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
                  buildHookId: '60088081d39c1b179e4b5e03',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8kwur4h3',
                  apiId: '0b308257-1e40-48c0-af9f-321ad9478816'
                },
                {
                  buildHookId: '60088081d39c1b19184b5d8d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-41akzj2s',
                  apiId: '00c5e5fd-8beb-4cd2-903c-e1f98a8fce18'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/guidogr95/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-41akzj2s.netlify.app', category: 'apps'}
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
