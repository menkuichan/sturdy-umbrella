/* eslint-disable import/prefer-default-export */
import SunCalc from 'suncalc';
import isWithinInterval from 'date-fns/isWithinInterval';
import { theme } from '../../constants';

export const getAutoTheme = () => {
  const currentDate = new Date();
  let currentLatitude = '';
  let currentLongitude = '';

  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      currentLatitude = latitude;
      currentLongitude = longitude;
    }
  );

  const { sunrise, sunset } = SunCalc.getTimes(
    currentDate,
    currentLatitude,
    currentLongitude
  );

  const isDayTime = isWithinInterval(currentDate, {
    start: sunrise,
    end: sunset,
  });
  if (isDayTime) {
    return theme.light;
  }
  return theme.dark;
};
