export default {
  jsonToQuery(obj, prefix) {
    return (
      (typeof prefix === 'undefined' ? '?' : prefix) +
      Object.keys(obj)
        .filter(item => typeof obj[item] !== 'undefined' && obj[item] !== null)
        .map(item => {
          return [item, encodeURIComponent(obj[item])].join('=');
        })
        .join('&')
    );
  },
  queryToJson(url) {
    url = url || window.location.href;
    let params = url.slice(url.indexOf('?') + 1);
    let obj = {};
    params.split('&').forEach(item => {
      let row = item.split('=');
      if (row.length === 2) {
        obj[row[0]] = decodeURIComponent(row[1]);
      }
    });
    return obj;
  },
};
