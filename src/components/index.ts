import { camelCase, upperFirst } from 'lodash';
import Vue from 'vue';

const requireComponent = require.context('.', true, /^((?!index).)*.vue$/);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  );

  Vue.component(
    `App${componentName}`,
    componentConfig.default || componentConfig
  );
});
