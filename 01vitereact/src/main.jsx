import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

function MyApp() {
  return (
    <div>
      <h2>Nobody</h2>
    </div>
  );
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com'>Visit Google</a>
)

const username = "Nobody"

const reactElement = React.createElement(
  // first parameter is tag 
  'a',
  // second parameter is object
  {
    href: 'https://google.com', 
    target: '_blank'
  },
  // direct text
  'Click me to Visite Google',
  username
)

// Use ReactDOM.createRoot().render() to render the component
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <MyApp />
  // </React.StrictMode>
  // anotherElement
  reactElement
  // <App/>
);
