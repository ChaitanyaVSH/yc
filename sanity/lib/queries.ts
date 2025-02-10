import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
    `*[_type=="startup" && 
    !defined($search) || 
    title match $search || 
    category match $search || 
    author->name match $search] | order(_createdAt desc) {
  title,
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
    username
  }
}`);

export const FETCH_STARTUP_BY_ID_QUERY = defineQuery(
  `*[_type=="startup" && _id == $id][0]{
title,
slug,
views,
category,
_createdAt,
image,
_id,
description,
pitch,
author -> {
  _id,
  id,
  name,
  image,
  email,
  bio,
  username
}
}`);

export const STARTUP_VIEWS_QUERY = defineQuery(
  `*[_type=="startup" && _id == $id][0] {
  _id, views
  }
  `
);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
  *[_type == "author" && id == $id][0] {
  name,
  email,
  bio,
  image,
  username,
  _id,
  id
  }
`);

export const FETCH_STARTUPS_BY_AUTHOR_ID_QUERY = defineQuery(`
  *[_type == "startup" && author->id == $id] | order(_createdAt desc) {
  title,
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
    username
  }
  }
`);

export const PLAYLIST_BY_SLUG_QUERY =
  defineQuery(`*[_type == "playlist" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
}
`);
