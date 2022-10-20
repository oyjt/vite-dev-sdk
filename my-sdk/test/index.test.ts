import { describe, it, bench } from 'vitest'

describe('suite', () => {
  it('serial test', async() => { /* ... */ })
  it.concurrent('concurrent test 1', async() => { /* ... */ })
  it.concurrent('concurrent test 2', async() => { /* ... */ })
})

describe('sort', () => {
  bench('normal', () => {
    const x = [1, 5, 4, 2, 3]
    x.sort((a, b) => {
      return a - b
    })
  })

  bench('reverse', () => {
    const x = [1, 5, 4, 2, 3]
    x.reverse().sort((a, b) => {
      return a - b
    })
  })
})

