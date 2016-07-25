/** @jsx html */

import xs from 'xstream';
import {run} from '@cycle/xstream-run';
import {makeDOMDriver} from '@cycle/dom';
import {html} from 'snabbdom-jsx';

import styles from '../scss/components/choose-size-of-grid.scss';

function main() {
  const sinks = {
    DOM: xs.periodic(1000).map(i =>
      <h1> {i} seconds elapsed </h1>
    )
  };
  return sinks;
}
function intent(domSource){
    return{
        getFormValues$: domSource.select(styles.button)
    }
}

function renderForm(sources) {
    const form = {
      DOM: xs.of(false).map(filler =>
        <div className={styles.chooseSize} ref = "chooseSizeContainer">
            <h6 className={styles.header} >Choose size of grid</h6>
            <form className={styles.form}>
              <label className={styles.label}>columns</label>
              <label className={styles.label}>rows</label>
              <input className={styles.input} type="text" value = {20} defaultValue={20} id="input-for-columns"  />
              <input className={styles.input} onChange={20} type="text" value = {20} defaultValue={20} id="input-for-rows"  />
              <label className={styles.label}>Pixel Size</label>
              <button className={styles.button} id="create_grid" type="button" >Create Grid</button>
              <input className={styles.input} type="text" value = '20' defaultValue={20} id="input-for-pixel-size"  />
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
