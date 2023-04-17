import { double } from './double'

describe('testing double function', () => {
  test('should multiply by two', () => {
    const result = double({ value: 5 })
    expect(result).toBe(10)
  })
})