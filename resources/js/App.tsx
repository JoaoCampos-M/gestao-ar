import { createInertiaApp } from '@inertiajs/inertia-react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import { render } from 'react-dom'

createInertiaApp({
  resolve: name => require(`./pages/${name}`),
  setup({ el, App, props }) {
    render(
      <>
        <CssBaseline />
        <App {...props} />
      </>,
      el
    )
  },
})
