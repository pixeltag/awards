import React from 'react';
import { Button } from 'react-bootstrap';

function SwitchLang() {
  const lang = localStorage.getItem('lang');
  const handleLang = () => {
    if (lang === 'en') {
        localStorage.setItem('lang', 'ar');
    } else if (lang === 'ar') {
        localStorage.setItem('lang', 'en');
    } else {
        localStorage.setItem('lang', 'ar');
    }
    window.location.reload();
  }

  return (
    <Button className="switchLang" onClick={() => handleLang()}>
        {lang === 'ar' ? 'English' : 'عربي' }
    </Button>
  );
}

export default SwitchLang;