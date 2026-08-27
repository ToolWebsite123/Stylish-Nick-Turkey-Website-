import assert from 'node:assert';
import {
  transformText,
  getUnicodeStyle,
  getSupportedStyles,
  validateStylesData,
  UNICODE_STYLES_DATA,
  isTurkishCharacter,
  simplifyTurkishCharacter,
  simplifyTurkishText,
  detectTurkishCharacterSupport,
} from '../index';
import { UnicodeStyleDefinition } from '@/types/unicode';

console.log('--- STARTING UNICODE ENGINE UNIT TESTS ---');

// 1. DATA VALIDATION TEST
console.log('1. Validating Style Dataset Integrity...');
const validation = validateStylesData(UNICODE_STYLES_DATA);
assert.strictEqual(validation.isValid, true, `Dataset invalid: ${validation.errors.join(', ')}`);
assert.ok(UNICODE_STYLES_DATA.length >= 20, `Expected at least 20 styles, found ${UNICODE_STYLES_DATA.length}`);
console.log(`   ✓ Dataset valid. Total styles implemented: ${UNICODE_STYLES_DATA.length}`);

// 2. STRICT VALIDATION ERROR TESTING
console.log('2. Testing Validation Failure Detection...');
const invalidDataDuplicateId: UnicodeStyleDefinition[] = [
  { ...UNICODE_STYLES_DATA[0] },
  { ...UNICODE_STYLES_DATA[0] },
];
const dupIdVal = validateStylesData(invalidDataDuplicateId);
assert.strictEqual(dupIdVal.isValid, false);
assert.ok(dupIdVal.errors.some((e) => e.includes('Duplicate style ID')));

const invalidFakeFullSupport: UnicodeStyleDefinition[] = [
  {
    id: 'fake-full',
    name: 'Fake Full',
    slug: 'fake-full',
    category: 'sans',
    description: 'Claims full support with empty map',
    descriptionTr: 'Claims full support with empty map',
    supportStatus: 'FULL',
    supportedCharacterGroups: ['A-Z'],
    mapping: { 'a': 'ⓐ' },
  },
];
const fakeFullVal = validateStylesData(invalidFakeFullSupport);
assert.strictEqual(fakeFullVal.isValid, false);
assert.ok(fakeFullVal.errors.some((e) => e.includes("claims 'FULL' Turkish support")));
console.log('   ✓ Validation failure detection working correctly.');

// 3. PUBLIC API RETRIEVAL TESTS
console.log('3. Testing getSupportedStyles & getUnicodeStyle...');
const allStyles = getSupportedStyles();
assert.strictEqual(allStyles.length, UNICODE_STYLES_DATA.length);

const gothicStyles = getSupportedStyles('gothic');
assert.ok(gothicStyles.length >= 2);
assert.ok(gothicStyles.every((s) => s.category === 'gothic'));

const singleStyle = getUnicodeStyle('bold-sans');
assert.ok(singleStyle !== undefined);
assert.strictEqual(singleStyle?.id, 'bold-sans');
console.log('   ✓ Retrieval APIs functioning correctly.');

// 4. TURKISH CHARACTER UTILITIES TEST
console.log('4. Testing Turkish Character Utilities...');
assert.strictEqual(isTurkishCharacter('ş'), true);
assert.strictEqual(isTurkishCharacter('x'), false);
assert.strictEqual(simplifyTurkishCharacter('ş'), 's');
assert.strictEqual(simplifyTurkishCharacter('Ç'), 'C');
assert.strictEqual(simplifyTurkishCharacter('x'), 'x');
assert.strictEqual(simplifyTurkishText('şekilli İSTANBUL çğöü'), 'sekilli ISTANBUL cgou');

