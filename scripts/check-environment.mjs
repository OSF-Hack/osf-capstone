const expectedNodeMajor = 24;
const expectedNpmMajor = 11;

const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
const userAgent = process.env.npm_config_user_agent ?? "";
const npmMatch = userAgent.match(/npm\/(\d+)/);
const npmMajor = npmMatch ? Number.parseInt(npmMatch[1], 10) : null;

const problems = [];

if (nodeMajor !== expectedNodeMajor) {
  problems.push(
    `Node ${expectedNodeMajor}.x is required; found ${process.versions.node}.`,
  );
}

if (npmMajor !== null && npmMajor !== expectedNpmMajor) {
  problems.push(`npm ${expectedNpmMajor}.x is required; found npm ${npmMajor}.x.`);
}

if (problems.length > 0) {
  console.error("Environment check failed:\n");
  for (const problem of problems) console.error(`- ${problem}`);
  console.error("\nRun `nvm use`, then `npm ci`, and retry.");
  process.exit(1);
}

console.log(
  `Environment OK: Node ${process.versions.node}${npmMajor ? `, npm ${npmMajor}.x` : ""}.`,
);
