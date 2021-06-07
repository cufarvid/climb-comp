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

/**
 * Rank sorting function
 */
export const sortByRank = (a, b): number => {
  // Return rank or a very large number if ranking doesn't exist
  // (this prevents entries with fewer rounds to get a higher rank)
  const rank = (x, i) => (x.rounds[i] ? x.rounds[i].rank : Number.MAX_VALUE);

  const aRank = rank(a, 0) + rank(a, 1) + rank(a, 2);
  const bRank = rank(b, 0) + rank(b, 1) + rank(b, 2);

  return aRank - bRank;
};
