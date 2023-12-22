import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import {buildCssLoader} from './../build/loaders/buildCssLoader'
import { Configuration } from 'webpack-dev-server'

export default ({ config }: { config?: webpack.Configuration }) => {
  const paths: BuildPaths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
  };

  if (config && config.resolve) {
      if (!config.resolve.modules) {
          config.resolve.modules = [];
      }

      config.resolve.modules.push(paths.src);

      if (!config.resolve.extensions) {
          config.resolve.extensions = [];
      }

      config.resolve.extensions.push('.ts', '.tsx');

    // Проверяем, что config.module и config.module.rules определены
      if (config.module && config.module.rules) {
        config.module.rules = (config.module.rules as RuleSetRule[]).map((rule: RuleSetRule) => {
          if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
          }
        return rule;  
    });

  }

  if (config && config.module && config.module.rules) {
    config.module.rules.push(buildCssLoader(true));
  }

  return config as Configuration;
};
}