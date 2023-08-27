import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

const KEY_TIME = 'videoplayer-current-time';

const onPlay = function (currentTime) {
  const timePlaying = currentTime.seconds;

  localStorage.setItem(KEY_TIME, JSON.stringify(timePlaying));
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem(KEY_TIME)) || 0);
