
// export const supabase = createClient(VITE_supabase_url, VITE_supabase_anon_key)

import { createClient } from "@supabase/supabase-js";

const supabase_url = import.meta.env.VITE_SUPABASE_URL;
const supabase_anon_key = import.meta.env.VITE_SUPABASE_ANON_KEY;

// import { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } from "$env/static/public"


export const supabase = createClient(supabase_url, supabase_anon_key);