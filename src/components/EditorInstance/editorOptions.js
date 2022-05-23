import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const useOptions = () => {
  const options = useSelector(state => state.settings);
  const [editorOptions, setSettings] = useState(undefined);


  useEffect(() => {
    if (options) {
      setSettings(
        {
          autoIndent: 'none',
          accessibilitySupport: 'on',
          autoClosingBrackets: 'never',
          autoClosingQuotes: 'never',
          bracketPairColorization: 'on',
          folding: false,
          fontFamily: options ? options.font_type : undefined,
          fontSize: options ? options.font_size : undefined,
          links: false,
          minimap: {
            enabled: false,
          },
          tabCompletion: 'off',
        }
      );
    }
  }, [options]);


  return { editorOptions };
};

export default useOptions;