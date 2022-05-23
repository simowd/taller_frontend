import { useState } from 'react';
import Skulpt from 'skulpt';
import outputService from '../services/output';

const useSkulpt = () => {
  const Sk = Skulpt;
  const [output, setOutput] = useState('');
  var outputValues = '';

  const runCode = async (currentCode) => {
    outputValues = '';

    Sk.pre = 'output';
    Sk.execLimit = 0;

    Sk.configure({
      output: outputData,
      read: builtinRead,
      execLimit: 10000,
      inputfun: function (prompt) {
        return window.prompt(prompt);
      },
      inputfunTakesPrompt: true,
    });

    var myPromise = Sk.misceval.asyncToPromise(function () {
      return Sk.importMainWithBody('<stdin>', false, currentCode.code, true);
    });

    myPromise.then(async (mod) => {
      console.log('success', mod);
      try {
        await outputService.newOutput({ status: 1, result: outputValues }, currentCode.file);
        setOutput(outputValues);
      }
      catch (e) {
        setOutput(outputValues);
      }

    }, async (error) => {
      console.log(error.toString());
      try {
        await outputService.newOutput({ status: -1, result: error.toString() }, currentCode.file);
        setOutput(error.toString());
      }
      catch (e) {
        setOutput(outputValues);
      }      
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
