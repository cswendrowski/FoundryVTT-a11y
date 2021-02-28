export default class ColorBlindness {
    static handleSettingChanged(mode) {
        $('body').removeClass(['default', 'colorBlindRG', 'colorBlindBY', 'custom']).addClass(mode);

        CONFIG.Canvas.dispositionColors = this._getDispositionColors(mode);
    }

    static _getDispositionColors(mode) {
        if (mode == "colorBlindRG") {
            return {
                HOSTILE: 0xe80000,
                NEUTRAL: 0xFFDD00,
                FRIENDLY: 0x00CAFF,
                INACTIVE: 0x555555,
                PARTY: 0x0057FF,
                CONTROLLED: 0xFFFFFF
            };
        }
        else if (mode == "colorBlindBY") {
            return {
                HOSTILE: 0xe80000,
                NEUTRAL: 0xFFB6FF,
                FRIENDLY: 0x00CAFF,
                INACTIVE: 0x555555,
                PARTY: 0x5050DA,
                CONTROLLED: 0xFFFFFF
            };
        }
        else { // Default
            return {
                HOSTILE: 0xe80000,
                NEUTRAL: 0xFFDD00,
                FRIENDLY: 0x00CAFF,
                INACTIVE: 0x555555,
                PARTY: 0x0057FF,
                CONTROLLED: 0xFFFFFF
            };
        }
    }
}

/**
 * Rough breakdown of Scaling styles
 * 
 * tiny .6 zoom
 * small .8 zoom
 * medium 0
 * large 1.25
 * huge 1.5
 * gargantuan 2
 */
