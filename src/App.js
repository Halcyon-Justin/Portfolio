import React, { useEffect, useRef, useState } from 'react';
import ContactSection from './components/ContactSection';
import PortfolioComponent from './components/PortfolioSection';
import ResumeSection from './components/ResumeSection';
import WorkHistorySection from './components/WorkHistorySection';

const App = () => {
  // State declarations
  const [inputValue, setInputValue] = useState('');
  const [currentComponent, setCurrentComponent] = useState(null);
  const [enteredCommands, setEnteredCommands] = useState([]);
  const [consoleHistory, setConsoleHistory] = useState([]);

  // Refs for DOM elements
  const consoleHistoryRef = useRef(null);
  const userInputRef = useRef(null);

  useEffect(() => {
    userInputRef.current.focus();

    // Handle resize and initial welcome message
    const handleResize = () => {
      const welcomeMessage = window.innerWidth < 600
        ? 'Welcome to my mobile-friendly Web Portfolio.'
        : 'Welcome to my interactive Web Portfolio.';

      // Update the console history with the welcome messages on mount
      setConsoleHistory([
        {
          command: '',
          text: [
            '██╗  ██╗ █████╗ ██╗      ██████╗██╗   ██╗ ██████╗ ███╗   ██╗',
            '██║  ██║██╔══██╗██║     ██╔════╝╚██╗ ██╔╝██╔═══██╗████╗  ██║',
            '███████║███████║██║     ██║      ╚████╔╝ ██║   ██║██╔██╗ ██║',
            '██╔══██║██╔══██║██║     ██║       ╚██╔╝  ██║   ██║██║╚██╗██║',
            '██║  ██║██║  ██║███████╗╚██████╗   ██║   ╚██████╔╝██║ ╚████║',
            '╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝',
            welcomeMessage,
            'For a list of available commands, type "help"'
          ],
        },
      ]);
    };

    // Attach event listener for resize
    window.addEventListener('resize', handleResize);

    // Initial call to set the console history on component mount
    handleResize();

    // Cleanup: remove event listener when component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Ensure scrolling to the bottom when console history changes
  useEffect(() => {
    if (consoleHistoryRef.current) {
      // Use optional chaining to handle null or undefined
      consoleHistoryRef.current.scrollTop = consoleHistoryRef.current.scrollHeight;
    }
  }, [consoleHistory]);

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle key press, specifically 'Enter' key
  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      const command = inputValue.trim();
      if (command) {
        processCommand(command);
        setInputValue('');
      }
    }
  };

  // Process the entered command
  const processCommand = (command) => {
    let resultComponent = null;
    let consoleText = null;

    switch (command.toLowerCase()) {
      case 'projects':
        resultComponent = <PortfolioComponent />;
        consoleText = 'Viewing projects...';
        break;
      case 'work':
        resultComponent = <WorkHistorySection />;
        consoleText = 'Viewing work history...';
        break;
      case 'resume':
        resultComponent = <ResumeSection />;
        consoleText = 'Viewing resume...';
        break;
      case 'contact':
        resultComponent = <ContactSection />;
        consoleText = 'Viewing contact information...';
        break;
      case 'secret':
        consoleText = 'Secrets....';
        break;
      case 'help':
        consoleText = [
          'Available Commands:',
          'Command     | Description',
          '-----------------------------------',
          'projects    | View my projects',
          'work        | View my work history',
          'resume      | View my resume',
          'contact     | View my contact information',
          'secret      | Enter in the passcode',
          'clear       | Clear the console',
        ];
        break;
      case 'clear':
        // Clear console history and remove the current component
        setConsoleHistory([
          {
            command: '',
            text: [''],
          },
        ]);
        setCurrentComponent(null);
        break;
      default:
        consoleText = ['Command not found. For a list of commands, type "help"'];
        break;
    }

     // Update the state only if a recognized command is entered
    if (resultComponent !== null && command.toLowerCase() !== 'clear') {
      setCurrentComponent(resultComponent);
    }

    // Update console history and entered commands
    if (command.toLowerCase() !== 'clear') {
      setConsoleHistory((prevHistory) => [
        ...prevHistory,
        {
          command,
          text: Array.isArray(consoleText) ? consoleText : [consoleText],
        },
      ]);
      setEnteredCommands((prevCommands) => [...prevCommands, command]);
    } else {
      setEnteredCommands((prevCommands) => [...prevCommands, command]);
    }
  };

  // Render the component
  return (
    <div className="">
      <section className="font-sans mockup-code h-[340px] px-3">
        <div className="overflow-auto console-history h-[250px] text-primary" ref={consoleHistoryRef}>
          {/* Display console history */}
          {consoleHistory.map((cmd, index) => (
            <div key={index} role="presentation">
              {cmd.command && (
                // Use template literals for better readability
                <pre className="text-accent">
                  <span className="">visitor@halcyon-justin.com:~$</span>{' '}
                  <code>{cmd.command}</code>
                </pre>
              )}
              {cmd.text.map((line, lineIndex) => (
                <pre key={lineIndex} className="console-text">
                  {line}
                </pre>
              ))}
            </div>
          ))}
          {/* Input for new command */}
          <pre>
            <span className="text-accent">visitor@halcyon-justin.com:~$</span>{' '}
            <input
              type="text"
              ref={userInputRef}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleEnterPress}
              className="bg-inherit outline-none"
            />
          </pre>
        </div>
      </section>
      {/* Render the current component */}
      {currentComponent}
    </div>
  );
};

export default App;