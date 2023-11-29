export interface CommonMetadata {
  title?: string,
  description?: string,
  author?: string,
  image?: string,
}

export interface Metadata extends CommonMetadata {
  og?: OpenGraphMetadata,
  twitter?: TwitterMetadata
}

export interface OpenGraphMetadata {
  type?: string,
  title?: string,
  image?: string,
  description?: string,
  url?: string,
  site_name?: string,
}

export interface TwitterMetadata {
  card?: string,
  url?: string,
  creator?: string,
  title?: string,
  description?: string,
  image?: string
}
