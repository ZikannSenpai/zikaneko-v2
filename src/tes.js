const fs = require("fs");

let globalConfig = null;

async function init() {
    try {
        const data = fs.readFileSync("./config.json", "utf-8");
        globalConfig = JSON.parse(data);
        console.log(globalConfig.tags.animes.dir);
        if (globalConfig.tags.animes.dir) {
            console.log("true");
        }
    } catch (err) {
        console.error("Error:", err);
    }
}

init();

/*
        "animes": {
            "dir": [
                {
                    "animek": [
                        {
                            "name": "Random Waifu",
                            "endpoint": "/api/random/waifu",
                            "filename": "waifu",
                            "method": "GET",
                            "params": []
                        }
                    ]
                }
            ]
        }
        */
