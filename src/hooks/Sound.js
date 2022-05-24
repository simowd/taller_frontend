import { useSelector } from 'react-redux';
import useSound from 'use-sound';

const useAccesibleSound = (audioFile) => {
  const settings = useSelector(state => state.settings);
  const [play] = useSound(audioFile);

  const playSound = () => {
    if (settings.audio_feedback) {
      play();
    }
  };

  return [ playSound ];
};

export default useAccesibleSound;