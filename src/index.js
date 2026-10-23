import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Browsers such as Chrome and Edge show only one frame of an animated GIF
// favicon. Redraw the GIF into a small PNG and update the favicon as it plays.
const faviconLink = document.querySelector('link[rel~="icon"]');
if (faviconLink) {
  const faviconImage = new Image();
  faviconImage.src = `${process.env.PUBLIC_URL}/gold_star_rotation.gif?frames=1`;
  faviconImage.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 48;
    canvas.height = 48;
    const context = canvas.getContext('2d');

    if (context) {
      window.setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(faviconImage, 0, 0, canvas.width, canvas.height);
        faviconLink.type = 'image/png';
        faviconLink.href = canvas.toDataURL('image/png');
      }, 80);
    }
  };
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

