import { create } from 'zustand';

interface SettingsState {
    muted: boolean;
    volume: number;
    toggleMute: () => void;
    setVolume: (v: number) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
    muted: false,
    volume: 0.6,
    toggleMute: () => set((s) => ({ muted: !s.muted })),
    setVolume: (v) => set({ volume: Math.min(1, Math.max(0, v)) }),
}));