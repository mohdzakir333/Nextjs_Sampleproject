import Head from 'next/head'
import Footer from "../Global/Footer"
import Header from "../Global/Header"
import { useRouter } from "next/router";
import { AppConfig } from '../../component/Utils/JPlusConfig'


function Layout({ children, title, keywords, desc,image, url, alternateLink, canonicalLink }) {
  const router = useRouter();
  const currenturl = AppConfig.DOMAIN_NAME + router.asPath.replace('/','');
  return (
    <>
      <Head>

        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={desc} />
        <link rel="alternate" media="only screen and (max-width: 640px)" href={currenturl} />      
        <link rel="canonical" href={currenturl} />
        <meta name="twitter:image" content={image}/>
        <meta property="og:site_name" content="Dainik Jagran" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="Article" />
        <meta property="og:image" content={image} />
        <meta property="fb:app_id" content="899262430253154" />
        
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://twitter.com" rel="preconnect"></link>
        <link href="https://twitter.com" rel="dns-prefetch"></link>
        <link href="https://www.youtube.com" rel="preconnect"></link>
        <link href="https://www.youtube.com" rel="dns-prefetch"></link>
        <link href="https://www.facebook.com" rel="preconnect"></link>
        <link href="https://www.facebook.com" rel="dns-prefetch"></link>
        <link href="//www.doubleclickbygoogle.com" rel="preconnect"></link>
        <link href="//www.doubleclickbygoogle.com" rel="dns-prefetch"></link>
        <link href="//www.googletagmanager.com" rel="dns-prefetch"></link>
        <link href="//www.googletagmanager.com" rel="preconnect"></link>
        <link href="//sb.scorecardresearch.com" rel="dns-prefetch"></link>
        <link href="//sb.scorecardresearch.com" rel="preconnect"></link>
        <link href="//tpc.googlesyndication.com" rel="dns-prefetch"></link>
        <link href="//tpc.googlesyndication.com" rel="preconnect"></link>
        <link href="//b.scorecardresearch.com" rel="dns-prefetch"></link>
        <link href="//b.scorecardresearch.com" rel="preconnect"></link>
        <link href="//www.google-analytics.com" rel="dns-prefetch"></link>
        <link href="//www.google-analytics.com" rel="preconnect"></link>
        <link href="//www.googletagservices.com" rel="dns-prefetch"></link>
        <link href="//partner.googleadservices.com" rel="dns-prefetch"></link>
        <link href="//www.jagran.com" rel="dns-prefetch"></link>
        <link href="//www.jagran.com" rel="preconnect"></link>
        <link href="//www.jagranimages.com" rel="dns-prefetch"></link>
        <link href="//www.jagranimages.com" rel="preconnect"></link>

        {/* Google Tag Manager Start */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5CTQK3');`}}>
        </script>
        
        {/* Google Tag Manager End */}

        {/* comScore Tag Start */}
            
          <script dangerouslySetInnerHTML={{
            __html: `( var _comscore = _comscore || [];
            _comscore.push({ c1: "2", c2: "13184768" });
            (function() {
            var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
            s.src = "https://sb.scorecardresearch.com/cs/13184768/beacon.js";
            el.parentNode.insertBefore(s, el);
           })();
            );`}}>
        </script>
        

        {/*End comScore Tag */}
      </Head>
      {/* Google Tag Manager */}
      <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5CTQK3" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}>
      </noscript>
      {/* Google Tag Manager */}

       {/* comScore Tag */}
       <noscript dangerouslySetInnerHTML={{ __html: `<img src="https://sb.scorecardresearch.com/p?c1=2&amp;c2=13184768&amp;cv=3.6.0&amp;cj=1">` }}>
      </noscript>
      {/* End comScore Tag*/}


 {/* Piano script is placed */}
       
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" strategy="beforeInteractive" ></script>
          <script strategy="beforeInteractive" dangerouslySetInnerHTML={{__html : `
          (function(src) {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.async = true;
        a.src = src;
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    })("//sandbox.tinypass.com/xbuilder/experience/load?aid=nfOOKLn7su");

    function pianoLoginPopup(){
      tp.pianoId.show({
        loggedIn: function(data) {         
          let firstChar = data.user.firstName.charAt(0);
          let firstCharOut = firstChar.charAt(0).toUpperCase()
            $('.logoutbutton').show();
            $('.loginbutton').hide();
            $('.userDisplayName').css({display:'flex'})
            $('.userDisplayName').text(firstCharOut);
            $('.userFullName').text(data.user.firstName + ' ' + data.user.lastName)
            console.log('user ', data.user, ' logged in with token', data.token);
            localStorage.setItem("pianoUser", JSON.stringify(data.user));	
            tp.myaccount.show({
    displayMode: "inline",
    containerSelector: "#my-account"
      });
        },
        loggedOut: function() {
            $('.logoutbutton').hide();
            $('.loginbutton').show();
            $('.userDisplayName').css({display:'none'})
            window.localStorage.removeItem('pianoUser');
            console.log('user logged out');
        }
    });
    }

tp = window.tp || [];
tp.push(['setUsePianoIdUserProvider', true]);
tp.push(["init", function() {
//tp.pianoId.init({iframeUrl:"https://id-ap.piano.io"});
//tp.experience.init();

pianoLoginPopup();


    if (tp.user.isUserValid()) { 
      //hideAllPrimeSiteContent = false;
      //console.log('login check' + hideAllPrimeSiteContent);
          
    }

    // Password can be reset only if user is anonymous
    if (!tp.user.isUserValid()) {
        // If URL has reset_token parameter
        var tokenMatch = location.search.match(/reset_token=([A-Za-z0-9]+)/);
        if (tokenMatch) {
            // Get value of the token
            var token = tokenMatch[1];
            // Present password reset form with the found token
            tp.pianoId.show({
                'resetPasswordToken': token, loggedIn: function () {
                    // Once user logs in - refresh the page
                    location.reload();
                }
            });
        }
    }
}]);


$(function(){
$(document).on("click",".loginbutton",function(e) {
  e.preventDefault()
  pianoLoginPopup();
});



$(document).on("click",".logoutbutton",function(e) {
  e.preventDefault()
tp.pianoId.logout();
$('.logoutbutton').hide();
$('.loginbutton').show();
$('.userDisplayName').css({display:'none'})
pianoLoginPopup();
});
})`}}></script>


      
      <main>{children}</main> 
    </>
  )
}

export default Layout;
