import { useEffect, useState } from "react";
import * as path from "path";

export function useAsset(url: string) {
    return new URL(url, location.href).toString();

    // const [ state, setState ] = useState<string | null>(null);
    //
    // useEffect(function () {
    //     fetch(url)
    //         .then(value => value.blob())
    //         .then(blob => new Promise<string>(function (resolve) {
    //             const reader = new FileReader();
    //             reader.onloadend = () => resolve(reader.result as string);
    //             reader.readAsDataURL(blob);
    //         }))
    //         .then(encoded => setState(encoded));
    // }, [ url ]);
    //
    // return state;
}
