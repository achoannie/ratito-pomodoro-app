import type { ImageSourcePropType } from 'react-native';

export type Mood = 'idle' | 'focus' | 'resting' | 'happy' | 'sad';
type Pet = {name: string, gifs: Record<Mood, ImageSourcePropType>}
export const PETS = {
    perrito: {
        name: 'Perrito',
        gifs: {
            idle: require('../../assets/pets/perrito/perrito_idle.gif'),
            focus: require('../../assets/pets/perrito/perrito_idle_blurry.gif'),
            resting: require('../../assets/pets/perrito/perrito_idle_blurry.gif'),
            happy: require('../../assets/pets/perrito/perrito_idle_blurry.gif'),
            sad: require('../../assets/pets/perrito/perrito_idle_blurry.gif'),
        } satisfies Record<Mood, Pet>,
    },
    michi: {
        name: 'Michi',
        gifs: {
            idle: require('../../assets/pets/michi/michi_idle.gif'),
            focus: require('../../assets/pets/michi/michi_idle.gif'),
            resting: require('../../assets/pets/michi/michi_idle.gif'),
            happy: require('../../assets/pets/michi/michi_idle.gif'),
            sad: require('../../assets/pets/michi/michi_idle.gif'),
        } satisfies Record<string, Pet>,
    }
};
export type PetId = keyof typeof PETS;