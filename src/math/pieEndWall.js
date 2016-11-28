export default (d, rx, ry, h, ir) => {
  const ex = rx * Math.cos(d.endAngle);
  const ey = ry * Math.sin(d.endAngle);
  const ret = [];

  ret.push('M', ir * ex, ir * ey, 'L', ir * ex, ir * ey + h, 'L', ex, ey + h, 'L', ex, ey, 'z');
  return ret.join(' ');
};
