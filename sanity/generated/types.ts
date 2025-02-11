/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type Playlist = {
  _id: string;
  _type: "playlist";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  select?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "startup";
  }>;
};

export type Startup = {
  _id: string;
  _type: "startup";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  views?: number;
  description?: string;
  category?: string;
  image?: string;
  pitch?: string;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  image?: string;
  bio?: string;
};

export type Markdown = string;

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityImageHotspot | SanityImageCrop | SanityFileAsset | SanityImageAsset | SanityImageMetadata | Geopoint | SanityAssetSourceData | Playlist | Startup | Slug | Author | Markdown;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: sanity/lib/queries.ts
// Variable: STARTUPS_QUERY
// Query: *[_type=="startup" &&     !defined($search) ||     title match $search ||     category match $search ||     author->name match $search] | order(_createdAt desc) {  title,  views,  category,  _createdAt,  image,  _id,  description,  author -> {    _id,    id,    name,    image,    username  }}
export type STARTUPS_QUERYResult = Array<{
  title: string | null;
  views: null;
  category: null;
  _createdAt: string;
  image: null;
  _id: string;
  description: null;
  author: null;
} | {
  title: null;
  views: null;
  category: null;
  _createdAt: string;
  image: string | null;
  _id: string;
  description: null;
  author: null;
} | {
  title: string | null;
  views: null;
  category: null;
  _createdAt: string;
  image: null;
  _id: string;
  description: string | null;
  author: null;
} | {
  title: string | null;
  views: number | null;
  category: string | null;
  _createdAt: string;
  image: string | null;
  _id: string;
  description: string | null;
  author: {
    _id: string;
    id: number | null;
    name: string | null;
    image: string | null;
    username: string | null;
  } | null;
}>;
// Variable: FETCH_STARTUP_BY_ID_QUERY
// Query: *[_type=="startup" && _id == $id][0]{title,slug,views,category,_createdAt,image,_id,description,pitch,author -> {  _id,  id,  name,  image,  email,  bio,  username}}
export type FETCH_STARTUP_BY_ID_QUERYResult = {
  title: string | null;
  slug: Slug | null;
  views: number | null;
  category: string | null;
  _createdAt: string;
  image: string | null;
  _id: string;
  description: string | null;
  pitch: string | null;
  author: {
    _id: string;
    id: number | null;
    name: string | null;
    image: string | null;
    email: string | null;
    bio: string | null;
    username: string | null;
  } | null;
} | null;
// Variable: STARTUP_VIEWS_QUERY
// Query: *[_type=="startup" && _id == $id][0] {  _id, views  }
export type STARTUP_VIEWS_QUERYResult = {
  _id: string;
  views: number | null;
} | null;
// Variable: AUTHOR_BY_GITHUB_ID_QUERY
// Query: *[_type == "author" && id == $id][0] {  name,  email,  bio,  image,  username,  _id,  id  }
export type AUTHOR_BY_GITHUB_ID_QUERYResult = {
  name: string | null;
  email: string | null;
  bio: string | null;
  image: string | null;
  username: string | null;
  _id: string;
  id: number | null;
} | null;
// Variable: FETCH_STARTUPS_BY_AUTHOR_ID_QUERY
// Query: *[_type == "startup" && author->id == $id] | order(_createdAt desc) {  title,  views,  category,  _createdAt,  image,  _id,  description,  author -> {    _id,    id,    name,    image,    username  }  }
export type FETCH_STARTUPS_BY_AUTHOR_ID_QUERYResult = Array<{
  title: string | null;
  views: number | null;
  category: string | null;
  _createdAt: string;
  image: string | null;
  _id: string;
  description: string | null;
  author: {
    _id: string;
    id: number | null;
    name: string | null;
    image: string | null;
    username: string | null;
  } | null;
}>;
// Variable: PLAYLIST_BY_SLUG_QUERY
// Query: *[_type == "playlist" && slug.current == $slug][0]{  _id,  title,  slug,  select[]->{    _id,    _createdAt,    title,    slug,    author->{      _id,      name,      slug,      image,      bio    },    views,    description,    category,    image,    pitch  }}
export type PLAYLIST_BY_SLUG_QUERYResult = {
  _id: string;
  title: string | null;
  slug: Slug | null;
  select: Array<{
    _id: string;
    _createdAt: string;
    title: string | null;
    slug: Slug | null;
    author: {
      _id: string;
      name: string | null;
      slug: null;
      image: string | null;
      bio: string | null;
    } | null;
    views: number | null;
    description: string | null;
    category: string | null;
    image: string | null;
    pitch: string | null;
  }> | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type==\"startup\" && \n    !defined($search) || \n    title match $search || \n    category match $search || \n    author->name match $search] | order(_createdAt desc) {\n  title,\n  views,\n  category,\n  _createdAt,\n  image,\n  _id,\n  description,\n  author -> {\n    _id,\n    id,\n    name,\n    image,\n    username\n  }\n}": STARTUPS_QUERYResult;
    "*[_type==\"startup\" && _id == $id][0]{\ntitle,\nslug,\nviews,\ncategory,\n_createdAt,\nimage,\n_id,\ndescription,\npitch,\nauthor -> {\n  _id,\n  id,\n  name,\n  image,\n  email,\n  bio,\n  username\n}\n}": FETCH_STARTUP_BY_ID_QUERYResult;
    "*[_type==\"startup\" && _id == $id][0] {\n  _id, views\n  }\n  ": STARTUP_VIEWS_QUERYResult;
    "\n  *[_type == \"author\" && id == $id][0] {\n  name,\n  email,\n  bio,\n  image,\n  username,\n  _id,\n  id\n  }\n": AUTHOR_BY_GITHUB_ID_QUERYResult;
    "\n  *[_type == \"startup\" && author->id == $id] | order(_createdAt desc) {\n  title,\n  views,\n  category,\n  _createdAt,\n  image,\n  _id,\n  description,\n  author -> {\n    _id,\n    id,\n    name,\n    image,\n    username\n  }\n  }\n": FETCH_STARTUPS_BY_AUTHOR_ID_QUERYResult;
    "*[_type == \"playlist\" && slug.current == $slug][0]{\n  _id,\n  title,\n  slug,\n  select[]->{\n    _id,\n    _createdAt,\n    title,\n    slug,\n    author->{\n      _id,\n      name,\n      slug,\n      image,\n      bio\n    },\n    views,\n    description,\n    category,\n    image,\n    pitch\n  }\n}\n": PLAYLIST_BY_SLUG_QUERYResult;
  }
}
