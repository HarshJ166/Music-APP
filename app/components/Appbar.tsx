"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link"


export function Appbar() {
    const session = useSession();

    return <div className="flex justify-between px-20 pt-4">
        <div className="text-lg font-bold flex flex-col justify-center text-black">
            Music App
        </div>
        <div>
            {session.data?.user && <button className="bg-purple-600 text-white hover:bg-purple-700" onClick={() => signOut()}>Logout</button>}
            {!session.data?.user &&<button className="bg-purple-600 text-white hover:bg-purple-700" onClick={() => signIn()}>Signin</button>}
        </div>
    </div>
}