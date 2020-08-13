# overlay-restorer
Check if there is an overlay on your webpage 

# Usage
Include the css (if not already present)

`<link rel="stylesheet" href="./css/overlay.css">`

jQuery is required
Include the javascript

`<script language="javascript" src="./js/overlay-restorer.js" type="text/javascript"></script>`

# Explanation 

This script checks every 0.5 secondes if there is an #overlay element, if not it will create one.
When the user clicks on the overlay it keeps count of how many times they do. After a few times (10 by default) it will ask for your name (until you give it) and then it will ask you if you want to edit the page and enables the contentEditable mode in Chrome.
It will also add a meta refresh tag to the page, so it will automatically refresh after a few seconds (30 by default)

# Some settings
These setting can be overriden in using javascript after this script has been loaded.

```
window.overlayRestorerOptions = {
		clickTrigger: 10, // After how many times the editmode will be triggered
		autoRefreshAfter: 30 // 
	};
```  
