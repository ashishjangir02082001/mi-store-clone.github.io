import React from 'react';
import '../styles/PreNavbar.css';

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14.35 43.95Q12.85 43.95 11.8 42.9Q10.75 41.85 10.75 40.35Q10.75 38.85 11.8 37.8Q12.85 36.75 14.35 36.75Q15.8 36.75 16.875 37.8Q17.95 38.85 17.95 40.35Q17.95 41.85 16.9 42.9Q15.85 43.95 14.35 43.95ZM34.35 43.95Q32.85 43.95 31.8 42.9Q30.75 41.85 30.75 40.35Q30.75 38.85 31.8 37.8Q32.85 36.75 34.35 36.75Q35.8 36.75 36.875 37.8Q37.95 38.85 37.95 40.35Q37.95 41.85 36.9 42.9Q35.85 43.95 34.35 43.95ZM11.75 10.95 17.25 22.35H31.65Q31.65 22.35 31.65 22.35Q31.65 22.35 31.65 22.35L37.9 10.95Q37.9 10.95 37.9 10.95Q37.9 10.95 37.9 10.95ZM10.25 7.95H39.7Q41.3 7.95 41.725 8.925Q42.15 9.9 41.45 11.1L34.7 23.25Q34.2 24.1 33.3 24.725Q32.4 25.35 31.35 25.35H16.2L13.4 30.55Q13.4 30.55 13.4 30.55Q13.4 30.55 13.4 30.55H37.95V33.55H13.85Q11.75 33.55 10.825 32.15Q9.9 30.75 10.85 29L14.05 23.1L6.45 7H2.55V4H8.4ZM17.25 22.35H31.65Q31.65 22.35 31.65 22.35Q31.65 22.35 31.65 22.35Z"/></svg>

const PreNavbar = () => {
  return (
    <div className="PreNav">
        <div>
            <a href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
            <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
            <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
            <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ˅</a>
        </div> 
        <div>
            <a href="https://account.xiaomi.com/fe/service/login/password?_locale=en_IN&checkSafePhone=false&sid=i18n_in_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fstore.mi.com%25252Fin%25252Flogin%25252Fcallback%25253Ffollowup%25253Dhttps%2525253A%2525252F%2525252Fwww.mi.com%2525252Fin%2525252F%2525253Futm_source%2525253Dgoogle%25252526utm_medium%2525253Dcpc%25252526utm_campaign%2525253D%252525255BA_BR%252525255BSEM_B%252525255BXiaomiBRAND_S%252525255D20190102%252525255D%25252526gclid%2525253DCjwKCAjwtcCVBhA0EiwAT1fY7yWtQMWenC8f1fAmZzuQ_6Xy0HWWEu0ucI0LUeGERO5wOKzj9W5R9RoCpmUQAvD_BwE%252526sign%25253DODMzZWFkZmI3ODUwNDQyMTFlYTRlODQwM2ZiMzBiMzg0YjQ0MjhmNg%25252C%25252C%2526sid%253Di18n_in_pc_pro%2526_locale%253Den_IN%2526checkSafePhone%253Dfalse&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%252F%253Futm_source%253Dgoogle%2526utm_medium%253Dcpc%2526utm_campaign%253D%25255BA_BR%25255BSEM_B%25255BXiaomiBRAND_S%25255D20190102%25255D%2526gclid%253DCjwKCAjwtcCVBhA0EiwAT1fY7yWtQMWenC8f1fAmZzuQ_6Xy0HWWEu0ucI0LUeGERO5wOKzj9W5R9RoCpmUQAvD_BwE%26sign%3DODMzZWFkZmI3ODUwNDQyMTFlYTRlODQwM2ZiMzBiMzg0YjQ0MjhmNg%2C%2C&_sign=AwTfrAPExG9fMMlHai3ptNLIHuo%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=">SIGN IN</a> <span>|</span>
            <a href="https://in.account.xiaomi.com/fe/service/register?_locale=en_IN&source=&region=IN&sid=i18n_in_pc_pro&qs=callback%3Dhttps%253A%252F%252Fstore.mi.com%252Fin%252Flogin%252Fcallback%253Ffollowup%253Dhttps%25253A%25252F%25252Fwww.mi.com%25252Fin%2526sign%253DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%252C%252C%26sid%3Di18n_in_pc_pro%26_locale%3Den_IN&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&_uRegion=IN">SIGN UP</a> <span>|</span>
            <a href="https://store.mi.com/in/cart"> {cartIcon}CART (0) </a>
        </div>
    </div>
  )
}

export default PreNavbar