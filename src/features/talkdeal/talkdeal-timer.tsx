import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';
import useTimer from '../../hooks/use-timer';

interface Props {
  impended: boolean;
  remainSeconds: number;
}

const TalkdealTimer: FunctionComponent<Props> = ({ impended, remainSeconds }) => {
  const { day, time } = useTimer(remainSeconds);

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
      {day ? `마감 ${day}일전` : `${time} 남음`}
    </motion.span>
  );
};

export default TalkdealTimer;
