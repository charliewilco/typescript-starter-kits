#!/usr/bin/env node
const mri = require("mri");
const { contentCreator } = require("../dist");
const args = process.argv.slice(2);

const flags = mri(args);

contentCreator(flags._)