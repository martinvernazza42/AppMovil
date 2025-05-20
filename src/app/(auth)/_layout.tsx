// app/_layout.tsx
import { Stack } from 'expo-router'; // O si prefieres, Slot directamente

export default function RootLayout() {
  return (
    <Stack>
      {/* El `index` es app/index.tsx, que contiene el Redirect. */}
      {/* Es importante ocultar su header. */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* El grupo (main) contendrá las pestañas y su contenido. */}
      {/* Su propio _layout.tsx (app/(main)/_layout.tsx) ya manejará la UI. */}
      <Stack.Screen name="(main)" options={{ headerShown: false }} />

      {/* Si tuvieras un grupo (auth) y quisieras un layout de autenticación.
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      */}
    </Stack>
  );
}