import React, { useState, useEffect } from 'react';
import { AidenService } from '../services/AidenService';
import styles from '../styles/AidenComponentStyles.module.css';
import { AidenResponse } from '../types/AidenTypes';

const AidenComponent: React.FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [aidenResponse, setAidenResponse] = useState<AidenResponse | null>(null);

  useEffect(() => {
    AidenService.init();
    AidenService.on('AIDEN_RESPONSE', handleAidenResponse);
    return () => {
      AidenService.off('AIDEN_RESPONSE', handleAidenResponse);
    };
  }, []);

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleAidenResponse = (response: AidenResponse) => {
    setAidenResponse(response);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    AidenService.processInput(userInput);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          className={styles.input}
          placeholder="Ask Aiden something..."
        />
        <button type="submit" className={styles.button}>Ask</button>
      </form>
      {aidenResponse && (
        <div className={styles.response}>
          <p>{aidenResponse.message}</p>
        </div>
      )}
    </div>
  );
};

export default AidenComponent;