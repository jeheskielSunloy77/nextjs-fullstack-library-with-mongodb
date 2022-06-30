/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	domains: ["pixabay.com", "cdn.pixabay.com"],
	eslint: {
		ignoreDuringBuilds: true,
	},
}

module.exports = nextConfig
