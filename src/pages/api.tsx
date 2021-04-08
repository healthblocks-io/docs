import React from 'react'
import ApiDoc from '@theme/ApiDoc'

function CustomPage() {
  return (
    <ApiDoc
      layoutProps={{
        title: 'Open API Docs',
        description: `Open API Reference Docs for API`,
      }}
      spec={{
        type: 'url',
        content: '/openapi.yaml',
      }}
    />
  )
}

export default CustomPage
