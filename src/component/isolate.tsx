import React, { PropsWithChildren } from "react";
import { createRoot } from "react-dom/client";

export function Isolate({ children }: PropsWithChildren) {
    function onRef(ref: HTMLElement | null) {
        if (ref) {
            const root = createRoot(ref.attachShadow({ mode: "open" }));
            root.render(children);
        }
    }

    return <div ref={ onRef }/>;
}
