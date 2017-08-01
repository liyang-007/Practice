function collect_same_elements(collection_a, collection_b) {
  let sameElements = [];
  collection_b = Array.prototype.concat.apply([], collection_b);

  collection_a.map(element => {
    if (collection_b.includes(element)) sameElements.push(element);
  });

  return sameElements;

}

module.exports = collect_same_elements;
