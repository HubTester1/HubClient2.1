# Hub Client v2.1

This documentation pertains to software in development as of 1/1/2020. This will replace and add features to the gateway web client, Hub Central (home screen and SharePoint Online (SPO) tenancy root site collection master page).

API, data, and their documentation are separate.


##Nomenclature
###SPO
Herein, "SPO" is used to refer to SharePoint Online, a service within Microsoft's Office 365. Anything related to SPO is in Microsoft's cloud.
###Hub Central
This is the SharePoint Online (SPO) root site collection. It contains items that are accessible Museum-wide (hereafter, "public"), including documents, the home screen, and public team screens (e.g., 'the HR page'). 

Hub Central is architecturally distinct from any workflow apps; the latter are separate SPO site collections and utilize different MOS software. 

Hub Central is architecturally distinct from any private workspaces, which are also separate SPO site collections. 

##Technical Brief
Prerequisite skills for understanding code: ES6; preferably React, Redux, and Next.js, in order of importance; preferably knowledge of browser history API 

To understand system, start with items in pages directory. Since we're presenting inside an iframe on SharePoint Online (SPO), there is only one page, index. 

On the only page (index), screens and user data are determined from URL params and SharePoint  

To know what third party software is being used,  