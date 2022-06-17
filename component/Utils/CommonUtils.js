import { AppConfig } from "./JPlusConfig";

/*
Author: Mohammad Shaazad
This file have some utility method which are used to get the full article url and convert date time into hours format.
*/
function getArticleURL(articleData) {

    var articleURL = `${AppConfig.DOMAIN_NAME}`;


    //if (articleData.subcategory != null) {
        if (articleData.state !== null && articleData.category == 'news' && articleData.subcategory == 'state') {
            articleURL = articleURL + articleData.state + '/' + articleData.city;
        } else {
            articleURL = articleURL + articleData.category + '/' + articleData.subcategory;
        } if (articleData.webTitleUrl !== null) {
            articleURL = articleURL + '-' + articleData.webTitleUrl + '-' + articleData.id + '.html';
        } else {
            articleURL = articleURL + '-' + articleData.id + '.html';
        }
    // } else {
    //     articleURL = articleURL + articleData.article_url.split("com/")[1];
    // }
    return articleURL;
}


function getTimeDifference(timeStr) {
    var dateVal = new Date(timeStr);
    let timeInMillis = dateVal.getTime();
    let date1 = new Date(timeInMillis);
    let date2 = new Date();
    let diff = date2.getTime() - date1.getTime();
    var msec = diff;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;

    var returnVar = '';
    let tillHours = true;
    if (hh > 0) {
        if (hh == 1) {
            returnVar += ('AN HOUR');
            tillHours = false;
        }
        else if (hh < 24) {
            returnVar += (hh + ' HOURS');
            tillHours = false;
        }
        else if (hh >= 24) {
            let day = Math.floor(hh / 24);
            if (day < 30) {
                if (day == 1) {
                    returnVar += (day + ' DAY');
                } else {
                    returnVar += (day + ' DAYS');
                }
            }
            else if (day >= 30) {
                let months = Math.floor(day / 30);

                if (months == 1) {
                    returnVar += ('1 MONTH');
                } else {
                    returnVar += (months + ' MONTHS');
                }
            }
            tillHours = false;
        }
    }
    if (tillHours) {
        if (mm > 0 || mm == 0)
            returnVar += ' ' + mm + ' MINS';
    }

    returnVar += (' AGO');

    return returnVar;
}


function getStateShortName (statename){
    var shortStateName;
    if(statename == "uttar-pradesh"){
        shortStateName = "up";
    }else if(statename == "himachal-pradesh"){
        shortStateName = "himachal";
    }else{
        shortStateName = statename;
    }

    return shortStateName;
}

function getDateInIsoFormat(strDate){
    let returnISODate = '';
    let dateOnly = new Date(strDate).toLocaleDateString('en-CA', { formatMatcher : 'best fit'});
    let timeOnly = new Date(strDate).toLocaleTimeString([], { hour : '2-digit', minute : '2-digit', second : '2-digit'}).replace("am","").replace("pm","");
    let timeZoneDiff = '+05:30'
    returnISODate = dateOnly + 'T' + timeOnly.trim() + timeZoneDiff;

    return returnISODate;
}

function getWountWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    str = str.replace(/<[^>]+>/g, '');
    //console.log(str);
    return str.split(' ').length;
}


function getBreadcrum(data){
    var breadcrumJson = {};
    var domainName = `${AppConfig.DOMAIN_NAME}`;


    if (data.state !== null && data.category == 'news' && data.subcategory == 'state') {
        var breadcrumCategoryURL = domainName + "state"+ '/' + data.state;
        var breadcrumSubcategoryURL = domainName + 'local/' + data.state + '_' + data.city + '-news-hindi.html';
        breadcrumJson = {"state":data.stateHn,
                         "city":data.cityHn,
                         "category":data.stateHn,
                         "subcategory":data.cityHn,
                         "categoryURL":breadcrumCategoryURL,
                         "subcategoryURL":breadcrumSubcategoryURL};
    } else {
        var breadcrumCategoryURL = domainName + data.category + '-news-hindi.html';
        var breadcrumSubcategoryURL = domainName + data.category + '/' + data.subcategory + '-news-hindi.html';
        breadcrumJson = {"category":data.webcategoryHn,
                         "subcategory":data.webSubCategoryHn,
                         "categoryURL":breadcrumCategoryURL,
                         "subcategoryURL":breadcrumSubcategoryURL};
    } 

    return breadcrumJson;

}


export { getArticleURL as ArticleURL, getTimeDifference as TimeDifference, getStateShortName as StateShortName, getDateInIsoFormat as DateIsoFormat, getWountWords as CalcWordCount,
         getBreadcrum as BreadcrumData}
