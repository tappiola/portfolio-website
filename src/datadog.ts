import { datadogRum } from '@datadog/browser-rum';
import { reactPlugin } from '@datadog/browser-rum-react';

if (typeof window !== 'undefined' && import.meta.env.PROD) {
  datadogRum.init({
    applicationId: '3ed1569f-b8ba-4a37-9ebb-8f93213c3d1f',
    clientToken: 'pubc53b8fb15b6c7f880f3f24a7b34e918c',
    site: 'datadoghq.com',
    service: 'frontend',
    env: 'prod',
    version: __APP_VERSION__,
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    defaultPrivacyLevel: 'mask-user-input',
    plugins: [reactPlugin({ router: false })],
  });
}
