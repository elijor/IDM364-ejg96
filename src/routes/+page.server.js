import { supabase } from "$lib/server/supabaseClient";
import { error } from '@sveltejs/kit';

export async function load() {
    try {
        const { data, error: supabaseError } = await supabase.from('products').select('*');
        
        if (supabaseError) {
            console.error("Error fetching products:", supabaseError);
            
            // Instead of checking error codes, we'll throw our own custom errors
            if (supabaseError.code === 'PGRST116' || supabaseError.message.includes('not found')) {
                throw error(404, { message: 'Looks like there is trouble fetching that' });
            } else {
                throw error(500, { message: 'No Products Found' });
            }
        }
        
        if (data && data.length === 0) {
            throw error(404, 'No products available');
        }
        
        return {
            products: data ?? []
        };
    } catch (err) {
        // This will catch any errors thrown above or other unexpected errors
        if (err.status) {
            // If it's already a SvelteKit error object, just rethrow it
            throw err;
        } else {
            // For any other errors, throw a generic 500
            console.error("Unexpected error:", err);
            throw error(500, 'An unexpected error occurred');
        }
    }
}