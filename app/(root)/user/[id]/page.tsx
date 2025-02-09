import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

const page = async ({params}: {params: Promise<{id: string}>}) => {

  var session = await auth();
  var id = (await params).id;

  console.log("id", id);
  const user = await client.fetch(AUTHOR_BY_GITHUB_ID_QUERY, {id: Number(id)})
  console.log("USER", user);
  // if(!user) return notFound();


  return (
    <div>User details: {id}</div>
  )
}

export default page;
