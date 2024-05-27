import { JOURNEY_BITES_COOKIE } from '@/constants';
import jsCookie from 'js-cookie';
import { createStore } from 'zustand/vanilla';

export type UserState = {
  isLogin: boolean | null,
  id: string,
  displayName: string,
  avatarImageUrl: string,
  bio: string,
  social: {
    websiteParams: string,
    instagram: string,
    facebook: string
  }
}

export type UserActions = {
  logout: () => void,
  setToken: () => void
}

export type UserStore = UserState & UserActions

export const defaultInitState: UserState = {
  isLogin: null,
  id: '',
  displayName: '',
  avatarImageUrl: '',
  bio: '',
  social: {
    websiteParams: '',
    instagram: '',
    facebook: ''
  }
};

export const createUserStore = (
  initState: UserState = defaultInitState,
) => {
  return createStore<UserStore>()((set) => ({
    ...initState,
    setToken: () => {
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