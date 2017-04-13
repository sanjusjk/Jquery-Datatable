// JScript File

function expandCollapse(column){
	var col = document.getElementById(column);

	if (col.style.display == ''){
		col.style.display='none';
	}
	else{
		col.style.display='';
	}
}
function expandCollapseWithStateSave(expandCollapseObjID,stateObjID){
    var expandCollapseObj = document.getElementById(expandCollapseObjID);
    var stateObj = document.getElementById(stateObjID);
    
    if (expandCollapseObj.style.display == ''){
        expandCollapseObj.style.display='none';
    }
    else{
        expandCollapseObj.style.display='';
    }
    stateObj.value = expandCollapseObj.style.display;
}
function setExpandCollapseState(expandCollapseObjID,stateObjID){
    var expandCollapseObj = document.getElementById(expandCollapseObjID);
    var stateObj = document.getElementById(stateObjID);
    
    expandCollapseObj.style.display = stateObj.value;
}


function imageChangePath(imgID, path) {
	var img = document.getElementById(imgID);
    img.src = path;
}
// LoadLookupUserPopUp used for the ActiveDirectoryTextbox.ascx User Control
function LoadLookupUserPopUp(lookupUserPage) {

	var height = 265;
	var width = 340;
	var top = (screen.availHeight-height)/2;
	var left = (screen.availWidth-width)/2;

    popupWin = window.open(lookupUserPage, 'remote', 'top='+top+',left='+left+',height='+height+',width='+width+',toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes');

   //popupWin = window.open(lookupUserPage, 'remote', 'width=340,height=265')
   //return false;
  
}
//MM - HACK to show all, always...
//function ShowHelpLink(stylesheetUrl, helpLinkSeqID) {
//	var height = 550;
//	var width = 700;
//	var top = (screen.availHeight-height)/2;
//	var left = (screen.availWidth-width)/2;

//   HelpLinkWin = window.open('', 'HelpLink', 'top='+top+',left='+left+',height='+height+',width='+width+',toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no');
//   popupWin = HelpLinkWin;
//   popupWin.document.write('');
//   popupWin.document.close();
//   popupWin.document.write('<html><head><title>The Hub - Help</title><link rel="stylesheet" href="' + stylesheetUrl + '"></head><body>');
//   popupWin.document.write(document.getElementById('HelpLinkPanel').innerHTML);
//   popupWin.document.write('</body></html>');
//   popupWin.document.getElementById('ShowAll').style.display = '';
//   
//   var trs = popupWin.document.getElementsByTagName('tr');
//   var tr;
//   for (tr = 0;tr<trs.length;tr++) {
//        if (trs[tr].id == 'HelpLinkRow' + helpLinkSeqID) {
//           trs[tr].style.display= '';
//        } else {
//           if (trs[tr].name == 'HelpLinkRow') {
//            trs[tr].style.display= 'none';
//           }
//        }
//   }
//   popupWin.focus();
//   //popupWin = null;
//}
function ShowHelpLink(stylesheetUrl, helpLinkSeqID) {
   var height = 550;
	var width = 700;
	var top = (screen.availHeight-height)/2;
	var left = (screen.availWidth-width)/2;
 
    HelpLinkWin = window.open('', 'HelpLink', 'top='+top+',left='+left+',height='+height+',width='+width+',toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no');
	
    popupWin = HelpLinkWin;
    popupWin.document.write('<html><head><title>The Hub - Help</title><link rel="stylesheet" href="' + stylesheetUrl + '"></head><body>');
    popupWin.document.write(document.getElementById('HelpLinkPanel').innerHTML);
    popupWin.document.write('</body></html>');
    var trs = popupWin.document.getElementsByTagName('tr');
    var tr;
    for (tr = 0;tr<trs.length;tr++) {
        trs(tr).style.display= '';
    }
    popupWin.document.getElementById('ShowAll').style.display = 'none';
    popupWin.focus();
    //popupWin = null;
  
}

function ShowAllHelpLinks(stylesheetUrl) {
	var height = 550;
	var width = 700;
	var top = (screen.availHeight-height)/2;
	var left = (screen.availWidth-width)/2;

    popupWin = HelpLinkWin;
    popupWin.document.write('<html><head><title>The Hub - Help</title><link rel="stylesheet" href="' + stylesheetUrl + '"></head><body>');
    popupWin.document.write(document.getElementById('HelpLinkPanel').innerHTML);
    popupWin.document.write('</body></html>');
    var trs = popupWin.document.getElementsByTagName('tr');
    var tr;
    for (tr = 0;tr<trs.length;tr++) {
        trs(tr).style.display= '';
    }
    popupWin.document.getElementById('ShowAll').style.display = 'none';
    popupWin.focus();
    //popupWin = null;
  
}
function showChangeControl(changeControlPageUrl) {
	var height = 400;
	var width = 700;
	var top = (screen.availHeight-height)/2;
	var left = (screen.availWidth-width)/2;

   popupWin = window.open(changeControlPageUrl, 'ChangeControl', 'top='+top+',left='+left+',height='+height+',width='+width+',toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes');

}

function showRevisionControl(changeControlPageUrl) {
	var height = 400;
	var width = 700;
	var top = (screen.availHeight-height)/2;
	var left = (screen.availWidth-width)/2;

   popupWin = window.open(changeControlPageUrl, 'RevisionControl', 'top='+top+',left='+left+',height='+height+',width='+width+',toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes');

}

function showIncompleteControl(changeControlPageUrl) {
	var height = 400;
	var width = 700;
	var top = (screen.availHeight-height)/2;
	var left = (screen.availWidth-width)/2;

   popupWin = window.open(changeControlPageUrl, 'IncompleteControl', 'top='+top+',left='+left+',height='+height+',width='+width+',toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes');

}
function QueryString(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0].toLowerCase() == variable.toLowerCase()) {
      return pair[1];
    }
  } 
  return '';
}
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}
function decode(str) {
	return unescape(str.replace(/\+/g,  " "));
}
