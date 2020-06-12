import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'uk2wrb7f',
  dataset: 'p-s19-projects',
  useCdn: true // `false` if you want to ensure fresh data
})