const PROXY_CONFIG = [
    {
        context: [
            "/api"
        ],
        target: "http://localhost:52773/angular-template",
        secure: false
    },
]

module.exports = PROXY_CONFIG;