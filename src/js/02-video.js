import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const KEY_TIME = 'videoplayer-current-time';
const onPlay = function (seconds) {
  // data is an object containing properties specific to that event
  localStorage.setItem(KEY_TIME, seconds);
  {
    duration: 61.857;
    percent: 0.049;
    seconds: 3.034;
  }
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem(KEY_TIME));

// player
//   .setCurrentTime(30.456)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
