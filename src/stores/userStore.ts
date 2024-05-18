import { JOURNEY_BITES_COOKIE } from '@/constants';
import jsCookie from 'js-cookie';
import { createStore } from 'zustand/vanilla';

export type UserState = {
  isLogin: boolean
}

export type UserActions = {
  logout: () => void,
  login: () => void
}

export type UserStore = UserState & UserActions

export const defaultInitState: UserState = {
  isLogin: false,
};

export const createUserStore = (
  initState: UserState = defaultInitState,
) => {
  return createStore<UserStore>()((set) => ({
    ...initState,
    login: () => {
      const userCookie = jsCookie.get(JOURNEY_BITES_COOKIE);
      if (userCookie) {
        set({ isLogin: true });
      }
    },
    logout: () => {
      set({ isLogin: false });
      jsCookie.remove(JOURNEY_BITES_COOKIE);
    }
  }));
};