import { decorate, observable } from 'mobx';

class Store {
  user = null;
}

decorate(Store, {
  user: [observable],
});

export default new Store();
