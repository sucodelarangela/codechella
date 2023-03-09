import { createContext, useContext, useState, useEffect } from 'react';
import { banner } from 'utils/banners';

const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
  const [image, setImage] = useState(banner.home.image[0]);
  const [filter, setFilter] = useState('');
  const [text, setText] = useState(banner.home.text);

  return (
    <BannerContext.Provider value={{ image, filter, text, setImage, setFilter, setText }}>
      {children}
    </BannerContext.Provider>
  );
};

export const useBannerContext = (pathname, theme) => {
  const { image, setImage, filter, setFilter, text, setText } = useContext(BannerContext);

  useEffect(() => {
    switch (pathname) {
      case '/':
        if (theme) {
          setImage(banner.home.image[0]);
          setFilter('');
        } else {
          setImage(banner.home.image[1]);
          setFilter('');
        }
        setText(banner.home.text);
        break;
      case '/experience':
        theme ? setFilter('boreal') : setFilter('summer');
        setImage(banner.experience.image);
        setText(banner.experience.text);
        break;
      case '/sectors':
        theme ? setFilter('boreal') : setFilter('summer');
        setImage(banner.sectorMap.image);
        setText(banner.sectorMap.text);
        break;
      case '/information':
        theme ? setFilter('boreal') : setFilter('summer');
        setImage(banner.generalInfo.image);
        setText(banner.generalInfo.text);
        break;
      case '/tickets':
        theme ? setFilter('boreal') : setFilter('summer');
        setImage(banner.tickets.image);
        setText(banner.tickets.text);
      default:
        break;
    }
  }, [pathname, theme]);

  return { image, filter, text };
};
