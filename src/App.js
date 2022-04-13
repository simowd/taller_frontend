import React from 'react';
import { stringTranslate, translate } from './i18n';

function App() {
  console.log(stringTranslate('username'));
  return (
    <div>
      { translate('password') }
    </div>
  );
}

export default App;
