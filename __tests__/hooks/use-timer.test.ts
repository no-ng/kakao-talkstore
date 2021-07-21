import { renderHook } from '@testing-library/react-hooks';
import useTimer from '../../src/hooks/use-timer';

describe('hooks', () => {
  describe('use-timer', () => {
    test('인자로 전달된 초가 하루 이상이면 일자를 표기한다', () => {
      const { result } = renderHook(() => useTimer(60 * 60 * 24 * 3));

      expect(result.current.day).toBe('3');
    });

    test('인자로 전달된 초가 24시간 이내일 경우 시간을 표기한다', () => {
      const { result } = renderHook(() => useTimer(60 * 60 * 23));

      expect(result.current.time).toBe('23:00:00');
    });
  });
});
