import React from 'react';
import Header from './components/Header';
import Ticker from './components/Ticker';
import Nav from './components/Nav';
import About from './components/About';
import Platform from './components/Platform';
import Examples from './components/Examples';
import Documentation from './components/Documentation';
import Gallery from './components/Gallery';
import { siteInfo } from './misc/information';

function App() {

    return (
      <div className="App">
        <div className="home-container">
          <Header image={siteInfo.header.image} alt={siteInfo.header.alt} />
          <Ticker 
            ticker1Text={siteInfo.ticker[0].text}
            ticker1Numbers={siteInfo.ticker[0].numbers}
            ticker2Text={siteInfo.ticker[1].text}
            ticker2Numbers={siteInfo.ticker[1].numbers}
            ticker3Text={siteInfo.ticker[2].text}
            ticker3Numbers={siteInfo.ticker[2].numbers} />
        </div>
        <Nav />
        <About
          title={siteInfo.about.title}
          image={siteInfo.about.image}
          alt={siteInfo.about.alt}
          text={siteInfo.about.text} />
        <Gallery 
          title={siteInfo.gallery.title}
          description={siteInfo.gallery.description}
          carousel={siteInfo.gallery.carousel}
          carouselText={siteInfo.gallery.carouselText}
          links={siteInfo.gallery.links} />
        <Examples 
          title={siteInfo.example.title}
          map1Text={siteInfo.example.map1Text}
          map2Text={siteInfo.example.map2Text}
          />
        <Platform
          title={siteInfo.platform.title}
          text={siteInfo.platform.text}
          tabs={siteInfo.platform.tabInfo} 
          />
        <Documentation
          title={siteInfo.documentation.title}
          topText={siteInfo.documentation.topText}
          video={siteInfo.documentation.video}
          description={siteInfo.documentation.description}
          button={siteInfo.documentation.button} />
      </div>
    );
}

export default App;
