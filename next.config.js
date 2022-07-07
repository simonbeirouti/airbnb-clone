/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiYmVzaW1vbiIsImEiOiJjbDVhdGU0ZXEwMTA2M3FwZ3VyZHJsZTR4In0.QM638duCeWA-pXPvf2ChSQ",
  },
};

module.exports = nextConfig;
