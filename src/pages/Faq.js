import React, { useState, useEffect } from 'react';

import moment from 'moment';
import suncalc from 'suncalc';

// import egg from '../assests/images/egg.jpg';
import morning from '../assests/images/morning.jpg';
import afternoon from '../assests/images/afternoon.jpg';
import evening from '../assests/images/evening.jpg';
import nightImg from '../assests/images/night.jpg';

const Faq = () => {
  const [location, setLocation] = useState({
    lat: 23.8208961,
    long: 90.3654296,
  });

  //Getting current Hour
  const currentHour = moment().get('hour');

  const times = suncalc.getTimes(new Date(), location.lat, location.long);

  const dusk = parseInt(moment(times.dusk).format('HH'));
  const dawn = parseInt(moment(times.dawn).format('HH'));
  const solarNoon = parseInt(moment(times.solarNoon).format('HH'));
  const nightStarts = parseInt(moment(times.night).format('HH'));
  const night = parseInt(moment(times.night).format('HH'));

  // console.log(night);
  // console.log(dawn);
  // console.log('nightStarts ' + nightStarts);
  // console.log('nightEnd ' + nightEnd);
  // console.log(nightEnd);

  //----------------------------------       ----------------------------

  const findRightImg = () => {
    let imgSrc = '';
    console.log('currentHour ' + currentHour);
    if (currentHour >= dawn && currentHour < 12) {
      imgSrc = morning;
      console.log('this is right now morning');
    }

    if (currentHour >= solarNoon && currentHour < dusk) {
      console.log('this is right now afternoon');
      imgSrc = afternoon;
    }

    if (dusk <= currentHour && night > currentHour) {
      console.log('this is right now evening');
      imgSrc = evening;
    }

    if ((nightStarts <= currentHour && currentHour <= 24) || (currentHour > 0 && currentHour < dawn)) {
      console.log('this is night right now ');
      imgSrc = nightImg;
    }

    //Stupid Way of doing things
    // if (currentHour >= 5 && currentHour < 12) {
    //   imgSrc = morning;
    //   console.log('this is right now morning');
    // }

    // if (currentHour >= 12 && currentHour <= 16) {
    //   console.log('this is right now afternoon');
    //   imgSrc = afternoon;
    // }

    // if (currentHour > 16 && currentHour < 20) {
    //   console.log('this is right now evening');
    //   imgSrc = evening;
    // }

    // if ((currentHour >= 20 && currentHour <= 24) || (currentHour > 0 && currentHour < 5)) {
    //   console.log('this is right now night');
    //   imgSrc = nightImg;
    // }

    return imgSrc;
  };

  useEffect(() => {
    const option = {
      enableHighAccuracy: true,
      timeout: 5000,
    };

    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLocation({ lat: position.coords.latitude, long: position.coords.longitude });
      },
      undefined,
      option
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className='h-24 w-96 bg-green-500 m-10 relative'>
        <div className='mix-blend-color-burn h-36 w-56 bg-yellow-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      </div>
      <img src={findRightImg()} alt='' />
    </>
  );
};

export default Faq;
