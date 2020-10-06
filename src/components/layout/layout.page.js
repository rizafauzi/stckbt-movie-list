import React from "react";
import { Route } from "react-router-dom";
import { Dimensions } from "../../utils";

import { Children } from "./layout.style";

const Layout = (props) => {
  const { component: Component, ...rest } = props;
  const { height, width } = Dimensions();

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <div>
          <Children height={height} width={width} >
            <Component {...matchProps} />
          </Children>
        </div>
      )}
    />
  );
};

export default Layout;
