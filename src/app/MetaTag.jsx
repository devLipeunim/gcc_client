// "use client";

import React from "react";

import { Helmet } from "react-helmet";

const MetaTag = (props) => {
  return (
    <Helmet>
      <meta name="HandheldFriendly" content="true" />
      <meta name="description" content={props.description} />
      <title>{props.title}</title>
    </Helmet>
  );
};

export default MetaTag;
