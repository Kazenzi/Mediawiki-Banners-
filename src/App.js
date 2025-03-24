import React, { useState } from 'react';
import './App.css';

function App() {
  const [bannerText, setBannerText] = useState('I enjoy coding!');
  const [bannerBg, setBannerBg] = useState('#f0f0f0');
  const [bannerImage, setBannerImage] = useState('');

  const handleTextChange = (e) => {
    setBannerText(e.target.value);
  };

  const handleBgChange = (e) => {
    setBannerBg(e.target.value);
  };

  const handleImageChange = (e) => {
    setBannerImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="App">
      <div className="banner" style={{ backgroundColor: bannerBg }}>
        {bannerImage && <img src={bannerImage} alt="Banner" className="banner-image" />}
        <p>{bannerText}</p>
      </div>
      <form>
        <label>
          Change Banner Text:
          <input type="text" value={bannerText} onChange={handleTextChange} />
        </label>
        <label>
          Change Banner Background:
          <input type="color" value={bannerBg} onChange={handleBgChange} />
        </label>
        <label>
          Change Banner Image:
          <input type="file" onChange={handleImageChange} />
        </label>
      </form>
    </div>
  );
}

export default App;