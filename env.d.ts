
// Fix: Augment the existing NodeJS namespace to define the types for process.env.
// This avoids the "Cannot redeclare block-scoped variable 'process'" error
// which occurs when 'process' is already defined by external type definitions (e.g., @types/node or Vite types).
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
      [key: string]: string | undefined;
    }
  }
}

export {};
