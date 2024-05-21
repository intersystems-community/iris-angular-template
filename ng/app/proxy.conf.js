const PROXY_CONFIG = [
    {
        context: [
            "/api"
        ],
        target: "http://localhost:52773/app-name",
        secure: false
    },
]

module.exports = PROXY_CONFIG;