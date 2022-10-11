import Service from '@ember/service';
import common from '../app-common';
import classic from 'ember-classic-decorator';
import Ember from 'ember';

const { get, set } = Ember;

@classic
export default class ProductSettingsService extends Service {
  productConfig = {};
  productRootLinks={};

  init() {
    super.init(...arguments);
    this.loadConfigData();
  }
  loadConfigData() {
    set(this, 'productConfig', common.ProductConfig);
    set(this,'productRootLinks',common.productRouteWithHref);
  }
}
