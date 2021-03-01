---
layout: page
title: Gab and Parler icons for Font Awesome
image: '/assets/favicons/favicon.png'
---

Two new social networks are emerging: [Gab] and [Parler]. And there is this awesome and popular set of vector icons and social logos in the form of an SVG font: [Font Awesome][fontawesome]. This set of icons already includes traditional and bigger social networks logos, such as [Facebook], [Instagram] and [Twitter]. Although users are requesting the addition of the [Gab][gab-request] and [Parler][parler-request] logos, no one knows whether (nor when) these requests will be implemented. As many people want to use these logos — me myself included — I made a workaround and I'm sharing it in case it can be useful for someone else.

[gab]: https://gab.com/
[parler]: https://parler.com/
[fontawesome]: https://fontawesome.com/
[facebook]: https://fontawesome.com/icons?q=facebook
[instagram]: https://fontawesome.com/icons?q=instagram
[twitter]: https://fontawesome.com/icons?q=twitter
[gab-request]: https://github.com/FortAwesome/Font-Awesome/issues/10304
[parler-request]: https://github.com/FortAwesome/Font-Awesome/issues/16275

The icons I injected into Font Awesome are the following:

<div class='input-group mb-3'>
    <div class='input-group-prepend mr-3'>
        <span class='input-group-text'>
            <i class='gab fa-gab'></i>
        </span>
    </div>
    <input type='text' class='form-control txt-html' value='<i class="gab fa-gab"></i>' readonly>
    <div class='input-group-btn'>
        <button type='button' class='btn btn-outline-secondary btn-copy' title='Copy'><i class='fas fa-copy'></i></button>
    </div>
</div>

<div class='input-group mb-3'>
    <div class='input-group-prepend mr-3'>
        <span class='input-group-text'>
            <i class='gab fa-gab-g'></i>
        </span>
    </div>
    <input type='text' class='form-control txt-html' value='<i class="gab fa-gab-g"></i>' readonly>
    <div class='input-group-btn'>
        <button type='button' class='btn btn-outline-secondary btn-copy' title='Copy'><i class='fas fa-copy'></i></button>
    </div>
</div>

<div class='input-group mb-3'>
    <div class='input-group-prepend mr-3'>
        <span class='input-group-text'>
            <i class='gab fa-gab-square'></i>
        </span>
    </div>
    <input type='text' class='form-control txt-html' value='<i class="gab fa-gab-square"></i>' readonly>
    <div class='input-group-btn'>
        <button type='button' class='btn btn-outline-secondary btn-copy' title='Copy'><i class='fas fa-copy'></i></button>
    </div>
</div>

<div class='input-group mb-3'>
    <div class='input-group-prepend mr-3'>
        <span class='input-group-text'>
            <i class='parler fa-parler'></i>
        </span>
    </div>
    <input type='text' class='form-control txt-html' value='<i class="parler fa-parler"></i>' readonly>
    <div class='input-group-btn'>
        <button type='button' class='btn btn-outline-secondary btn-copy' title='Copy'><i class='fas fa-copy'></i></button>
    </div>
</div>

<div class='input-group mb-3'>
    <div class='input-group-prepend mr-3'>
        <span class='input-group-text'>
            <i class='parler fa-parler-square'></i>
        </span>
    </div>
    <input type='text' class='form-control txt-html' value='<i class="parler fa-parler-square"></i>' readonly>
    <div class='input-group-btn'>
        <button type='button' class='btn btn-outline-secondary btn-copy' title='Copy'><i class='fas fa-copy'></i></button>
    </div>
</div>

If you want to use these icons in your website, here is the recipe:

1\. Set up Font Awesome, either [download] it and host it yourself, retrieve it from a [CDN] or use [Font Awesome's own CDN][kits]. Make sure you add the Font Awesome JavaScript to your page.

[download]: https://fontawesome.com/download
[cdn]: https://www.jsdelivr.com/
[kits]: https://fontawesome.com/start

For instance, this page is retrieving Font Awesome from the [jsDelivr][cdn] CDN:

```html
<!doctype html>
<html lang="en">
    <head>
        <!-- ... -->
        <!-- Font Awesome CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.2/css/all.min.css" integrity="sha256-0fuNgzfNIlaClbDtmYyFxY8LTNCDrwsNshywr4AALy0=" crossorigin="anonymous">
        <!-- ... -->
    </head>
    <body>
        <!-- ... -->
        <!-- Font Awesome JS -->
        <script src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.2/js/all.js" integrity="sha256-pvPP8sWBrowznHv1xsjTBO7/74OBKzmOCGaEeq3q+TQ=" crossorigin="anonymous"></script>
    </body>
</html>
```

2\. Download [`font-awesome-gab-parler.js`](libs/font-awesome-gab-parler/0.1.0/js/font-awesome-gab-parler.js) and reference it in your page:

```html
    <body>
        <!-- ... -->
        <!-- Gab and Parler icons for Font Awesome -->
        <script src="font-awesome-gab-parler.js"></script>
    </body>
</html>
```

3\. Call the `setUpGabAndParlerIconsForFontAwesome()` JavaScript function when the document is ready.

For instance, if you use jQuery:

```js
$(document).ready(function(){
    setUpGabAndParlerIconsForFontAwesome();
});
```

4\. Now you are ready to use the icons. Copy their HTML code from above.

For instance:

```html
<p>Which one do you prefer? <i class="gab fa-gab"></i> Gab? Or <i class="parler fa-parler"></i> Parler?</p>
```

For a working example, see [this](example.html). View the page source to get the full picture.

I'm open to suggestions and improvements. [See this project on GitHub](https://github.com/vinyanalista/font-awesome-gab-parler).
