export function main_page_link(){
    return '/';
}

export function site_name(){
    return 'Cloud Machine Learning';
}

var isLogin_: boolean = false;

export function isLogin(){
    return isLogin_;
}

export function setLogin(isLogin: boolean){
    isLogin_ = isLogin;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {main_page_link, site_name, isLogin, setLogin};
