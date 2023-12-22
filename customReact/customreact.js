function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children; // Use innerText instead of innerHTML
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // container.appendChild(domElement);

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props) {
        if(prop == 'children') {
            continue;
        }
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);
}

// Now let's render the element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root');

// Fix the variable name here
customRender(reactElement, mainContainer);
