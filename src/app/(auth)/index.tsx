// app/index.tsx
import { Redirect } from 'expo-router';

export default function App() {
  return <Redirect href="/(main)" />; // <-- ¡SOLUCIÓN: Añade los paréntesis!
}