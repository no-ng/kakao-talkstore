import { FunctionComponent, useEffect, useState } from 'react';
import { DateTime } from 'luxon';

interface Props {
  opener: 'talkdeal' | 'brand';
  remainSeconds: number;
}

// TODO: 24시간 초과 시 day 계산, 오프너에 따른 css분기
export const Timer: FunctionComponent<Props> = ({ remainSeconds }) => {
  const [seconds, setSeconds] = useState(remainSeconds);
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    const counter = setInterval(() => {
      if (remainSeconds <= 1) {
        clearInterval(counter);
        setTime('00:00:00');
        return;
      }

      setSeconds((s) => s - 1);
    }, 1000);

    return () => clearInterval(counter);
  }, []);

  useEffect(() => {
    setTime(DateTime.fromSeconds(seconds).toFormat('HH:mm:ss'));
  }, [seconds]);

  return <>{time}</>;
};
