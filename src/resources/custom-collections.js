import Resource from './base'

export default class CustomCollectionsResource extends Resource {
  resourceName = 'custom_collections'
  subResources = [
    'products',
    'metafields'
  ]
}
