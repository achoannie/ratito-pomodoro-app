import {TextInput, View, StyleSheet, Pressable} from 'react-native';
import { Text } from './Text';
import { useState } from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: string;
  testID?: string;
}

export function InputField({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  error,
  testID,
}: InputFieldProps) {
  const [hidden, setHidden] = useState(true);

  return (
    <View style={styles.container}>
      <Text size="sm" weight="medium">{label}</Text>
      <View style={styles.inputRow}>
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry && hidden}
            style={[styles.input, error !== undefined && styles.inputError]}
            testID={testID}
            autoCapitalize="none"
        />
        {secureTextEntry &&(
            <Pressable onPress={()=> setHidden((h) => !h)} style={styles.eye} hitSlop={8} accessibilityLabel={hidden ? 'Show password' : "Hide password"}>
              <Ionicons name={hidden ? 'eye-outline' : 'eye-off-outline'} color="#6B7280"/>
            </Pressable>
        )}
      </View>
      {error !== undefined && <Text size="sm" color="red">{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 4 },
  inputRow: { justifyContent: 'center' },
  inputWithIcon: { paddingRight: 44 },
  eye: { position: 'absolute', right: 12, top: 0, bottom: 0, justifyContent: 'center',},
  input: {
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  inputError: { borderColor: '#DC2626' },
});