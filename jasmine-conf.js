const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
const HtmlReporter = require('jasmine-pretty-html-reporter').Reporter;
const path = require('path');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
    new SpecReporter({
        spec: {
            displayPending: true,
        },
    }),
);

jasmine.getEnv().addReporter(new HtmlReporter({
  path: path.join(__dirname,'results')
}));
