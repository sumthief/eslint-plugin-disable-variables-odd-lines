const {RuleTester} = require("eslint");
const exampleRule = require("./rule");

const ruleTester = new RuleTester();

const validCodeSnippet = `const a = 'a';
            
            let b = 'b';
            
            var c = 'c';
            
            function hey() {
            }
            `;

// Throws error if the tests in ruleTester.run() do not pass
ruleTester
    .run(
        "example", // rule name
        exampleRule, // rule code
        { // checks
            // 'valid' checks cases that should pass
            valid: [{
                name: 'all declaration types on even lines',
                code: validCodeSnippet
            }],
            // 'invalid' checks cases that should not pass
            invalid: [{
                name: 'all declaration types on odd lines',
                code: `
                ${validCodeSnippet}`,
                errors: 4,
            }],
        }
    );

console.log("All tests passed!");
