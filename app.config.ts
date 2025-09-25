import 'dotenv/config';
import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "RUN'Accès",
  slug: 'runacces',
  version: '0.1.0',
  orientation: 'portrait',
  scheme: 'runacces',
  extra: {
    supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
    supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
  },
  experiments: {
    typedRoutes: true
  },
  plugins: ['expo-router']
});
