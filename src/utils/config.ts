export interface Config {
  port: number;
  host: string;
  timeout: number;
  logging: {
    level: string;
    format: string;
  };
  modules: {
    parser: {
      enabled: boolean;
    };
    generator: {
      enabled: boolean;
    };
  };
}

export class ConfigManager {
  private static instance: ConfigManager;
  private config: Config;

  private constructor(config: Config) {
    this.config = config;
  }

  public static getInstance(config: Config): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager(config);
    }
    return ConfigManager.instance;
  }

  public getConfig(): Config {
    return this.config;
  }

  public updateConfig(newConfig: Partial<Config>): void {
    this.config = { ...this.config, ...newConfig };
  }
}

const defaultConfig: Config = {
  port: 3000,
  host: 'localhost',
  timeout: 5000,
  logging: {
    level: 'info',
    format: 'json'
  },
  modules: {
    parser: {
      enabled: true
    },
    generator: {
      enabled: true
    }
  }
};

const config = ConfigManager.getInstance(defaultConfig);
