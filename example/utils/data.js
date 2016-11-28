const salesData = [
  { label: 'JIVE', color: 'blue' },
  { label: 'NRCIA', color: 'red' },
  { label: 'SPHS', color: 'limegreen' },
  { label: 'TSLA', color: 'mediumpurple' },
  { label: 'ISLE', color: 'orange' },
  { label: 'SLAB', color: 'firebrick' }
];

export default () => {
  return salesData.map(d =>
    ({
      label: d.label,
      value: 100 * Math.random(),
      color: d.color
    })
  );
};
