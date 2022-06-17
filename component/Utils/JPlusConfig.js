/* 
Author: Mohammad Shaazad Khan
This file hava all the configuration related to domain name , image domain name
 and all api information called on all the pages. 
*/

const AppConfig = {
    DOMAIN_NAME: 'http://localhost:3000/',
    IMAGE_DOMAIN_NAME: 'https://www.jagranimages.com/images/',
    searchUrlPrefix: '/search/',
    DEFAULT_IMAGE_NAME:'https://www.jagranimages.com/images/newimg/jagran.jpg'
}

const HeaderPageConfig = {
    HEADER_LATEST_NEWS : 'https://jagranampapi132443254.jagran.com/jplus/latestarticles'
}

const HomePageConfig = {

    HOME_P1_API: 'https://json-plus3331.jagran.com/badi_khabrein2020.json',
    HOME_POLITICS_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycategory/politics/2/0/8',
    HOME_COMMON_MEN_ISSUE_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/HPCommonManIssues/0/4',
    HOME_TECHNOLOGY_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycategory/technology/3/0/8',
    HOME_LIFESTYLE_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycategory/lifestyle/3/0/4',
    HOME_JOKES_API: '',
    HOME_CRICKET_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycategory/cricket/3/0/8',
    HOME_EDUCATION_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/news/education/0/4',
    HOME_AUTOMOBILE_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycategory/automobile/3/0/8',
    HOME_STATE_NEWS_API: 'https://json-plus3331.jagran.com/HomesthaniyaNews.json',
    HOME_STATE_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbystate/',
    JAGRAN_TV_API: 'https://appfeeds.jagrantv.com/vapi/web/jagran/topnews.json',
    HOME_JAGRAN_SPECIAL_API:  'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/HPJagranSpecial/0/5',
    HOME_ENTERTAINMENT_API: 'https://json-plus3331.jagran.com/category/p1_entertainment.json',
    HOME_BUSINESS_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycategory/business/3/0/7',
    HOME_WORLD_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycategory/world/3/0/8',
}
const PolitcsLandingPageConfig = {
    POLITICS_JAGRAN_SPECIAL_API:  'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/HPJagranSpecial/0/5',
    POLITICS_P1_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycategory/politics/3/0/8',
    POLITICS_INTERNATIONAL_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/politics/national/0/4',
    POLITICS_NATIONAL_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/politics/international/0/8',
    POLITICS_STATE_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/politics/state/0/8',
    JAGRAN_TV_API: 'https://appfeeds.jagrantv.com/vapi/web/jagran/topnews.json'
}
const WorldLandingPageConfig = {
    WORLD_JAGRAN_SPECIAL_API:  'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/HPJagranSpecial/0/5',
    WORLD_P1_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycategory/world/3/0/8',
    WORLD_PAKISTAN_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/world/pakistan/0/8',
    WORLD_CHINA_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/world/china/0/4',
    WORLD_AMERICA_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/world/america/0/8',
    WORLD_MIDDLE_EAST_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/world/middle-east/0/4',
    WORLD_OTHER_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/world/other/0/4',
    JAGRAN_TV_API: 'https://appfeeds.jagrantv.com/vapi/web/jagran/topnews.json',
    WORLD_TOP_NEWS_API: ''
}
const EntertainmentLandingPageConfig = {
    ENTERTAINMENT_P1_API: 'https://json-plus3331.jagran.com/category/p1_entertainment.json',
    ENTERTAINMENT_JAGRAN_SPECIAL_API:  'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/HPJagranSpecial/0/5',
    ENTERTAINMENT_BOLLYWOOD_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/entertainment/bollywood/0/8',
    ENTERTAINMENT_WEB_SERIES_REVIEW_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/entertainment/web-series-review/0/4',
    ENTERTAINMENT_REVIEW_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/entertainment/reviews/0/8',
    ENTERTAINMENT_BOX_OFFICE_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/entertainment/box-office/0/4',
    ENTERTAINMENT_TV_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/entertainment/tv/0/4',
    ENTERTAINMENT_BOLLYWOOD_VISHESH_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/entertainment/bollywood-vishesh/0/8',
    JAGRAN_TV_API: 'https://appfeeds.jagrantv.com/vapi/web/jagran/topnews.json'
}

