import React, { useState } from 'react';
import axios from 'axios';
import "../Style/Home.css"
const Home = () => {
  const [output, setOutput] = useState('');

  const submitRequest = async (event) => {
    event.preventDefault();
    const data = {
      prompt: {
        text: 'Tell me about Palm API',
      },
    };

    await axios
      .post('https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=AIzaSyDJmtTewe3Hr3JvbAguqh9793Gw7J7co6g', data)
      .then((response) => {
        const generatedText = response.data.candidates[0].output;
        setOutput(generatedText);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
        <div className='box'>
        <button onClick={submitRequest}>Submit</button>
        <p>{output}</p>
        </div>
    </>
  );
};

export default Home;
