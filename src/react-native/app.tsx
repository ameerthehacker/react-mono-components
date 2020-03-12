import { getStorybookUI, configure } from '@storybook/react-native';

function importStories(components: string[]) {
  components.forEach(component => {
    require(`../components/${component}/stories/${component}.native.stories.tsx`);
  });
}

// import stories
configure(() => {
  importStories(['button']);
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const App = getStorybookUI({});

export default App;