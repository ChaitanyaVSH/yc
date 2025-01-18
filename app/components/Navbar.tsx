import Link from "next/link"
import Image from "next/image"
import { auth, signIn, signOut } from "@/auth"

const Navbar = async () => {
    const session = await auth()

    // Below are async server actions that can be called with form actions or
    // can be passed to client component event handlers.
    async function _signOut() {
        "use server"
        console.log("I'm executed on server. Sign Out");
        await signOut()
    }

    const loginHandler = async () => {
        "use server"
        await signIn("github")
    }
    async function _signIn() {
        "use server"
        console.log("I'm executed on server. Sign In");
        await signIn("github")
    }

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="text" width={144} height={30}/>
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href={"/startup/create"}>
                                <span>Create</span>
                            </Link>

                            <button onClick={_signOut}>Logout</button>

                            <Link href={`/user/${session?.user?.id}}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ): (
                        <>
                            {/*
                                Below is the jugad way of using server actions with only forms
                            */}
                            {/* <form action={_signIn}>
                                <button type="submit">
                                    Login
                                </button>
                            </form> */}

                            {/*
                                Below is much cleaner way of using server actions.
                                1. We create async server action above, Ex: _signIn
                                2. We make our client component to point to that server action as event handler,
                                which internally creates reference to the server action.
                                This reference is called when user clicks this button.

                                This reference would call the actual server action on server.
                            */}
                            <button onClick={loginHandler}>Login</button>

                            {/*
                                Below is the incorrect way.
                                We cannot pass event handlers to client components in server components.
                                As default it is a server component.
                            */}
                            {/* <button onClick={() => _signIn}>Login</button> */}
                        </>
                    )
                    }
                </div>
            </nav>
        </header>
  )
}

export default Navbar;
