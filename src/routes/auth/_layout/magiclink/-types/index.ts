export type VerifyMagicResponse = {
  data: {
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
    message: string;
  };
};
