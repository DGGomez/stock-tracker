import axios from 'axios';
import { Platform } from 'react-native';

let url;

// Cause of genymotion we need to change the url here
// http://stackoverflow.com/questions/5528850/how-to-connect-localhost-in-android-emulator
if (Platform.OS !== 'ios') {
  url = 'http://10.0.3.2:8080/api';
} else {
  url = 'http://localhost:8080/api';
}

axios.defaults.baseURL = url;

class DataApi {
  constructor() {
    this.path = `/`;
  }

  async fetchData(args) {
    try {
      const { data } = await axios.post(`${this.path}/read`, { ...args });
      return data.meetups;
    } catch (e) {
      throw e;
    }
  }

  async createData(args) {
    try {
      const res = await axios.post(`${this.path}/create`, { ...args });
      return res;
    } catch (e) {
      throw e;
    }
  }
}

export {
  DataApi,
};

class UserApi {
  constructor() {
    this.path = '/users';
  }

  async login(args) {
    try {
      const { data } = await axios.post(`${this.path}/auth0`, args);
      return data;
    } catch (e) {
      throw e;
    }
  }
}

export const User = new UserApi();