import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { EditablePage } from '@magnolia/react-editor';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Text from './components/Text';
import List from './components/List';
import Item from './components/Item';
import Header from './components/Header';
import Hero from './components/Hero';
import Image from './components/Image';


const config = {
  componentMappings: {
    'my-spa-module:pages/Home': Home,
    'my-spa-module:pages/Contact': Contact,
    'my-spa-module:components/Text': Text,
    'my-spa-module:components/List': List,
    'my-spa-module:components/Item': Item,
    'my-spa-module:components/Header': Header,
    'my-spa-module:components/Hero': Hero,
    'my-spa-module:components/Image': Image,
  },
};

class App extends React.Component {
  state = {};

  async componentDidMount() {
    const isPagesApp = window.location.search.includes('mgnlPreview');
    let templateAnnotations;
    
    const languages = ['en', 'de']
    const rootNodeName = 'spa-home'
    const pathname = window.location.pathname;

    let currentLanguage = languages[0];

    languages.some(function (language) {
      if (new RegExp('/' + language + '($|/)').test(pathname)) {
        currentLanguage = language;

        return true;
      }
    });

    let nodePath = '/' + rootNodeName + pathname.replace(new RegExp('(.*' + rootNodeName + '|.html|/$)', 'g'), '');

    nodePath = nodePath.replace(new RegExp('/' + currentLanguage + '($|/)'), '/');

    const pageRes = await fetch('http://localhost:8080/magnoliaAuthor/.rest/pages' + nodePath + '?lang=' + currentLanguage);
    const page = await pageRes.json();

    if (isPagesApp) {
      const templateAnnotationsRes = await fetch(
        'http://localhost:8080/magnoliaAuthor/.rest/template-annotations/v1' + nodePath
      );

      templateAnnotations = await templateAnnotationsRes.json();
    }

    this.setState({ page, templateAnnotations });
  }

  render() {
    const { page, templateAnnotations } = this.state;

    return (
      <div className='App'>
        {page && config && <EditablePage content={page} config={config} templateAnnotations={templateAnnotations} />}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
