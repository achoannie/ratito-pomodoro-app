import type { ImageSourcePropType } from 'react-native';

export type Mood = 'idle' | 'focus' | 'resting' | 'happy' | 'sad';
type Pet = {name: string, gifs: Record<Mood, ImageSourcePropType>}
export const PETS = {
    perrito: {
        name: 'Perrito',
        gifs: {
            idle: require('../../assets/pets/perrito/perrito_idle_tight.gif'),
            focus: require('../../assets/pets/perrito/perrito_idle.gif'),
            resting: require('../../assets/pets/perrito/perrito_idle.gif'),
            happy: require('../../assets/pets/perrito/perrito_idle.gif'),
            sad: require('../../assets/pets/perrito/perrito_idle.gif'),
        } satisfies Record<Mood, Pet>,
    },
};
export type PetId = keyof typeof PETS;