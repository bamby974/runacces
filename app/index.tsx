import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur RUN'Accès</Text>
      <Text style={styles.subtitle}>
        Retrouvez prochainement les lieux accessibles de l'île de La Réunion.
      </Text>
      <Link href="/places" style={styles.link}>
        Voir les lieux accessibles
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 24,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444'
  },
  link: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '600'
  }
});
