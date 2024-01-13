'use client'

import { Database} from "@/types_db";
import React, {useState} from "react";
import {createSupabaseClient} from "@supabase/auth-helpers-shared";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {SessionContextProvider} from "@supabase/auth-helpers-react";

interface SupabaseProvidersProps {
    children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProvidersProps>  = ({
    children
}) => {
   const [supabaseClient] = useState(() => createClientComponentClient<Database>())

    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    )
}

export default SupabaseProvider;