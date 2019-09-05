const timePassage = (setUTC) => {
    const currentUTC = Math.floor(new Date().getTime()/1000.0);
    const passage = currentUTC - setUTC;
    let result;

    switch(true) {
        case passage > 31536000: 
            result = Math.floor(passage/31536000);
            result += (result > 1) ? " years ago" : " year ago";
            break;
        case passage > 2629743: 
            result = Math.floor(passage/2629743);
            result += (result > 1) ? " mounths" : " mounth";
            break;
        case passage > 604800 :
            result = Math.floor(passage/604800) ;
            result += (result > 1) ? " weeks ago" : " week ago";
            break;
        case passage > 86400: 
            result = Math.floor(passage/86400);
            result += (result > 1) ? " days ago" : " day ago"  ;
            break;
        case passage > 3600:
            result = Math.floor(passage/3600);
            result += (result > 1) ? " hours ago" : " hour ago" ;
            break;
        case passage > 60:
            result = Math.floor(passage/60) ;
            result += (result > 1) ? " minutes ago" : " minute ago";
            break;
        case passage < 60 && passage >= 0:  
            result += (result > 1) ? " seconds ago" : " second ago";
            break;
        default: 
            result = "posted just now";
            break;
    }
    return result
}

export default timePassage;