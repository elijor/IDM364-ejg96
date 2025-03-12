// import { error } from '@sveltejs/kit';

// export async function load() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//     if (!response.ok) throw error(response.status, 'Failed to fetch posts');

//     const posts = await response.json();

//     return new Response(posts); 
// }

// // src/routes/api/products/+server.js
import { supabase } from "$lib/server/supabaseClient";
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    try {
        // Get query parameters
        const limit = parseInt(url.searchParams.get('limit') || '100');
        const offset = parseInt(url.searchParams.get('offset') || '0');
        
        // Build the query
        let query = supabase
            .from('products')
            .select('*');
        
        // Execute the query
        const { data, error: supabaseError } = await query;
        
        if (supabaseError) {
            console.error("Error fetching products:", supabaseError);
            
            if (supabaseError.code === 'PGRST116' || supabaseError.message.includes('not found')) {
                return new Response(
                    JSON.stringify({ error: 'Looks like there is trouble fetching that' }), 
                    { 
                        status: 404,
                        headers: { 'Content-Type': 'application/json' }
                    }
                );
            } else {
                return new Response(
                    JSON.stringify({ error: 'No Products Found' }), 
                    { 
                        status: 500,
                        headers: { 'Content-Type': 'application/json' }
                    }
                );
            }
        }
        
        if (!data || data.length === 0) {
            return new Response(
                JSON.stringify({ error: 'No products available' }), 
                { 
                    status: 404,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }
        
        // Success - return the product data as JSON
        return json(data);
        
    } catch (err) {
        console.error("Unexpected error:", err);
        
        return new Response(
            JSON.stringify({ error: 'An unexpected error occurred' }), 
            { 
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
}

