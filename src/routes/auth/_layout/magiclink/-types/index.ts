export type VerifyMagicResponse = {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  message: string;
  success: true;
};
