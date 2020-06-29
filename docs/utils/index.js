/* eslint-disable import/prefer-default-export */
import { isWithinInterval, setHours } from 'date-fns';
import { theme } from '../../constants';

export const getAutoTheme = () => {
  const currentDate = new Date();
  const dayStart = setHours(currentDate, 9);
  const dayEnd = setHours(currentDate, 21);

  const isDayTime = isWithinInterval(currentDate, {
    start: dayStart,
    end: dayEnd,
  });

  if (isDayTime) {
    return theme.light;
  }
  return theme.dark;
};
