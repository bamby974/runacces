-- Taxonomie et exemples de lieux pour RUN'Accès
-- TODO: remplacer les valeurs d'exemple par la taxonomie officielle (voir PDF de référence)

insert into public.places (name, slug, description, category, subcategory, address, latitude, longitude, accessibility_features)
values
    (
        'Office du tourisme - Saint-Denis',
        'office-tourisme-saint-denis',
        'Point d''information touristique disposant d''un comptoir adapté.',
        'Services publics',
        'Tourisme',
        '14 Rue de Paris, Saint-Denis 97400',
        -20.8789,
        55.4481,
        array['rampe', 'comptoir_basse_hauteur', 'documentation_facile_a_lire']
    ),
    (
        'Parc de la Trinité',
        'parc-de-la-trinite',
        'Grand parc urbain avec allées accessibles et sanitaires adaptés.',
        'Loisirs',
        'Parcs et jardins',
        'Rue du Parc, Saint-Denis 97400',
        -20.8923,
        55.4812,
        array['chemins_stabilises', 'sanitaires_accessibles']
    );

-- TODO: ajouter les insertions de la taxonomie détaillée (tables dédiées ou JSONB) quand le modèle sera finalisé.
