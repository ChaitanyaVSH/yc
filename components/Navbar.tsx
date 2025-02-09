import Link from "next/link"
import Image from "next/image"
import { auth, signIn, signOut } from "@/auth"
import { BadgePlus, LogOut } from "lucide-react";

// Below are async server actions that can be called with form actions or
// can be passed to client component event handlers.

// Having server actions outside the component will prevent recreation on renders.
async function _signOut() {
    "use server"
    console.log("I'm executed on server. Sign Out");
    await signOut()
};

const loginHandler = async () => {
    "use server"
    console.log("I'm executed on server. Sign In");
    await signIn("github")
};

const Navbar = async () => {
    const session = await auth();

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="text" width={144} height={30}/>
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href={"/startup/create"}>
                                <span className="max-sm:hidden">Create</span>
                                <BadgePlus className="size-6 sm:hidden"/>
                            </Link>

                            <form action={_signOut}>
                                <button type="submit">
                                    <span className="max-sm:hidden">Logout</span>
                                    <LogOut className="size-6 sm:hidden text-red-500"/>
                                </button>
                            </form>

                            <Link href={`/user/${session?.user?.id}}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ): (
                        <>
                            {/*
                                Below is the jugad way of using server actions with only forms
                            */}
                            <form action={loginHandler}>
                                <button type="submit">
                                    Login
                                </button>
                            </form>

                            {/*
                                Below is much cleaner way of using server actions.
                                1. We create async server action above, Ex: _signIn
                                2. We make our client component to point to that server action as event handler,
                                which internally creates reference to the server action.
                                This reference is called when user clicks this button.

                                This reference would call the actual server action on server.
                            */}
                            {/* Below approach was having some issues after changes in package lock.json */}
                            {/* <button onClick={loginHandler}>
                                <span className="text-100">Login Button</span>
                            </button> */}

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
