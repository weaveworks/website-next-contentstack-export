module.exports = {
  versioning: false,
  host: 'https://api.contentstack.io/v3',
  cdn: 'https://cdn.contentstack.io/v3',
  modules: {
    types: [
      'assets',
      'locales',
      'environments',
      'content_types',
      'entries'
    ],
    locales: {
      dirName: 'locales',
      fileName: 'locales.json',
      requiredKeys: [
        'code',
        'uid',
        'name'
      ]
    },
    environments: {
      dirName: 'environments',
      fileName: 'environments.json'
    },
    assets: {
      dirName: 'assets',
      fileName: 'assets.json',
      // This is the total no. of asset objects fetched in each 'get assets' call
      batchLimit: 20,
      host: 'https://images.contentstack.io',
      invalidKeys: [
        'created_at',
        'updated_at',
        'created_by',
        'updated_by',
        '_metadata',
        'published'
      ],
      // no of asset version files (of a single asset) that'll be downloaded parallelly
      downloadLimit: 5
    },
    content_types: {
      dirName: 'content_types',
      fileName: 'content_types.json',
      validKeys: [
        'title',
        'uid',
        'schema',
        'options',
        'singleton',
        'description'
      ],
      // total no of content types fetched in each 'get content types' call
      limit: 100
    },
    entries: {
      dirName: 'entries',
      fileName: 'entries.json',
      invalidKeys: [
        'created_at',
        'updated_at',
        'created_by',
        'updated_by',
        '_metadata',
        'published'
      ],
      // total no of entries fetched in each content type in a single call
      limit: 100
    }
  },
  apis: {
    userSession: '/user-session/',
    locales: '/locales/',
    environments: '/environments/',
    assets: '/assets/',
    content_types: '/content_types/',
    entries: '/entries/'
  }
}