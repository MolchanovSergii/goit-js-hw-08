import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', function (data) {
    console.log(data.seconds);
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
});


const stopTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(stopTime).then(function (){});
