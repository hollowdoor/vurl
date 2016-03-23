/*
git remote add origin https://github.com/hollowdoor/vurl.git
git push -u origin master
*/

module.exports = function vurl(){
    if(typeof window === 'undefined'){
        if(typeof process === 'object' &&
        Object.prototype.toString.call(process.argv) === '[object Array]'){
            return process.argv.slice(2);
        }
    }

    var vargs = [], pathArray = window.location.pathname.split( '/' );

    if(pathArray.length > 0 && pathArray[0].length){
        vargs = pathArray;
    }

    //http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript

    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    while(match = search.exec(query)){
        vargs.push((match[1].length === 1 ? '-' : '--')+decode(match[1]));
        if(match[2].length)
            vargs.push(decode(match[2]));
    }

    return vargs;
};
