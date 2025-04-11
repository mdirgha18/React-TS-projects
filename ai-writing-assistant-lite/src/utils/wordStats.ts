export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function readingTime(text: string): number {
  const wordsPerMinute = 200;
  return Math.ceil(wordCount(text) / wordsPerMinute);
}
