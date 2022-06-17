//like api
function getLike(article_id,like_unlike,accountid,user_id){
        $.ajax({
        url: 'http://172.31.240.72:5000/articles/articleslikeunlike',
        type: 'post',
        data: {article_id:article_id,like_unlike:like_unlike,accountid:accountid,user_id:user_id,flag:"like"},
        dataType: 'json',
        success: function (data) {
           
            console.log(data.results);

            if(data.results != undefined){
              //$("#likes_"+comment_id).text(data + " likes");
              $("#likes_" + article_id).html(data.results);
              $("#dislikes_" + article_id).html(data.unlikes);
            }
        },
        error: function (data) {
            alert("error : " + JSON.stringify(data));
        }
    });
}

//unlike api

function getUnLike(article_id,like_unlike,accountid,user_id){
    $.ajax({
        url: 'http://172.31.240.72:5000/articles/articleslikeunlike',
        type: 'post',
        data: {article_id:article_id,like_unlike:like_unlike,accountid:accountid,user_id:user_id,flag:"dislike"},
        dataType: 'json',
        success: function (data) {

            console.log(data.results);

            if(data.results != undefined){
              $("#dislikes_" + article_id).html(data.results);
              $("#likes_" + article_id).html(data.likes);
            }  
           
           
        },
        error: function (data) {
            alert("error : " + JSON.stringify(data));
        }
    });
}