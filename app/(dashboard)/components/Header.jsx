
import React from 'react'

import { currentUser } from '@clerk/nextjs/server'
import { UserButton } from '@clerk/nextjs';



export default async function Header() {
    const user = await currentUser()

    return (

        <div className="text-sm lg:flex justify-between gap-5 p-4 w-full">
            <div className="flex items-center gap-3">
                <UserButton/>
                 Hello, {user?.firstName}
            </div>
            <div className="">
                Support: expertresearchers@gmail.com
            </div>
        </div>
    )
}

