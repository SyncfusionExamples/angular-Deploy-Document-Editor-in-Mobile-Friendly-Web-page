import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
import * as ReactDOM from 'react-dom';
DocumentEditorContainerComponent.Inject(Toolbar);
class App extends Component {

  hosturl = 'https://services.syncfusion.com/react/production/api/documenteditor/';
container;
  onDocumentChange() {
    let proxy = this;
    //To detect the device
    let isMobileDevice = /Android|Windows Phone|webOS/i.test(navigator.userAgent);

    if (isMobileDevice) {
      proxy.container.restrictEditing = true;
      setTimeout(() => {
        proxy.container.documentEditor.fitPage("FitPageWidth");
      }, 50);
    }
    else {
      proxy.container.restrictEditing = false;
    }
  }


  render() {
    return (
      <div className="App">
        <DocumentEditorContainerComponent id="container" ref={(scope) => { this.container = scope; }} style={{ 'height': '590px' }} enableToolbar={true} documentChange={this.onDocumentChange.bind(this)} serviceUrl={this.hosturl} height={'590px'}/>
      </div>
    );
  }
}

export default App;
