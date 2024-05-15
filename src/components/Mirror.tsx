"use client";

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { andromeda } from "@uiw/codemirror-theme-andromeda";
import { githubLight, githubDark } from "@uiw/codemirror-theme-github";

type MirrorProps = {
  initialCode: string;
};

export const Mirror = (props: MirrorProps) => {
  const [value, setValue] = React.useState(props.initialCode);
  const onChange = React.useCallback((val: any, viewUpdate: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <CodeMirror
      value={value}
      height={props.height || "300px"}
      className="border-white border-2 focus:border-white shadow-md shadow-white"
      theme={githubLight}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
};
