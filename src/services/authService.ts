import type { User as SupabaseUser } from '@supabase/supabase-js';
import type { User } from '@/types';
import {supabase} from "@/lib/supabase";


const toUser = (u: SupabaseUser, token: string): User => ({
    id: u.id,
    email: u.email ?? '',
    name: (u.user_metadata?.name as string|undefined) ?? 'friend',
    token,
})

export async function register(name: string, email: string, password: string): Promise<User> {
    const {data, error} = await supabase.auth.signUp({
        email,
        password,
        options: {data: {name}},
    })
    if (error) throw error;
    if (data.user === null || data.session === null) {
        throw new Error('Check your inbox to confirm your account')
    }
    return toUser(data.user, data.session.access_token)
}

export async function login(email: string, password: string): Promise<User> {
    const {data, error} = await supabase.auth.signInWithPassword({email, password});
    if (error) throw error;
    return toUser(data.user, data.session.access_token);
}

export async function logout(): Promise<void> {
    await supabase.auth.signOut();
}
