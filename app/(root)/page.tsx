import StartupCard from "@/components/StartupCard";
import SearchForm from "@/components/SearchForm";
import { randomUUID } from "crypto";

export default async function Home({searchParams}: {
  searchParams: Promise<{query?: string}>
}){

  const query = (await searchParams).query;

  const posts = [
    {
      createdAt: new Date(),
      id: 1,
      views: 55,
      author: {
        name: "Charan",
        id: 1,
        image: "https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg"
      },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nobis!",
      image: "https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.jpg?s=612x612&w=0&k=20&c=gGfba4h97L1tFjVWkPTiZUlfNHtkrf0fHhsmkY4S5Ng=",
      category: "Robots",
      title: "We Robots'25"
    },
    {
      createdAt: new Date(),
      id: 1,
      views: 55,
      author: {
        name: "Charan",
        id: 1,
        image: "https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg"
      },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nobis!",
      image: "https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.jpg?s=612x612&w=0&k=20&c=gGfba4h97L1tFjVWkPTiZUlfNHtkrf0fHhsmkY4S5Ng=",
      category: "Robots",
      title: "We Robots'25"
    },
    {
      createdAt: new Date(),
      id: 1,
      views: 55,
      author: {
        name: "Charan",
        id: 1,
        image: "https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg"
      },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nobis!",
      image: "https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.jpg?s=612x612&w=0&k=20&c=gGfba4h97L1tFjVWkPTiZUlfNHtkrf0fHhsmkY4S5Ng=",
      category: "Robots",
      title: "We Robots'25"
    },
    {
      createdAt: new Date(),
      id: 1,
      views: 55,
      author: {
        name: "Charan",
        id: 1,
        image: "https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg"
      },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nobis!",
      image: "https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.jpg?s=612x612&w=0&k=20&c=gGfba4h97L1tFjVWkPTiZUlfNHtkrf0fHhsmkY4S5Ng=",
      category: "Robots",
      title: "We Robots'25"
    },
    {
      createdAt: new Date(),
      id: 1,
      views: 55,
      author: {
        name: "Charan",
        id: 1,
        image: "https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg"
      },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nobis!",
      image: "https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.jpg?s=612x612&w=0&k=20&c=gGfba4h97L1tFjVWkPTiZUlfNHtkrf0fHhsmkY4S5Ng=",
      category: "Robots",
      title: "We Robots'25"
    },
    {
      createdAt: new Date(),
      id: 1,
      views: 55,
      author: {
        name: "Charan",
        id: 1,
        image: "https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg"
      },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nobis!",
      image: "https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.jpg?s=612x612&w=0&k=20&c=gGfba4h97L1tFjVWkPTiZUlfNHtkrf0fHhsmkY4S5Ng=",
      category: "Robots",
      title: "We Robots'25"
    },
  ]

  return (
    <>
    <section className="pink_container">
      <h1 className="heading">Pitch Your Startup <br /> Connect With Entrepreneurs</h1>
      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get noticed in Virtual Competitions.
      </p>
      <SearchForm query={query}/>
    </section>

    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"`: 'All Startups'}
      </p>

      <ul className="mt-7 card_grid">
        {
          posts?.length > 0 ? (
            posts.map(
              (post: StartupTypeCard, index) => <StartupCard key={post?.id + randomUUID()} post={post}/>
            )
          ) : (
            <p className="no-results">No Startups found</p>
          )
        }
      </ul>
    </section>
    </>
  )
}
