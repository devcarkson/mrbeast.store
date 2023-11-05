
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.42997519a42429e7cc05.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/315.baseline.en.ddadfa61c1f55c65aad2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/243.baseline.en.5d6f24ef014451490c29.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/758.baseline.en.c496fa14d6ed19ec79f9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.8e894b0f69f07f24a1d5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/Information.baseline.en.5c567830ff950548e79a.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/315.baseline.en.c0d6acba2e4615902ff8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.9e5ff1b3aa7bfa27478e.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/739.baseline.en.b9c141a9fd296e406eee.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0016/1975/5059/files/MrBeast-Logo_x320.png?v=1691676134"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  