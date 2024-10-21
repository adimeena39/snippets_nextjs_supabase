"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// import { createClient } from "@/utils/supabase/server";

export async function login(formData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { data: userData, error } = await supabase.auth.signUp(data);

  console.log("data", userData);

  const { data: foldersData, error: foldersError } = await supabase
    .from("folders")
    .insert([
      { name: "Default", user_id: userData?.user?.id, is_deleted: false },
    ])
    .select();

  if (error) {
    console.log(333, "error", error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
