import { supabase } from "$lib/server/supabaseClient";

export async function load() {
    const { data, error } = await supabase.from('products').select('*');

    if (error) {
        console.error("Error fetching products:", error);
        return {
            products: [] // Return an empty array in case of error
        };
    }

    return {
        products: data ?? [] // Ensure data is not null or undefined
    };
}
