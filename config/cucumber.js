module.exports = {
  default: {
    tags: process.env.npm_config_TAGS || "",
    formatOptions: {
      snippetInterface: "async-await",
    },
    paths: ["src/test/features"],
    dryRun: false,
    require: ["src/test/steps/**/*.ts", "src/hooks/hooks.ts"],
    requireModule: ["ts-node/register"],
    format: [
      "progress-bar",
      "html:test-result/cucumber-report.html",
      "rerun:test-result/@rerun.txt",
    ],
    parallel: 3,
  },
  rerun: {
    formatOptions: {
      snippetInterface: "async-await",
    },
    paths: ["src/test/features"],
    dryRun: false,
    require: ["src/test/steps/**/*.ts", "src/hooks/hooks.ts"],
    requireModule: ["ts-node/register"],
    format: [
      "progress-bar",
      "html:test-result/cucumber-report.html",
      "rerun:test-result/@rerun.txt",
    ],
    parallel: 3,
  }
};
