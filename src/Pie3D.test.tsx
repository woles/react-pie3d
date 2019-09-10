import React from 'react'
// tslint:disable-next-line: no-implicit-dependencies
import { create } from 'react-test-renderer'

import { Pie3D } from './Pie3D'

describe('Pie 3D chart component tests', () => {
  test('it render proper raw data', () => {
    const data = [10, 20, 30]
    const chart = create(<Pie3D config={{}} data={data} />)
    const instance = chart.root
    const titles = instance.findAllByType('title')
    expect(titles[0].children[0]).toBe('10 16.67%')
    expect(titles.length).toBe(3)
  })

  test('it render proper data', () => {
    const data = [{
      color: 'blue',
      label: 'test-20',
      value: 20,
    }, {
      color: 'red',
      label: 'test-30',
      value: 30,
    }, {
      color: 'green',
      label: 'test-50',
      value: 50,
    }]
    const chart = create(<Pie3D config={{}} data={data} />)
    const instance = chart.root
    const titles = instance.findAllByType('title')
    expect(titles[0].children[0]).toBe('test-20 20 20.00%')
    expect(titles.length).toBe(3)
  })
})
