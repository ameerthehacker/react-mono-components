"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@storybook/react-native");
function importStories(components) {
    components.forEach(component => {
        require(`../components/${component}/stories/${component}.native.stories.tsx`);
    });
}
// import stories
react_native_1.configure(() => {
    importStories(['button']);
}, module);
// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const App = react_native_1.getStorybookUI({});
exports.default = App;
