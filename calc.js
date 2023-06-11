const OPERATIONS = {
  sum: '+',
  sub: '-',
  mult: '*',
  div: '/'
};

function calc({ a, b, operation }) {
    let result = null;

    switch (operation) {
      case OPERATIONS.sum:
        result = sum(a, b);
        break;

        case OPERATIONS.sub:
        result = sub(a, b);
        break;

        case OPERATIONS.mult:
        result = mult(a, b);
        break;

        case OPERATIONS.div:
        result = div(a, b);
        break;

      default:
        break;
    }
    return result;
}