import { supabase } from '$lib/server/supabaseClient.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const { slug } = params;
  
  // Fetch current product
  const { data: product, error: productError } = await supabase
    .from('products')
    .select('*')
    .eq('id', slug)
    .single();

  if (productError) {
    throw error(500, productError.message);
  }

  if (!product) {
    throw error(404, 'Product not found');
  }

  // Fetch 3 random products excluding current one
  const { data: randomProducts, error: randomError } = await supabase
    .from('products')
    .select('*')
    .neq('id', slug)
    .limit(3)
    .order('id', { ascending: true, nullsFirst: false }); // We'll randomize client-side

  if (randomError) {
    throw error(500, randomError.message);
  }

  // Shuffle the products array client-side
  const shuffledProducts = [...randomProducts].sort(() => Math.random() - 0.5);

  return {
    product,
    randomProducts: shuffledProducts
  };
}