// App.js
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import PortfolioComponent from './components/PortfolioSection';
import WorkHistorySection from './components/WorkHistorySection';

const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

const App = () => {

  const [inputValue, setInputValue] = useState('');
  const [currentComponent, setCurrentComponent] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      switch (inputValue) {
        case 'portfolio':
          setCurrentComponent(<PortfolioComponent />);
          break;
        case 'workhistory':
          setCurrentComponent(<WorkHistorySection />);
          break;
        default:
          setCurrentComponent(null);
      }
    }
  };

  return (
    <div className="">
      <section class="font-sans mockup-code px-3">
        <code>
          <p class="text-success">user@portfolio ~/Home/Portfolio</p>
        </code>
        <pre data-prefix="$">
          <code>
            <TypeAnimation cursor={false}
              className={CURSOR_CLASS_NAME}
              sequence={["npm start justin-clem-Dev", (el) => el.classList.remove(CURSOR_CLASS_NAME),]} />
          </code>
        </pre>
        <pre data-prefix=">">
          <code>
            <input type="text" 
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleEnterPress}
            className="bg-inherit outline-none">
            </input>
          </code>
        </pre>
      </section>
      {currentComponent}
    </div>
  );
}

export default App;
