import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/steam-api', // 브라우저에서 사용할 가짜 주소
        destination: 'https://steamspy.com/api.php?request=top100in2weeks', // 실제 스팀 주소
      },
      {
        source: '/steam-search/:path*', 
        destination: 'https://store.steampowered.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;