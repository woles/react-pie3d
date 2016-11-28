export default length => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let id = '';
  for (let i = length; i >= 0; i -= 1) {
    id += (alphabet[(Math.random() * alphabet.length).toFixed(0)]);
  }
  return id;
};
