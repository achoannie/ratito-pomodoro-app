import { Pressable, StyleSheet } from 'react-native';
import { Spinner } from './primitives/Spinner';
import { Text } from './primitives/Text';

interface StyledButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  testID?: string;
}

export function StyledButton({
  label,
  onPress,
  variant = 'primary',
  isLoading = false,
  testID,
}: StyledButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={isLoading}
      style={[styles.base, styles[variant], isLoading && styles.disabled]}
      testID={testID}
    >
      {isLoading ? <Spinner size="small" /> : <Text weight="medium">{label}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { alignItems: 'center', justifyContent: 'center', paddingVertical: 12, borderRadius: 8, minHeight: 46 },
  primary: { backgroundColor: '#E5E7EB', borderWidth: 1, borderColor: '#6B7280' },
  secondary: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#9CA3AF' },
  disabled: { opacity: 0.6 },
});
