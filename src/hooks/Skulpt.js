import { useState } from 'react';
import Skulpt from 'skulpt';

const useSkulpt = () => {
  const Sk = Skulpt;
  const [output, setOutput] = useState('');
  var outputValues = '';

  const runCode = async (code) => {
    outputValues = '';

    Sk.pre = 'output';
    Sk.execLimit = 0;

    Sk.configure({
      output: outputData,
      read: builtinRead,
      execLimit: Number.POSITIVE_INFINITY,
      inputfun: function (prompt) {
        return window.prompt(prompt);
      },
      inputfunTakesPrompt: true,
    });

    var myPromise = Sk.misceval.asyncToPromise(function () {
      return Sk.importMainWithBody('<stdin>', false, code, true);
    });

    myPromise.then((mod) => {
      console.log('success', mod);
      setOutput(outputValues);
    }, (error) => {
      console.log(error.toString());
      setOutput(error.toString());
    });
  };

  function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles['files'][x] === undefined)
      throw 'File not found: \'' + x + '\'';
    return Sk.builtinFiles['files'][x];
  }

  const outputData = (text) => {
    outputValues = outputValues === '' ? `${text}` : `${outputValues}\r${text}`;
    return text;
  };

  return { runCode, output };
};

export default useSkulpt;
