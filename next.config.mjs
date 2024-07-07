const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: isProd ? "/vk-keyboard" : undefined,

  // Включаем транспиляцию
  transpilePackages: ["@vkontakte/vkui"],

  // Трансформируем импорты
  modularizeImports: {
    "@vkontakte/vkui": {
      transform: "@vkontakte/vkui/dist/cssm",
      skipDefaultConversion: true,
    },
  },
};

export default nextConfig;
