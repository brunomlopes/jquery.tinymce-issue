:: ensure packages are installed
:: npm install jspm -g
:: npm install jspm --save-dev
:: jspm install
:: copy all sources to deployment
xcopy %DEPLOYMENT_SOURCE% %DEPLOYMENT_TARGET% /Y
