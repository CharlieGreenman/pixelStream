/** @jsx html */

import xs from 'xstream';
import {run} from '@cycle/xstream-run';
import {makeDOMDriver} from '@cycle/dom';
import {html} from 'snabbdom-jsx';

function main() {
  const sinks = {
    DOM: xs.periodic(1000).map(i =>
      <h1> {i} seconds elapsed </h1>
    )
  };
  return sinks;
}

const drivers = {
  DOM: makeDOMDriver('#drawing_container')
};

run(main, drivers);
