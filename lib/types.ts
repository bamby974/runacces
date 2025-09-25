export type Place = {
  id: string;
  name: string;
  description: string | null;
  category: string | null;
  subcategory: string | null;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  accessibility_features: string[] | null;
};
