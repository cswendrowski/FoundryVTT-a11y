import Settings from "./Settings.mjs";
import constants from './Constants.mjs';

Hooks.once('init', async function() {

});

Hooks.once('ready', async function() {
    await Settings.registerSettings();
});

Hooks.on("renderSettingsConfig", function(settingsConfig, html, data) {
    // let nav = $(html).find("nav");
    // nav.append('<a class="item" data-tab="accessibility"><i class="fas fa-universal-access"></i> Accessibility</a>');

    // let tabs = $(html).find("#config-tabs");
    // tabs.append(`<div class="tab" data-tab="accessibility" data-group="sections">
    //     <div class="settings-list">
    //         <h2 class="module-header">a11y - Accessibilty Features</h2>
    //         <div class="form-group">
    //             <label>Show Debug Mode</label>
    //             <div class="form-fields">
            
    //                 <input type="checkbox" name="a11y.debugMode" data-dtype="Boolean">
            
    //             </div>
            
    //             <p class="notes">Show Debug Mode</p>
    //         </div>
    //         <div class="form-group">
    //             <label>Enable Colorblind Accessibility Mode</label>
    //             <div class="form-fields">
            
    //                 <select name="a11y.colorBlindMode">
    //                     <option value="default">Default Colors</option>
    //                     <option value="colorBlindRG" selected="">Protanopla / Deutanopla (Red/Green)</option>
    //                     <option value="colorBlindBY">Tritanopia (Blue/Yellow)</option>
    //                 </select>
            
    //             </div>
            
    //             <p class="notes">Change the colors of the UI to a more accessibile color palette.</p>
    //         </div>
    //         <div class="form-group">
    //             <label>Border Thickness around Objects on Canvas</label>
    //             <div class="form-fields">
            
    //                 <input type="text" name="a11y.canvasObjectBorder" value="12" data-dtype="Number">
    //                     </div>
            
    //             <p class="notes">Default: 4</p>
    //         </div>
    //     </div>
    // </div>`);
});