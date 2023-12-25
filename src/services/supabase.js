import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://sliobadhaxiqlftvhgld.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsaW9iYWRoYXhpcWxmdHZoZ2xkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMyMzg1MDUsImV4cCI6MjAxODgxNDUwNX0.tlDz1WIhaRj65dQuetGV5vJ0XPc81sH1cIj-h_NZ-g8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
