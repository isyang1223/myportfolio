webpackJsonp(["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n#top{\n     position: absolute;\n    left: 0;\n    top: 40%;\n    width: 100%;\n    text-align: center;\n    font-size: 18px;\n  \n\n}\n.active a:after {\n    content: \" \";\n    width: 100px;\n    height: 10px;\n    background-color: white;\n    margin-top: -15px;\n\n}\n.navbar{\n  background-color: rgb(250, 241, 241);\n  position:fixed;\n\ttop: 0px;\n\twidth: 100%; \n\tz-index:9999;\n    display: none;\n    border-radius: 0px;\n    border-bottom: 1px solid rgb(80, 69, 69);\n}\n.navbar-nav > li > a {\n  \n  padding: 0; /*removing spacing*/\n  margin: 14px; /*add spacing*/\n}\n.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {\n    color: rgb(0, 0, 0);\n    background-color: rgb(250, 241, 241);\n\n\n    \n}\n#top h1{\n    margin-top: 0px;\n    \n}\n#aboutme h1{\n    margin-top: 0px;\n    \n}\n#projects h1{\n    margin-top: 0px;\n    \n}\n#skills h1{\n    margin-top: 0px;\n    \n}\n#contact h1{\n    margin-top: 0px;\n    \n}\n#contact {\n    padding-top: 60px;\n    \n}\n#aboutme{\n    text-align: center;\n    font-size: 18px;\n    \n    \n}\n#projects{\n\n    margin-top: 40px;\n    margin-bottom: 40px;\n    \n    width: 100%;\n    text-align: center;\n    font-size: 18px;\n    color: black;\n}\n#skills{\n    margin-top: 60px;\n    margin-bottom: 60px;\n    \n    \n    text-align: center;\n    \n    text-align: center;\n    font-size: 18px;\n    \n}\n#contact h2{\n    color: black;\n}\n#contact label{\n    color: black;\n}\n.image-box{\n  \n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('rsz_background2.54f25e67e84b285f527a.jpg');\n  \n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('rsz_background2.54f25e67e84b285f527a.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n    background-position: center;\n    height:100vh;\n    color: white;\n    position: relative;\n}\n.background-project{\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('rsz_projects.f784d2646954abc2e32f.jpg');\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('rsz_projects.f784d2646954abc2e32f.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    \n    background-attachment: fixed;\n    height: 250px;\n    color: white;\n    position: relative;\n\n}\n.background-skills{\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('rsz_skills.db4073920a2efa662890.jpg');\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('rsz_skills.db4073920a2efa662890.jpg');\n\n    background-size: cover;\n    background-position: center;\n    \n    background-attachment: fixed;\n    height: 250px;\n    color: white;\n    position: relative;\n\n\n}\n.image-box1{\n  background-color: rgb(250, 241, 241);\n\n  color: black;\n   \n\n}\n.image-box2{\n  background-color: rgb(250, 241, 241);\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  background-attachment: fixed;\n  \n  color: white;\n\n}\n.image-box3{\n  background-color: rgb(250, 241, 241);\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  background-attachment: fixed;\n\n  color: black;\n  padding-bottom: 20px;\n  padding-top: 20px;\n}\n.image-box4{\n  background-color: rgb(250, 241, 241);\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  background-attachment: fixed;\n  \n  color: white;\n    position: relative;\n\n}\n.kobe {\n    \n    \n    width: 400px;\n    margin-top: 60px;\n    \n    \n}\n.aboutme h1{\n    margin: 0px;\n    margin-top: 20px;\n\n}\n.background-project h1{\n\n    margin: 0px;\n    position: absolute;\n   \n    top: 40%;\n    width: 100%;\n    text-align: center;\n    \n}\n.rowicons{\n    padding-bottom: 60px;\n}\n.background-skills h1{\n\n    margin: 0px;\n    position: absolute;\n   \n    top: 40%;\n    width: 100%;\n    text-align: center;\n    \n}\n.background-contact h1{\n\n    margin: 0px;\n    position: absolute;\n   \n    top: 40%;\n    width: 100%;\n    text-align: center;\n    \n}\n.portfolio-item {\n    margin-top: 15px;\n    padding-bottom: 15px;\n}\n.card-header {\n    font-size: 20px;\n    color: black;\n}\n.card {\n    border: 1px solid black;\n}\n.card-text li {\n    text-align: center;\n    list-style: none;\n    \n\n}\n.card-text {\n    padding: 0px;\n}\n#skills .card {\n    border: 4px solid black;\n    \n}\n#skills .card-header{\n    background-color: black;\n    border-bottom: 4px solid black;\n    color: white;\n}\n/* #skills .card-body { \n    background: black;\n    color: white;\n} */\n.background-contact{\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('rsz_contact.3f493a30fb4ef5b398f3.jpg');\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('rsz_contact.3f493a30fb4ef5b398f3.jpg');\n   \n    background-size: cover;\n    background-position: center;\n    height: 250px;\n    color: white;\n    position: relative;\n\n\n}\n.rowicons a {\n    color: black;\n}\n.foot{\n    padding-top: 40px;\n\n}\n.foot p{\n    color: black;\n    text-align: center;\n    margin-bottom: 0px;\n}\n.aboutme {\n    padding-top: 60px;\n    padding-bottom: 20px;\n    padding-left: 60px;\n}\n.navbar li:hover {\n    border-bottom: 2px solid darkgray;\n}\nbody {\n    font-family: \"Arial\", Arial, sans-serif;\n}\n.paragraph {\n    font-size: 20px;\n}\n#projects .card:hover {\n\t-webkit-box-shadow: 0px 0px 10px 3px rgb(83, 83, 83);\n\tbox-shadow: 0px 0px 10px 3px rgb(83, 83, 83);\n}\n.scard{\n    margin-bottom: 40px;\n}\n.project-card {\n\tpadding: 20px 20px;\n\t\n\ttext-align: center;\n\n}\n.project-card button{\n\tbackground-color: black;\n\tborder-radius: 10px;\n\tcolor: white;\n\tpadding: 10px;\n\t-webkit-box-shadow: 2px 2px 2px #888888;\n\t        box-shadow: 2px 2px 2px #888888;\n}\n.topcard {\n\n\n    height: 460px;\n}\n.bottomcard {\n\n\n    height: 460px;\n}\n.projects{\n    margin-top: 60px;\n    margin-bottom: 60px;\n}\n.project-card img{\n\twidth: 40%;\n\n\tmargin-bottom: 10px;\n}\n#profile_pic{\n\tdisplay: inline-block;\n\twidth: 100%;\n\theight: 70%;\n\tborder-radius: 50%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    \n    padding-left:60px;\n    padding-bottom:60px;\n}\n.item-spacing1 {\n    margin-top: 60px;\n    \n}\n.item-spacing2 {\n    margin-top: 60px;\n    margin-bottom: 60px;\n}\n.row{\n    margin-left: 0px;\n    margin-right: 0px;\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map