'use strict';

define("project-one/tests/helpers/flash-message", ["ember-cli-flash/flash/object"], function (_object) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-flash/flash/object"eaimeta@70e063a35619d71f

  _object.default.reopen({
    init() {}

  });
});
define("project-one/tests/integration/components/login-page-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | login-page', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <LoginPage />
      */
      {
        id: "u0H1KsuA",
        block: "{\"symbols\":[],\"statements\":[[8,\"login-page\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <LoginPage>
              template block text
            </LoginPage>
          
      */
      {
        id: "RVh7NPjU",
        block: "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"login-page\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("project-one/tests/integration/components/singup-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | singup', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Singup />
      */
      {
        id: "BGaQvdZp",
        block: "{\"symbols\":[],\"statements\":[[8,\"singup\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Singup>
              template block text
            </Singup>
          
      */
      {
        id: "9iduQQXK",
        block: "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"singup\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("project-one/tests/integration/components/view-page-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | view-page', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ViewPage />
      */
      {
        id: "kHDHg3Zq",
        block: "{\"symbols\":[],\"statements\":[[8,\"view-page\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ViewPage>
              template block text
            </ViewPage>
          
      */
      {
        id: "yyMFDYm0",
        block: "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"view-page\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("project-one/tests/test-helper", ["project-one/app", "project-one/config/environment", "@ember/test-helpers", "ember-qunit", "project-one/tests/helpers/flash-message"], function (_app, _environment, _testHelpers, _emberQunit, _flashMessage) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"project-one/app",0,"project-one/config/environment",0,"@ember/test-helpers",0,"ember-qunit",0,"project-one/tests/helpers/flash-message"eaimeta@70e063a35619d71f

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("project-one/tests/unit/controllers/login-page-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Controller | login-page', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:login-page');
      assert.ok(controller);
    });
  });
});
define("project-one/tests/unit/routes/login-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:login');
      assert.ok(route);
    });
  });
});
define("project-one/tests/unit/routes/usersession-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | usersession', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:usersession');
      assert.ok(route);
    });
  });
});
define("project-one/tests/unit/services/login-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Service | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:login');
      assert.ok(service);
    });
  });
});
define('project-one/config/environment', [], function() {
  var prefix = 'project-one';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('project-one/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
