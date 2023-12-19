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
    if (typingStatus === 'commandsListed') {
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
        setEnteredCommands([...enteredCommands, command]);
        processCommand(command);
        setInputValue('');
      }
    }
  };

  const processCommand = (command) => {
    switch (command.toLowerCase()) {
      case 'portfolio':
        setCurrentComponent(<PortfolioComponent />);
        setLastRenderedComponent('PortfolioComponent');
        setTypingStatus('typing');
        break;
      case 'work':
        setCurrentComponent(<WorkHistorySection />);
        setLastRenderedComponent('WorkHistorySection');
        setTypingStatus('typing');
        break;
      case 'resume':
        setCurrentComponent(<ResumeSection />);
        setLastRenderedComponent('ResumeSection');
        setTypingStatus('typing');
        break;
      case 'contact':
        setCurrentComponent(<ContactSection />);
        setLastRenderedComponent('ContactSection');
        setTypingStatus('typing');
        break;
      default:
        setCurrentComponent(null);
    }
  };

  const startSequence = [
    "npm start justin-clem-Dev", 800,
    (el) => el.classList.remove(CURSOR_CLASS_NAME)
  ];

  const loadingSequence = ["", 2000, "loading components...", 10];

  const commandsListedSequence = [
    "", 4000,
    "CLI Commands:\n\t\t\"portfolio\"\n\t\t\"work\"\n\t\t\"resume\"\n\t\t\"contact\"", 10,
    () => {
      setTypingStatus('commandsListed');
    }
  ];

  return (
    <div className="">
      <section className="font-sans mockup-code h-[300px] px-3">
        <div className="overflow-auto">
          <code>
            <span className="text-success">user@portfolio</span><span className="text-warning"> ~/Home/{lastRenderedComponent}</span>
          </code>
          <pre data-prefix="$">
            <code>
              <TypeAnimation cursor={false} className={CURSOR_CLASS_NAME} sequence={startSequence} omitDeletionAnimation={true} />
            </code>
          </pre>
          <pre data-prefix=" ">
            <code>
              <TypeAnimation cursor={false} sequence={loadingSequence} omitDeletionAnimation={true} speed={100} />
            </code>
          </pre>
          <pre data-prefix=" ">
            <code>
              <TypeAnimation cursor={false} sequence={commandsListedSequence} omitDeletionAnimation={true} speed={100} />
            </code>
          </pre>
          {enteredCommands.map((cmd, index) => (
            <div key={index} role="presentation">
              <pre data-prefix="$"><code>{cmd}</code></pre>
            </div>
          ))}
          <pre data-prefix={typingStatus === 'commandsListed' ? '$' : ''}>
            <code>
              <input
                type="text"
                ref={userInputRef}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleEnterPress}
                className="bg-inherit outline-none"
              />
            </code>
          </pre>
        </div>
      </section>
      {currentComponent}
    </div>
  );
};

export default App;
