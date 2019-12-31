## Modules

<dl>
<dt><a href="#module_Components/Icon">Components/Icon</a></dt>
<dd><p>Icon component. Gets icon content from Icon Registry. Connected to Redux store.</p>
</dd>
<dt><a href="#module_Index">Index</a></dt>
<dd><p>Fetch data and send it to _app. Render Container component.</p>
<p>Used by Next.js whenever /index is requested.</p>
</dd>
<dt><a href="#module_Screen Service">Screen Service</a></dt>
<dd><p>Returns data about screen breakpoints and contents. Users cannot navigate
to screens or partial screens not listed in ReturnSData &gt; screens.</p>
</dd>
<dt><a href="#module_Style Service">Style Service</a></dt>
<dd><p>Centralized style computations, variables, specs, and patterns.</p>
</dd>
<dt><a href="#module_User Service">User Service</a></dt>
<dd><p>Fetch and return data about user.</p>
</dd>
<dt><a href="#module_Utilities Service">Utilities Service</a></dt>
<dd><p>Miscellaneous utility functions.</p>
</dd>
</dl>

## Members

<dl>
<dt><a href="#App Loader Service">App Loader Service</a></dt>
<dd><p>File is loaded by JS script in SharePoint Online (SPO) master page (mos.2.1.master).
JS code executes automatically. This is the connection between SPO and this app.</p>
<p>Code either loads the app or arranges things for other SPO areas that use 
the same master page.</p>
<p>This is vanilla ES6; it is not compiled or otherwise manipulated. 
Thus, it is both source and distribution, and lives in /public.</p>
</dd>
</dl>

<a name="module_Components/Icon"></a>

## Components/Icon
Icon component. Gets icon content from Icon Registry. Connected to Redux store.

**Category**: Components - Ingredients  
<a name="module_Index"></a>

## Index
Fetch data and send it to _app. Render Container component.

Used by Next.js whenever /index is requested.

**Category**: Next.js Overrides  
<a name="module_Screen Service"></a>

## Screen Service
Returns data about screen breakpoints and contents. Users cannot navigate
to screens or partial screens not listed in ReturnSData > screens.

**Category**: Services  
<a name="module_Style Service"></a>

## Style Service
Centralized style computations, variables, specs, and patterns.

**Category**: Services  
<a name="module_User Service"></a>

## User Service
Fetch and return data about user.

**Category**: Services  
**Todo**

- [ ] Refactor into module instead of class
- [ ] Fetch live data
- [ ] Assign roles in cloud
- [ ] Set mosManager as a role in cloud
- [ ] Get showe and shudson ribbon permission from database - in user service
- [ ] Get jbaker ribbon permission from database - in user service

<a name="module_Utilities Service"></a>

## Utilities Service
Miscellaneous utility functions.

**Category**: Services  
<a name="App Loader Service"></a>

## App Loader Service
File is loaded by JS script in SharePoint Online (SPO) master page (mos.2.1.master).
JS code executes automatically. This is the connection between SPO and this app.

Code either loads the app or arranges things for other SPO areas that use 
the same master page.

This is vanilla ES6; it is not compiled or otherwise manipulated. 
Thus, it is both source and distribution, and lives in /public.

**Kind**: global variable  
**Category**: Services  
**Todo**

- [ ] Get showe and shudson ribbon permission from database - in user service
- [ ] Get jbaker ribbon permission from database - in user service

**documentation generated on Tue, 31 Dec 2019 21:01:55 GMT**