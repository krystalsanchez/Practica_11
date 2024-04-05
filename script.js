const cube = document.getElementById('cube');
let isDragging = false;
let previousX = 0;
let previousY = 0;
let rotationX = 45;
let rotationY = 45;

cube.addEventListener('mousedown', (e) => {
  isDragging = true;
  previousX = e.clientX;
  previousY = e.clientY;
});

cube.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const deltaX = e.clientX - previousX;
    const deltaY = e.clientY - previousY;

    rotationX -= deltaY / 2;
    rotationY += deltaX / 2;

    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

    previousX = e.clientX;
    previousY = e.clientY;
  }
});

cube.addEventListener('mouseup', () => {
  isDragging = false;
});

cube.addEventListener('mouseleave', () => {
  isDragging = false;
});

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    document.getElementById('faceHour').innerText = `${hours}:${minutes}`;
    
    requestAnimationFrame(updateClock);
  }
  
  updateClock();
  
  function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    document.getElementById('faceHour').innerText = hours;
    document.getElementById('faceMinute').innerText = minutes;
    
    requestAnimationFrame(updateClock);
  }
  
  updateClock();

  function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  document.getElementById('faceHour').innerText = hours;
  document.getElementById('faceMinute').innerText = minutes;
  document.getElementById('faceSecond').innerText = seconds;
  
  requestAnimationFrame(updateClock);
}

updateClock();

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('faceHour').innerText = hours;
    document.getElementById('faceMinute').innerText = minutes;
    document.getElementById('faceSecond').innerText = seconds;
    
    requestAnimationFrame(updateClock);
  }
  
  updateClock();
  
  function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  document.getElementById('faceHour').innerText = hours;
  document.getElementById('faceMinute').innerText = minutes;
  document.getElementById('faceSecond').innerText = seconds; 
  
  requestAnimationFrame(updateClock);
}

updateClock();

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const hourColor = generateGradientColor(0, 59, seconds, ['#ff0000', '#0000ff', '#800080', '#ff69b4']); 
    const minuteColor = generateGradientColor(0, 59, seconds, ['#ff0000', '#0000ff', '#800080', '#ff69b4']); 
    const secondColor = generateGradientColor(0, 59, seconds, ['#ff0000', '#0000ff', '#800080', '#ff69b4']); 
  
    document.getElementById('faceHour').innerText = hours;
    document.getElementById('faceHour').style.color = hourColor;
    document.getElementById('faceMinute').innerText = minutes;
    document.getElementById('faceMinute').style.color = minuteColor;
    document.getElementById('faceSecond').innerText = seconds;
    document.getElementById('faceSecond').style.color = secondColor;
  }
  
  function generateGradientColor(minValue, maxValue, value, colors) {
    const index = Math.floor((value - minValue) / (maxValue - minValue) * (colors.length - 1));
    const startColor = hexToRgb(colors[index]);
    const endColor = hexToRgb(colors[index + 1]);
    const ratio = (value - (index * (maxValue - minValue) / (colors.length - 1))) / ((maxValue - minValue) / (colors.length - 1));
  
    const color = startColor.map((channel, i) => {
      const endChannel = endColor[i];
      return Math.round(channel + (endChannel - channel) * ratio);
    });
  
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  }
  
  function hexToRgb(hex) {
    return [
      parseInt(hex.substring(1, 3), 16),
      parseInt(hex.substring(3, 5), 16),
      parseInt(hex.substring(5, 7), 16)
    ];
  }
  
  setInterval(updateClock, 500);    