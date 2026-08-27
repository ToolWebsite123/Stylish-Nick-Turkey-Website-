import assert from 'node:assert';
import {
  buildCustomNickname,
  generateRandomNicknameConfig,
} from '../builder';

console.log('--- STARTING NICK BUILDER UNIT TESTS ---');

// 1. VALID NICKNAME BUILD TEST
console.log('1. Testing buildCustomNickname with valid input...');
const result1 = buildCustomNickname({
  nickname: 'Shadow',
  styleId: 'bold-sans',
  leftOrnament: '꧁༺ ',
  rightOrnament: ' ༻꧂',
  prefix: '[PRO]',
  suffix: '[TR]',
});

assert.strictEqual(result1.isValid, true);
assert.strictEqual(result1.styledText, '𝗦𝗵𝗮𝗱𝗼𝘄');
assert.strictEqual(result1.fullNickname, '[PRO] ꧁༺ 𝗦𝗵𝗮𝗱𝗼𝘄 ༻꧂ [TR]');
assert.ok(result1.characterCount > 10);
console.log('   ✓ Valid nickname build passed.');

// 2. EMPTY NICKNAME VALIDATION TEST
console.log('2. Testing Empty Nickname Validation...');
const resultEmpty = buildCustomNickname({
  nickname: '   ',
  styleId: 'bold-sans',
  leftOrnament: '꧁',
  rightOrnament: '꧂',
  prefix: '',
  suffix: '',
});

assert.strictEqual(resultEmpty.isValid, false);
assert.ok(resultEmpty.error !== undefined);
assert.strictEqual(resultEmpty.fullNickname, '');
console.log('   ✓ Empty nickname validation passed.');

// 3. TURKISH CHARACTERS & MODES TEST
console.log('3. Testing Turkish Characters in Nick Builder...');
const resultTurkishPreserve = buildCustomNickname({
  nickname: 'şampiyon',
  styleId: 'bold-sans',
  leftOrnament: '⚔️ ',
  rightOrnament: ' ⚔️',
  prefix: '',
  suffix: '',
  simplifyTurkish: false,
});
assert.strictEqual(resultTurkishPreserve.isValid, true);
assert.ok(resultTurkishPreserve.fullNickname.includes('ş'));

const resultTurkishSimplify = buildCustomNickname({
  nickname: 'şampiyon',
  styleId: 'bold-sans',
  leftOrnament: '⚔️ ',
  rightOrnament: ' ⚔️',
  prefix: '',
  suffix: '',
  simplifyTurkish: true,
});
assert.strictEqual(resultTurkishSimplify.isValid, true);
assert.ok(resultTurkishSimplify.fullNickname.includes('𝘀')); // 'ş' -> 's' -> '𝘀'
console.log('   ✓ Turkish characters & modes passed.');

// 4. RANDOM NICKNAME GENERATOR TEST
console.log('4. Testing generateRandomNicknameConfig...');
const randomConfig = generateRandomNicknameConfig('Viper');
assert.strictEqual(randomConfig.nickname, 'Viper');
assert.ok(randomConfig.styleId.length > 0);

const randomResult = buildCustomNickname(randomConfig);
assert.strictEqual(randomResult.isValid, true);
assert.ok(randomResult.fullNickname.length > 5);
console.log('   ✓ Random nickname generator passed.');

console.log('--- ALL NICK BUILDER UNIT TESTS PASSED SUCCESSFULLY 🎉 ---');
