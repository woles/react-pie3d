export default (d, rx, ry, h, ir) => {
  const sx = rx * Math.cos(d.startAngle);
  const sy = ry * Math.sin(d.startAngle);
  const ret = [];
  ret.push('M', ir * sx, ir * sy, 'L', ir * sx, ir * sy + h, 'L', sx, sy + h, 'L', sx, sy, 'z');
  return ret.join(' ');
};
