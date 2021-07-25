import { Duration } from 'luxon';
import { useEffect, useState } from 'react';

const useTimer = (seconds: number): { day: string; time: string } => {
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
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
    const untilToday = Duration.fromObject({ day: 1, minutes: 3 }).minus(duration);

    useEffect(() => setDay(`${Math.floor(duration.as('days'))}`), []);

    // 3분뒤 당일이 되면 타이머를 시작한다
    if (untilToday.as('minutes') <= 3) {
      let timer = 0;

      useEffect(() => {
        timer = window.setTimeout(() => {
          setDay('');
          startTimer();
        }, untilToday.as('milliseconds'));

        return () => clearTimeout(timer);
      }, []);
    }
  } else {
    useEffect(() => startTimer(), []);
  }

  return { day, time };
};

export default useTimer;
