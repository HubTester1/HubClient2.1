#SPO Master Page
On SPO, the only public page should be /SitePages/App.aspx.  Some other pages are used for admin purposes. App.aspx is a "wiki" page. (Some SPO pages are not wiki pages.)

Wiki pages use a .master file. mos.2.1.master is set as the default master for the root site  collection, meaning that it will be used on every wiki page and page component. (In some non-wiki screens, there are components that use the wiki master page.) 

Our master page is based on MSFT's Seattle master page. A master page file contains ASP.NET to be rendered in the SPO tenancy + our JS. 

Local copy of master page is in root of this directory. (It is not used when locally running the Next,js system, discussed later. It's just a local copy of a file that is used on SPO.)

On SPO, master page is located at https://bmos.sharepoint.com/_catalogs/masterpage/Forms/AllItems.aspx. You can make changes locally and upload the new master page to that location via browser.

If you screw up the master page and can't load an interface that allows you to upload a fix, then open the site in SharePoint Designer (SPD), go to Master Pages in left nav, select the Seattle master page, and use the top ribbon to set Seattle as the default master page. Then, upload fixed custom master page via browser and set it to be the default master page via SPD.

Our master page differs from the Seattle master page in the following ways; 
* ASP.NET code that stops end users from accessing admin tools. (This may no longer be necessary, but I don't want to wait for someone to screw something up to find out.)
* HTML loading screen (including SVG logo), error screens, styles for those, and styles for client app iframe (but not the app). 
* JS loading Google Analytics. 
* JS loading from our cloud /app-loader.js. File is in public/app-loader.js. This is how the client app gets loaded into the iframe. 