import {ProductsWithPrice} from '@/types'
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

const getActiveProductsWithPrices = async (): Promise<ProductsWithPrice[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies,
    });

    const {data, error} = await supabase.from('products').select('*, price(*)').eq('active', true).eq('prices.active', true).order('metadata->index').order('unit_amount', {foreignTable: 'prices'});

    if (error) {
        console.log(error)
    } return (data as any) || [];
}

export default getActiveProductsWithPrices()