import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
    `*[_type=="startup" && 
    !defined($search) || 
    title match $search || 
    category match $search || 
    author->name match $search] | order(_createdAt desc) {
  title,
  slug,
  views,
  category,
  _createdAt,
  image,
  _id,
  description,
  author -> {
    _id,
    id,
    name,
    image,
    email
  }
}`);
