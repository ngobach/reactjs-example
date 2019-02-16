const utils = {
  delay(duration) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, duration);
    });
  }
};

export default utils;
