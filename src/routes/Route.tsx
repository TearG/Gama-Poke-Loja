import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  return (
    <ReactDOMRoute
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={() => {
        return <Component />;
      }}
    />
  );
};

export default Route;
