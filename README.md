# js-product-feature

Show amazing product features on product image. Thisplugin developped as a extension of jquery. 

![Screenshot](https://kgokbas.github.io/js-product-feature/dist/assets/images/screenshot.jpg)




## Getting Started

1. Choose an image and add to html.
2. Open main.js and add some points.

### Prerequisites

* jQuery



### Installing

Add product image to html.
```
<img src="assets/images/hero-iphone.png" class="pf-product-image"/>
```

Add these javascript dependencies in dist/assets/js
```
<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="./assets/js/js-product-feature.js"></script>
<script type="text/javascript" src="./assets/js/main.js"></script>
```

Add these css dependencies (javascript and stylesheet) in dist/assets/css
```
<link rel="stylesheet" href="./assets/css/styles.css"/>
```

And open main.js and select class of product image. Update this options up to you.

```
$(".pf-product-image").jsProductFeature({
        pauseOnHover:true,
        points: [
            {x: '90%', y: '20%', name: 'camera', title: 'Face ID', description :'A tiny space ...' },
            {x: '50%', y: '50%', name: 'screen', title: '5.8‑inch Super Retina screen', description:'With...'},
            {x: '24%', y: '88%', name: 'design', title: 'Curves of the design',description:'The ...'},
        ]
    });
```