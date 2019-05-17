# timeline-api

a [Sails](http://sailsjs.org) application

Requires https://github.com/willloZA/Timeline-Frontend built distributables within assets/ directory and mongodb installed and running without a password for app to function correctly.

Clone both repo's into a directory

```
mkdir timeline
cd timeline
git clone https://github.com/willloZA/Timeline-Frontend.git
git clone https://github.com/willloZA/Timeline-Api.git
```

Install npm dependencies for Timeline-Frontend then make ngx-sails-updates.sh executable
and execute it to update ngx-sails rxjs imports else build will fail (alternative will be worked on), once updated build Timeline-Frontend

```
cd Timeline-Frontend/
npm i
chmod +x ngx-sails-updates.sh
./ngx-sails-updates.sh
ng build
```

Enter Timeline-Api directory and install npm dependencies then copy frontend distributables
to Timeline-Api/assets/ directory for hosting. start sails server and visit 
http://localhost:1337 to view and test app.

```
cd ../Timeline-Api/
npm i
cp -r ../Timeline-Frontend/dist/timeline-frontend/* assets/
sails lift
```

Will be hosted on my portfolio shortly.