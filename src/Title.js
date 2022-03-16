import React from "react";

const Title =React.memo( function (props) {
    console.log("title render");
    return <h1 style={{ display: "inline-block" }}>{props.children}</h1>;
  });
  export default React.memo(Title);
  