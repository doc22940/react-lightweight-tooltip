import React from 'react';
import {Tooltip} from '../src/index';

const wrapperStyle = {
  wrapper: {
    background: '#ececec',
    color: '#555',
    margin: '30px 10px 10px 10px',
    padding: '15px 20px',
    textAlign: 'center',
    width: '195px',
    display: 'inline-block',
  },
};

const yellowStyle = {
  wrapper: wrapperStyle.wrapper,
  content: {
    backgroundColor: 'yellow',
    color: '#000',

  },
  tooltip: {
    backgroundColor: 'yellow',
  },
  arrow: {
    borderTop: 'solid yellow 5px',
  },
};

const whiteStyle = {
  wrapper: wrapperStyle.wrapper,
  content: {
    backgroundColor: 'white',
    color: '#000',

  },
  tooltip: {
    backgroundColor: 'white',
  },
  arrow: {
    borderTop: 'solid #fff 5px',
  },
};

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <Tooltip content="Yes, the default one" styles={wrapperStyle}>Simple tooltip</Tooltip>

        <Tooltip
          content={
            [
              'This repo is hosted on ',
              <a href="https://github.com" target="_blank">Github</a>,
            ]
          }
          styles={yellowStyle}>
          Tooltip with a link
        </Tooltip>

        <Tooltip
          content={
            [
              <img src="https://avatars0.githubusercontent.com/u/9491005" style={{ width: '100px', borderRadius: '50%' }} />,
              <div style={{ textAlign: 'center', padding: '10px 20px' }}>
                Hi there, I am <a href="https://github.com/mcumpl" target="_blank">Michal</a> and I love corrida de toros! <em>Not...</em>
              </div>,
            ]
          }
          styles={whiteStyle}>
          Tooltip with a rich content
        </Tooltip>
      </div>
    );
  }
}