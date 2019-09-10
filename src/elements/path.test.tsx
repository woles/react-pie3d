import React from 'react'
// tslint:disable-next-line: no-implicit-dependencies
import { create } from 'react-test-renderer'

import { DEFAULT_CONFIG } from '../const'
import { PathType } from '../types'
import { Path } from './path'

describe('Path component tests', () => {
  test('it render proper path', () => {
    const data = {
      color: 'mediumvioletred',
      endAngle: 3.141592653589793,
      index: 1,
      moved: false,
      percentageValue: 0.3333333333333333,
      startAngle: 1.0471975511965976,
      value: 20,
    }
    const pathVariables = {
      ...DEFAULT_CONFIG,
      moveElement: () => null,
      rx: 150,
      ry: 100,
    }
    const path = create(<Path data={data} pathVariables={pathVariables} type={PathType.Top}/>)
    const instance = path.root
    const titles = instance.findAllByType('title')
    expect(titles[0].children[0]).toBe('20 33.33%')
    expect(titles.length).toBe(1)
  })
})
