import { config } from './recaptcha.environment';

export const environment = {
  production: true,
  reCaptcha: {
    siteKey: config.recaptcha.siteKey,
    secretKey: config.recaptcha.secretKey
  }
};
