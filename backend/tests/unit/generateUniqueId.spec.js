/* This test should test whether the function
returns a unique ID for each record
* */

const generateUniqueId = require('../../utils/generateUniqueId')

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqueId()

    expect(id).toHaveLength(8)
  })
})
