import constants from './Constants.mjs';
import ColorBlindness from "./ColorBlindness.mjs";

/**
 * Provides functionality for interaction with module settings
 */
export default class Settings {

    static async get(setting) {
        return await game.settings.get(constants.moduleName, setting);
    }

    static async set(setting, value) {
        await game.settings.set(constants.moduleName, setting, value);
    }

    /**
     * Registers all of the necessary game settings for the module
     */
    static async registerSettings() {

        game.settings.register(constants.moduleName, "debugMode", {
            name: "Show Debug Mode",
            hint: "Show Debug Mode",
            scope: 'client',
            config: true,
            type: Boolean,
            default: false
        });

        game.settings.register(constants.moduleName, "colorBlindMode", {
            name: "Enable Colorblind Accessibility Mode",
            hint: "Change the colors of the UI to a more accessibile color palette.",
            scope: 'client',
            config: true,
            type: String,
            choices: {
                default: "Default Colors",
                colorBlindRG: "Protanopla / Deutanopla (Red/Green)",
                colorBlindBY: "Tritanopia (Blue/Yellow)"
            },
            onChange: (value) => {
                ColorBlindness.handleSettingChanged(value);

                if (value == "colorBlindRG") {
                    CONFIG.Canvas.dispositionColors = {
                        HOSTILE: 0xe80000,
                        NEUTRAL: 0xFFDD00,
                        FRIENDLY: 0x00CAFF,
                        INACTIVE: 0x555555,
                        PARTY: 0x0057FF,
                        CONTROLLED: 0xFFFFFF
                    }
                }
            }
        });

        ColorBlindness.handleSettingChanged(game.settings.get(constants.moduleName, 'colorBlindMode'));

        game.settings.register(constants.moduleName, "canvasObjectBorder", {
            name: "Border Thickness around Objects on Canvas",
            hint: "Default: 4",
            scope: 'client',
            config: true,
            type: Number,
            default: 4,
            onChange: (value) => {
                CONFIG.Canvas.objectBorderThickness = value;
            }
        });
        CONFIG.Canvas.objectBorderThickness = game.settings.get(constants.moduleName, "canvasObjectBorder");


        game.settings.register(constants.moduleName, "fontScale", {
            name: "Font Scale",
            hint: "",
            scope: 'client',
            config: true,
            type: String,
            choices: {
                fontdefault: "Default Scale",
                fonttiny: "Tiny",
                fontsmall: "Small",
                fontlarge: "Large",
                fonthuge: "Huge",
                fontgargantuan: "Gargantuan"
            },
            onChange: (value) => {
                $('body').removeClass(['fontdefault', 'fonttiny', 'fontsmall', 'fontlarge', 'fonthuge', 'fontgargantuan']).addClass(value);
            }
        });
        $('body').removeClass(['fontdefault', 'fonttiny', 'fontsmall', 'fontlarge', 'fonthuge', 'fontgargantuan'])
            .addClass(game.settings.get(constants.moduleName, "fontScale"));


        game.settings.register(constants.moduleName, "uiScale", {
            name: "UI Scale",
            hint: "",
            scope: 'client',
            config: true,
            type: String,
            choices: {
                uidefault: "Default Scale",
                uitiny: "Tiny",
                uismall: "Small",
                uilarge: "Large",
                uihuge: "Huge",
                uigargantuan: "Gargantuan"
            },
            onChange: (value) => {
                $('body').removeClass(['uidefault', 'uitiny', 'uismall', 'uilarge', 'uihuge', 'uigargantuan']).addClass(value);
            }
        });
        $('body').removeClass(['uidefault', 'uitiny', 'uismall', 'uilarge', 'uihuge', 'uigargantuan'])
            .addClass(game.settings.get(constants.moduleName, "uiScale"));
    }
}
