import { supabase } from "$lib/server/supabaseClient";

export async function load() {
    const { data, error } = await supabase.from('products').select('*');

    if (error) {
        console.error("Error fetching products:", error);
        return {
            products: []
        };
    }

    return {
        products: data ?? []
    };
}
