import { NgxUiLoaderConfig } from 'ngx-ui-loader';
import { Colors } from '../styles/colors';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    "bgsColor": Colors.primaryDark,
    "bgsOpacity": 0.5,
    "bgsPosition": "bottom-right",
    "bgsSize": 60,
    "bgsType": "square-jelly-box",
    "blur": 5,
    "delay": 0,
    "fastFadeOut": true,
    "fgsColor": Colors.primary,
    "fgsPosition": "center-center",
    "fgsSize": 60,
    "fgsType": "square-jelly-box",
    "gap": 24,
    "logoPosition": "center-center",
    "logoSize": 120,
    "logoUrl": "assets/images/logo-with-background.png",
    "masterLoaderId": "master",
    "overlayBorderRadius": "0",
    "overlayColor": Colors.primaryOverlay,
    "pbColor": Colors.primaryDark,
    "pbDirection": "ltr",
    "pbThickness": 3,
    "hasProgressBar": true,
    "text": "",
    "textColor": Colors.branco,
    "textPosition": "center-center",
    "maxTime": -1,
    "minTime": 300
};

export default ngxUiLoaderConfig;
