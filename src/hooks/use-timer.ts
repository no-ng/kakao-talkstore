import { Duration } from 'luxon';
import { useCallback, useEffect, useState } from 'react';

const useTimer = (rs: number): { day: number; time: string } => {
  const [day, setDay] = useState(0);
  const [time, setTime] = useState('');
  const [seconds, setSeconds] = useState(rs);
  const getDays = useCallback(
    () => Math.floor(Duration.fromObject({ seconds }).as('days')),
    [seconds],
  );
  let timer: number;

  useEffect(() => {
    const days = getDays();

    if (days >= 1) {
      setDay(days);
    }

    timer = window.setInterval(() => {
      setSeconds((sec) => sec - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds <= 1) {
      clearInterval(timer);
      setTime('00:00:00');

      return;
    }

    const days = getDays();

    setTime(Duration.fromObject({ seconds }).minus({ days }).toFormat('hh:mm:ss'));
  }, [seconds]);

  return { day, time };
};

export default useTimer;
