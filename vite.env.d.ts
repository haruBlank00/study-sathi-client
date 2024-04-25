/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SS_API_END_POINT: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
