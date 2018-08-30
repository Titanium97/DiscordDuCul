# DiscordDuCul
Copy of this Twitter bot -> https://twitter.com/BotDuCul

# Setup your local nodes.js environment
npm init

npm i --save discord.js

# Setup your configuration file
Create a new file in the config directory and name it 'config-local.json'

Then, in this new JSON file add :

{
    "robot" :
        {
            "token" : "YOUR_ROBOT_TOKEN"
        }
}

Your robot token must be kept secret, this is why this config file is in the .gitignore file.