const BusinessLandingPageConfig = {
    BUSINESS_P1_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycategory/business/3/0/7',
    BUSINESS_JAGRAN_SPECIAL_API:  'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/HPJagranSpecial/0/5',
    BUSINESS_TOP15_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/business/top15/0/8',
    BUSINESS_SAVING_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/business/savings/0/4',
    BUSINESS_INSURANCE_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/business/insurance/0/8',
    BUSINESS_BANK_LOAN_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/business/banking-loan/0/4',
    BUSINESS_EXPERT_COLUMN_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/business/expert-column/0/4',
    JAGRAN_TV_API: 'https://appfeeds.jagrantv.com/vapi/web/jagran/topnews.json',
    BUSINESS_TOP_NEWS_API: ''
}
const CricketLandingPageConfig = {
    CRICKET_P1_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycategory/cricket/3/0/8',
    CRICKET_JAGRAN_SPECIAL_API:  'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/HPJagranSpecial/0/5',
    CRICKET_HEADLINES_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/cricket/headlines/0/8',
    CRICKET_BOUNCER_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/cricket/bouncer/0/4',
    CRICKET_APNIBAT_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/cricket/apni-baat/0/8',
    CRICKET_MATCH_REPORT_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/cricket/match-report/0/4',
    JAGRAN_TV_API: 'https://appfeeds.jagrantv.com/vapi/web/jagran/topnews.json',
    CRICKET_META_API: 'http://34.93.230.151:8080/jplus/meta/category/cricket'
}
const AutomobileLandingPageConfig = {
    AUTOMOBILE_JAGRAN_SPECIAL_API:  'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/HPJagranSpecial/0/5',
    AUTOMOBILE_P1_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycategory/automobile/3/0/8',
    AUTOMOBILE_GUIDE_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/automobile/car-buyer-guide/0/8',
    AUTOMOBILE_LATEST_NEWS_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/automobile/new-car-launches/0/4',
    AUTOMOBILE_LATEST_LAUNCH_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/automobile/latest-news/0/8',
    AUTOMOBILE_REVIEW_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/automobile/car-reviews/0/4',
    JAGRAN_TV_API: 'https://appfeeds.jagrantv.com/vapi/web/jagran/topnews.json'
}
const LifestyleLandingPageConfig = {
    LIFESTYLE_P1_API: 'https://json-plus3331.jagran.com/category/p1_lifestyle.json',
    LIFESTYLE_JAGRAN_SPECIAL_API:  'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/HPJagranSpecial/0/5',
    LIFESTYLE_HOROSCOPE_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/Horoscope%202021/0/8',
    LIFESTYLE_HEALTH_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/lifestyle/health/0/4',
    LIFESTYLE_AJAB_GAJAB_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/news/oddnews/0/4',
    LIFESTYLE_SPRITUAL_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycategory/spiritual/3/0/4',
    LIFESTYLE_TRAVAL_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/lifestyle/travel-tourism/0/8',
    LIFESTYLE_FASHION_AND_BEAUTY_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/lifestyle/fashion-beauty/0/4',
    LIFESTYLE_WORK_FROM_HOME_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/stay-home-stay-empowered/0/8',
    JAGRAN_TV_API: 'https://appfeeds.jagrantv.com/vapi/web/jagran/topnews.json',
    LIFESTYLE_META_API: 'http://34.93.230.151:8080/jplus/meta/category/lifestyle'
}
const TechnologyLandingPageConfig = {
    TECHNOLOGY_JAGRAN_SPECIAL_API:  'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/HPJagranSpecial/0/5',
    TECHNOLOGY_P1_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycategory/technology/3/0/8',
    TECHNOLOGY_TECHNEWS_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/technology/tech-news/0/8',
    TECHNOLOGY_LATEST_LAUNCH_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/technology/latest-launch/0/4',
    TECHNOLOGY_REVIEW_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/technology/review/0/8',
    TECHNOLOGY_TECHGUIDE_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/technology/tech-guide/0/4',
    TECHNOLOGY_APPNEWS_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/technology/apps/0/4',
    TECHNOLOGY_SOCIAL_MEDIA_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/technology/social-media/0/8',
    JAGRAN_TV_API: 'https://appfeeds.jagrantv.com/vapi/web/jagran/topnews.json',
    TECHNOLOGY_META_API: 'http://34.93.230.151:8080/jplus/meta/category/technology'
}
const LocalLandingPageConfig = {
    LOCAL_P1_API: 'https://json-plus3331.jagran.com/state/city/',
    LOCAL_CITY_JAGRAN_SPECIAL_API:  'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/HPJagranSpecial/0/5',
    LOCAL_CITY_GENRE_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/',
    LOCAL_STATE_LATEST_NEWS_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbystate/',
    LOCAL_CITY_META_API: 'http://34.93.230.151:8080/jplus/meta/local/',
    JAGRAN_TV_API: 'https://appfeeds.jagrantv.com/vapi/web/jagran/topnews.json',

}
const StateLandingPageConfig = {
    STATE_JAGRAN_SPECIAL_API:  'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/HPJagranSpecial/0/5',
    STATE_P1_API: 'https://www.jagran.com/Resources/jagran/feeds/mobile_feed/cityp1/',
    STATE_GENRE_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/',
    STATE_LATEST_NEWS_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbystate/',
    JAGRAN_TV_API: 'https://appfeeds.jagrantv.com/vapi/web/jagran/topnews.json'
}
const LatestNewsPageConfig = {
    LATEST_NEWS_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbyrecency'
}
const CategoryListingPageConfig = {
    CATEGORY_JAGRAN_SPECIAL_API:  'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/HPJagranSpecial/0/5',
    CATEGORY_CATEGORY_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycategory/',
    CATEGORY_CATEGORY_META_API: 'http://34.93.230.151:8080/jplus/meta/category/',
    CATEGORY_SUBCATEGORY_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbycatsubcat/',
    CATEGORY_SUBCATEGORY_META_API: 'http://34.93.230.151:8080/jplus/meta/'
}
const StateCityListingPageConfig = {
    STATE_CITY_JAGRAN_SPECIAL_API:  'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/HPJagranSpecial/0/5',
    STATE_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbystate/',
    STATE_CITY_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbystatecity/',
    STATE_META_API: 'http://34.93.230.151:8080/jplus/meta/state/',
    STATE_CITY_META_API: 'http://34.93.230.151:8080/jplus/meta/local/',
}
const ArticleDetailPageConfig = {
    ARTICLE_DETAIL_API: 'https://jagranampapi132443254.jagran.com/jplus/articlebyid',
    ARTICLE_DETAIL_SPECIAL_API:  'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/HPJagranSpecial/0/5',

}
const ArticleSearchListingPageConfig = {
    ARTICLE_SEARCH_JAGRAN_SPECIAL_API:  'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/HPJagranSpecial/0/5',
    JAGRAN_SEARCH_API: 'https://jagranampapi132443254.jagran.com/jplus/articlesbykeyword/'
}


const JagranPrimeConfig = {
    JAGRAN_PRIME_API : 'https://jagranampapi132443254.jagran.com/jplus/articlesbytype/Jprime'
}




export {
    HomePageConfig, AppConfig, LatestNewsPageConfig, ArticleDetailPageConfig, CategoryListingPageConfig, ArticleSearchListingPageConfig,
    PolitcsLandingPageConfig, WorldLandingPageConfig, EntertainmentLandingPageConfig, BusinessLandingPageConfig, CricketLandingPageConfig,
    AutomobileLandingPageConfig, StateCityListingPageConfig, LifestyleLandingPageConfig, LocalLandingPageConfig,
    TechnologyLandingPageConfig, StateLandingPageConfig, HeaderPageConfig, JagranPrimeConfig
}
