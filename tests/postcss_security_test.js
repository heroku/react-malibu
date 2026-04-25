const { describe, it } = require('mocha')
const { expect } = require('chai')
const postcss = require('postcss')

describe('postcss security (GHSA-qx2v-qp2m-jg93)', function () {
  it('escapes </style> in stringified CSS output', function () {
    const dangerous = 'body { content: "</style><script>alert(1)</script><style>"; }'
    const ast = postcss.parse(dangerous)
    const output = ast.toResult().css
    expect(output).to.not.include('</style>')
  })
})
