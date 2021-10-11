# Deploy Document Editor in Mobile-Friendly Web page

At present, Document editor component is not responsive for mobile, and we haven't ensured the editing functionalities in mobile browsers. Whereas it works properly as a document viewer in mobile browsers.

Hence, it is recommended to switch the Document editor component as read-only in mobile browsers. Also, invoke fitPage method with FitPageWidth parameter in document change event, such as to display one full page by adjusting the zoom factor.

This repository illustrates how to deploy Document Editor component in a Mobile-Friendly Web page.