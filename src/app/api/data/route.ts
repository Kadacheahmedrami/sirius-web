import User from "../../../lib/modals/user.modal";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

 

export async function GET() {
  const { userId } = auth(); // Get Clerk userId
  const user = await currentUser(); // Get the current user from Clerk

  if (!userId) {
    return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
  }

  try {
    // Fetch the user data from MongoDB based on the Clerk userId
    const dbUser = await User.findOne({ clerkId: userId });

    if (!dbUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Return the entire user schema
    return NextResponse.json(
      {
        message: "Authenticated",
        data: dbUser, // Send the entire user document
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching user data", error },
      { status: 500 }
    );
  }
}
