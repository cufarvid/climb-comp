import { User } from '../types/__generated__';

/**
 * Check if provided user has administrator privileges
 * @param user User
 */
export const isAdministrator = (user: User | undefined): boolean =>
  user?.role === 'ADMINISTRATOR';

/**
 * Check if provided user has moderator privileges
 * @param user User
 */
export const isModerator = (user: User | undefined): boolean =>
  user?.role === 'MODERATOR';
