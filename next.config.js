const { ANALYZE } = process.env

const withBundleAnalyzer = require("@next/bundle-analyzer")({
     enabled: ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});