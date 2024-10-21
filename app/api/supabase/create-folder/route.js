import { createClient } from "@/utils/supabase/server";

export async function POST(request) {
  try {
    const folderData = await request.json();
    const supabase = createClient();
    const { data: session } = await supabase.auth.getUser();

    if (!session?.user) {
      return Response.json({ error: "Not authenticated" }, { status: 401 });
    }

    const user_id = session.user.id; // Get the user's UUID
    const { data, error } = await supabase
      .from("folders")
      .insert({ ...folderData, user_id: user_id })
      .select();

    if (error) {
      throw new Error(error?.message);
    }
    return Response.json({ data });
  } catch (err) {
    console.log(2222, err);
    return NextResponse.json(
      { error: err?.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
