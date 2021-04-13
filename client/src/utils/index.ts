import { COLOR } from '../constants';
import { ColorVariant } from '../types';

/**
 * Returns color codes for provided color variant
 * in the following format [background, text, link]
 * @param variant
 * @return [string, string, string]
 */
export const colorFromVariant = (
  variant: ColorVariant,
): [string, string, string] => {
  switch (variant) {
    case 'dark':
      return [COLOR.BASE, COLOR.WHITE, COLOR.LIGHTER];
    case 'light':
    default:
      return [COLOR.WHITE, COLOR.BASE, COLOR.DARK];
  }
};
