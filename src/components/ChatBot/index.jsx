import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChatBot, { Loading } from 'react-simple-chatbot';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import "./style.css"
 import profile from '../../assets/images/icons/profilebot.png'

const DBPedia = ({ steps, triggerNextStep }) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState('');
  const [trigger, setTrigger] = useState(false);

  const search = steps.search.value;
  const endpoint = encodeURI('https://dbpedia.org');
  const query = encodeURI(`
    select * where {
      ?x rdfs:label "${search}"@en .
      ?x rdfs:comment ?comment .
      FILTER (lang(?comment) = 'en')
    } LIMIT 100
  `);

  useEffect(() => {
    axios.post(process.env.REACT_APP_CHATBOT_API, { input_text: search })
      .then(response => {
        setResult(response.data.response);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setResult("Server error: Unable to connect to the bot....\n\n please try again in a while or report to admins")
      });
  }, [search]);
  

  const triggetNext = () => {
    setTrigger(true);
    triggerNextStep();
  };

  return (
    <div className="dbpedia" style={{color: "black",
      // backgroundColor: "#1BE985",
      fontSize:"1rem",
      fontFamily:"Mona sans",
      fontWeight: "500"
      ,}} >
      {loading ? <Loading /> : result}
      {!loading && (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          {!trigger && (
            <button style={{backgroundColor: "#1BE985",fontFamily: "Mona sans",
            fontWeight: "800",color:"white" ,width:"7rem",height:"3.5rem",border:"none",borderRadius:"1rem",cursor:"pointer"}} onClick={triggetNext}>
              Another question
            </button>
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
  // botFontSize:'1.5rem',
  // botFontWeight:'800',
  botFontWeight: 800,
  userBubbleColor: '#1BE985',
  userFontColor: '#fff',
  

};

const Bot = () => {
  
  // const style = {
  //   // Chatbot styles here
  //   userAvatar: profile}
  
  const bubbleStyle = {
            fontSize:"1rem",
            fontFamily:"Mona sans",
            fontWeight: "500"
          };
  const config = {
      width: "22rem",
      height: "25rem",
      floating: true,
      launcher: {
        // // Customize the color of the chat icon when it is hidden
        // toggleComponent: <div style={{ backgroundColor: "green" }}>Show Chatbot</div>,
        // // Customize the chat icon that appears on your page
        //  chatBubbles: <div backgroundColor="green" />,
      },}

  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
          <button onClick={handleToggleChat}>
            {showChat ? 'Hide Chat' : 'Show Chat'}
          </button> */}
        {/* </div> */}
        {true && (
          <ChatBot
            // speechSynthesis={{ enable: true, lang: 'en' }}
            headerTitle="CALM Bot"
            recognitionEnable={true}
            bubbleStyle={bubbleStyle}
            userAvatar={profile}
            // style={style}
            {...config}
            steps={[
              {
                id: '1',
                message: 'How Can i help you about Calm?',
                trigger: 'search',
              },
              {
                id: 'search',
                user: true,
                trigger: '3',
              },
              {
                id: '3',
                component: <DBPedia/>,
                waitAction: true,
                trigger: '1',
              },
            ]}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default Bot;