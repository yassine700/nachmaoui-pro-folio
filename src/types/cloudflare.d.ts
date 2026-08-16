declare module "cloudflare:email" {
  export class EmailMessage {
    constructor(from: string, to: string, raw: string | ReadableStream | ArrayBuffer);
    readonly from: string;
    readonly to: string;
  }
}

interface CloudflareSendEmailBinding {
  send: (message: unknown) => Promise<void>;
}

interface CloudflareEnvironment {
  EMAIL?: CloudflareSendEmailBinding;
  ASSETS?: unknown;
  [key: string]: unknown;
}
