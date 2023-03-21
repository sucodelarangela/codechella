import { createContext, useContext, useState, useEffect, ReactElement } from 'react';
import { banner } from 'utils/banners';

interface IBannerContext {
  image: string;
  setImage: (value: string) => void;
  text: string;
  setText: (value: string) => void;
}

// @ts-ignore
const BannerContext = createContext<IBannerContext>();

interface BannerProviderProps {
  children: ReactElement;
}

export const BannerProvider = ({ children }: BannerProviderProps) => {
  const [image, setImage] = useState(banner.home.image[0]);
  const [text, setText] = useState(banner.home.text);

  return (
    <BannerContext.Provider value={{ image, text, setImage, setText }}>
      {children}
    </BannerContext.Provider>
  );
};

export const useBannerContext = (pathname: string, theme: boolean) => {
  const { image, setImage, text, setText } = useContext<IBannerContext>(BannerContext);

  useEffect(() => {
    switch (pathname) {
      case '/':
        if (theme) {
          setImage(banner.home.image[0]);
        } else {
          setImage(banner.home.image[1]);
        }
        setText(banner.home.text);
        break;
      case '/experience':
        setImage(banner.experience.image);
        setText(banner.experience.text);
        break;
      case '/sectors':
        setImage(banner.sectorMap.image);
        setText(banner.sectorMap.text);
        break;
      case '/information':
        setImage(banner.generalInfo.image);
        setText(banner.generalInfo.text);
        break;
      case '/tickets':
        setImage(banner.tickets.image);
        setText(banner.tickets.text);
        break;
      case '/your-ticket':
        setImage(banner.ticket.image);
        setText(banner.ticket.text);
        break;
      default:
        break;
    }
  }, [pathname, theme]);

  return { image, text };
};
