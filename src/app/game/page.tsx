"use client";

import { useRef } from "react";
import Detail from "@/components/Detail";
import Pointer from "./_component/Pointer";
import GameLoading from "./_component/GameLoading";
import { Unity } from "react-unity-webgl";
import { useUnityContext } from "react-unity-webgl";
import Go from "./_component/Go";

export default function Home() {
  const { unityProvider, isLoaded } = useUnityContext({
    loaderUrl: "build/Alice.loader.js",
    dataUrl: "build/Alice.data",
    frameworkUrl: "build/Alice.framework.js",
    codeUrl: "build/Alice.wasm",
  });

  const contentRef = useRef<HTMLDivElement>(null);

  const onContentClick = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Pointer e={onContentClick} />
      {/* {isLoaded === false && <GameLoading />} */}
      <Unity
        unityProvider={unityProvider}
        style={{
          width: "1152px",
          height: "648px",
          marginLeft: "384px",
          marginTop: "330px",
        }}
      />
      <Detail e={contentRef} />
      {/* <Go /> */}
    </div>
  );
}
