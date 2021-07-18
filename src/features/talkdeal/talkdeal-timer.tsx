import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';
import useTimer from '../../hooks/useTimer';

interface Props {
  impended: boolean;
  remainSeconds: number;
}

const TalkdealTimer: FunctionComponent<Props> = ({ impended, remainSeconds }) => {
  // [workaround] hooks 규칙상 함수 최상단에서 가져와야 해서 일단 톡딜용 타이머 만들었음
  const { day, time } = useTimer({ remainSeconds });

  return (
    <motion.span
      className={`timer ${impended && 'impended'}`}
      animate={{
        y: [0, -1.5, 0, -1.5, 0],
      }}
      transition={{
        times: [0, 0.2, 0.4, 0.6, 0.8],
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 5,
        ease: 'circIn',
      }}
    >
      {day ? `마감 ${day}전` : `${time} 남음`}
    </motion.span>
  );
};

export default TalkdealTimer;
