
export default (logs, logString) => {
  logs.forEach(l => {
    if (l.event === logString) {
      console.log(l.args.logString, ' ', l.args.value.toNumber() / (10 ** 18));
    } else {
      Object.keys(l.args).forEach(key => {
        let value = typeof l.args[key] === 'string' ? l.args[key] : l.args[key].toNumber();
        console.log(key, ' ', value);
      });
    }
  });
};
