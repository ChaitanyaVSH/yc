import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
    `*[_type=="startup"] | order(_createdAt desc) {
  title,
  slug,
  views,
  category,
  _createdAt,
  image,
  description,
  author -> {
    _id,
    id,
    name,
    image,
    email
  }
}`);
