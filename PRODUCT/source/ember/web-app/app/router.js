import EmberRouter from '@ember/routing/router';
import config from 'web-app/config/environment';

export default class Router extends EmberRouter {
  location = 'hash';
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('dashboard');
  this.route('analytics');
  this.route('alerts');
  this.route('inventory');
  this.route('report');
});
