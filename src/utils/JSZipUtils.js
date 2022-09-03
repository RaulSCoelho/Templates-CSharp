const JSZipUtils = {};

function getBinaryContent(path, options) {
  let promise;
  let resolve;
  let reject;
  let callback;

  if (!options) {
    options = {};
  }

  // backward compatible callback
  if (typeof options === 'function') {
    callback = options;
    options = {};
  } else if (typeof options.callback === 'function') {
    // callback inside options object
    callback = options.callback;
  }

  if (!callback && typeof Promise !== 'undefined') {
    promise = new Promise((_resolve, _reject) => {
      resolve = _resolve;
      reject = _reject;
    });
  } else {
    resolve = function (data) {
      callback(null, data);
    };
    reject = function (err) {
      callback(err, null);
    };
  }
}

function urlToPromise(url) {
  return new Promise((resolve, reject) => {
    getBinaryContent(url, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

JSZipUtils.getBinaryContent = getBinaryContent;
JSZipUtils.urlToPromise = urlToPromise;

export default JSZipUtils;
