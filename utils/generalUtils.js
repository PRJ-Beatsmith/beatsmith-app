const getRandomSessionAvatar = () => {
  return Math.floor(Math.random() * 66) + 1;
};

const generalUtils = {
  getRandomSessionAvatar,
};

export default generalUtils;
