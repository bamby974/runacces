import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="index" options={{ title: "RUN'Accès" }} />
        <Stack.Screen name="places/index" options={{ title: 'Lieux accessibles' }} />
      </Stack>
    </>
  );
}
