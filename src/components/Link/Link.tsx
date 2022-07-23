import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

interface Props {
  url: string;
  children?: React.ReactNode;
  external?: boolean;
}

export const Link: React.FC<Props> = ({
  children,
  url = "",
  external,
  ...rest
}) => {
  const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/;
  if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
    return (
      <a href={url} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <ReactRouterLink to={url} {...rest}>
      {children}
    </ReactRouterLink>
  );
};
