# for mac
brew install npm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
nvm ls-remote
nvm install <the_stable_version>
npm install -g create-react-app
npx create-react-app <app_name>
npm install

# for ubuntu
curl -L https://www.npmjs.com/install.sh | sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
nvm ls-remote
nvm install <the_stable_version>
npm install -g create-react-app
npx create-react-app <app_name>
npm install
npm run build
npm install -g pm2
npm install -g serve
serve -s build
sudo apt install xsel



