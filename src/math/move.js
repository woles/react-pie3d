import middleAngle from './middleAngle';

export default (d, rx, ry) => {
  const middle = middleAngle(d.startAngle, d.endAngle);
  return [
    0.2 * rx * Math.cos(middle > Math.PI ? middle : -middle),
    0.2 * ry * Math.sin(middle)
  ];
};
