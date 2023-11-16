import { Helmet } from "react-helmet";
import * as SeoProps from "./Metadata";

interface HeadProps {
  props: SeoProps.Metadata,
  children?: React.ReactNode
}

export default function SEO({props, children} : HeadProps) {
  return (
    <>
      <GeneralSEO {...props} />
      <OpenGraphSEO {...props.og} />
      <TwitterSEO {...props.twitter} />
      {children}
    </>
  );
}

function GeneralSEO({title, description, author, image}: SeoProps.CommonMetadata) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta itemProp="name" content={title} />
      {
        description &&
        <meta itemProp="description" content={description} /> &&
        <meta name="description" content={description} />
      }
      {author && <meta name="author" content={author} />}
      {image && <meta itemProp="image" content={image} />}
    </Helmet>
  );
}

function OpenGraphSEO(og: SeoProps.OpenGraphMetadata) {
  return (
    <Helmet>
      {og.type && <meta property="og:type" content={og.type} />}
      {og.title && <meta property="og:title" content={og.title} />}
      {og.image && <meta property="og:image" content={og.image} />}
      {og.description && <meta property="og:description" content={og.description} />}
      {og.url && <meta property="og:url" content={og.url} />}
    </Helmet>
  );
}

function TwitterSEO(twitter: SeoProps.TwitterMetadata) {
  return(
    <Helmet>
      {twitter.card && <meta name="twitter:card" content={twitter.card} />}
      {twitter.creator && <meta name="twitter:creator" content={twitter.creator} />}
      {twitter.description && <meta name="twitter:description" content={twitter.description} /> }
      {twitter.image && <meta name="twitter:image" content={twitter.image}/> }
      {twitter.title && <meta name="twitter:title" content={twitter.title} />}
      {twitter.url && <meta name="twitter:url" content={twitter.url} /> }
    </Helmet>
  );
}
