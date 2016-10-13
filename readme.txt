Monetize URL Video Loader Plugin (YouGenURL) 1.0.0

Blogger Demo : 1st-premium-themes.blogspot.com

Monetize your blog / website links into URL loader without leaving the page.
User must play video to generate the links.

Compatible with any links shortener or direct links.
Not compatible if you have colorbox & iframe tracker plugin your web.

NOTE: 
- If you are using autoplay, that against youtube monetization policy (user must click video to play, not script play video)
- If you have adsense in your website, or display adsense on right and left bar of plugin, that against youtube policy too.
You have been warned!
- You can use your own css.

How to Install this plugin. Copy the code below between the <head></head> :

<!-- load jquery, needed 1.7+, if you already have, remove this. -->
<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js' type='text/javascript'/>
<!-- end load jquery, needed 1.7+, if you already have, remove this. -->
<!-- USE non autoplay video, user play the video and link loaded -->
<script type="text/javascript" src="https://cdn.rawgit.com/ichamasdiya/ugen/master/yougenload.js" id="YouGenURL"></script>
<!-- OR USE autoplay video, user click link and video loaded -->
<script type="text/javascript" src="https://cdn.rawgit.com/ichamasdiya/ugen/master/yougenauto.js" id="YouGenURL"></script>
<!-- core css -->
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/ichamasdiya/ugen/master/yougenload.css" />
<script type="text/javascript">
// Config

var youtubeid = ["IjbRSA5SK7o","kkIT6VHc3Gc","2SDvBadYIF4","uxq1nCgH8Mk","delpwNI-Lw0","h90Ffcxw57k","c8HzEzBUdws"];
// Add your Youtube Video id, as much as you want.

var include = Array("adf.ly", ".zip", ".rar", "sh.st", "example.com");
// Empty = Process all links in page (not recommended)
// Array which keywords must to be processed
 
var exclude = Array();
// Empty = exclude all links except they included (recommended)
// Specify keywords which URL to be exclude from YouGenURL

var leftads = "<a href='http://astried.xyz'><img src='left.jpg'/></a>";
// insert left ads on video max width 350px, max height 250px
// I suggest DO NOT insert iframe type.

var rightads = "<a href='http://astried.xyz'><img src='right.jpg'/></a>";
// insert right ads on video max width 350px, max height 250px
// I suggest DO NOT insert iframe type.
</script>

<!-- show if javascript disabled -->
<div align="center"><noscript><div style="position:fixed; top:0px; left:0px; z-index:9999999999999; height:100%; width:100%; background-color:#FFFFFF"><div style="font-family: Trebuchet MS; font-size: 14px; background-color:#FFF000; padding: 10pt;">Oops! It appears that you have disabled your Javascript. In order for you to see this page as it is meant to appear, we ask that you please re-enable your Javascript!</div></div></noscript></div>
<!-- end show if javascript disabled -->
