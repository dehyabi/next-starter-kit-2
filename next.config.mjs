/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
      X_APP_KEY: process.env.NEXT_PUBLIC_X_APP_KEY,
    }
  };
  
  export default nextConfig;
  