export type DictionaryOf<T> = {
  [key in string | number]: T;
};

export type ColorVariant = 'dark' | 'light';
