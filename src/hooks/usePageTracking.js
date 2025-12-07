import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
   
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'YOUR_GA_ID', {
        page_path: location.pathname + location.search,
      });
    }

   
    console.log('Page view:', location.pathname);
  }, [location]);
};


export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
  }
  console.log('Event tracked:', eventName, eventParams);
};


export const trackButtonClick = (buttonName) => {
  trackEvent('button_click', {
    button_name: buttonName,
    timestamp: new Date().toISOString()
  });
};

export const trackFormSubmission = (formName) => {
  trackEvent('form_submission', {
    form_name: formName,
    timestamp: new Date().toISOString()
  });
};
