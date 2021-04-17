import $ from 'jquery';

import './style.scss';

let num = 0;
function secondCounter() {
  $('#main').html('You&#39;ve been on this page for ' + num + ' seconds.');
  num += 1;
}

setInterval(secondCounter, 1000);
