import http from 'k6/http';
import { sleep } from 'k6';

export const options = {

  scenarios: {
    test1:{
      executor: 'constant-vus',
      vus: 10,
      duration: '5m',
      exec: 'loadGetDistribution'
    },
  }

};


export function loadGetDistribution() {
  http.get('http://127.0.0.1:8080/distribuitions');
  sleep(1);
}
