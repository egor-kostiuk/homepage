import {useEffect} from 'react';

const changeFavicon = (iconURL: string) => {
  let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement('link') as HTMLLinkElement;
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  link.type = 'image/png';
  link.href = iconURL;
};

export const useFavicon = (iconURL: string) => {
  useEffect(() => {
    changeFavicon(iconURL);
  }, [iconURL]);
};
