import { NextResponse } from "next/server"
import { db } from "../../../configs/index";
import { usersTable } from "../../../configs/schema";
import { eq } from "drizzle-orm";

export async function POST(req) {
    const { user } = await req.json();

    //check user
    const userData = await db.select().from(usersTable).where((eq(usersTable.email, user?.primaryEmailAddress.emailAddress)))

    if (userData?.length <= 0) {
        const result = await db.insert(usersTable).values({
            name: user?.fullName,
            email: user?.primaryEmailAddress.emailAddress,
            image: user?.imageUrl
        }).returning(usersTable)

        return NextResponse.json(result)
    }

    return NextResponse.json (userData[0])

}