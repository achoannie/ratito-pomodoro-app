/**
 * Tiny in-memory flag so the welcome screen shows once per app launch.
 * Replace with the auth store when Supabase login is wired up.
 */
let welcomeSeen = false;

export const hasSeenWelcome = () => welcomeSeen;
export const markWelcomeSeen = () => {
    welcomeSeen = true;
};
