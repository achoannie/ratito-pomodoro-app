import {useEffect, useRef, useState} from "react";
import {Stack} from "@/components/primitives";
import {Image} from "expo-image";
import {View, StyleSheet, ScrollView, Pressable, Text, Animated, Easing, Platform} from "react-native";
import {Mood, PetId, PETS} from "@/pets/pets";
import { colors, fonts } from "@/theme/theme";
import {SideMenu} from "@/components/SideMenu";
import {RText} from "@/components/ratito/RText";
import { StrawberryCounter } from '@/components/ratito/StrawberryCounter';

const CATEGORIES = ['Study', 'Work', 'Read'];
const DURATION = [25, 30, 60, 90];
const PET_IDS = Object.keys(PETS) as PetId[];
type Status = 'idle' | 'paused' | 'running';
type Reaction = 'happy' | 'sad' | null;

const heartEmpty = require('../../assets/icons/heart_empty.png');
const heartFull = require('../../assets/icons/heart_full.png');
function WavingHeartRow({full, delay}: {full: boolean, delay: number}) {
    const bob = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        if (!full) return;
        const wave = Animated.loop(
            Animated.sequence([
                Animated.delay(delay),
                Animated.timing(bob, {toValue: 1, duration: 600, easing: Easing.inOut(Easing.sin), useNativeDriver: Platform.OS !== 'web'}),
                Animated.timing(bob, {toValue: 0, duration: 600, easing: Easing.inOut(Easing.sin), useNativeDriver: Platform.OS !== 'web'}),
                Animated.delay(1200),
            ]),
        );
        wave.start();
        return () => wave.stop();
    }, [full, delay, bob]);
    const translateY = bob.interpolate({inputRange: [0,1], outputRange: [0,-4]});

    return (
        <Animated.View style={{ transform: [{ translateY }] }}>
            <Image source={full ? heartFull : heartEmpty} style={{width: 32, height: 32  }} />
        </Animated.View>
    )
}
function Hearts({ level, max = 5 }: { level: number; max?: number }) {
    return (
        <View style={{ flexDirection: 'row', gap: 4 }}>
            {Array.from({ length: max }, (_, i) => (
                <WavingHeartRow
                    key={i}
                    full={i<level}
                    delay={i*200}
                />
            ))}
        </View>
    );
}


// 1500 → "25:00"
const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

export default function HomeScreen() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [category, setCategory] = useState('Study');
    const [minutes, setMinutes] = useState(25);
    const [status, setStatus] = useState<Status>('idle');
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [reaction, setReaction] = useState<Reaction>(null);
    const [petId] = useState<PetId>('michi'); //default pet, can change later
    const endAt = useRef(0);
    const pet = PETS[petId];

    const mood: Mood =
        status === 'running' ? 'focus' :
        status === 'paused'  ? 'resting' :
            reaction ?? 'idle';

    useEffect(() => {
        if (status !== 'running') return;
        const id = setInterval(() => {
            const left = Math.max(0, Math.ceil((endAt.current - Date.now()) / 1000));
            setTimeLeft(left);
            if (left===0) {
                setStatus('idle');
                setReaction('happy');
                setTimeLeft(minutes*60);
            }
        }, 250);
        return () => clearInterval(id);
    }, [status, minutes])

    useEffect(() => {
        if (reaction===null) return;
        const id = setTimeout(()=> setReaction(null), 3000);
        return () => clearTimeout(id);
    }, [reaction]);

    const pickDuration = (m:number) => {
        setMinutes(m);
        setTimeLeft(m*60);
    }
    const start = () => {
        endAt.current = Date.now() + timeLeft * 1000;
        setReaction(null);
        setStatus('running');
    }
    const pause = () => {setStatus('paused');}
    const giveUp = () => {
        setStatus('idle');
        setReaction('sad');
        setTimeLeft(minutes*60);
    }
    const isIdle = status === 'idle';

    return (
        <View style={styles.root}>
            <View style={styles.topBar}>
                <Pressable onPress={() => setMenuOpen(true)} hitSlop={12}>
                    <RText variant="heading">☰</RText>
                </Pressable>

                <StrawberryCounter amount={67}/>
            </View>
            {/*top-right corner currency*/}
            <View>
            {/*    strawberry*/}
            </View>
            {/*pet box*/}
            <ScrollView>
                <Stack gap="lg" padding='lg'>
                    <View style={styles.petBox}>
                        <Image source={pet.gifs[mood]} style={styles.pet} contentFit="contain" />
                        <View style={styles.heart}>
                            <Hearts level={3}/>
                        </View>
                        <Text style={styles.petName}>{pet.name}</Text>
                    </View>

                    <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
                </Stack>
            </ScrollView>
            {/**/}
            <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </View>
    )
}
const styles = StyleSheet.create({
    root: { flex:1, backgroundColor: colors.bleachedFlax},
    petBox: {
        alignSelf: 'center',
        width: 240,
        height: 280,
        marginTop: 8,
        borderWidth: 2,
        borderColor: colors.arterialNocturne,
        borderRadius: 16,
        backgroundColor: colors.siliconMist,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 50,
        paddingBottom: 8,
    },
    petName: {
        fontFamily: fonts.grapeSoda,       // your display font
        fontSize: 34,
        color: colors.arterialNocturne,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',   // ☰ left, strawberries right
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 16,
    },
    center: { textAlign: 'center' },
    timer: {
        fontFamily: fonts.grapeSoda,
        fontSize: 64,
        color: colors.arterialNocturne,
        textAlign: "center"
    },
    pet: { width: 192, height: 192 },
    heart: {
        position: 'absolute',
        top: 10
    }
})


