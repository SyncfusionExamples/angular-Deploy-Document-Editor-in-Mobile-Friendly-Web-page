import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({
    enableToolbar: true, height: '590px'
});
container.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';

//To detect the device
let isMobileDevice: boolean = /Android|Windows Phone|webOS/i.test(navigator.userAgent);

container.documentChange = () => {
    if (isMobileDevice) {
        container.restrictEditing = true;
        setTimeout(() => {
            container.documentEditor.fitPage("FitPageWidth");
        }, 50);
    }
    else {
        container.restrictEditing = false;
    }
}

container.appendTo('#DocumentEditor');