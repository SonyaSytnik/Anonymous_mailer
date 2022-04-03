export const pinoConfig = {
  prettyPrint: {
    colorize: true,
    levelFirst: true,
    translateTime: true,
  },
  timestamp: () => `time:${new Date()}`,
  level: 'info',
};