const fullMapping = { 'ç': 'ç', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u', 'Ç': 'C', 'Ğ': 'G', 'İ': 'I', 'Ö': 'O', 'Ş': 'S', 'Ü': 'U' };
assert.strictEqual(detectTurkishCharacterSupport(fullMapping), 'FULL');
assert.strictEqual(detectTurkishCharacterSupport({ 'ş': 's' }), 'PARTIAL');
assert.strictEqual(detectTurkishCharacterSupport({ 'a': 'b' }), 'UNSUPPORTED');
console.log('   ✓ Turkish utilities functioning correctly.');

// 5. REQUIRED TEST CASES (A THROUGH L)

// A. "Hello World"
console.log('5. Test Case A: "Hello World"');
const resA = transformText('Hello World', { styleId: 'bold-sans' })[0];
assert.strictEqual(resA.transformedText, '𝗛𝗲𝗹𝗹𝗼 𝗪𝗼𝗿𝗹𝗱');
assert.strictEqual(resA.hasFallback, true); // space is fallback
assert.ok(resA.transformedText.includes(' ')); // Space preserved
console.log('   ✓ Test Case A passed.');

// B. "şekilli nick" (Preservation Mode vs Simplification Mode)
console.log('6. Test Case B: "şekilli nick" (Preservation vs Simplification)');
const resBPreserv = transformText('şekilli nick', { styleId: 'bold-sans', simplifyTurkish: false })[0];
// 'ş' is unmapped in bold-sans -> preserved as 'ş'
assert.ok(resBPreserv.transformedText.startsWith('ş'));
assert.strictEqual(resBPreserv.usedSimplification, false);
assert.ok(resBPreserv.fallbackCharacters.includes('ş'));

const resBSimplified = transformText('şekilli nick', { styleId: 'bold-sans', simplifyTurkish: true })[0];
assert.strictEqual(resBSimplified.usedSimplification, true);
assert.ok(resBSimplified.transformedText.startsWith('𝘀')); // 'ş' -> 's' -> '𝘀'
console.log('   ✓ Test Case B passed.');

// C. "ÇĞİÖŞÜ" & D. "çğıöşü" (Small Caps FULL support check)
console.log('7. Test Cases C & D: Uppercase & Lowercase Turkish letters in Small Caps');
const resSmallCapsUpper = transformText('ÇĞİÖŞÜ', { styleId: 'small-caps', simplifyTurkish: false })[0];
assert.strictEqual(resSmallCapsUpper.supportStatus, 'FULL');
assert.strictEqual(resSmallCapsUpper.transformedText, 'ÇɢİÖSÜ');

const resSmallCapsLower = transformText('çğıöşü', { styleId: 'small-caps', simplifyTurkish: false })[0];
assert.strictEqual(resSmallCapsLower.transformedText, 'çɢɪösü');
console.log('   ✓ Test Cases C & D passed.');

// E. "1234567890"
console.log('8. Test Case E: Digits "1234567890"');
const resE = transformText('1234567890', { styleId: 'bold-sans' })[0];
assert.strictEqual(resE.transformedText, '𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵𝟬');
console.log('   ✓ Test Case E passed.');

// F. "hello-world!" (Punctuation preservation)
console.log('9. Test Case F: Punctuation "hello-world!"');
const resF = transformText('hello-world!', { styleId: 'bold-sans' })[0];
assert.ok(resF.transformedText.includes('-'));
assert.ok(resF.transformedText.endsWith('!'));
console.log('   ✓ Test Case F passed.');

// G. "hello 😀" (Emoji preservation)
console.log('10. Test Case G: Emoji "hello 😀"');
const resG = transformText('hello 😀', { styleId: 'bold-sans' })[0];
assert.ok(resG.transformedText.includes('😀'));
assert.strictEqual(resG.characterCount, 7); // 'h','e','l','l','o',' ','😀'
console.log('   ✓ Test Case G passed.');

// H. "" (Empty string)
console.log('11. Test Case H: Empty string');
const resH = transformText('', { styleId: 'bold-sans' })[0];
assert.strictEqual(resH.transformedText, '');
assert.strictEqual(resH.characterCount, 0);
console.log('   ✓ Test Case H passed.');

// I. "   " (Spaces only)
console.log('12. Test Case I: Spaces only');
const resI = transformText('   ', { styleId: 'bold-sans' })[0];
assert.strictEqual(resI.transformedText, '   ');
assert.strictEqual(resI.characterCount, 3);
console.log('   ✓ Test Case I passed.');

// J. Mixed Turkish + English + numbers + punctuation
console.log('13. Test Case J: Mixed input');
const resJ = transformText('Nick 123 - şampiyon 😀!', { styleId: 'bold-sans', simplifyTurkish: false })[0];
assert.ok(resJ.transformedText.includes('123') || resJ.transformedText.includes('𝟭𝟮𝟯'));
assert.ok(resJ.transformedText.includes('ş'));
assert.ok(resJ.transformedText.includes('😀'));
assert.ok(resJ.transformedText.includes('!'));
console.log('   ✓ Test Case J passed.');

// K. Unsupported characters
console.log('14. Test Case K: Unsupported symbols "@#$"');
const resK = transformText('@#$', { styleId: 'bold-sans' })[0];
assert.strictEqual(resK.transformedText, '@#$');
assert.strictEqual(resK.hasFallback, true);
assert.deepStrictEqual(resK.unsupportedCharacters, ['@', '#', '$']);
console.log('   ✓ Test Case K passed.');

// L. Existing Unicode characters
console.log('15. Test Case L: Pre-existing Unicode characters "𝐒𝐞𝐤𝐢𝐥𝐥𝐢"');
const resL = transformText('𝐒𝐞𝐤𝐢𝐥𝐥𝐢', { styleId: 'bold-sans' })[0];
assert.strictEqual(resL.transformedText, '𝐒𝐞𝐤𝐢𝐥𝐥𝐢'); // Unmapped pre-existing Unicode characters preserved intact
console.log('   ✓ Test Case L passed.');

// 6. STRIKETHROUGH & UNDERLINE FULL TURKISH SUPPORT TESTS
console.log('16. Testing Strikethrough & Underline Full Turkish Support...');
const resStrike = transformText('şekilli', { styleId: 'strikethrough' })[0];
assert.strictEqual(resStrike.supportStatus, 'FULL');
assert.strictEqual(resStrike.transformedText, 'ş̶e̶k̶i̶l̶l̶i̶');

const resUnderline = transformText('şekilli', { styleId: 'underlined' })[0];
assert.strictEqual(resUnderline.supportStatus, 'FULL');
assert.strictEqual(resUnderline.transformedText, 'ş̲e̲k̲i̲l̲l̲i̲');
console.log('   ✓ Strikethrough & Underline tests passed.');

// 7. FRAME STYLES TEST
console.log('17. Frame Styles Test (Wings prefix/suffix)');
const resFrame = transformText('Sekilli', { styleId: 'frame-wings' })[0];
assert.strictEqual(resFrame.transformedText, '꧁༺ 𝗦𝗲𝗸𝗶𝗹𝗹𝗶 ༻꧂');
console.log('   ✓ Frame Styles test passed.');

// 8. ALL STYLES BATCH TRANSFORM TEST
console.log('18. Batch Transformation Test across all styles...');
const batchResults = transformText('Nick 123');
assert.strictEqual(batchResults.length, UNICODE_STYLES_DATA.length);
assert.ok(batchResults.every((r) => r.originalText === 'Nick 123'));
console.log('   ✓ Batch transformation passed.');

console.log('--- ALL UNICODE ENGINE UNIT TESTS PASSED SUCCESSFULLY 🎉 ---');
