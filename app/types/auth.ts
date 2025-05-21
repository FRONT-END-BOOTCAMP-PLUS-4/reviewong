export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResult {
  ok?: boolean;
  error?: string;
}

export type SocialProvider = 'github' | 'google';

export interface SocialLoginOptions {
  provider: SocialProvider;
  callbackUrl?: string;
}
