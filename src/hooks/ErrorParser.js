import { createIntl, createIntlCache } from 'react-intl';
import { LOCALES } from '../i18n';
import language_messages from '../i18n/messages';


const useErrorHandler = () => {

  let intl;
  const cache = createIntlCache();

  const user = JSON.parse(window.localStorage.getItem('user'));

  if (user) {
    intl = createIntl({
      locale: user.locale,
      messages: language_messages[user.locale]
    }, cache);
  }
  else {
    intl = createIntl({
      locale: LOCALES.SPANISH,
      messages: language_messages[LOCALES.SPANISH]
    }, cache);
  }

  const parseError = (err) => {
    let res = err.toString();
    const error = res.split(':');
    const errorType = error[0];

    switch (errorType) {
    case 'NameError': {
      const regex = res.match(/^NameError: name ('[a-zA-Z]*') is not defined on line ([0-9]*)$/i);
      const varName = regex[1];
      const varNum = regex[2];

      res = (intl.formatMessage({ id: 'skulpt.name_error' }, { var_name: varName, line: varNum }));
      break;
    }
    case 'AttributeError': {
      const regex = res.match(/^AttributeError: ('[a-zA-Z]*') object has no attribute ('[a-zA-Z]*') on line ([0-9]*)$/i);
      const varName = regex[1];
      const varFunc = regex[2];
      const varNum = regex[3];

      console.log(res);

      res = (intl.formatMessage({ id: 'skulpt.attribute_error' }, { var_name: varName, function: varFunc, line: varNum }));
      break;
    }
    case 'ValueError': {
      const regex = res.match(/^ValueError: ([a-zA-Z]*) domain error on line ([0-9]*)$/i);

      const varName = regex[1];
      const varNum = regex[2];

      res = (intl.formatMessage({ id: 'skulpt.value_error' }, { var_name: varName, line: varNum }));
      break;
    }
    case 'ZeroDivisionError': {
      const regex = res.match(/^ZeroDivisionError: ([a-zA-Z]*) division or modulo by zero on line ([0-9]*)$/i);

      const varName = regex[1];
      const varNum = regex[2];

      res = (intl.formatMessage({ id: 'skulpt.zerodivision_error' }, { var_name: varName, line: varNum }));
      break;
    }
    case 'AssertionError': {
      const message = error[1].split('on line');

      const trueMessage = message[0];
      const line = message[1];
      res = (intl.formatMessage({ id: 'skulpt.assertion_error' }, { var_name: trueMessage, line: line }));
      break;
    }
    case 'ImportError': {
      const regex = res.match(/^ImportError: No module named ([a-zA-Z]*) on line ([0-9]*)$/i);

      const varName = regex[1];
      const varNum = regex[2];

      res = (intl.formatMessage({ id: 'skulpt.import_error' }, { var_name: varName, line: varNum }));
      break;
    }
    case 'IndexError': {
      const regex = res.match(/^IndexError: list index out of range on line ([0-9]*)$/i);

      const varNum = regex[1];

      res = (intl.formatMessage({ id: 'skulpt.index_error' }, { line: varNum }));
      break;
    }
    case 'KeyError': {
      const regex = res.match(/^KeyError: ([a-zA-Z]*) on line [0-9]+$/i);

      const varName = regex[1];
      const varNum = regex[2];

      res = (intl.formatMessage({ id: 'skulpt.key_error' }, { var_name: varName, line: varNum }));
      break;
    }
    case 'SystemExit': {
      const message = error[1].split('on line');
      const trueMessage = message[0];
      const line = message[1];
      res = (intl.formatMessage({ id: 'skulpt.system_exit_error' }, { var_name: trueMessage, line: line }));
      break;
    }
    case 'OverflowError': {
      const regex = res.match(/^OverflowError: Numerical result out of range on line ([0-9]*)$/i);

      const varNum = regex[1];

      res = (intl.formatMessage({ id: 'skulpt.overflow_error' }, { line: varNum }));
      break;
    }
    case 'RecursionError': {
      const regex = res.match(/^RecursionError: Maximum call stack size exceeded on line ([0-9]*)$/i);

      const varNum = regex[1];

      res = (intl.formatMessage({ id: 'skulpt.recursion_error' }, { line: varNum }));
      break;
    }
    case 'SyntaxError': {
      const regex = res.match(/^SyntaxError: bad input on line ([0-9]*)$/i);

      const varNum = regex[1];

      res = (intl.formatMessage({ id: 'skulpt.syntax_error' }, { line: varNum }));
      break;
    }
    case 'NotImplementedError': {
      const regex = res.match(/^NotImplementedError: ([a-zA-Z]*) is not yet implemented in Skulpt on line ([0-9]*)$/i);

      const varName = regex[1];
      const varNum = regex[2];

      res = (intl.formatMessage({ id: 'skulpt.not_implemented_error' }, { var_name: varName, line: varNum }));
      break;
    }
    default:
      break;
    }
    

    console.log(res);
    return res;
  };

  return { parseError };
};


export default useErrorHandler;