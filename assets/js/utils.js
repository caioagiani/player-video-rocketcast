const path = (file) => {
  return `assets/files/${file}`;
};

const secToMin = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
};

export { path, secToMin };
