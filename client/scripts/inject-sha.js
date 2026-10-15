#!/usr/bin/env node
const fs = require('fs');
const { execSync } = require('child_process');

// Get the short commit SHA (first 7 characters)
const sha = execSync('git rev-parse --short HEAD').toString().trim();

// Write to public/version.json
const versionPath = './public/version.json';
fs.writeFileSync(versionPath, JSON.stringify({ commit: sha }));

console.log(`Injected commit SHA ${sha} into ${versionPath}`);