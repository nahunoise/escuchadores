const dictionaries = {
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale) => {
  // Verificamos si el locale existe, si no, usamos 'es' por defecto
  const loader = dictionaries[locale] || dictionaries.es;
  return loader();
}