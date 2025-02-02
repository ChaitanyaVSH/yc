## Tech stuff

### Next Auth
1. https://authjs.dev/

### Tailwind
1. Style overrides
2. Inbuilt animations

### Sanity CMS
##### Sample GROQ request

*[_type=="startup"]{
  id,
  title,
  views,
  category,
  author -> {
    name,
    image,
    email
  }
}


##### Response to above query
[…] 1 item
0:{…} 5 properties
id:null
title:Kommunity
views:10
category:AI
author:{…} 3 properties
name:Chaitu
image:https://avatars.githubusercontent.com/u/36126860?s=400&v=4
email:chaitu.vsh@gmail.com



##### Key benefits of Sanity
* Automatic types generation
* Live Content API for faster/real time updates
* Separate client for write/update use-cases


### Zod for validations
