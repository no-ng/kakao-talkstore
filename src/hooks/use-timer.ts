import { Duration } from 'luxon';
import { useEffect, useState } from 'react';

const useTimer = (seconds: number): { day: string; time: string } => {
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    let duration = Duration.fromObject({ seconds });

    const startTimer = () => {
      setTime(duration.toFormat('hh:mm:ss'));

      let timer = 0;

      const tick = () => {
        duration = duration.minus(1000);
        setTime(duration.toFormat('hh:mm:ss'));
      };

      timer = window.setInterval(() => tick(), 1000);

      return () => clearInterval(timer);
    };

    if (duration.as('days') >= 1) {
      setDay(`${Math.floor(duration.as('days'))}`);

      // 3분 뒤 당일이 되면 타이머를 설정한다
      const untilToday = duration.minus({ days: 1 });

      if (untilToday.as('minutes') <= 3) {
        let teardown: () => void;

        window.setTimeout(() => {
          duration = Duration.fromObject({ days: 1 });
          teardown = startTimer();
        }, untilToday.toMillis());

        return () => teardown && teardown();
      }

      return;
    }

    return startTimer();
  }, []);

  return { day, time };
};

export default useTimer;
