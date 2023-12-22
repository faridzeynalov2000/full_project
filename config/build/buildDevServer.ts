import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const devServerConfig: DevServerConfiguration = {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };

  return devServerConfig;
}
