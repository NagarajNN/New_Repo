import Component from '@ember/component';
import classic from 'ember-classic-decorator';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { action } from '@ember/object';

@classic
export default class NavigationComponent extends Component {
  @service
  productSettings;
  @alias('productSettings.productRootLinks')
  productRootLinks;
  init() {
    super.init(...arguments);
  }
}
