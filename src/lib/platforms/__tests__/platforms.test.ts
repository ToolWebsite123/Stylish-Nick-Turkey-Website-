import assert from 'node:assert';
import {
  getAllPlatforms,
  getPlatformDefinition,
  getPlatformCompatibility,
  getCompatibleStyles,
  filterStylesByPlatform,
  getPlatformStatusDisplay,
} from '../query';
import { UNICODE_STYLES_DATA } from '@/data/unicode/styles';

console.log('--- STARTING PLATFORM COMPATIBILITY UNIT TESTS ---');

// 1. ALL PLATFORMS TEST
console.log('1. Testing getAllPlatforms...');
const platforms = getAllPlatforms();
assert.strictEqual(platforms.length, 5);
const platformIds = platforms.map((p) => p.id);
assert.ok(platformIds.includes('pubg'));
assert.ok(platformIds.includes('instagram'));
assert.ok(platformIds.includes('discord'));
assert.ok(platformIds.includes('whatsapp'));
assert.ok(platformIds.includes('tiktok'));
console.log('   ✓ getAllPlatforms passed.');

// 2. GET PLATFORM DEFINITION TEST
console.log('2. Testing getPlatformDefinition...');
const pubgDef = getPlatformDefinition('pubg');
assert.ok(pubgDef !== undefined);
assert.strictEqual(pubgDef?.name, 'PUBG Mobile');
assert.strictEqual(pubgDef?.maxCharacterLength, 14);
console.log('   ✓ getPlatformDefinition passed.');

// 3. GET PLATFORM COMPATIBILITY TEST
console.log('3. Testing getPlatformCompatibility...');
const boldPubg = getPlatformCompatibility('bold-sans', 'pubg');
assert.strictEqual(boldPubg.status, 'full');

const darkCircledPubg = getPlatformCompatibility('circled-dark', 'pubg');
assert.strictEqual(darkCircledPubg.status, 'unsupported');
assert.ok(darkCircledPubg.notesTr?.includes('soru işareti'));

const unknownStyleCompat = getPlatformCompatibility('non-existent-style', 'pubg');
assert.strictEqual(unknownStyleCompat.status, 'unknown');
console.log('   ✓ getPlatformCompatibility passed.');

// 4. GET COMPATIBLE STYLES TEST
console.log('4. Testing getCompatibleStyles...');
const pubgCompatible = getCompatibleStyles('pubg');
assert.ok(pubgCompatible.length >= 20);
assert.ok(pubgCompatible.every((s) => {
  const c = getPlatformCompatibility(s.id, 'pubg');
  return c.status === 'full' || c.status === 'partial';
}));
console.log('   ✓ getCompatibleStyles passed.');

// 5. FILTER STYLES BY PLATFORM TEST
console.log('5. Testing filterStylesByPlatform...');
const pubgUnsupported = filterStylesByPlatform(UNICODE_STYLES_DATA, 'pubg', 'unsupported');
assert.ok(pubgUnsupported.length >= 3);
assert.ok(pubgUnsupported.some((s) => s.id === 'circled-dark'));
assert.ok(pubgUnsupported.some((s) => s.id === 'squared-dark'));
console.log('   ✓ filterStylesByPlatform passed.');

// 6. GET PLATFORM STATUS DISPLAY TEST
console.log('6. Testing getPlatformStatusDisplay labels in Turkish...');
assert.strictEqual(getPlatformStatusDisplay('full').labelTr, 'Uyumlu');
assert.strictEqual(getPlatformStatusDisplay('partial').labelTr, 'Kısmen Uyumlu');
assert.strictEqual(getPlatformStatusDisplay('unsupported').labelTr, 'Desteklenmiyor');
assert.strictEqual(getPlatformStatusDisplay('unknown').labelTr, 'Kontrol Edilmedi');
console.log('   ✓ getPlatformStatusDisplay passed.');

console.log('--- ALL PLATFORM COMPATIBILITY UNIT TESTS PASSED SUCCESSFULLY 🎉 ---');
