import { Duration } from 'luxon';
import { useEffect, useState } from 'react';

const useTimer = (seconds: number): { day: string; time: string } => {
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  let duration = Duration.fromObject({ seconds });

  const runTimer = () => {
    useEffect(() => {
      setTime(duration.toFormat('hh:mm:ss'));

      let timer = 0;

      const tick = () => {
        duration = duration.minus(1000);
        setTime(duration.toFormat('hh:mm:ss'));
      };

      timer = window.setInterval(() => tick(), 1000);

      return () => clearInterval(timer);
    }, []);
  };

  if (duration.as('days') >= 1) {
    useEffect(() => {
      setDay(`${Math.floor(duration.as('days'))}`);

      const untilToday = Duration.fromObject({ day: 1, minutes: 3 }).minus(duration);

      if (untilToday.as('minutes') <= 3) {
        let timer = 0;

        timer = window.setTimeout(() => {
          setDay('');
          runTimer();
        }, untilToday.as('milliseconds'));

        return () => clearTimeout(timer);
      }
    }, []);
  } else {
    runTimer();
  }

  return { day, time };
};

export default useTimer;
