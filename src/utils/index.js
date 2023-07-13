import wordList from '../libs/mnemonics/words.json';

export const isWordValid = word => {
  return wordList.includes(word);
};
