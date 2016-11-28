export default function (d, rx, ry, ir) {
  if (d.endAngle - d.startAngle === 0) {
    return 'M 0 0';
  }

  const sx = rx * Math.cos(d.startAngle);
  const sy = ry * Math.sin(d.startAngle);
  const ex = rx * Math.cos(d.endAngle);
  const ey = ry * Math.sin(d.endAngle);
  const ret = [];

  ret.push('M', sx, sy, 'A', rx, ry, '0', (d.endAngle - d.startAngle > Math.PI ? 1 : 0));
  ret.push('1', ex, ey, 'L', ir * ex, ir * ey);
  ret.push('A', ir * rx, ir * ry, '0', (d.endAngle - d.startAngle > Math.PI ? 1 : 0),
    '0', ir * sx, ir * sy, 'z');
  return ret.join(' ');
}
