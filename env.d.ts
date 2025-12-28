interface ProcessEnv {
  readonly API_KEY: string;
  readonly [key: string]: string | undefined;
}

interface Process {
  readonly env: ProcessEnv;
}

declare var process: Process;

// Garante que o ficheiro seja tratado como um módulo
export {};
