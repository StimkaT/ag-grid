module.exports = {
  stories: [
    '../src/**/*.stories.ts',
    '../src/app/components/**/*.stories.ts',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/angular',
};
