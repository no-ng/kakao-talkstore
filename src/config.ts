const dev = !process.env.VERCEL_ENV;

export const origin = dev
  ? 'http://localhost:3000'
  : 'https://kakao-talkstore.vercel.app';
