const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {

        config.externals.push({
            "lodash": "var window._"
        });
        // Important: return the modified config
        return config
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
          { hostname: "public.blob.vercel-storage.com" },
          {
            hostname: 'image.shutterstock.com',
          },
          { hostname: "res.cloudinary.com" },
          { hostname: "abs.twimg.com" },
          { hostname: "pbs.twimg.com" },
          { hostname: "avatar.vercel.sh" },
          { hostname: "avatars.githubusercontent.com" },
          { hostname: "www.google.com" },
          { hostname: "flag.vercel.app" },
          { hostname: "illustrations.popsy.co" },
          { hostname: "images.unsplash.com" },

        ]
    },
};


module.exports =  nextConfig;
