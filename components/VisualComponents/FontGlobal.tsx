import { Text as RNText, TextProps } from 'react-native';

export default function GlobalFont({ style, ...props }: TextProps) {
  return <RNText style={[{ fontFamily: 'Inter_400Regular' }, style]} {...props} />;
}
