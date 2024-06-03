import StatusCode from './StatusCode';

export interface ApiResponse {
  statusCode: StatusCode,
  message: string
}

export interface ApiSuccessResponse<T> extends ApiResponse {
  data?: T,
  meta?: {
    page: number,
    totalPage: number,
    totalCount: number,
    pageSize: number
  }
}

export type LoginResponse = ApiSuccessResponse<{ token: string }>;

export type Category = {
  id: string;
  name: string;
  path: string;
}

export type SocialLinks = {
  [key in 'website' | 'instagram' | 'facebook']?: string
}

export type Profile = {
  displayName: string;
  avatarImageUrl?: string | null;
  bio?: string | null;
  socialLinks?: SocialLinks | null;
}

export type UserResponse = ApiSuccessResponse<{
  email: string,
  emailVerified: boolean,
  profile: Profile,
  // oAuthProvider: null,
}>