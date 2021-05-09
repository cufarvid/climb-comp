import { ScoreBoulderData } from '../types';

export const ScoreLeadRegex = /^\d{1,2}\+?$/;

/**
 * Computes and returns boulder score based on score type
 * @param scoreType
 * @param prevScore
 */
export const getBoulderScoreData = (
  scoreType: string,
  prevScore?: ScoreBoulderData,
): ScoreBoulderData => {
  let { top, zone, attempts } = prevScore || new ScoreBoulderData();

  switch (scoreType) {
    case 'top':
      attempts++;
      top = attempts;
      zone = zone === 0 ? attempts : zone;
      break;
    case 'zone':
      attempts++;
      zone = zone === 0 ? attempts : zone;
      break;
    case 'attempt':
      attempts++;
      break;
  }

  return { top, zone, attempts };
};
