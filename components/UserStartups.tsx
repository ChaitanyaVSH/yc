import { client } from "@/sanity/lib/client";
import { FETCH_STARTUPS_BY_AUTHOR_ID_QUERY } from "@/sanity/lib/queries";
import StartupCard, { StartupTypeCard } from "./StartupCard";

const UserStartups = async ({id}: {id: string}) => {
    const startups: StartupTypeCard[] = await
    client.fetch(FETCH_STARTUPS_BY_AUTHOR_ID_QUERY, {id: Number(id)});

    return (
       <>
       {startups.length > 0 ?
        startups.map((post: StartupTypeCard) => (
          <StartupCard key={post?._id} post={post} />
        ))
       :
        <p className="">No startups found</p>
       }
       </>
    );
}

export default UserStartups;
