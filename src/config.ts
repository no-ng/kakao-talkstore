const dev = process.env.NODE_ENV === 'production';

export const origin = dev
  ? 'http://localhost:3000'
  : 'https://kakao-talkstore.vercel.app';
