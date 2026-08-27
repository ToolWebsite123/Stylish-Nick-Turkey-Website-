import assert from 'node:assert';
import {
  getAllSymbols,
  getSymbolById,
  getSymbolsByCategory,
  getPopularSymbols,
  searchSymbols,
  getSymbolCategories,
  validateSymbolsData,
  SYMBOLS_DATA,
  SYMBOL_CATEGORIES,
  getCategoryById,
  getCategoryBySlug,
} from '../index';
import { SymbolItem, SymbolCategory } from '@/types/symbol';

console.log('--- STARTING SYMBOL DATABASE UNIT TESTS ---');

// 1. DATASET INTEGRITY & VALIDATION TEST
console.log('1. Validating Symbol Dataset Integrity...');
const validation = validateSymbolsData(SYMBOLS_DATA);
assert.strictEqual(validation.isValid, true, `Dataset invalid: ${validation.errors.join(', ')}`);
assert.ok(
  SYMBOLS_DATA.length >= 150 && SYMBOLS_DATA.length <= 250,
  `Expected between 150 and 250 symbols, found ${SYMBOLS_DATA.length}`
);
console.log(`   ✓ Dataset valid. Total symbols: ${SYMBOLS_DATA.length}`);

// 2. CATEGORY COVERAGE CHECK
console.log('2. Verifying All 10 Categories Have Symbols...');
assert.strictEqual(SYMBOL_CATEGORIES.length, 10, 'Expected exactly 10 symbol categories');
for (const cat of SYMBOL_CATEGORIES) {
  const catSymbols = getSymbolsByCategory(cat.id);
  assert.ok(
    catSymbols.length > 0,
    `Category '${cat.name}' (${cat.id}) must contain at least 1 symbol`
  );
  console.log(`   ✓ Category '${cat.name}' (${cat.id}): ${catSymbols.length} symbols`);
}

// 3. VALIDATION FAILURE DETECTION TESTS
console.log('3. Testing Symbol Validation Error Detection...');

// Test duplicate ID
const duplicateIdData: SymbolItem[] = [
  { ...SYMBOLS_DATA[0] },
  { ...SYMBOLS_DATA[0], character: '🎔' }, // different char, same ID
];
const dupIdVal = validateSymbolsData(duplicateIdData);
assert.strictEqual(dupIdVal.isValid, false);
assert.ok(dupIdVal.errors.some((e) => e.includes('Duplicate symbol ID')));

// Test duplicate character
const duplicateCharData: SymbolItem[] = [
  { ...SYMBOLS_DATA[0] },
  { ...SYMBOLS_DATA[0], id: 'another-id-same-char' }, // different ID, same character
];
const dupCharVal = validateSymbolsData(duplicateCharData);
assert.strictEqual(dupCharVal.isValid, false);
assert.ok(dupCharVal.errors.some((e) => e.includes('Duplicate character')));

// Test invalid category
const invalidCategoryData: SymbolItem[] = [
  { ...SYMBOLS_DATA[0], category: 'invalid-cat' as unknown as SymbolCategory },
];
const invCatVal = validateSymbolsData(invalidCategoryData);
assert.strictEqual(invCatVal.isValid, false);
assert.ok(invCatVal.errors.some((e) => e.includes('Invalid category')));

console.log('   ✓ Validation failure detection working correctly.');

// 4. CATEGORY UTILITY FUNCTIONS TEST
console.log('4. Testing Category Helper APIs...');
const categories = getSymbolCategories();
assert.strictEqual(categories.length, 10);

const heartCatById = getCategoryById('hearts');
assert.ok(heartCatById !== undefined);
assert.strictEqual(heartCatById?.name, 'Kalpler');

const starCatBySlug = getCategoryBySlug('yildizlar');
assert.ok(starCatBySlug !== undefined);
assert.strictEqual(starCatBySlug?.id, 'stars');
console.log('   ✓ Category helper APIs passed.');

// 5. SYMBOL QUERYING API TESTS
console.log('5. Testing Symbol Query APIs...');
const allSymbols = getAllSymbols();
assert.strictEqual(allSymbols.length, SYMBOLS_DATA.length);

const singleSymbol = getSymbolById('heart-black-filled');
assert.ok(singleSymbol !== undefined);
assert.strictEqual(singleSymbol?.character, '♥');

const gamingSymbolsById = getSymbolsByCategory('gaming');
assert.ok(gamingSymbolsById.length >= 20);
assert.ok(gamingSymbolsById.every((s) => s.category === 'gaming'));

const heartSymbolsBySlug = getSymbolsByCategory('kalpler');
assert.ok(heartSymbolsBySlug.length >= 15);
assert.ok(heartSymbolsBySlug.every((s) => s.category === 'hearts'));
console.log('   ✓ Symbol query APIs passed.');

// 6. POPULAR SYMBOLS TEST
console.log('6. Testing getPopularSymbols API...');
const topPopular = getPopularSymbols(10);
assert.strictEqual(topPopular.length, 10);
for (let i = 0; i < topPopular.length - 1; i++) {
  assert.ok(
    topPopular[i].popularity >= topPopular[i + 1].popularity,
    'Popular symbols must be sorted descending by popularity'
  );
}
console.log('   ✓ Popular symbols API passed.');

// 7. SEARCH & FILTERING TESTS
console.log('7. Testing searchSymbols API...');

// Search by Turkish name
const searchByName = searchSymbols('Kuru Kafa');
assert.ok(searchByName.length > 0);
assert.ok(searchByName.some((s) => s.name.includes('Kuru Kafa')));

// Search by keyword
const searchByKeyword = searchSymbols('pubg');
assert.ok(searchByKeyword.length > 0);
assert.ok(searchByKeyword.every((s) => s.keywords.includes('pubg') || s.tags.includes('pubg')));

// Search by exact character
const searchByChar = searchSymbols('★');
assert.ok(searchByChar.length > 0);
assert.strictEqual(searchByChar[0].character, '★');

// Search with Category filter
const searchGamingSwords = searchSymbols('kılıç', { category: 'gaming' });
assert.ok(searchGamingSwords.length > 0);
assert.ok(searchGamingSwords.every((s) => s.category === 'gaming'));

// Pagination test
const page1 = searchSymbols('', { limit: 5, offset: 0 });
const page2 = searchSymbols('', { limit: 5, offset: 5 });
assert.strictEqual(page1.length, 5);
assert.strictEqual(page2.length, 5);
assert.notStrictEqual(page1[0].id, page2[0].id);

console.log('   ✓ Search & filtering tests passed.');

console.log('--- ALL SYMBOL DATABASE UNIT TESTS PASSED SUCCESSFULLY 🎉 ---');
