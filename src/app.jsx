import { component$, useSignal } from '@builder.io/qwik';

import qwikLogo from './assets/qwik.svg';
//import viteLogo from '/vite.svg';
import './app.css';

export const App = component$(() => {
  const count = useSignal(0);

  return (
    <>
      <div>
        <a href="https://qwik.dev" target="_blank">
          <img src={qwikLogo} class="logo qwik" alt="Qwik logo" />
        </a>
      </div>
      <h1>Qwik!!!</h1>
      <div class="card">
        <button onClick$={() => count.value++}>count is {count.value}</button>
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Qwik logos to learn more
      </p>
    </>
  );
});
