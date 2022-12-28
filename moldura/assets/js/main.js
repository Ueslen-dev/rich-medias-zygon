const controls = document.querySelector('.video-controlls');
const cameraOptions = document.querySelector('.video-options>select');
const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
const screenshotImage = document.querySelector('img');
const buttons = [...controls.querySelectorAll('button')];
let streamStarted = false;

const [play, pause, screenshot, share] = buttons;

const constraints = {
  video: {
    width: {
      min: 163,
      ideal: 163,
      max: 163,
    },
    height: {
      min: 290,
      ideal: 290,
      max: 290,
    },
  }
};

cameraOptions.onchange = () => {
  const updatedConstraints = {
    ...constraints,
    deviceId: {
      exact: cameraOptions.value
    }
  };

  startStream(updatedConstraints);
};

play.onclick = () => {
  video.classList.remove('remove');

  if (streamStarted) {
    video.play();
    play.classList.add('remove');
    pause.classList.remove('remove');
    screenshot.classList.add('remove');
    
    return;
  }
  if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
    const updatedConstraints = {
      ...constraints,
      deviceId: {
        exact: cameraOptions.value
      }
    };
    startStream(updatedConstraints);
  }
};

const pauseStream = () => {
  video.pause();
  play.classList.remove('remove');
  pause.classList.add('remove');
};

const doScreenshot = () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  screenshotImage.src = canvas.toDataURL('image/webp');
  screenshotImage.classList.remove('remove');

  pauseStream()
  video.classList.add('remove');
};

pause.onclick = pauseStream;
screenshot.onclick = doScreenshot;

const startStream = async (constraints) => {
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  handleStream(stream);
};


const handleStream = (stream) => {
  video.srcObject = stream;
  play.classList.add('remove');
  pause.classList.remove('remove');
  screenshot.classList.remove('remove');
};

const getCameraSelection = async () => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  const videoDevices = devices.filter(device => device.kind === 'videoinput');
  const options = videoDevices.map(videoDevice => {
    return `<option value="${videoDevice.deviceId}">${videoDevice.label}</option>`;
  });
  cameraOptions.innerHTML = options.join('');
};

const shareImage = async () => {
    const blob = await fetch(screenshotImage.getAttribute('src'))
    .then(response => response.blob())
     const data = {
        files: [
        new File([blob], 'me.png', {
            type: blob.type,
        }),
        ],
        title: 'Foto da Campanha do novo banner',
    }
    try {
        if (!(navigator.canShare(data))) {
        throw new Error("Não é possível compartilhar", data);
        }
        await navigator.share(data);
    } catch (err) {
        console.error(err.name, err.message);
    }
}

// share.onclick = shareImage

getCameraSelection();