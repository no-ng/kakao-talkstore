import { FunctionComponent } from 'react';
import useTimer from '../../hooks/use-timer';

interface Props {
  impended: boolean;
  remainSeconds: number;
}

const TalkdealTimer: FunctionComponent<Props> = ({ impended, remainSeconds }) => {
  const { day, time } = useTimer(remainSeconds);

  return (
    <span className={`timer ${impended && 'impended'}`}>
      {day ? `마감 ${day}일전` : `${time} 남음`}
    </span>
  );
};

export default TalkdealTimer;
