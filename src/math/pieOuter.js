export default (d, rx, ry, h) => {
  const startAngle = (d.startAngle > Math.PI ? Math.PI : d.startAngle);
  const endAngle = (d.endAngle > Math.PI ? Math.PI : d.endAngle);
  const sx = rx * Math.cos(startAngle);
  const sy = ry * Math.sin(startAngle);
  const ex = rx * Math.cos(endAngle);
  const ey = ry * Math.sin(endAngle);
  const ret = [];

  ret.push('M', sx, h + sy, 'A', rx, ry, '0 0 1', ex, h + ey, 'L', ex, ey);
  ret.push('A', rx, ry, '0 0 0', sx, sy, 'z');
  return ret.join(' ');
}