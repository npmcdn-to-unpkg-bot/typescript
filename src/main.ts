import {SocialNetwork, Person} from './interfaces';

import * as _ from 'lodash';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/timer';
// import 'rxjs/add/observable/interval';
//
// Observable.interval(1000).subscribe( x => console.log(x));

import {Person2} from './person2'

class App implements SocialNetwork {
  title = "Suoqin";
  getUsers():Person[] {
    return [{name:"John"}];
  }
}

console.log('the main app returns an array? ', _.isArray(new App().getUsers()));

console.log( new Person2());