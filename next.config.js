module.exports = {
  
  /* images: {
    domains: ['https://www.jagranimages.com/images/'],
    formats: ['image/webp'],
  }, */
  reactStrictMode: false,
  
     async rewrites() {
       return [
        {
          source: '/search/:keyword',
          destination: '/ArticleListing/ArticleKeywordListingPage?keyword=:keyword',
        },{
          source: '/topics/:keyword',
          destination: '/ArticleListing/ArticleKeywordListingPage?keyword=:keyword',
        },{
          source: '/feature-news-hindi.html',
          destination: '/ArticleListing/ArticleKeywordListingPage?keyword=HPJagranSpecial',
        },{
          source: '/politics-news-hindi.html',
          destination: '/CategoryLanding/PoliticsLandingPage',
        },{
          source: '/world-news-hindi.html',
          destination: '/CategoryLanding/WorldLandingPage',
        }, {
          source: '/entertainment-hindi.html',
          destination: '/CategoryLanding/EntertainmentLandingPage',
        }, {
          source: '/business-hindi.html',
          destination: '/CategoryLanding/BusinessLandingPage',
        }, {
          source: '/lifestyle-hindi.html',
          destination: '/CategoryLanding/LifeStyleLandingPage',
        },{
          source: '/technology-hindi.html',
          destination: '/CategoryLanding/TechnologyLandingPage',
        },{
          source: '/automobile',
          destination: '/CategoryLanding/AutoMobileLandingPage',
        },{
          source: '/cricket-hindi.html',
          destination: '/CategoryLanding/CricketLandingPage',
        },{
          source: '/latest-news.html',
          destination: '/ArticleListing/ArticleListingPage',
        },{
          source: '/local/gujarat-news-hindi.html',
          destination: '/StateListing/StateListingPage?statename=gujarat',
        },{
          source: '/local/maharashtra-news-hindi.html',
          destination: '/StateListing/StateListingPage?statename=maharashtra',
        },{
          source: '/local/rajasthan-news-hindi.html',
          destination: '/StateListing/StateListingPage?statename=rajasthan',
        },{
          source: '/local/uttar-pradesh_aligarh-city-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=aligarh-city&statename=uttar-pradesh',
        },{
          source: '/local/uttar-pradesh_agra-city-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=agra-city&statename=uttar-pradesh',
        },{
          source: '/local/uttar-pradesh_allahabad-city-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=allahabad-city&statename=uttar-pradesh',
        },{
          source: '/local/uttar-pradesh_bareilly-city-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=bareilly-city&statename=uttar-pradesh',
        },{
          source: '/local/uttar-pradesh_jhansi-city-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=jhansi-city&statename=uttar-pradesh',
        },{
          source: '/local/uttar-pradesh_kanpur-city-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=aligarh-city&statename=uttar-pradesh',
        },{
          source: '/local/uttar-pradesh_lucknow-city-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=lucknow-city&statename=uttar-pradesh',
        },{
          source: '/local/uttar-pradesh_meerut-city-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=meerut-city&statename=uttar-pradesh',
        },{
          source: '/local/uttar-pradesh_moradabad-city-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=moradabad-city&statename=uttar-pradesh',
        },{
          source: '/local/uttar-pradesh_varanasi-city-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=varanasi-city&statename=uttar-pradesh',
        },{
          source: '/local/uttar-pradesh_gorakhpur-city-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=gorakhpur-city&statename=uttar-pradesh',
        },{
          source: '/local/bihar_bhagalpur-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=bhagalpur&statename=bihar',
        },{
          source: '/local/bihar_patna-city-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=patna-city&statename=bihar',
        },{
          source: '/local/bihar_gaya-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=gaya&statename=bihar',
        },{
          source: '/local/bihar_muzaffarpur-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=muzaffarpur&statename=bihar',
        },{
          source: '/local/punjab_chandigarh-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=chandigarh&statename=punjab',
        },{
          source: '/local/delhi_new-delhi-city-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=new-delhi-city&statename=delhi',
        },{
          source: '/local/jharkhand_dhanbad-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=dhanbad&statename=harkhand',
        },{
          source: '/local/himachal-pradesh_kangra-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=kangra&statename=himachal-pradesh',
        },{
          source: '/local/uttarakhand_dehradun-city-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=dehradun-city&statename=uttarakhand',
        },{
          source: '/local/uttarakhand_nainital-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=nainital&statename=uttarakhand',
        },{
          source: '/local/punjab_jalandhar-city-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=jalandhar-city&statename=punjab',
        },{
          source: '/local/jammu-and-kashmir_jammu-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=jammu&statename=jammu-and-kashmir',
        },{
          source: '/local/jharkhand_jamshedpur-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=jamshedpur&statename=jharkhand',
        },{
          source: '/local/west-bengal_kolkata-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=kolkata&statename=west-bengal',
        },{
          source: '/local/punjab_ludhiana-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=ludhiana&statename=punjab',
        },{
          source: '/local/haryana_panipat-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=panipat&statename=haryana',
        },{
          source: '/local/jharkhand_ranchi-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=ranchi&statename=jharkhand',
        },{
          source: '/local/west-bengal_darjeeling-news-hindi.html',
          destination: '/LocalLanding/LocalLandingPage?cityname=darjeeling&statename=west-bengal',
        },{
          source: '/state/:statename([a-zA-Z0-9-]+)',
          destination: '/StateLanding/StateLandingPage',
        },{
          source: '/local/:statename([a-zA-Z0-9-]+)_:cityname([a-zA-Z0-9-]+)-news-hindi.html',
          destination: '/ArticleListing/ArticleListingPage',
        },{
          source: '/hockey-news-hindi.html',
          destination: '/CategoryListing/CategoryListingPage?category=hockey',
        },{
          source: '/football-news-hindi.html',
          destination: '/CategoryListing/CategoryListingPage?category=football',
        },{
          source: '/tennis-news-hindi.html',
          destination: '/CategoryListing/CategoryListingPage?category=tennis',
        },{
          source: '/other-sports-news-hindi.html',
          destination: '/CategoryListing/CategoryListingPage?category=other-sports',
        },{
          source: '/:category/:subcategory-news-hindi.html',
          destination: '/ArticleListing/ArticleListingPage',
        },{
          source: '/:category/:subcategory-:title-:id(\\d{1,}).html',
          destination: '/ArticleDetail/ArticleDetailPage',
        },
        {
          source: '/bookmark.html',
          destination: '/Bookmark/BookmarkPage',
        },{
          source: '/subscription.html',
          destination: '/SubscriptionLanding/SubscriptionLanding',
        },{
          source: '/mypage.html',
          destination: '/MyPage/MyPage',
        }
       ]
     },
   }
