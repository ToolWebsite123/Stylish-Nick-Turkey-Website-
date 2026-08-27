import assert from 'node:assert';
import {
  filterStyleDefinitions,
  filterTransformResults,
  normalizeSearchText,
} from '../search';
import { UNICODE_STYLES_DATA } from '@/data/unicode/styles';
import { transformText } from '../engine';

console.log('--- STARTING UNICODE SEARCH & FILTER UNIT TESTS ---');

// 1. TURKISH TEXT NORMALIZATION TEST
console.log('1. Testing Search Text Normalization...');
assert.strictEqual(normalizeSearchText('Gotik'), 'gotik');
assert.strictEqual(normalizeSearchText('GÖTİK'), 'gotik');
assert.strictEqual(normalizeSearchText('Şekilli Yazı'), 'sekilli yazi');
console.log('   ✓ Search text normalization passed.');

// 2. TEXT QUERY SEARCH TESTS
console.log('2. Testing Text Query Search...');
const gothicResults = filterStyleDefinitions(UNICODE_STYLES_DATA, { query: 'Gotik' });
assert.ok(gothicResults.length >= 2);
assert.ok(gothicResults.every((s) => s.name.includes('Gotik') || s.slug.includes('gotik') || s.category === 'gothic'));

const pubgQueryResults = filterStyleDefinitions(UNICODE_STYLES_DATA, { query: 'pubg' });
assert.ok(pubgQueryResults.length > 0);
assert.ok(pubgQueryResults.some((s) => s.slug.includes('kanatli') || s.id === 'frame-wings'));
console.log('   ✓ Text query search passed.');

// 3. CATEGORY FILTER TESTS
console.log('3. Testing Category Filter Options...');
const popularStyles = filterStyleDefinitions(UNICODE_STYLES_DATA, { category: 'popular' });
assert.ok(popularStyles.length >= 5);
assert.ok(popularStyles.every((s) => s.isPopular === true));

const boldStyles = filterStyleDefinitions(UNICODE_STYLES_DATA, { category: 'bold' });
assert.ok(boldStyles.length >= 4);

const gamingStyles = filterStyleDefinitions(UNICODE_STYLES_DATA, { category: 'gaming' });
assert.ok(gamingStyles.length >= 5);
assert.ok(gamingStyles.every((s) => s.category === 'frames' || (s.tags && s.tags.includes('gaming'))));
console.log('   ✓ Category filters passed.');

// 4. COMPATIBILITY & PLATFORM FILTER TESTS
console.log('4. Testing Compatibility & Platform Filters...');
const fullTurkishStyles = filterStyleDefinitions(UNICODE_STYLES_DATA, { compatibility: 'full-turkish' });
assert.ok(fullTurkishStyles.length >= 5);
assert.ok(fullTurkishStyles.every((s) => s.supportStatus === 'FULL'));

const pubgStyles = filterStyleDefinitions(UNICODE_STYLES_DATA, { compatibility: 'pubg' });
assert.ok(pubgStyles.length >= 10);
assert.ok(pubgStyles.every((s) => s.platforms && s.platforms.includes('pubg')));

const instagramStyles = filterStyleDefinitions(UNICODE_STYLES_DATA, { compatibility: 'instagram' });
assert.ok(instagramStyles.length >= 25);
console.log('   ✓ Platform & compatibility filters passed.');

// 5. FILTERING TRANSFORM RESULTS TEST
console.log('5. Testing filterTransformResults API...');
const transformed = transformText('Merhaba');
const filteredTransformed = filterTransformResults(transformed, {
  category: 'gothic',
});
assert.ok(filteredTransformed.length >= 2);
assert.ok(filteredTransformed.every((r) => r.category === 'gothic'));
console.log('   ✓ filterTransformResults passed.');

console.log('--- ALL UNICODE SEARCH & FILTER UNIT TESTS PASSED SUCCESSFULLY 🎉 ---');
