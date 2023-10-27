module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "standard",
    "overrides": [
        {
            "env": {
                "node": true,
                "mocha": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    }
}
