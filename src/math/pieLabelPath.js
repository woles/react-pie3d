import middleAngle from './middleAngle';

export default (d, rx, ry, h) => {
  const middle = middleAngle(d.startAngle, d.endAngle);
  const x1 = rx * Math.cos(middle);
  const y1 = ry * Math.sin(middle);
  const labelPathLength = 1 + h / rx / 2;
  const path = [];

  path.push('M', x1, y1, 'L', x1 * labelPathLength, y1 * labelPathLength);
  path.push('L', (rx + 14) * (middle > 3 / 2 * Math.PI || middle < Math.PI / 2 ? 1 : -1),
            y1 * labelPathLength);
  path.push('L', x1 * labelPathLength, y1 * labelPathLength, 'z');

  return path.join(' ');
};
