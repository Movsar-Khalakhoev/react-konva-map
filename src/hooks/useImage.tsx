import React from "react"

export function useImage(url: string, crossOrigin?: string) {
  const [state, setState] = React.useState<{
    image: HTMLImageElement | undefined,
    status: 'loading' | 'loaded' | 'failed'
  }>({image: undefined, status: "loading"});

  React.useEffect(
    function () {
      if (!url) return;
      const img = document.createElement('img');

      function onload() {
        setState({ image: img, status: 'loaded' });
      }

      function onerror() {
        setState({ image: undefined, status: 'failed' });
      }

      img.addEventListener('load', onload);
      img.addEventListener('error', onerror);
      crossOrigin && (img.crossOrigin = crossOrigin);
      img.src = url;

      return function cleanup() {
        img.removeEventListener('load', onload);
        img.removeEventListener('error', onerror);
        setState({image: undefined, status: 'loading'});
      };
    },
    [url]
  );

  // return array because it it better to use in case of several useImage hooks
  // const [background, backgroundStatus] = useImage(url1);
  // const [patter] = useImage(url2);
  return state
}
