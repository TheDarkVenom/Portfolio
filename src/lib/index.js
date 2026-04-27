// src/lib/index.js
import { writable, derived } from 'svelte/store';
import { translations } from './translations.js';

// 1. Creiamo lo store con la lingua iniziale
export const currentLang = writable('it');

// 2. Opzionale: Creiamo uno store derivato per scrivere meno codice nei componenti
export const t = derived(currentLang, ($currentLang) => {
  return translations[$currentLang];
});