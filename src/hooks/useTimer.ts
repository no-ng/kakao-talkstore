import { Duration } from 'luxon';
import { useEffect, useState } from 'react';

interface Props {
  remainSeconds: number;
}

interface ReturnState {
  time: string;
  day: string;
}

const useTimer = ({ remainSeconds }: Props): ReturnState => {
  const [seconds, setSeconds] = useState(remainSeconds);
  const [time, setTime] = useState('00:00:00');
  const [day, setDay] = useState('');
  let counter: NodeJS.Timeout;

  useEffect(() => {
    counter = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);

    return () => clearInterval(counter);
  }, []);

  useEffect(() => {
    if (seconds <= 1) {
      clearInterval(counter);
      setTime('00:00:00');
      return;
    }

    const duration = Duration.fromObject({ seconds }).shiftTo(
      'days',
      'hours',
      'minutes',
      'seconds',
    );
    const { days } = duration.toObject();

    setTime(duration.minus({ days }).toFormat('hh:mm:ss'));

    if (days) {
      setDay(`${days}일`);
    }
  }, [seconds]);

  return { day, time };
};

export default useTimer;
