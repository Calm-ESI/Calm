import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChatBot, { Loading } from 'react-simple-chatbot';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import "./style.css"
import profile from '../../assets/images/icons/profilebot.png'

const DBPedia = ({ steps, triggerNextStep }) => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false)
  const [result, setResult] = useState('');
  const [trigger, setTrigger] = useState(false);


  const search = steps.search.value;

  useEffect(() => {
    axios.post(process.env.REACT_APP_CHATBOT_API, { input_text: search })
    .then(response => {
      setResult(response.data.response);
      setLoading(false);
      setIsError(false);
    })
    .catch(error => {
        console.error(error);
        setLoading(false)
        setIsError(true);
        setResult("Server error: Unable to connect to the bot....\n\n please try again in a while or report to admins if the problem persists")
      });
  }, [steps.search.value, search]);
  

  const triggetNext = (e) => {
    setTrigger(true);
    setIsError(false);
    triggerNextStep({trigger: e.target.id === 'bot-error-option-button' ? 're-search' : '1'});
  };

  return (
    <div 
    className="dbpedia" 
    style={{
      color: "black",
      fontSize:"1rem",
      fontFamily:"Mona sans",
      fontWeight: "500"
    }} >
      {loading ? <Loading /> : result}
      {!loading && (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          {!trigger && (
            <>
              <button style={{backgroundColor: "#1BE985",fontFamily: "Mona sans",
                fontWeight: "800",color:"white" ,width:"7rem",height:"3.5rem",border:"none",borderRadius:"1rem",cursor:"pointer"}} onClick={triggetNext}>
                Ask another question
              </button>

              {isError && 
                <button id='bot-error-option-button' style={{backgroundColor: "#1BE985",fontFamily: "Mona sans",
                  fontWeight: "800",color:"white" ,width:"7rem",height:"3.5rem",border:"none",borderRadius:"1rem",cursor:"pointer"}} onClick={triggetNext}>
                  Try again
                </button>
              }
            </>
          )}
        </div>
      )}
    </div>
  );
};

DBPedia.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

DBPedia.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

const theme = {
  background: '#263238',
  fontFamily: 'Mona sans',
  fontWeight:'800',
  headerBgColor: '#1BE985',
  headerFontColor: '#fff',
  headerFontSize: '1.5rem',
  botBubbleColor: '#fff',
  botFontColor: '#000',
  botFontWeight: 800,
  userBubbleColor: '#1BE985',
  userFontColor: '#fff',
};

const Bot = () => {
  
  const bubbleStyle = {
    fontSize:"1rem",
    fontFamily:"Mona sans",
    fontWeight: "500"
  };
  const config = {
    width: "22rem",
    height: "25rem",
    floating: true,
    launcher: {},
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        {true && (
          <ChatBot
            headerTitle="CALM Bot"
            recognitionEnable={true}
            bubbleStyle={bubbleStyle}
            userAvatar={profile}
            {...config}
            steps={[
              {
                id: '1',
                message: 'How Can Ii help you about Calm?',
                trigger: 'search',
              },
              {
                id: 'search',
                user: true,
                trigger: '4',
              },
              {
                id: 're-search',
                message: ({steps}) => `Trying again with "${steps.search.value}"`,
                trigger: '4',
              },
              {
                id: '4',
                component: <DBPedia/>,
                waitAction: true,
              },
            ]}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default Bot;