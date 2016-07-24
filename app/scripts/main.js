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

function renderForm(sources) {
    const form = {
      DOM: xs.of(false).map(filler =>
        <div styleName='choose-size' ref = "chooseSizeContainer">
            <h6 styleName='header' >Choose size of grid</h6>
            <form styleName='form'>
              <label styleName='label'>columns</label>
              <label styleName='label'>rows</label>
              <input styleName='input' type="text" value = {20} defaultValue={20} id="input-for-columns"  />
              <input styleName='input' onChange={20} type="text" value = {20} defaultValue={20} id="input-for-rows"  />
              <label styleName='label'>Pixel Size</label>
              <button className = 'button' id="create_grid" type="button" >Create Grid</button>
              <input styleName='input' type="text" value = '20' defaultValue={20} id="input-for-pixel-size"  />
            </form>
        </div>
      )
    };
    return form;
}

const drivers = {
  DOM: makeDOMDriver('#drawing_container')
};

run(renderForm, drivers);
