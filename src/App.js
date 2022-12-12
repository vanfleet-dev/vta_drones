import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Nav from './components/Nav';
import About from './components/About';
import Platform from './components/Platform';
import Examples from './components/Examples';
import { siteInfo } from './misc/information';

function App() {

    return (
      <div className="App">
        <div className="home-container">
          <Header header={siteInfo.header} subtext={siteInfo.subtext} />
          <Hero image={siteInfo.heroImage} alt={siteInfo.heroAlt}/>
          <Ticker 
            ticker1Text={siteInfo.ticker[0].text}
            ticker1Numbers={siteInfo.ticker[0].numbers}
            ticker2Text={siteInfo.ticker[1].text}
            ticker2Numbers={siteInfo.ticker[1].numbers}
            ticker3Text={siteInfo.ticker[2].text}
            ticker3Numbers={siteInfo.ticker[2].numbers} />
          <Nav />
        </div>
        <About
          title={siteInfo.about.title}
          image={siteInfo.about.image}
          alt={siteInfo.about.alt}
          text={siteInfo.about.text} />
        <Platform 
          title={siteInfo.platform.title}
          carousel={siteInfo.platform.carousel}
          carouselText={siteInfo.platform.carouselText} 
          text={siteInfo.platform.tabInfo}/>
        <Examples />
      </div>
    );
}

export default App;
