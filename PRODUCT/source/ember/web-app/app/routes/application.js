import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import classic from 'ember-classic-decorator';

@classic
export default class ApplicationRoute extends Route {
  @service
  router;

  model() {
    fetch('api/test/ping').then((data) => {
      if (data.status === 200) {
        console.log('connection established');
        this.router.transitionTo('dashboard');
      } else {
        console.log('wild card Route');
      }
    });
  }
}
