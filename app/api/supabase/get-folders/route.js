import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const supabase = createClient();
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError || !session) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const user = session.user; // Get the authenticated user

    const { data: folders, error } = await supabase
      .from("folders")
      .select("*")
      .eq("user_id", user?.id);

    console.log("folders", folders);
    if (error) {
      throw new Error("Error while getting folders");
    }
    return NextResponse.json({ folders });
  } catch (err) {
    return NextResponse.json(
      { error: err?.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
