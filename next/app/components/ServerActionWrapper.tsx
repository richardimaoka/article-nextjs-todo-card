"use client";

import { ServerActionContext } from "./ServerActionContext";

interface Props {
  children: React.ReactNode;
}

export function ServerActionWrapper(props: Props) {
  return (
    <ServerActionContext.Provider value={true}>
      {props.children}
    </ServerActionContext.Provider>
  );
}
