Monetize URL Video Loader Plugin (YouGenURL) 1.1.0

How to use / Cara Pake
Add this code to your <head> :

<!-- yougenload start -->
<!-- optional, if you don't have jquery loaded, remove this line
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js' type='text/javascript'/>
if you don't have jquery loaded, remove this line -->

<link href='https://cdn.rawgit.com/ichamasdiya/ugen/master/yougenload.css' rel='stylesheet' type='text/css'/>
<script src='https://cdn.rawgit.com/ichamasdiya/ugen/master/yougenload.js' type='text/javascript' id='YouGenURL'></script>
<script type='text/javascript'>
var youtubeid = ["IjbRSA5SK7o","kkIT6VHc3Gc","2SDvBadYIF4","uxq1nCgH8Mk","delpwNI-Lw0","h90Ffcxw57k","c8HzEzBUdws"];
// add your youtube video id, as much as you want

var include = Array("bit.ly","adf.ly","upfile.mobi","userscloud.com","uptobox.com","facebook.com","subscene.com","clicknupload.com","tusfiles.net","uppit.com","openload.co","sh.st","acefile.net","drive.google.com","paste2.org");
// link that will be performed action, leave blank will process all links (not recommended) 

var exclude = Array();
// exclude link array

var leftads = "<iframe border=0 frameborder=0 marginheight=0 marginwidth=0 width=300 height=262 scrolling=no allowtransparency=true src=https://adserver.juicyads.com/adshow.php?adzone=528722></iframe>";
// use single quote if your ads have double quote, javascript ads not supported. 

var rightads = "<iframe border=0 frameborder=0 marginheight=0 marginwidth=0 width=300 height=262 scrolling=no allowtransparency=true src=https://adserver.juicyads.com/adshow.php?adzone=511206></iframe>";
// use single quote if your ads have double quote, javascript ads not supported. 

</script>
<!-- yougenload end -->
