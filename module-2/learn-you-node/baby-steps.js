const [cmd, path, ...restArgs] = process.argv;

console.log(restArgs.reduce((acc, curr) => Number(acc) + Number(curr)));
