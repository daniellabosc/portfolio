import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypingEffect = ({data}) => {
  return (
    <>
      <ReactTypingEffect
        text={[]}
      />

      <br />

      <ReactTypingEffect
        text={data}
        cursorRenderer={cursor => <h3>{cursor}</h3>}
        speed="100"
        eraseSpeed="10"
        eraseDelay="1000"
        displayTextRenderer={(text, i) => {
          return (
            <h4 style={{color: "#333"}}>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                  >{char}</span>
                );
              })}
            </h4>
          );
        }}        
      />
    </>
  );
};


export default TypingEffect