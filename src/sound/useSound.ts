import {useSettingsStore} from "@/state/useSettingsStore";
import {SoundName, SOUNDS} from "@/sound/sounds";
import {useAudioPlayer} from "expo-audio";

export function useSounds() {
    const {muted, volume} = useSettingsStore();

    const players = {
        start: useAudioPlayer(SOUNDS.start),
        pause: useAudioPlayer(SOUNDS.pause),
        giveUp: useAudioPlayer(SOUNDS.giveUp),
        finish: useAudioPlayer(SOUNDS.finish),
        switchPet: useAudioPlayer(SOUNDS.switchPet),
    };

    return (name: SoundName) => {
        if (muted) return;
        const player = players[name];
        player.volume = volume;
        player.seekTo(0);
        player.play();
    };
}