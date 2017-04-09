import HyperWindow from 'hyperterm-window'
import Help from './components/help'

exports.reduceUI = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_WINDOW':
      const show = state.showHyperhelp == undefined ? true : !state.showHyperhelp
      return { ...state, showHyperhelp: show, hyperhelpCommand: action.command }
  }
  return state;
};

exports.mapTermsState = (state, map) => {
  return Object.assign(map, {
    showHyperhelp: state.ui.showHyperhelp,
    hyperhelpCommand: state.ui.hyperhelpCommand,
  });
};

const passProps = (uid, parentProps, props) => {
  return Object.assign(props, {
    showHyperhelp: parentProps.showHyperhelp,
    hyperhelpCommand: parentProps.hyperhelpCommand,
  });
};

exports.getTermGroupProps = passProps;
exports.getTermProps = passProps;

exports.middleware = (store) => (next) => (action) => {
  if (!action) {
    return;
  }
  if (action.type === 'SESSION_ADD_DATA') {
    const { data } = action;

    if (/(hyperdocs: command not found)|(command not found: hyperdocs)/.test(data)) {
      const command = /(?<=hyperdocs).*/.exec(data)[0].split(']')[0].trim()
      store.dispatch({ type: 'TOGGLE_WINDOW', command });
    } else {
      next(action);
    }
  } else {
    next(action);
  }
};

exports.decorateTerm = (Term, { React, notify }) => {

  // Hack to fix the react import
  try {
    require('react');
  } catch(e) {
    var Module = require('module');
    var originalRequire = Module.prototype.require;
    Module.prototype.require = function (path) {
      if (path === 'react') {
        return React;
      }
      return originalRequire.apply(this, arguments);
    };
  }

  return class extends React.Component {
    render () {
      const children = [React.createElement(Term, Object.assign({}, this.props, { key: 'term' }))];

      if (this.props.showHyperhelp) {
        const myComponent = React.createElement(Help, { command: this.props.hyperhelpCommand })
        const onClose = () => {
          window.store.dispatch({ type: 'TOGGLE_WINDOW' })
        }

        const windowProps = Object.assign({}, this.props, {key: 'window', onClose: onClose});
        const hyperwindow = React.createElement(HyperWindow, windowProps, myComponent);
        children.push(hyperwindow);
      }

      return React.createElement('div', {style: {width: '100%', height: '100%', position: 'relative'}}, children);
    }
  }
};
