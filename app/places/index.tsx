import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import { supabase } from '../../api/supabase';
import type { Place } from '../../lib/types';

export default function PlacesScreen() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from('places')
        .select('*')
        .order('name');

      if (fetchError) {
        setError(fetchError.message);
        setPlaces([]);
      } else {
        setError(null);
        setPlaces(data ?? []);
      }

      setLoading(false);
    };

    fetchPlaces();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
        <Text style={styles.helper}>Chargement des lieux…</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorTitle}>Impossible de récupérer les lieux</Text>
        <Text style={styles.helper}>{error}</Text>
      </View>
    );
  }

  if (places.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.helper}>Aucun lieu disponible. Ajoutez des données depuis Supabase Studio.</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={places}
      keyExtractor={(place) => place.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.placeName}>{item.name}</Text>
          {item.address ? <Text style={styles.address}>{item.address}</Text> : null}
          {item.category ? (
            <Text style={styles.category}>
              {item.category}
              {item.subcategory ? ` · ${item.subcategory}` : ''}
            </Text>
          ) : null}
          {item.description ? <Text style={styles.description}>{item.description}</Text> : null}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 12,
    backgroundColor: '#fff'
  },
  helper: {
    textAlign: 'center',
    color: '#444',
    fontSize: 16
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center'
  },
  list: {
    padding: 16,
    gap: 12,
    backgroundColor: '#f4f4f5'
  },
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    gap: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2
  },
  placeName: {
    fontSize: 18,
    fontWeight: '600'
  },
  address: {
    color: '#4b5563'
  },
  category: {
    color: '#2563eb',
    fontWeight: '500'
  },
  description: {
    color: '#374151'
  }
});
