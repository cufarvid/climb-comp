import React from 'react';
import { UserInfo } from '../types/__generated__';

interface DashboardContextType {
  userInfo: UserInfo | undefined;
  setUserInfo?: () => void;
}

export const DashboardContext = React.createContext<DashboardContextType>({
  userInfo: undefined,
});
