// App.js
import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import PortfolioComponent from './components/PortfolioSection';
import WorkHistorySection from './components/WorkHistorySection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';

const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

const App = () => {

  const [inputValue, setInputValue] = useState('');
  const [currentComponent, setCurrentComponent] = useState(null);
  const [typingStatus, setTypingStatus] = useState('typing');
  const [enteredCommands, setEnteredCommands] = useState([]);
  const [lastRenderedComponent, setLastRenderedComponent] = useState('');
  const userInputRef = useRef(null);

  useEffect(() => {
    if(typingStatus === 'commandsListed') {
      userInputRef.current.focus();
    }
  }, [typingStatus]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      const command = inputValue.trim();
      if (command) {
        // Add the command to the list
        setEnteredCommands([...enteredCommands, command]);

        // Process the command and update the component accordingly
        processCommand(command);

        // Clear the input
        setInputValue('');
      }
    }
  };

  const processCommand = (command) => {
    switch (command) {
      case 'npm -v portfolio':
        setCurrentComponent(<PortfolioComponent />);
        setLastRenderedComponent('PortfolioComponent');
        setTypingStatus('typing');
        break;
      case 'npm -v work-history':
        setCurrentComponent(<WorkHistorySection />);
        setLastRenderedComponent('WorkHistorySection');
        setTypingStatus('typing');
        break;
      case 'npm -v resume':
        setCurrentComponent(<ResumeSection />);
        setLastRenderedComponent('ResumeSection');
        setTypingStatus('typing');
        break;
      case 'npm -v contact':
        setCurrentComponent(<ContactSection />);
        setLastRenderedComponent('ContactSection');
        setTypingStatus('typing');
        break;
      default:
        setCurrentComponent(null);
    }
  };

  return (
    <div className="">
      <section class="font-sans mockup-code h-[300px] px-3">
        <div className="overflow-y-auto">
        <code>
          <span class="text-success">user@portfolio</span><span class="text-warning"> ~/Home/{lastRenderedComponent}</span>
        </code>
        <pre data-prefix="$">
          <code>
            <TypeAnimation cursor={false}
              className={CURSOR_CLASS_NAME}
              sequence={[
                "npm start justin-clem-Dev", 800,
                (el) => el.classList.remove(CURSOR_CLASS_NAME)]}
              omitDeletionAnimation={true} />
          </code>
        </pre>
        <pre data-prefix=" ">
          <code>
            <TypeAnimation
              cursor={false}
              sequence={[
                "", 2000,
                "loading components...", 10,]}
              omitDeletionAnimation={true}
              speed={100} />
          </code>
        </pre>
        <pre data-prefix=" ">
          <code>
            <TypeAnimation
              cursor={false}
              sequence={[
                "", 4000,
                "CLI Commands:\n\t\t\"npm -v portfolio\"\n\t\t\"npm -v work-history\"\n\t\t\"npm -v resume\"\n\t\t\"npm -v contact\"", 10,
                () => {
                  setTypingStatus('commandsListed');
                }]}
              omitDeletionAnimation={true}
              speed={100} />
          </code>
        </pre>
        {enteredCommands.map((cmd, index) => (
            <div key={index} className="">
              <pre data-prefix="$"><code>{cmd}</code></pre>
            </div>
          ))}
        <pre data-prefix={typingStatus === 'commandsListed' ? '$' : ''}>
          <code>
            <input type="text"
              ref={userInputRef}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleEnterPress}
              className="bg-inherit outline-none">
            </input>
          </code>
        </pre>
        </div>
      </section>
      {currentComponent}
    </div>
  );
}

export default App;
