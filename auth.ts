import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github";
import { client } from "./sanity/lib/client";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "./sanity/lib/queries";
import { writeClient } from "./sanity/lib/writeClient";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({
      user: {name, email, image},
      account,
      profile: {bio, login, id}
    }) {
      const existingUser = await client.fetch(AUTHOR_BY_GITHUB_ID_QUERY, {id})

      if(!existingUser) {
        await writeClient.create({
          _type: "author",
          id,
          name,
          username: login,
          email,
          image,
          bio: bio || "A cool bio..."
        })
      }

      if(existingUser) return true;
    }
  }
});
