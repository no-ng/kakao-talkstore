import { act, renderHook } from '@testing-library/react-hooks';
import useTimer from '../../src/hooks/use-timer';

describe('hooks', () => {
  describe('use-timer', () => {
    test('24시간 3분 초과 입력 시 남은 일자 표기', () => {
      const { result } = renderHook(() => useTimer(60 * 60 * 24 * 3));

      expect(result.current.day).toBe('3');
    });

    test('23시간 입력 시 23:00:00 표기', () => {
      const { result } = renderHook(() => useTimer(60 * 60 * 23));

      expect(result.current.time).toBe('23:00:00');
    });

    test('3분 뒤 당일이면 시간에 맞춰 타이머 표기', () => {
      jest.useFakeTimers();

      const { result } = renderHook(() => useTimer(60 * 60 * 24 + 3));

      expect(result.current.day).toBe('1');

      act(() => {
        jest.advanceTimersByTime(5000);
      });

      expect(result.current.time).toBe('23:59:58');

      jest.useRealTimers();
    });
  });
});
