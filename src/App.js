import React, { useEffect, useRef, useState } from 'react';
import ContactSection from './components/ContactSection';
import PortfolioComponent from './components/PortfolioSection';
import ResumeSection from './components/ResumeSection';
import WorkHistorySection from './components/WorkHistorySection';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [currentComponent, setCurrentComponent] = useState(null);
  const [enteredCommands, setEnteredCommands] = useState([]);
  const [commandsList, setCommandsList] = useState([]);
  const [consoleHistory, setConsoleHistory] = useState([]);
  const consoleHistoryRef = useRef(null);
  const userInputRef = useRef(null);

  useEffect(() => {
    userInputRef.current.focus();

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
          'Welcome to my interactive Web Portfolio.',
          'For a list of available commands, type "help"'
        ],
      },
    ]);
  }, []);

  // Ensure scrolling to the bottom when console history changes
  useEffect(() => {
    if (consoleHistoryRef.current) {
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
        consoleText = 'Viewing portfolio...';
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
        setCommandsList([
          {
            command: 'projects',
            description: 'View my portfolio',
          },
          // ... (other commands)
        ]);
        consoleText = [
          'Available Commands:',
          'Command     | Description',
          '-----------------------------------',
          'projects    | View my portfolio',
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
        <div className="overflow-auto console-history h-[250px]" ref={consoleHistoryRef}>
          {/* Display console history */}
          {consoleHistory.map((cmd, index) => (
            <div key={index} role="presentation">
              {cmd.command && (
                <pre className="text-green-100">
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
            <span className="text-green-100">visitor@halcyon-justin.com:~$</span>{' '}
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