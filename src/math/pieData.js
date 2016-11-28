export default data => {
  let sum = 0;
  let lastAngle = 0;
  let index = 0;
  const colors = ['limegreen', 'mediumvioletred', 'mediumpurple', 'orange',
    'firebrick', 'chartreuse', 'dodgerblue', 'tomato'];
  let array = data.map(d => {
    if (typeof d === 'number') {
      sum += d;
      index += 1;
      return {
        value: d,
        color: colors[index % colors.length]
      };
    } else if (typeof d === 'object' && typeof d.value === 'number') {
      index += 1;
      sum += d.value;
      d.color = d.color ? d.color : colors[index % colors.length];
      return d;
    }
  });

  index = 0;

  array = array.map(d => {
    d.index = index;
    index += 1;
    d.startAngle = lastAngle;
    d.endAngle = lastAngle + d.value / sum * 2 * Math.PI;
    lastAngle = d.endAngle;
    return d;
  });

  return array;
};
