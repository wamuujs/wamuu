#!/usr/bin/env node

const program = require("commander");
const { getPkgVersion } = require("../src/util");

// const inquirer = require("inquirer");

program
  .version(getPkgVersion())
  .usage("<command> [options]")
  .command("init [projectName]", "Init a project with default templete")
  .command("build", "Build a project with options")
  .command("update", "Update packages of wamuu")
  .parse(process.argv);

if (!program.args.length) {
  program.help();
}
