import {useState} from "react";
import {useAuthStore} from "@/state/useAuthStore";
import {Link, router} from "expo-router";
import {StyleSheet, View} from "react-native";
import {InputField, Text, Stack} from "@/components/primitives";
import {StyledButton} from "@/components/StyledButton";
type FormErrors = {
    name?: string;
    email?: string;
    password?: string;
    confirm?: string;
    form?: string;
};

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});

    const { register, isLoading} = useAuthStore();

    const validate = (): FormErrors => {
        const found: FormErrors = {};
        if (name.trim() === '') found.name = 'Please tell us your name';
        if (!email.includes('@')) found.email = 'That email looks a bit off';
        if (password.length < 6) found.password = 'Password needs at least 6 characters';
        if (confirm !== password) found.confirm = "Passwords don't match";
        return found;
    };

    const handleRegister = async () => {
        const found = validate();
        setErrors(found);
        if (Object.keys(found).length > 0) return;

        try {
            await register(name, email, password);
            router.replace('/');
        } catch (e) {
            const message= e instanceof Error ? e.message : "Something went wrong";
            setErrors(message.toLowerCase().includes('email') ? { email: message } : { form: message })
        }
    };
    return (
        <View style={styles.container}>
            <Stack gap="lg" padding='lg'>
                <Text size="xl" weight="bold" align="center">Join Ratito</Text>
                <InputField label="Name" value={name} onChangeText={setName} error={errors.name} testID='name-input'/>
                <InputField label="Email" value={email} onChangeText={setEmail} error={errors.email} testID='email-input'/>
                <InputField label="Password" value={password} onChangeText={setPassword} error={errors.password} secureTextEntry testID='password-input'/>
                <InputField label="Confirm password" value={confirm} onChangeText={setConfirm} error={errors.confirm} secureTextEntry testID='confirm-input'/>
                <StyledButton label="Create account" onPress={handleRegister} isLoading={isLoading} testID='register-button'/>
                {errors.form !== undefined && (
                    <Text size="sm" color="red" align="center">{errors.form}</Text>
                )}
                <Link href="/login" style={styles.link} testID="to-login">
                    Already have an account? Log in
                </Link>
            </Stack>

        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 , justifyContent: 'center'},
    link: {textAlign: "center", textDecorationLine: 'underline'}
});
