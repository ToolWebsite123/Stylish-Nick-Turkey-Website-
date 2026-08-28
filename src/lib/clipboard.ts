/**
 * Safe client-side utility to copy text to system clipboard.
 * Uses modern Clipboard API with fallback for restricted browser contexts.
 */
import { addCopyHistory } from './storage';

export async function copyToClipboard(text: string): Promise<boolean> {
  if (!text) return false;

  // 1. Try modern navigator.clipboard API
  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      addCopyHistory(text);
      return true;
    } catch {
      // Fallback below
    }
  }

  // 2. Fallback for older browsers or non-secure HTTP contexts
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    if (successful) {
      addCopyHistory(text);
    }
    return successful;
  } catch (err) {
    console.error('Clipboard copy failed:', err);
    return false;
  }
}

/**
 * Safe client-side utility to paste text from system clipboard.
 */
export async function readFromClipboard(): Promise<string | null> {
  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.readText) {
    try {
      const text = await navigator.clipboard.readText();
      return text;
    } catch {
      return null;
    }
  }
  return null;
}
