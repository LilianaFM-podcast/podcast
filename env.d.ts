declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: string | undefined;
  }
}

// Garante que o ficheiro seja tratado como um módulo global
export {};
