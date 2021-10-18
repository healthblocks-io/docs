import React from 'react'
import ApiDoc from '@theme/ApiDoc'

function CustomPage() {
  return (
    <ApiDoc
      layoutProps={{
        title: 'API Reference',
        description: `API Reference for Healthblocks REST API`,
      }}
      spec={{
        type: 'url',
        content: '/openapi.yaml',
      }}
    />
  )
}

export default CustomPage
