import {createClient} from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import 'react-native-url-polyfill/auto';

const url = process.env.EXPO_PUBLIC_SUPABASE_URL;
const key = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) { throw new Error("Supabase URL and anon key missing")}

const isServer = typeof window === 'undefined';
export const supabase = createClient( url, key, {
        auth: {
            storage: isServer ? undefined : AsyncStorage,
            autoRefreshToken: !isServer,
            persistSession: !isServer,
            detectSessionInUrl: false,
        }
    }
)