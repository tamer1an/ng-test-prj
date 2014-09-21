App v0.0.1
===========================
Setup steps for local development:

    Pre-install software:

    0)Install NodeJs: http://nodejs.org/

    1)run: npm install -g bower jade stylus

    2)run: bower install { ./ , static/ }

    3)compile app.coffee

    3)run node app


Unit Testing with Karma,Jasmine,PhantomJS
===========================
Setup steps for testing development:

    0)npm install -g karma jasmine-node phantomjs

    1)test/bower install

    2)compile coffeeScript in test/unit/coffee/ to test/unit/

    3)compile coffeeScript karma.conf.coffee

    4)karma start karma.conf.js


E-2-E Testing
===========================

    0)npm install -g protractor

    1)webdriver-manager update

    2)webdriver-manager start

    3)compile coffeeScript in test/e2e/coffee/ to test/e2e/

    4)protractor test/e2e/conf.js
