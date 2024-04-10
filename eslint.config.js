"use strict";
const rulePlugin = require('./plugin');

module.exports = [
    {
        files: ["*.js","**/*.js"],
        languageOptions: {
            sourceType: 'commonjs',
            ecmaVersion: 'latest',
        },
        plugins: {"hh-holyjs-2024": rulePlugin},
        rules: {
            "hh-holyjs-2024/disable-variables-odd-lines": "error"
        }
    }
]
