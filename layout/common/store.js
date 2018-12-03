import { observable } from "mobx";

class Store {
    @observable userName = '#사용자';
    @observable themeColor = '#000';
    @observable usePushNotification = false;
}

export default new Store();