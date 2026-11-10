export const SOUNDS = {
    start: require('../../assets/sounds/start_bubble.mp3'),
    pause: require('../../assets/sounds/pause_bubble.mp3'),
    giveUp: require('../../assets/sounds/give_up.wav'),
    finish: require('../../assets/sounds/finish.wav'),
    switchPet: require('../../assets/sounds/switch.wav'),
} as const;

export type SoundName = keyof typeof SOUNDS;