import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const time = function (data) {
    const currentTime = data.seconds;
    console.log('currentTime:', currentTime);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
}

player.on('timeupdate', throttle(time, 1000));

const stopTime = localStorage.getItem('videoplayer-current-time');
if (stopTime) {
    player.setCurrentTime(stopTime);
}
