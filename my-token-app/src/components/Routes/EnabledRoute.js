import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const EnabledRoute = ({ component: Component, isEnabled, ...rest }) => {
  const { redirectOptions } = 'display'

  return (
    <Route
      {...rest}
      render={(props) =>
        isEnabled ? <Component {...props} /> : <Redirect to={redirectOptions()} />
      }
    />
  )
}
