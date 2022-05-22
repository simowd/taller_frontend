import { useSelector } from 'react-redux';


const useOptions = () => {
  const options = useSelector(state => state.settings);

  const editorOptions = {
    autoIndent: 'none',
    accessibilitySupport: 'on',
    autoClosingBrackets: 'never',
    bracketPairColorization: 'on',
    folding: false,
    fontFamily: options ? options.font_type : undefined,
    fontSize: options ? options.font_size : undefined,
    links: false,
    minimap: {
      enabled: false,
    },
    tabCompletion: 'off',
    wordWrap: 'off',
  };

  return { editorOptions };
};

export default useOptions;