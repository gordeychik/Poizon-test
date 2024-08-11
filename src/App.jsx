import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Text } from './components/Text';
import { Input } from './components/Input';
import { Stats } from './components/Stats';
import { setUserInput, setErrors, setStartTime, setWpm, resetExercise } from './store/typingSlice';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

const TextContainer = styled.div`
  font-size: 2.2em;
  margin-bottom: 20px;
  position: relative;
  padding: 10px;
  width: 70%;
  letter-spacing: 3px;
  min-height: 100px;
  white-space: pre-wrap;
  word-wrap: break-word;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 1.5em;
    letter-spacing: 2px;
  }

  @media (max-width: 480px) {
    width: 95%;
    font-size: 1.2em;
    letter-spacing: 1px;
  }
`;

const RestartButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 2em;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  color: #fff;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const App = () => {
  const dispatch = useDispatch();
  const { userInput, errors, startTime, wpm, text } = useSelector((state) => state.typing);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    dispatch(setStartTime(Date.now()));
  }, [dispatch]);

  useEffect(() => {
    if (userInput.length > 0) {
      const currentTime = Date.now();
      const timeElapsed = (currentTime - startTime) / 1000 / 60;
      const wordsTyped = userInput.split(' ').filter(word => word !== '').length;
      const newWpm = Math.round(wordsTyped / timeElapsed);
      dispatch(setWpm(newWpm));
    }
  }, [userInput, startTime, dispatch]);

  const handleInput = (e) => {
    const input = e.target.value;
    dispatch(setUserInput(input));
    let errorCount = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== text[i]) {
        errorCount++;
      }
    }
    dispatch(setErrors(errorCount));
  };

  const handleRestart = () => {
    dispatch(resetExercise());
    inputRef.current.focus();
  };

  return (
    <AppContainer>
      <TextContainer onClick={() => inputRef.current.focus()}>
        <Input
          ref={inputRef}
          value={userInput}
          onChange={handleInput}
          autoFocus
        />
        <Text text={text} userInput={userInput} />
      </TextContainer>
      <Stats errors={errors} wpm={wpm} />
      <RestartButton onClick={handleRestart}>↻</RestartButton>
    </AppContainer>
  );
};

export default App;