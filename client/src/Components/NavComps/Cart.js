var totalItems = [];

var grandTotal = () => {
  var result = 0;
  for (let i = 0; i < totalItems.length; i++) {
    result += totalItems[i][1]
  };
  return result;
}

export default { totalItems, grandTotal};