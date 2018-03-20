module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import"
    ],
  "rules": {
    "no-underscore-dangle": 0,
    "comma-dangle": ["error", "only-multiline"],
    "prefer-const": "off",
    "no-plusplus": "off",
    "no-param-reassign": 0,
    "no-return-assign": 0,
    "global-require": 0,
    "arrow-parens": 0,
    "prefer-template": 0,
    "no-nested-ternary": 0,
    "no-mixed-operators": 0,
    "no-confusing-arrow": 0,
    "prefer-arrow-callback": 0,
    "prefer-arrow-callback": 0,
    "func-names": 0,
    "prefer-destructuring": 1
  },
  "env": {
    "browser": true,
    "mocha": true,
  },
  "globals" : {
    "artifacts": false,
    "contract": false,
    "assert": false,
    "web3": false
  },
};
