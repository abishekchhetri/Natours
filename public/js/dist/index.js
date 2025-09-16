(() => {

      var $parcel$global = globalThis;
    
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
'use strict';
function $14d9e05617c9f7dc$export$2e2bcd8739ae039(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}


'use strict';
// utils is a library of generic helper functions non-specific to axios
const { toString: $207b8ae78bfdf58d$var$toString } = Object.prototype;
const { getPrototypeOf: $207b8ae78bfdf58d$var$getPrototypeOf } = Object;
const { iterator: $207b8ae78bfdf58d$var$iterator, toStringTag: $207b8ae78bfdf58d$var$toStringTag } = Symbol;
const $207b8ae78bfdf58d$var$kindOf = ((cache)=>(thing)=>{
        const str = $207b8ae78bfdf58d$var$toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const $207b8ae78bfdf58d$var$kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>$207b8ae78bfdf58d$var$kindOf(thing) === type;
};
const $207b8ae78bfdf58d$var$typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray: $207b8ae78bfdf58d$var$isArray } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const $207b8ae78bfdf58d$var$isUndefined = $207b8ae78bfdf58d$var$typeOfTest('undefined');
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function $207b8ae78bfdf58d$var$isBuffer(val) {
    return val !== null && !$207b8ae78bfdf58d$var$isUndefined(val) && val.constructor !== null && !$207b8ae78bfdf58d$var$isUndefined(val.constructor) && $207b8ae78bfdf58d$var$isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const $207b8ae78bfdf58d$var$isArrayBuffer = $207b8ae78bfdf58d$var$kindOfTest('ArrayBuffer');
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function $207b8ae78bfdf58d$var$isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && $207b8ae78bfdf58d$var$isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const $207b8ae78bfdf58d$var$isString = $207b8ae78bfdf58d$var$typeOfTest('string');
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const $207b8ae78bfdf58d$var$isFunction = $207b8ae78bfdf58d$var$typeOfTest('function');
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const $207b8ae78bfdf58d$var$isNumber = $207b8ae78bfdf58d$var$typeOfTest('number');
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const $207b8ae78bfdf58d$var$isObject = (thing)=>thing !== null && typeof thing === 'object';
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const $207b8ae78bfdf58d$var$isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const $207b8ae78bfdf58d$var$isPlainObject = (val)=>{
    if ($207b8ae78bfdf58d$var$kindOf(val) !== 'object') return false;
    const prototype = $207b8ae78bfdf58d$var$getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !($207b8ae78bfdf58d$var$toStringTag in val) && !($207b8ae78bfdf58d$var$iterator in val);
};
/**
 * Determine if a value is an empty object (safely handles Buffers)
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an empty object, otherwise false
 */ const $207b8ae78bfdf58d$var$isEmptyObject = (val)=>{
    // Early return for non-objects or Buffers to prevent RangeError
    if (!$207b8ae78bfdf58d$var$isObject(val) || $207b8ae78bfdf58d$var$isBuffer(val)) return false;
    try {
        return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
    } catch (e) {
        // Fallback for any other objects that might cause RangeError with Object.keys()
        return false;
    }
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const $207b8ae78bfdf58d$var$isDate = $207b8ae78bfdf58d$var$kindOfTest('Date');
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const $207b8ae78bfdf58d$var$isFile = $207b8ae78bfdf58d$var$kindOfTest('File');
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const $207b8ae78bfdf58d$var$isBlob = $207b8ae78bfdf58d$var$kindOfTest('Blob');
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const $207b8ae78bfdf58d$var$isFileList = $207b8ae78bfdf58d$var$kindOfTest('FileList');
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const $207b8ae78bfdf58d$var$isStream = (val)=>$207b8ae78bfdf58d$var$isObject(val) && $207b8ae78bfdf58d$var$isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const $207b8ae78bfdf58d$var$isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === 'function' && thing instanceof FormData || $207b8ae78bfdf58d$var$isFunction(thing.append) && ((kind = $207b8ae78bfdf58d$var$kindOf(thing)) === 'formdata' || // detect form-data instance
    kind === 'object' && $207b8ae78bfdf58d$var$isFunction(thing.toString) && thing.toString() === '[object FormData]'));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const $207b8ae78bfdf58d$var$isURLSearchParams = $207b8ae78bfdf58d$var$kindOfTest('URLSearchParams');
const [$207b8ae78bfdf58d$var$isReadableStream, $207b8ae78bfdf58d$var$isRequest, $207b8ae78bfdf58d$var$isResponse, $207b8ae78bfdf58d$var$isHeaders] = [
    'ReadableStream',
    'Request',
    'Response',
    'Headers'
].map($207b8ae78bfdf58d$var$kindOfTest);
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const $207b8ae78bfdf58d$var$trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */ function $207b8ae78bfdf58d$var$forEach(obj, fn, { allOwnKeys: allOwnKeys = false } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') return;
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== 'object') /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if ($207b8ae78bfdf58d$var$isArray(obj)) // Iterate over array values
    for(i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Buffer check
        if ($207b8ae78bfdf58d$var$isBuffer(obj)) return;
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function $207b8ae78bfdf58d$var$findKey(obj, key) {
    if ($207b8ae78bfdf58d$var$isBuffer(obj)) return null;
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) return _key;
    }
    return null;
}
const $207b8ae78bfdf58d$var$_global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : $parcel$global;
})();
const $207b8ae78bfdf58d$var$isContextDefined = (context)=>!$207b8ae78bfdf58d$var$isUndefined(context) && context !== $207b8ae78bfdf58d$var$_global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function $207b8ae78bfdf58d$var$merge() {
    const { caseless: caseless, skipUndefined: skipUndefined } = $207b8ae78bfdf58d$var$isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && $207b8ae78bfdf58d$var$findKey(result, key) || key;
        if ($207b8ae78bfdf58d$var$isPlainObject(result[targetKey]) && $207b8ae78bfdf58d$var$isPlainObject(val)) result[targetKey] = $207b8ae78bfdf58d$var$merge(result[targetKey], val);
        else if ($207b8ae78bfdf58d$var$isPlainObject(val)) result[targetKey] = $207b8ae78bfdf58d$var$merge({}, val);
        else if ($207b8ae78bfdf58d$var$isArray(val)) result[targetKey] = val.slice();
        else if (!skipUndefined || !$207b8ae78bfdf58d$var$isUndefined(val)) result[targetKey] = val;
    };
    for(let i = 0, l = arguments.length; i < l; i++)arguments[i] && $207b8ae78bfdf58d$var$forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const $207b8ae78bfdf58d$var$extend = (a, b, thisArg, { allOwnKeys: allOwnKeys } = {})=>{
    $207b8ae78bfdf58d$var$forEach(b, (val, key)=>{
        if (thisArg && $207b8ae78bfdf58d$var$isFunction(val)) a[key] = (0, $14d9e05617c9f7dc$export$2e2bcd8739ae039)(val, thisArg);
        else a[key] = val;
    }, {
        allOwnKeys: allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const $207b8ae78bfdf58d$var$stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const $207b8ae78bfdf58d$var$inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, 'super', {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const $207b8ae78bfdf58d$var$toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && $207b8ae78bfdf58d$var$getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const $207b8ae78bfdf58d$var$endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const $207b8ae78bfdf58d$var$toArray = (thing)=>{
    if (!thing) return null;
    if ($207b8ae78bfdf58d$var$isArray(thing)) return thing;
    let i = thing.length;
    if (!$207b8ae78bfdf58d$var$isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const $207b8ae78bfdf58d$var$isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== 'undefined' && $207b8ae78bfdf58d$var$getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const $207b8ae78bfdf58d$var$forEachEntry = (obj, fn)=>{
    const generator = obj && obj[$207b8ae78bfdf58d$var$iterator];
    const _iterator = generator.call(obj);
    let result;
    while((result = _iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const $207b8ae78bfdf58d$var$matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null)arr.push(matches);
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const $207b8ae78bfdf58d$var$isHTMLForm = $207b8ae78bfdf58d$var$kindOfTest('HTMLFormElement');
const $207b8ae78bfdf58d$var$toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const $207b8ae78bfdf58d$var$hasOwnProperty = (({ hasOwnProperty: hasOwnProperty })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const $207b8ae78bfdf58d$var$isRegExp = $207b8ae78bfdf58d$var$kindOfTest('RegExp');
const $207b8ae78bfdf58d$var$reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    $207b8ae78bfdf58d$var$forEach(descriptors, (descriptor, name)=>{
        let ret;
        if ((ret = reducer(descriptor, name, obj)) !== false) reducedDescriptors[name] = ret || descriptor;
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const $207b8ae78bfdf58d$var$freezeMethods = (obj)=>{
    $207b8ae78bfdf58d$var$reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if ($207b8ae78bfdf58d$var$isFunction(obj) && [
            'arguments',
            'caller',
            'callee'
        ].indexOf(name) !== -1) return false;
        const value = obj[name];
        if (!$207b8ae78bfdf58d$var$isFunction(value)) return;
        descriptor.enumerable = false;
        if ('writable' in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) descriptor.set = ()=>{
            throw Error('Can not rewrite read-only method \'' + name + '\'');
        };
    });
};
const $207b8ae78bfdf58d$var$toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    $207b8ae78bfdf58d$var$isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const $207b8ae78bfdf58d$var$noop = ()=>{};
const $207b8ae78bfdf58d$var$toFiniteNumber = (value, defaultValue)=>{
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function $207b8ae78bfdf58d$var$isSpecCompliantForm(thing) {
    return !!(thing && $207b8ae78bfdf58d$var$isFunction(thing.append) && thing[$207b8ae78bfdf58d$var$toStringTag] === 'FormData' && thing[$207b8ae78bfdf58d$var$iterator]);
}
const $207b8ae78bfdf58d$var$toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if ($207b8ae78bfdf58d$var$isObject(source)) {
            if (stack.indexOf(source) >= 0) return;
            //Buffer check
            if ($207b8ae78bfdf58d$var$isBuffer(source)) return source;
            if (!('toJSON' in source)) {
                stack[i] = source;
                const target = $207b8ae78bfdf58d$var$isArray(source) ? [] : {};
                $207b8ae78bfdf58d$var$forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !$207b8ae78bfdf58d$var$isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const $207b8ae78bfdf58d$var$isAsyncFn = $207b8ae78bfdf58d$var$kindOfTest('AsyncFunction');
const $207b8ae78bfdf58d$var$isThenable = (thing)=>thing && ($207b8ae78bfdf58d$var$isObject(thing) || $207b8ae78bfdf58d$var$isFunction(thing)) && $207b8ae78bfdf58d$var$isFunction(thing.then) && $207b8ae78bfdf58d$var$isFunction(thing.catch);
// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34
const $207b8ae78bfdf58d$var$_setImmediate = ((setImmediateSupported, postMessageSupported)=>{
    if (setImmediateSupported) return setImmediate;
    return postMessageSupported ? ((token, callbacks)=>{
        $207b8ae78bfdf58d$var$_global.addEventListener("message", ({ source: source, data: data })=>{
            if (source === $207b8ae78bfdf58d$var$_global && data === token) callbacks.length && callbacks.shift()();
        }, false);
        return (cb)=>{
            callbacks.push(cb);
            $207b8ae78bfdf58d$var$_global.postMessage(token, "*");
        };
    })(`axios@${Math.random()}`, []) : (cb)=>setTimeout(cb);
})(typeof setImmediate === 'function', $207b8ae78bfdf58d$var$isFunction($207b8ae78bfdf58d$var$_global.postMessage));
const $207b8ae78bfdf58d$var$asap = typeof queueMicrotask !== 'undefined' ? queueMicrotask.bind($207b8ae78bfdf58d$var$_global) : $207b8ae78bfdf58d$var$_setImmediate;
// *********************
const $207b8ae78bfdf58d$var$isIterable = (thing)=>thing != null && $207b8ae78bfdf58d$var$isFunction(thing[$207b8ae78bfdf58d$var$iterator]);
var $207b8ae78bfdf58d$export$2e2bcd8739ae039 = {
    isArray: $207b8ae78bfdf58d$var$isArray,
    isArrayBuffer: $207b8ae78bfdf58d$var$isArrayBuffer,
    isBuffer: $207b8ae78bfdf58d$var$isBuffer,
    isFormData: $207b8ae78bfdf58d$var$isFormData,
    isArrayBufferView: $207b8ae78bfdf58d$var$isArrayBufferView,
    isString: $207b8ae78bfdf58d$var$isString,
    isNumber: $207b8ae78bfdf58d$var$isNumber,
    isBoolean: $207b8ae78bfdf58d$var$isBoolean,
    isObject: $207b8ae78bfdf58d$var$isObject,
    isPlainObject: $207b8ae78bfdf58d$var$isPlainObject,
    isEmptyObject: $207b8ae78bfdf58d$var$isEmptyObject,
    isReadableStream: $207b8ae78bfdf58d$var$isReadableStream,
    isRequest: $207b8ae78bfdf58d$var$isRequest,
    isResponse: $207b8ae78bfdf58d$var$isResponse,
    isHeaders: $207b8ae78bfdf58d$var$isHeaders,
    isUndefined: $207b8ae78bfdf58d$var$isUndefined,
    isDate: $207b8ae78bfdf58d$var$isDate,
    isFile: $207b8ae78bfdf58d$var$isFile,
    isBlob: $207b8ae78bfdf58d$var$isBlob,
    isRegExp: $207b8ae78bfdf58d$var$isRegExp,
    isFunction: $207b8ae78bfdf58d$var$isFunction,
    isStream: $207b8ae78bfdf58d$var$isStream,
    isURLSearchParams: $207b8ae78bfdf58d$var$isURLSearchParams,
    isTypedArray: $207b8ae78bfdf58d$var$isTypedArray,
    isFileList: $207b8ae78bfdf58d$var$isFileList,
    forEach: $207b8ae78bfdf58d$var$forEach,
    merge: $207b8ae78bfdf58d$var$merge,
    extend: $207b8ae78bfdf58d$var$extend,
    trim: $207b8ae78bfdf58d$var$trim,
    stripBOM: $207b8ae78bfdf58d$var$stripBOM,
    inherits: $207b8ae78bfdf58d$var$inherits,
    toFlatObject: $207b8ae78bfdf58d$var$toFlatObject,
    kindOf: $207b8ae78bfdf58d$var$kindOf,
    kindOfTest: $207b8ae78bfdf58d$var$kindOfTest,
    endsWith: $207b8ae78bfdf58d$var$endsWith,
    toArray: $207b8ae78bfdf58d$var$toArray,
    forEachEntry: $207b8ae78bfdf58d$var$forEachEntry,
    matchAll: $207b8ae78bfdf58d$var$matchAll,
    isHTMLForm: $207b8ae78bfdf58d$var$isHTMLForm,
    hasOwnProperty: $207b8ae78bfdf58d$var$hasOwnProperty,
    hasOwnProp: $207b8ae78bfdf58d$var$hasOwnProperty,
    reduceDescriptors: $207b8ae78bfdf58d$var$reduceDescriptors,
    freezeMethods: $207b8ae78bfdf58d$var$freezeMethods,
    toObjectSet: $207b8ae78bfdf58d$var$toObjectSet,
    toCamelCase: $207b8ae78bfdf58d$var$toCamelCase,
    noop: $207b8ae78bfdf58d$var$noop,
    toFiniteNumber: $207b8ae78bfdf58d$var$toFiniteNumber,
    findKey: $207b8ae78bfdf58d$var$findKey,
    global: $207b8ae78bfdf58d$var$_global,
    isContextDefined: $207b8ae78bfdf58d$var$isContextDefined,
    isSpecCompliantForm: $207b8ae78bfdf58d$var$isSpecCompliantForm,
    toJSONObject: $207b8ae78bfdf58d$var$toJSONObject,
    isAsyncFn: $207b8ae78bfdf58d$var$isAsyncFn,
    isThenable: $207b8ae78bfdf58d$var$isThenable,
    setImmediate: $207b8ae78bfdf58d$var$_setImmediate,
    asap: $207b8ae78bfdf58d$var$asap,
    isIterable: $207b8ae78bfdf58d$var$isIterable
};







'use strict';
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function $8e2384e85b0a4730$var$AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error().stack;
    this.message = message;
    this.name = 'AxiosError';
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
        this.response = response;
        this.status = response.status ? response.status : null;
    }
}
(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).inherits($8e2384e85b0a4730$var$AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).toJSONObject(this.config),
            code: this.code,
            status: this.status
        };
    }
});
const $8e2384e85b0a4730$var$prototype = $8e2384e85b0a4730$var$AxiosError.prototype;
const $8e2384e85b0a4730$var$descriptors = {};
[
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL'
].forEach((code)=>{
    $8e2384e85b0a4730$var$descriptors[code] = {
        value: code
    };
});
Object.defineProperties($8e2384e85b0a4730$var$AxiosError, $8e2384e85b0a4730$var$descriptors);
Object.defineProperty($8e2384e85b0a4730$var$prototype, 'isAxiosError', {
    value: true
});
// eslint-disable-next-line func-names
$8e2384e85b0a4730$var$AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create($8e2384e85b0a4730$var$prototype);
    (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== 'isAxiosError';
    });
    const msg = error && error.message ? error.message : 'Error';
    // Prefer explicit code; otherwise copy the low-level error's code (e.g. ECONNREFUSED)
    const errCode = code == null && error ? error.code : code;
    $8e2384e85b0a4730$var$AxiosError.call(axiosError, msg, errCode, config, request, response);
    // Chain the original error on the standard field; non-enumerable to avoid JSON noise
    if (error && axiosError.cause == null) Object.defineProperty(axiosError, 'cause', {
        value: error,
        configurable: true
    });
    axiosError.name = error && error.name || 'Error';
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
var $8e2384e85b0a4730$export$2e2bcd8739ae039 = $8e2384e85b0a4730$var$AxiosError;


// eslint-disable-next-line strict
var $d6b24b304d49a97e$export$2e2bcd8739ae039 = null;


/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ var $ef9975513e2e43d1$export$a143d493d941bafc;
var $ef9975513e2e43d1$export$e4cf37d7f6fb9e0a;
var $ef9975513e2e43d1$export$f99ded8fe4b79145;
var $ef9975513e2e43d1$export$599f31c3813fae4d;
'use strict';
var $b5831eb1d6c96426$export$a48f0734ac7c2329;
var $b5831eb1d6c96426$export$d622b2ad8d90c771;
var $b5831eb1d6c96426$export$6100ba28696e12de;
'use strict';
$b5831eb1d6c96426$export$a48f0734ac7c2329 = $b5831eb1d6c96426$var$byteLength;
$b5831eb1d6c96426$export$d622b2ad8d90c771 = $b5831eb1d6c96426$var$toByteArray;
$b5831eb1d6c96426$export$6100ba28696e12de = $b5831eb1d6c96426$var$fromByteArray;
var $b5831eb1d6c96426$var$lookup = [];
var $b5831eb1d6c96426$var$revLookup = [];
var $b5831eb1d6c96426$var$Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var $b5831eb1d6c96426$var$code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var $b5831eb1d6c96426$var$i = 0, $b5831eb1d6c96426$var$len = $b5831eb1d6c96426$var$code.length; $b5831eb1d6c96426$var$i < $b5831eb1d6c96426$var$len; ++$b5831eb1d6c96426$var$i){
    $b5831eb1d6c96426$var$lookup[$b5831eb1d6c96426$var$i] = $b5831eb1d6c96426$var$code[$b5831eb1d6c96426$var$i];
    $b5831eb1d6c96426$var$revLookup[$b5831eb1d6c96426$var$code.charCodeAt($b5831eb1d6c96426$var$i)] = $b5831eb1d6c96426$var$i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
$b5831eb1d6c96426$var$revLookup['-'.charCodeAt(0)] = 62;
$b5831eb1d6c96426$var$revLookup['_'.charCodeAt(0)] = 63;
function $b5831eb1d6c96426$var$getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function $b5831eb1d6c96426$var$byteLength(b64) {
    var lens = $b5831eb1d6c96426$var$getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function $b5831eb1d6c96426$var$_byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function $b5831eb1d6c96426$var$toByteArray(b64) {
    var tmp;
    var lens = $b5831eb1d6c96426$var$getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new $b5831eb1d6c96426$var$Arr($b5831eb1d6c96426$var$_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = $b5831eb1d6c96426$var$revLookup[b64.charCodeAt(i)] << 18 | $b5831eb1d6c96426$var$revLookup[b64.charCodeAt(i + 1)] << 12 | $b5831eb1d6c96426$var$revLookup[b64.charCodeAt(i + 2)] << 6 | $b5831eb1d6c96426$var$revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = $b5831eb1d6c96426$var$revLookup[b64.charCodeAt(i)] << 2 | $b5831eb1d6c96426$var$revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = $b5831eb1d6c96426$var$revLookup[b64.charCodeAt(i)] << 10 | $b5831eb1d6c96426$var$revLookup[b64.charCodeAt(i + 1)] << 4 | $b5831eb1d6c96426$var$revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function $b5831eb1d6c96426$var$tripletToBase64(num) {
    return $b5831eb1d6c96426$var$lookup[num >> 18 & 0x3F] + $b5831eb1d6c96426$var$lookup[num >> 12 & 0x3F] + $b5831eb1d6c96426$var$lookup[num >> 6 & 0x3F] + $b5831eb1d6c96426$var$lookup[num & 0x3F];
}
function $b5831eb1d6c96426$var$encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push($b5831eb1d6c96426$var$tripletToBase64(tmp));
    }
    return output.join('');
}
function $b5831eb1d6c96426$var$fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push($b5831eb1d6c96426$var$encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push($b5831eb1d6c96426$var$lookup[tmp >> 2] + $b5831eb1d6c96426$var$lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push($b5831eb1d6c96426$var$lookup[tmp >> 10] + $b5831eb1d6c96426$var$lookup[tmp >> 4 & 0x3F] + $b5831eb1d6c96426$var$lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
}


/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var $a11c6733277d3ca0$export$aafa59e2e03f2942;
var $a11c6733277d3ca0$export$68d8715fc104d294;
$a11c6733277d3ca0$export$aafa59e2e03f2942 = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
$a11c6733277d3ca0$export$68d8715fc104d294 = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};


const $ef9975513e2e43d1$var$customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
 ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
$ef9975513e2e43d1$export$a143d493d941bafc = $ef9975513e2e43d1$var$Buffer;
$ef9975513e2e43d1$export$e4cf37d7f6fb9e0a = $ef9975513e2e43d1$var$SlowBuffer;
$ef9975513e2e43d1$export$f99ded8fe4b79145 = 50;
const $ef9975513e2e43d1$var$K_MAX_LENGTH = 0x7fffffff;
$ef9975513e2e43d1$export$599f31c3813fae4d = $ef9975513e2e43d1$var$K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ $ef9975513e2e43d1$var$Buffer.TYPED_ARRAY_SUPPORT = $ef9975513e2e43d1$var$typedArraySupport();
if (!$ef9975513e2e43d1$var$Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function $ef9975513e2e43d1$var$typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty($ef9975513e2e43d1$var$Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!$ef9975513e2e43d1$var$Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty($ef9975513e2e43d1$var$Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!$ef9975513e2e43d1$var$Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function $ef9975513e2e43d1$var$createBuffer(length) {
    if (length > $ef9975513e2e43d1$var$K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, $ef9975513e2e43d1$var$Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function $ef9975513e2e43d1$var$Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return $ef9975513e2e43d1$var$allocUnsafe(arg);
    }
    return $ef9975513e2e43d1$var$from(arg, encodingOrOffset, length);
}
$ef9975513e2e43d1$var$Buffer.poolSize = 8192 // not used by this implementation
;
function $ef9975513e2e43d1$var$from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return $ef9975513e2e43d1$var$fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return $ef9975513e2e43d1$var$fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if ($ef9975513e2e43d1$var$isInstance(value, ArrayBuffer) || value && $ef9975513e2e43d1$var$isInstance(value.buffer, ArrayBuffer)) return $ef9975513e2e43d1$var$fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && ($ef9975513e2e43d1$var$isInstance(value, SharedArrayBuffer) || value && $ef9975513e2e43d1$var$isInstance(value.buffer, SharedArrayBuffer))) return $ef9975513e2e43d1$var$fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return $ef9975513e2e43d1$var$Buffer.from(valueOf, encodingOrOffset, length);
    const b = $ef9975513e2e43d1$var$fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return $ef9975513e2e43d1$var$Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ $ef9975513e2e43d1$var$Buffer.from = function(value, encodingOrOffset, length) {
    return $ef9975513e2e43d1$var$from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf($ef9975513e2e43d1$var$Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf($ef9975513e2e43d1$var$Buffer, Uint8Array);
function $ef9975513e2e43d1$var$assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function $ef9975513e2e43d1$var$alloc(size, fill, encoding) {
    $ef9975513e2e43d1$var$assertSize(size);
    if (size <= 0) return $ef9975513e2e43d1$var$createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? $ef9975513e2e43d1$var$createBuffer(size).fill(fill, encoding) : $ef9975513e2e43d1$var$createBuffer(size).fill(fill);
    return $ef9975513e2e43d1$var$createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ $ef9975513e2e43d1$var$Buffer.alloc = function(size, fill, encoding) {
    return $ef9975513e2e43d1$var$alloc(size, fill, encoding);
};
function $ef9975513e2e43d1$var$allocUnsafe(size) {
    $ef9975513e2e43d1$var$assertSize(size);
    return $ef9975513e2e43d1$var$createBuffer(size < 0 ? 0 : $ef9975513e2e43d1$var$checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ $ef9975513e2e43d1$var$Buffer.allocUnsafe = function(size) {
    return $ef9975513e2e43d1$var$allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ $ef9975513e2e43d1$var$Buffer.allocUnsafeSlow = function(size) {
    return $ef9975513e2e43d1$var$allocUnsafe(size);
};
function $ef9975513e2e43d1$var$fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!$ef9975513e2e43d1$var$Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    const length = $ef9975513e2e43d1$var$byteLength(string, encoding) | 0;
    let buf = $ef9975513e2e43d1$var$createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function $ef9975513e2e43d1$var$fromArrayLike(array) {
    const length = array.length < 0 ? 0 : $ef9975513e2e43d1$var$checked(array.length) | 0;
    const buf = $ef9975513e2e43d1$var$createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function $ef9975513e2e43d1$var$fromArrayView(arrayView) {
    if ($ef9975513e2e43d1$var$isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return $ef9975513e2e43d1$var$fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return $ef9975513e2e43d1$var$fromArrayLike(arrayView);
}
function $ef9975513e2e43d1$var$fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, $ef9975513e2e43d1$var$Buffer.prototype);
    return buf;
}
function $ef9975513e2e43d1$var$fromObject(obj) {
    if ($ef9975513e2e43d1$var$Buffer.isBuffer(obj)) {
        const len = $ef9975513e2e43d1$var$checked(obj.length) | 0;
        const buf = $ef9975513e2e43d1$var$createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || $ef9975513e2e43d1$var$numberIsNaN(obj.length)) return $ef9975513e2e43d1$var$createBuffer(0);
        return $ef9975513e2e43d1$var$fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return $ef9975513e2e43d1$var$fromArrayLike(obj.data);
}
function $ef9975513e2e43d1$var$checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= $ef9975513e2e43d1$var$K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + $ef9975513e2e43d1$var$K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function $ef9975513e2e43d1$var$SlowBuffer(length) {
    if (+length != length) length = 0;
    return $ef9975513e2e43d1$var$Buffer.alloc(+length);
}
$ef9975513e2e43d1$var$Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== $ef9975513e2e43d1$var$Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
$ef9975513e2e43d1$var$Buffer.compare = function compare(a, b) {
    if ($ef9975513e2e43d1$var$isInstance(a, Uint8Array)) a = $ef9975513e2e43d1$var$Buffer.from(a, a.offset, a.byteLength);
    if ($ef9975513e2e43d1$var$isInstance(b, Uint8Array)) b = $ef9975513e2e43d1$var$Buffer.from(b, b.offset, b.byteLength);
    if (!$ef9975513e2e43d1$var$Buffer.isBuffer(a) || !$ef9975513e2e43d1$var$Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
$ef9975513e2e43d1$var$Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
$ef9975513e2e43d1$var$Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return $ef9975513e2e43d1$var$Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = $ef9975513e2e43d1$var$Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if ($ef9975513e2e43d1$var$isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!$ef9975513e2e43d1$var$Buffer.isBuffer(buf)) buf = $ef9975513e2e43d1$var$Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!$ef9975513e2e43d1$var$Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function $ef9975513e2e43d1$var$byteLength(string, encoding) {
    if ($ef9975513e2e43d1$var$Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || $ef9975513e2e43d1$var$isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return $ef9975513e2e43d1$var$utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return $ef9975513e2e43d1$var$base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : $ef9975513e2e43d1$var$utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
$ef9975513e2e43d1$var$Buffer.byteLength = $ef9975513e2e43d1$var$byteLength;
function $ef9975513e2e43d1$var$slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return $ef9975513e2e43d1$var$hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return $ef9975513e2e43d1$var$utf8Slice(this, start, end);
        case 'ascii':
            return $ef9975513e2e43d1$var$asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return $ef9975513e2e43d1$var$latin1Slice(this, start, end);
        case 'base64':
            return $ef9975513e2e43d1$var$base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return $ef9975513e2e43d1$var$utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
$ef9975513e2e43d1$var$Buffer.prototype._isBuffer = true;
function $ef9975513e2e43d1$var$swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
$ef9975513e2e43d1$var$Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(let i = 0; i < len; i += 2)$ef9975513e2e43d1$var$swap(this, i, i + 1);
    return this;
};
$ef9975513e2e43d1$var$Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(let i = 0; i < len; i += 4){
        $ef9975513e2e43d1$var$swap(this, i, i + 3);
        $ef9975513e2e43d1$var$swap(this, i + 1, i + 2);
    }
    return this;
};
$ef9975513e2e43d1$var$Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(let i = 0; i < len; i += 8){
        $ef9975513e2e43d1$var$swap(this, i, i + 7);
        $ef9975513e2e43d1$var$swap(this, i + 1, i + 6);
        $ef9975513e2e43d1$var$swap(this, i + 2, i + 5);
        $ef9975513e2e43d1$var$swap(this, i + 3, i + 4);
    }
    return this;
};
$ef9975513e2e43d1$var$Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return $ef9975513e2e43d1$var$utf8Slice(this, 0, length);
    return $ef9975513e2e43d1$var$slowToString.apply(this, arguments);
};
$ef9975513e2e43d1$var$Buffer.prototype.toLocaleString = $ef9975513e2e43d1$var$Buffer.prototype.toString;
$ef9975513e2e43d1$var$Buffer.prototype.equals = function equals(b) {
    if (!$ef9975513e2e43d1$var$Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return $ef9975513e2e43d1$var$Buffer.compare(this, b) === 0;
};
$ef9975513e2e43d1$var$Buffer.prototype.inspect = function inspect() {
    let str = '';
    const max = $ef9975513e2e43d1$export$f99ded8fe4b79145;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if ($ef9975513e2e43d1$var$customInspectSymbol) $ef9975513e2e43d1$var$Buffer.prototype[$ef9975513e2e43d1$var$customInspectSymbol] = $ef9975513e2e43d1$var$Buffer.prototype.inspect;
$ef9975513e2e43d1$var$Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if ($ef9975513e2e43d1$var$isInstance(target, Uint8Array)) target = $ef9975513e2e43d1$var$Buffer.from(target, target.offset, target.byteLength);
    if (!$ef9975513e2e43d1$var$Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function $ef9975513e2e43d1$var$bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if ($ef9975513e2e43d1$var$numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = $ef9975513e2e43d1$var$Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if ($ef9975513e2e43d1$var$Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return $ef9975513e2e43d1$var$arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return $ef9975513e2e43d1$var$arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function $ef9975513e2e43d1$var$arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
$ef9975513e2e43d1$var$Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
$ef9975513e2e43d1$var$Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return $ef9975513e2e43d1$var$bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
$ef9975513e2e43d1$var$Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return $ef9975513e2e43d1$var$bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function $ef9975513e2e43d1$var$hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if ($ef9975513e2e43d1$var$numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function $ef9975513e2e43d1$var$utf8Write(buf, string, offset, length) {
    return $ef9975513e2e43d1$var$blitBuffer($ef9975513e2e43d1$var$utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function $ef9975513e2e43d1$var$asciiWrite(buf, string, offset, length) {
    return $ef9975513e2e43d1$var$blitBuffer($ef9975513e2e43d1$var$asciiToBytes(string), buf, offset, length);
}
function $ef9975513e2e43d1$var$base64Write(buf, string, offset, length) {
    return $ef9975513e2e43d1$var$blitBuffer($ef9975513e2e43d1$var$base64ToBytes(string), buf, offset, length);
}
function $ef9975513e2e43d1$var$ucs2Write(buf, string, offset, length) {
    return $ef9975513e2e43d1$var$blitBuffer($ef9975513e2e43d1$var$utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
$ef9975513e2e43d1$var$Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return $ef9975513e2e43d1$var$hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return $ef9975513e2e43d1$var$utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return $ef9975513e2e43d1$var$asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return $ef9975513e2e43d1$var$base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return $ef9975513e2e43d1$var$ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
$ef9975513e2e43d1$var$Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function $ef9975513e2e43d1$var$base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return $b5831eb1d6c96426$export$6100ba28696e12de(buf);
    else return $b5831eb1d6c96426$export$6100ba28696e12de(buf.slice(start, end));
}
function $ef9975513e2e43d1$var$utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return $ef9975513e2e43d1$var$decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const $ef9975513e2e43d1$var$MAX_ARGUMENTS_LENGTH = 0x1000;
function $ef9975513e2e43d1$var$decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= $ef9975513e2e43d1$var$MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = '';
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += $ef9975513e2e43d1$var$MAX_ARGUMENTS_LENGTH));
    return res;
}
function $ef9975513e2e43d1$var$asciiSlice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function $ef9975513e2e43d1$var$latin1Slice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function $ef9975513e2e43d1$var$hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = '';
    for(let i = start; i < end; ++i)out += $ef9975513e2e43d1$var$hexSliceLookupTable[buf[i]];
    return out;
}
function $ef9975513e2e43d1$var$utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
$ef9975513e2e43d1$var$Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, $ef9975513e2e43d1$var$Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function $ef9975513e2e43d1$var$checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
$ef9975513e2e43d1$var$Buffer.prototype.readUintLE = $ef9975513e2e43d1$var$Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
$ef9975513e2e43d1$var$Buffer.prototype.readUintBE = $ef9975513e2e43d1$var$Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
$ef9975513e2e43d1$var$Buffer.prototype.readUint8 = $ef9975513e2e43d1$var$Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, 1, this.length);
    return this[offset];
};
$ef9975513e2e43d1$var$Buffer.prototype.readUint16LE = $ef9975513e2e43d1$var$Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
$ef9975513e2e43d1$var$Buffer.prototype.readUint16BE = $ef9975513e2e43d1$var$Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
$ef9975513e2e43d1$var$Buffer.prototype.readUint32LE = $ef9975513e2e43d1$var$Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
$ef9975513e2e43d1$var$Buffer.prototype.readUint32BE = $ef9975513e2e43d1$var$Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
$ef9975513e2e43d1$var$Buffer.prototype.readBigUInt64LE = $ef9975513e2e43d1$var$defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    $ef9975513e2e43d1$var$validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) $ef9975513e2e43d1$var$boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
$ef9975513e2e43d1$var$Buffer.prototype.readBigUInt64BE = $ef9975513e2e43d1$var$defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    $ef9975513e2e43d1$var$validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) $ef9975513e2e43d1$var$boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
$ef9975513e2e43d1$var$Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
$ef9975513e2e43d1$var$Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
$ef9975513e2e43d1$var$Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
$ef9975513e2e43d1$var$Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
$ef9975513e2e43d1$var$Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
$ef9975513e2e43d1$var$Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
$ef9975513e2e43d1$var$Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
$ef9975513e2e43d1$var$Buffer.prototype.readBigInt64LE = $ef9975513e2e43d1$var$defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    $ef9975513e2e43d1$var$validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) $ef9975513e2e43d1$var$boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
$ef9975513e2e43d1$var$Buffer.prototype.readBigInt64BE = $ef9975513e2e43d1$var$defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    $ef9975513e2e43d1$var$validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) $ef9975513e2e43d1$var$boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
$ef9975513e2e43d1$var$Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, 4, this.length);
    return $a11c6733277d3ca0$export$aafa59e2e03f2942(this, offset, true, 23, 4);
};
$ef9975513e2e43d1$var$Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, 4, this.length);
    return $a11c6733277d3ca0$export$aafa59e2e03f2942(this, offset, false, 23, 4);
};
$ef9975513e2e43d1$var$Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, 8, this.length);
    return $a11c6733277d3ca0$export$aafa59e2e03f2942(this, offset, true, 52, 8);
};
$ef9975513e2e43d1$var$Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkOffset(offset, 8, this.length);
    return $a11c6733277d3ca0$export$aafa59e2e03f2942(this, offset, false, 52, 8);
};
function $ef9975513e2e43d1$var$checkInt(buf, value, offset, ext, max, min) {
    if (!$ef9975513e2e43d1$var$Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
$ef9975513e2e43d1$var$Buffer.prototype.writeUintLE = $ef9975513e2e43d1$var$Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        $ef9975513e2e43d1$var$checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
$ef9975513e2e43d1$var$Buffer.prototype.writeUintBE = $ef9975513e2e43d1$var$Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        $ef9975513e2e43d1$var$checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
$ef9975513e2e43d1$var$Buffer.prototype.writeUint8 = $ef9975513e2e43d1$var$Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
$ef9975513e2e43d1$var$Buffer.prototype.writeUint16LE = $ef9975513e2e43d1$var$Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
$ef9975513e2e43d1$var$Buffer.prototype.writeUint16BE = $ef9975513e2e43d1$var$Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
$ef9975513e2e43d1$var$Buffer.prototype.writeUint32LE = $ef9975513e2e43d1$var$Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
$ef9975513e2e43d1$var$Buffer.prototype.writeUint32BE = $ef9975513e2e43d1$var$Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function $ef9975513e2e43d1$var$wrtBigUInt64LE(buf, value, offset, min, max) {
    $ef9975513e2e43d1$var$checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function $ef9975513e2e43d1$var$wrtBigUInt64BE(buf, value, offset, min, max) {
    $ef9975513e2e43d1$var$checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
$ef9975513e2e43d1$var$Buffer.prototype.writeBigUInt64LE = $ef9975513e2e43d1$var$defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return $ef9975513e2e43d1$var$wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
$ef9975513e2e43d1$var$Buffer.prototype.writeBigUInt64BE = $ef9975513e2e43d1$var$defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return $ef9975513e2e43d1$var$wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
$ef9975513e2e43d1$var$Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        $ef9975513e2e43d1$var$checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
$ef9975513e2e43d1$var$Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        $ef9975513e2e43d1$var$checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
$ef9975513e2e43d1$var$Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
$ef9975513e2e43d1$var$Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
$ef9975513e2e43d1$var$Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
$ef9975513e2e43d1$var$Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
$ef9975513e2e43d1$var$Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
$ef9975513e2e43d1$var$Buffer.prototype.writeBigInt64LE = $ef9975513e2e43d1$var$defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return $ef9975513e2e43d1$var$wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
$ef9975513e2e43d1$var$Buffer.prototype.writeBigInt64BE = $ef9975513e2e43d1$var$defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return $ef9975513e2e43d1$var$wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
function $ef9975513e2e43d1$var$checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function $ef9975513e2e43d1$var$writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    $a11c6733277d3ca0$export$68d8715fc104d294(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
$ef9975513e2e43d1$var$Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return $ef9975513e2e43d1$var$writeFloat(this, value, offset, true, noAssert);
};
$ef9975513e2e43d1$var$Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return $ef9975513e2e43d1$var$writeFloat(this, value, offset, false, noAssert);
};
function $ef9975513e2e43d1$var$writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ef9975513e2e43d1$var$checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    $a11c6733277d3ca0$export$68d8715fc104d294(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
$ef9975513e2e43d1$var$Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return $ef9975513e2e43d1$var$writeDouble(this, value, offset, true, noAssert);
};
$ef9975513e2e43d1$var$Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return $ef9975513e2e43d1$var$writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
$ef9975513e2e43d1$var$Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!$ef9975513e2e43d1$var$Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
$ef9975513e2e43d1$var$Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !$ef9975513e2e43d1$var$Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = $ef9975513e2e43d1$var$Buffer.isBuffer(val) ? val : $ef9975513e2e43d1$var$Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const $ef9975513e2e43d1$var$errors = {};
function $ef9975513e2e43d1$var$E(sym, getMessage, Base) {
    $ef9975513e2e43d1$var$errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, 'message', {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value: value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
$ef9975513e2e43d1$var$E('ERR_BUFFER_OUT_OF_BOUNDS', function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return 'Attempt to access memory outside buffer bounds';
}, RangeError);
$ef9975513e2e43d1$var$E('ERR_INVALID_ARG_TYPE', function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
$ef9975513e2e43d1$var$E('ERR_OUT_OF_RANGE', function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = $ef9975513e2e43d1$var$addNumericalSeparator(String(input));
    else if (typeof input === 'bigint') {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = $ef9975513e2e43d1$var$addNumericalSeparator(received);
        received += 'n';
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function $ef9975513e2e43d1$var$addNumericalSeparator(val) {
    let res = '';
    let i = val.length;
    const start = val[0] === '-' ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function $ef9975513e2e43d1$var$checkBounds(buf, offset, byteLength) {
    $ef9975513e2e43d1$var$validateNumber(offset, 'offset');
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) $ef9975513e2e43d1$var$boundsError(offset, buf.length - (byteLength + 1));
}
function $ef9975513e2e43d1$var$checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === 'bigint' ? 'n' : '';
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new $ef9975513e2e43d1$var$errors.ERR_OUT_OF_RANGE('value', range, value);
    }
    $ef9975513e2e43d1$var$checkBounds(buf, offset, byteLength);
}
function $ef9975513e2e43d1$var$validateNumber(value, name) {
    if (typeof value !== 'number') throw new $ef9975513e2e43d1$var$errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
}
function $ef9975513e2e43d1$var$boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        $ef9975513e2e43d1$var$validateNumber(value, type);
        throw new $ef9975513e2e43d1$var$errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
    }
    if (length < 0) throw new $ef9975513e2e43d1$var$errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new $ef9975513e2e43d1$var$errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const $ef9975513e2e43d1$var$INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function $ef9975513e2e43d1$var$base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace($ef9975513e2e43d1$var$INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function $ef9975513e2e43d1$var$utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function $ef9975513e2e43d1$var$asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function $ef9975513e2e43d1$var$utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function $ef9975513e2e43d1$var$base64ToBytes(str) {
    return $b5831eb1d6c96426$export$d622b2ad8d90c771($ef9975513e2e43d1$var$base64clean(str));
}
function $ef9975513e2e43d1$var$blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function $ef9975513e2e43d1$var$isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function $ef9975513e2e43d1$var$numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const $ef9975513e2e43d1$var$hexSliceLookupTable = function() {
    const alphabet = '0123456789abcdef';
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function $ef9975513e2e43d1$var$defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? $ef9975513e2e43d1$var$BufferBigIntNotDefined : fn;
}
function $ef9975513e2e43d1$var$BufferBigIntNotDefined() {
    throw new Error('BigInt not supported');
}


var $44917dff7c4f6839$require$Buffer = $ef9975513e2e43d1$export$a143d493d941bafc;
'use strict';
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function $44917dff7c4f6839$var$isVisitable(thing) {
    return (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isPlainObject(thing) || (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function $44917dff7c4f6839$var$removeBrackets(key) {
    return (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).endsWith(key, '[]') ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function $44917dff7c4f6839$var$renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = $44917dff7c4f6839$var$removeBrackets(token);
        return !dots && i ? '[' + token + ']' : token;
    }).join(dots ? '.' : '');
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function $44917dff7c4f6839$var$isFlatArray(arr) {
    return (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArray(arr) && !arr.some($44917dff7c4f6839$var$isVisitable);
}
const $44917dff7c4f6839$var$predicates = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).toFlatObject((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039), {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function $44917dff7c4f6839$var$toFormData(obj, formData, options) {
    if (!(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isObject(obj)) throw new TypeError('target must be an object');
    // eslint-disable-next-line no-param-reassign
    formData = formData || new ((0, $d6b24b304d49a97e$export$2e2bcd8739ae039) || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
    const useBlob = _Blob && (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isSpecCompliantForm(formData);
    if (!(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isFunction(visitor)) throw new TypeError('visitor must be a function');
    function convertValue(value) {
        if (value === null) return '';
        if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isDate(value)) return value.toISOString();
        if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isBoolean(value)) return value.toString();
        if (!useBlob && (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isBlob(value)) throw new (0, $8e2384e85b0a4730$export$2e2bcd8739ae039)('Blob is not supported. Use a Buffer instead.');
        if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArrayBuffer(value) || (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isTypedArray(value)) return useBlob && typeof Blob === 'function' ? new Blob([
            value
        ]) : $44917dff7c4f6839$require$Buffer.from(value);
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === 'object') {
            if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).endsWith(key, '{}')) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArray(value) && $44917dff7c4f6839$var$isFlatArray(value) || ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isFileList(value) || (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).endsWith(key, '[]')) && (arr = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = $44917dff7c4f6839$var$removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? $44917dff7c4f6839$var$renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
                });
                return false;
            }
        }
        if ($44917dff7c4f6839$var$isVisitable(value)) return true;
        formData.append($44917dff7c4f6839$var$renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign($44917dff7c4f6839$var$predicates, {
        defaultVisitor: defaultVisitor,
        convertValue: convertValue,
        isVisitable: $44917dff7c4f6839$var$isVisitable
    });
    function build(value, path) {
        if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) throw Error('Circular reference detected in ' + path.join('.'));
        stack.push(value);
        (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).forEach(value, function each(el, key) {
            const result = !((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isUndefined(el) || el === null) && visitor.call(formData, el, (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) build(el, path ? path.concat(key) : [
                key
            ]);
        });
        stack.pop();
    }
    if (!(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isObject(obj)) throw new TypeError('data must be an object');
    build(obj);
    return formData;
}
var $44917dff7c4f6839$export$2e2bcd8739ae039 = $44917dff7c4f6839$var$toFormData;


'use strict';
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function $19fdee72518207be$var$encode(str) {
    const charMap = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\x00'
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function $19fdee72518207be$var$AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, $44917dff7c4f6839$export$2e2bcd8739ae039)(params, this, options);
}
const $19fdee72518207be$var$prototype = $19fdee72518207be$var$AxiosURLSearchParams.prototype;
$19fdee72518207be$var$prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
$19fdee72518207be$var$prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, $19fdee72518207be$var$encode);
    } : $19fdee72518207be$var$encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '').join('&');
};
var $19fdee72518207be$export$2e2bcd8739ae039 = $19fdee72518207be$var$AxiosURLSearchParams;


'use strict';
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function $f86730f6895fb421$var$encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+');
}
function $f86730f6895fb421$export$2e2bcd8739ae039(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    const _encode = options && options.encode || $f86730f6895fb421$var$encode;
    if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isFunction(options)) options = {
        serialize: options
    };
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) serializedParams = serializeFn(params, options);
    else serializedParams = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isURLSearchParams(params) ? params.toString() : new (0, $19fdee72518207be$export$2e2bcd8739ae039)(params, options).toString(_encode);
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
}



'use strict';
class $48487cdfb0a9959f$var$InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled: fulfilled,
            rejected: rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) this.handlers[id] = null;
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) this.handlers = [];
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) fn(h);
        });
    }
}
var $48487cdfb0a9959f$export$2e2bcd8739ae039 = $48487cdfb0a9959f$var$InterceptorManager;





'use strict';
var $6a6d9fc333d212d7$export$2e2bcd8739ae039 = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};






'use strict';
var $66d4aff250516f98$export$2e2bcd8739ae039 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : (0, $19fdee72518207be$export$2e2bcd8739ae039);


'use strict';
var $639437d686a434ba$export$2e2bcd8739ae039 = typeof FormData !== 'undefined' ? FormData : null;


'use strict';
var $6e121dc41381bd65$export$2e2bcd8739ae039 = typeof Blob !== 'undefined' ? Blob : null;


var $d7bb8a53bcaa1544$export$2e2bcd8739ae039 = {
    isBrowser: true,
    classes: {
        URLSearchParams: $66d4aff250516f98$export$2e2bcd8739ae039,
        FormData: $639437d686a434ba$export$2e2bcd8739ae039,
        Blob: $6e121dc41381bd65$export$2e2bcd8739ae039
    },
    protocols: [
        'http',
        'https',
        'file',
        'blob',
        'url',
        'data'
    ]
};


var $bfcb40227610b930$exports = {};

$parcel$export($bfcb40227610b930$exports, "hasBrowserEnv", () => $bfcb40227610b930$export$c4996c4b7b93b0bf);
$parcel$export($bfcb40227610b930$exports, "navigator", () => $bfcb40227610b930$export$ec7c8efa7f5790ae);
$parcel$export($bfcb40227610b930$exports, "hasStandardBrowserEnv", () => $bfcb40227610b930$export$c0bcc9250309d66);
$parcel$export($bfcb40227610b930$exports, "hasStandardBrowserWebWorkerEnv", () => $bfcb40227610b930$export$c81692cf5af97dac);
$parcel$export($bfcb40227610b930$exports, "origin", () => $bfcb40227610b930$export$f710a83a91838a36);
const $bfcb40227610b930$export$c4996c4b7b93b0bf = typeof window !== 'undefined' && typeof document !== 'undefined';
const $bfcb40227610b930$export$ec7c8efa7f5790ae = typeof navigator === 'object' && navigator || undefined;
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const $bfcb40227610b930$export$c0bcc9250309d66 = $bfcb40227610b930$export$c4996c4b7b93b0bf && (!$bfcb40227610b930$export$ec7c8efa7f5790ae || [
    'ReactNative',
    'NativeScript',
    'NS'
].indexOf($bfcb40227610b930$export$ec7c8efa7f5790ae.product) < 0);
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const $bfcb40227610b930$export$c81692cf5af97dac = (()=>{
    return typeof WorkerGlobalScope !== 'undefined' && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
})();
const $bfcb40227610b930$export$f710a83a91838a36 = $bfcb40227610b930$export$c4996c4b7b93b0bf && window.location.href || 'http://localhost';


var $f62877cfffa1ea52$export$2e2bcd8739ae039 = {
    ...$bfcb40227610b930$exports,
    ...(0, $d7bb8a53bcaa1544$export$2e2bcd8739ae039)
};


'use strict';
function $f7f0cd45917da732$export$2e2bcd8739ae039(data, options) {
    return (0, $44917dff7c4f6839$export$2e2bcd8739ae039)(data, new (0, $f62877cfffa1ea52$export$2e2bcd8739ae039).classes.URLSearchParams(), {
        visitor: function(value, key, path, helpers) {
            if ((0, $f62877cfffa1ea52$export$2e2bcd8739ae039).isNode && (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isBuffer(value)) {
                this.append(key, value.toString('base64'));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        },
        ...options
    });
}




'use strict';
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function $6c1a49321d28d797$var$parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === '[]' ? '' : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function $6c1a49321d28d797$var$arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function $6c1a49321d28d797$var$formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        if (name === '__proto__') return true;
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArray(target) ? target.length : name;
        if (isLast) {
            if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).hasOwnProp(target, name)) target[name] = [
                target[name],
                value
            ];
            else target[name] = value;
            return !isNumericKey;
        }
        if (!target[name] || !(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isObject(target[name])) target[name] = [];
        const result = buildPath(path, value, target[name], index);
        if (result && (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArray(target[name])) target[name] = $6c1a49321d28d797$var$arrayToObject(target[name]);
        return !isNumericKey;
    }
    if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isFormData(formData) && (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isFunction(formData.entries)) {
        const obj = {};
        (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).forEachEntry(formData, (name, value)=>{
            buildPath($6c1a49321d28d797$var$parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
var $6c1a49321d28d797$export$2e2bcd8739ae039 = $6c1a49321d28d797$var$formDataToJSON;


'use strict';
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function $f655ee9ea7d998e2$var$stringifySafely(rawValue, parser, encoder) {
    if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).trim(rawValue);
    } catch (e) {
        if (e.name !== 'SyntaxError') throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
const $f655ee9ea7d998e2$var$defaults = {
    transitional: (0, $6a6d9fc333d212d7$export$2e2bcd8739ae039),
    adapter: [
        'xhr',
        'http',
        'fetch'
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || '';
            const hasJSONContentType = contentType.indexOf('application/json') > -1;
            const isObjectPayload = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isObject(data);
            if (isObjectPayload && (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isHTMLForm(data)) data = new FormData(data);
            const isFormData = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isFormData(data);
            if (isFormData) return hasJSONContentType ? JSON.stringify((0, $6c1a49321d28d797$export$2e2bcd8739ae039)(data)) : data;
            if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArrayBuffer(data) || (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isBuffer(data) || (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isStream(data) || (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isFile(data) || (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isBlob(data) || (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isReadableStream(data)) return data;
            if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArrayBufferView(data)) return data.buffer;
            if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isURLSearchParams(data)) {
                headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf('application/x-www-form-urlencoded') > -1) return (0, $f7f0cd45917da732$export$2e2bcd8739ae039)(data, this.formSerializer).toString();
                if ((isFileList = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, $44917dff7c4f6839$export$2e2bcd8739ae039)(isFileList ? {
                        'files[]': data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType('application/json', false);
                return $f655ee9ea7d998e2$var$stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || $f655ee9ea7d998e2$var$defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === 'json';
            if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isResponse(data) || (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isReadableStream(data)) return data;
            if (data && (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data, this.parseReviver);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === 'SyntaxError') throw (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).from(e, (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).ERR_BAD_RESPONSE, this, null, this.response);
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (0, $f62877cfffa1ea52$export$2e2bcd8739ae039).classes.FormData,
        Blob: (0, $f62877cfffa1ea52$export$2e2bcd8739ae039).classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': undefined
        }
    }
};
(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).forEach([
    'delete',
    'get',
    'head',
    'post',
    'put',
    'patch'
], (method)=>{
    $f655ee9ea7d998e2$var$defaults.headers[method] = {};
});
var $f655ee9ea7d998e2$export$2e2bcd8739ae039 = $f655ee9ea7d998e2$var$defaults;




'use strict';
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const $1932d96f49ffdf31$var$ignoreDuplicateOf = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
]);
var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ $1932d96f49ffdf31$export$2e2bcd8739ae039 = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
        i = line.indexOf(':');
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && $1932d96f49ffdf31$var$ignoreDuplicateOf[key]) return;
        if (key === 'set-cookie') {
            if (parsed[key]) parsed[key].push(val);
            else parsed[key] = [
                val
            ];
        } else parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    });
    return parsed;
};


'use strict';
const $0320fb55cfcd1e21$var$$internals = Symbol('internals');
function $0320fb55cfcd1e21$var$normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function $0320fb55cfcd1e21$var$normalizeValue(value) {
    if (value === false || value == null) return value;
    return (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArray(value) ? value.map($0320fb55cfcd1e21$var$normalizeValue) : String(value);
}
function $0320fb55cfcd1e21$var$parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str))tokens[match[1]] = match[2];
    return tokens;
}
const $0320fb55cfcd1e21$var$isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function $0320fb55cfcd1e21$var$matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isFunction(filter)) return filter.call(this, value, header);
    if (isHeaderNameFilter) value = header;
    if (!(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isString(value)) return;
    if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isString(filter)) return value.indexOf(filter) !== -1;
    if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isRegExp(filter)) return filter.test(value);
}
function $0320fb55cfcd1e21$var$formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function $0320fb55cfcd1e21$var$buildAccessors(obj, header) {
    const accessorName = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).toCamelCase(' ' + header);
    [
        'get',
        'set',
        'has'
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class $0320fb55cfcd1e21$var$AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = $0320fb55cfcd1e21$var$normalizeHeader(_header);
            if (!lHeader) throw new Error('header name must be a non-empty string');
            const key = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) self[key || _header] = $0320fb55cfcd1e21$var$normalizeValue(_value);
        }
        const setHeaders = (headers, _rewrite)=>(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
        else if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isString(header) && (header = header.trim()) && !$0320fb55cfcd1e21$var$isValidHeaderName(header)) setHeaders((0, $1932d96f49ffdf31$export$2e2bcd8739ae039)(header), valueOrRewrite);
        else if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isObject(header) && (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isIterable(header)) {
            let obj = {}, dest, key;
            for (const entry of header){
                if (!(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArray(entry)) throw TypeError('Object iterator must return a key-value pair');
                obj[key = entry[0]] = (dest = obj[key]) ? (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArray(dest) ? [
                    ...dest,
                    entry[1]
                ] : [
                    dest,
                    entry[1]
                ] : entry[1];
            }
            setHeaders(obj, valueOrRewrite);
        } else header != null && setHeader(valueOrRewrite, header, rewrite);
        return this;
    }
    get(header, parser) {
        header = $0320fb55cfcd1e21$var$normalizeHeader(header);
        if (header) {
            const key = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) return value;
                if (parser === true) return $0320fb55cfcd1e21$var$parseTokens(value);
                if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isFunction(parser)) return parser.call(this, value, key);
                if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isRegExp(parser)) return parser.exec(value);
                throw new TypeError('parser must be boolean|regexp|function');
            }
        }
    }
    has(header, matcher) {
        header = $0320fb55cfcd1e21$var$normalizeHeader(header);
        if (header) {
            const key = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || $0320fb55cfcd1e21$var$matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = $0320fb55cfcd1e21$var$normalizeHeader(_header);
            if (_header) {
                const key = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).findKey(self, _header);
                if (key && (!matcher || $0320fb55cfcd1e21$var$matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArray(header)) header.forEach(deleteHeader);
        else deleteHeader(header);
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || $0320fb55cfcd1e21$var$matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).forEach(this, (value, header)=>{
            const key = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).findKey(headers, header);
            if (key) {
                self[key] = $0320fb55cfcd1e21$var$normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? $0320fb55cfcd1e21$var$formatHeader(header) : String(header).trim();
            if (normalized !== header) delete self[header];
            self[normalized] = $0320fb55cfcd1e21$var$normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArray(value) ? value.join(', ') : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ': ' + value).join('\n');
    }
    getSetCookie() {
        return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
        return 'AxiosHeaders';
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$0320fb55cfcd1e21$var$$internals] = this[$0320fb55cfcd1e21$var$$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = $0320fb55cfcd1e21$var$normalizeHeader(_header);
            if (!accessors[lHeader]) {
                $0320fb55cfcd1e21$var$buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
$0320fb55cfcd1e21$var$AxiosHeaders.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization'
]);
// reserved names hotfix
(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).reduceDescriptors($0320fb55cfcd1e21$var$AxiosHeaders.prototype, ({ value: value }, key)=>{
    let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
    return {
        get: ()=>value,
        set (headerValue) {
            this[mapped] = headerValue;
        }
    };
});
(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).freezeMethods($0320fb55cfcd1e21$var$AxiosHeaders);
var $0320fb55cfcd1e21$export$2e2bcd8739ae039 = $0320fb55cfcd1e21$var$AxiosHeaders;


'use strict';
function $77bb8e4aa580cad4$export$2e2bcd8739ae039(fns, response) {
    const config = this || (0, $f655ee9ea7d998e2$export$2e2bcd8739ae039);
    const context = response || config;
    const headers = (0, $0320fb55cfcd1e21$export$2e2bcd8739ae039).from(context.headers);
    let data = context.data;
    (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}


'use strict';
function $f95719f0d9c2f687$export$2e2bcd8739ae039(value) {
    return !!(value && value.__CANCEL__);
}





'use strict';
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function $6b9e659f0d79df29$var$CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).call(this, message == null ? 'canceled' : message, (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).ERR_CANCELED, config, request);
    this.name = 'CanceledError';
}
(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).inherits($6b9e659f0d79df29$var$CanceledError, (0, $8e2384e85b0a4730$export$2e2bcd8739ae039), {
    __CANCEL__: true
});
var $6b9e659f0d79df29$export$2e2bcd8739ae039 = $6b9e659f0d79df29$var$CanceledError;







'use strict';
function $7ab2e51391f97ede$export$2e2bcd8739ae039(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new (0, $8e2384e85b0a4730$export$2e2bcd8739ae039)('Request failed with status code ' + response.status, [
        (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).ERR_BAD_REQUEST,
        (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
}





'use strict';
function $74d9812717b82792$export$2e2bcd8739ae039(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
}




'use strict';
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function $aa2d5be4d86b2c57$var$speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) firstSampleTS = now;
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) tail = (tail + 1) % samplesCount;
        if (now - firstSampleTS < min) return;
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
var $aa2d5be4d86b2c57$export$2e2bcd8739ae039 = $aa2d5be4d86b2c57$var$speedometer;


/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */ function $85206a1f7a177fa1$var$throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1000 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now())=>{
        timestamp = now;
        lastArgs = null;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        fn(...args);
    };
    const throttled = (...args)=>{
        const now = Date.now();
        const passed = now - timestamp;
        if (passed >= threshold) invoke(args, now);
        else {
            lastArgs = args;
            if (!timer) timer = setTimeout(()=>{
                timer = null;
                invoke(lastArgs);
            }, threshold - passed);
        }
    };
    const flush = ()=>lastArgs && invoke(lastArgs);
    return [
        throttled,
        flush
    ];
}
var $85206a1f7a177fa1$export$2e2bcd8739ae039 = $85206a1f7a177fa1$var$throttle;



const $75174aac2bd6c6f8$export$c1b28109d46c3592 = (listener, isDownloadStream, freq = 3)=>{
    let bytesNotified = 0;
    const _speedometer = (0, $aa2d5be4d86b2c57$export$2e2bcd8739ae039)(50, 250);
    return (0, $85206a1f7a177fa1$export$2e2bcd8739ae039)((e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded: loaded,
            total: total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e,
            lengthComputable: total != null,
            [isDownloadStream ? 'download' : 'upload']: true
        };
        listener(data);
    }, freq);
};
const $75174aac2bd6c6f8$export$d9fadd12586c18d6 = (total, throttled)=>{
    const lengthComputable = total != null;
    return [
        (loaded)=>throttled[0]({
                lengthComputable: lengthComputable,
                total: total,
                loaded: loaded
            }),
        throttled[1]
    ];
};
const $75174aac2bd6c6f8$export$5d35863c355a22a9 = (fn)=>(...args)=>(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).asap(()=>fn(...args));





var $23f9b355b0b26614$export$2e2bcd8739ae039 = (0, $f62877cfffa1ea52$export$2e2bcd8739ae039).hasStandardBrowserEnv ? ((origin, isMSIE)=>(url)=>{
        url = new URL(url, (0, $f62877cfffa1ea52$export$2e2bcd8739ae039).origin);
        return origin.protocol === url.protocol && origin.host === url.host && (isMSIE || origin.port === url.port);
    })(new URL((0, $f62877cfffa1ea52$export$2e2bcd8739ae039).origin), (0, $f62877cfffa1ea52$export$2e2bcd8739ae039).navigator && /(msie|trident)/i.test((0, $f62877cfffa1ea52$export$2e2bcd8739ae039).navigator.userAgent)) : ()=>true;




var $362af089ce1ad97d$export$2e2bcd8739ae039 = (0, $f62877cfffa1ea52$export$2e2bcd8739ae039).hasStandardBrowserEnv ? // Standard browser envs support document.cookie
{
    write (name, value, expires, path, domain, secure) {
        const cookie = [
            name + '=' + encodeURIComponent(value)
        ];
        (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());
        (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isString(path) && cookie.push('path=' + path);
        (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isString(domain) && cookie.push('domain=' + domain);
        secure === true && cookie.push('secure');
        document.cookie = cookie.join('; ');
    },
    read (name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return match ? decodeURIComponent(match[3]) : null;
    },
    remove (name) {
        this.write(name, '', Date.now() - 86400000);
    }
} : // Non-standard browser env (web workers, react-native) lack needed support.
{
    write () {},
    read () {
        return null;
    },
    remove () {}
};


'use strict';
function $172fd722a9f67ded$export$2e2bcd8739ae039(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}


'use strict';
function $78f4bd106b87d955$export$2e2bcd8739ae039(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}


'use strict';
function $a6379cf3ef98cc5e$export$2e2bcd8739ae039(baseURL, requestedURL, allowAbsoluteUrls) {
    let isRelativeUrl = !(0, $172fd722a9f67ded$export$2e2bcd8739ae039)(requestedURL);
    if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) return (0, $78f4bd106b87d955$export$2e2bcd8739ae039)(baseURL, requestedURL);
    return requestedURL;
}




'use strict';
const $b3a2bbc0eeb29c0a$var$headersToObject = (thing)=>thing instanceof (0, $0320fb55cfcd1e21$export$2e2bcd8739ae039) ? {
        ...thing
    } : thing;
function $b3a2bbc0eeb29c0a$export$2e2bcd8739ae039(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, prop, caseless) {
        if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isPlainObject(target) && (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isPlainObject(source)) return (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).merge.call({
            caseless: caseless
        }, target, source);
        else if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isPlainObject(source)) return (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).merge({}, source);
        else if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, prop, caseless) {
        if (!(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isUndefined(b)) return getMergedValue(a, b, prop, caseless);
        else if (!(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isUndefined(a)) return getMergedValue(undefined, a, prop, caseless);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isUndefined(b)) return getMergedValue(undefined, b);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isUndefined(b)) return getMergedValue(undefined, b);
        else if (!(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isUndefined(a)) return getMergedValue(undefined, a);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) return getMergedValue(a, b);
        else if (prop in config1) return getMergedValue(undefined, a);
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        withXSRFToken: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b, prop)=>mergeDeepProperties($b3a2bbc0eeb29c0a$var$headersToObject(a), $b3a2bbc0eeb29c0a$var$headersToObject(b), prop, true)
    };
    (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).forEach(Object.keys({
        ...config1,
        ...config2
    }), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}




var $a6cae180a30e9934$export$2e2bcd8739ae039 = (config)=>{
    const newConfig = (0, $b3a2bbc0eeb29c0a$export$2e2bcd8739ae039)({}, config);
    let { data: data, withXSRFToken: withXSRFToken, xsrfHeaderName: xsrfHeaderName, xsrfCookieName: xsrfCookieName, headers: headers, auth: auth } = newConfig;
    newConfig.headers = headers = (0, $0320fb55cfcd1e21$export$2e2bcd8739ae039).from(headers);
    newConfig.url = (0, $f86730f6895fb421$export$2e2bcd8739ae039)((0, $a6379cf3ef98cc5e$export$2e2bcd8739ae039)(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);
    // HTTP basic authentication
    if (auth) headers.set('Authorization', 'Basic ' + btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : '')));
    if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isFormData(data)) {
        if ((0, $f62877cfffa1ea52$export$2e2bcd8739ae039).hasStandardBrowserEnv || (0, $f62877cfffa1ea52$export$2e2bcd8739ae039).hasStandardBrowserWebWorkerEnv) headers.setContentType(undefined); // browser handles it
        else if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isFunction(data.getHeaders)) {
            // Node.js FormData (like form-data package)
            const formHeaders = data.getHeaders();
            // Only set safe headers to avoid overwriting security headers
            const allowedHeaders = [
                'content-type',
                'content-length'
            ];
            Object.entries(formHeaders).forEach(([key, val])=>{
                if (allowedHeaders.includes(key.toLowerCase())) headers.set(key, val);
            });
        }
    }
    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if ((0, $f62877cfffa1ea52$export$2e2bcd8739ae039).hasStandardBrowserEnv) {
        withXSRFToken && (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
        if (withXSRFToken || withXSRFToken !== false && (0, $23f9b355b0b26614$export$2e2bcd8739ae039)(newConfig.url)) {
            // Add xsrf header
            const xsrfValue = xsrfHeaderName && xsrfCookieName && (0, $362af089ce1ad97d$export$2e2bcd8739ae039).read(xsrfCookieName);
            if (xsrfValue) headers.set(xsrfHeaderName, xsrfValue);
        }
    }
    return newConfig;
};


const $e8de8c9e63b57be8$var$isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
var $e8de8c9e63b57be8$export$2e2bcd8739ae039 = $e8de8c9e63b57be8$var$isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        const _config = (0, $a6cae180a30e9934$export$2e2bcd8739ae039)(config);
        let requestData = _config.data;
        const requestHeaders = (0, $0320fb55cfcd1e21$export$2e2bcd8739ae039).from(_config.headers).normalize();
        let { responseType: responseType, onUploadProgress: onUploadProgress, onDownloadProgress: onDownloadProgress } = _config;
        let onCanceled;
        let uploadThrottled, downloadThrottled;
        let flushUpload, flushDownload;
        function done() {
            flushUpload && flushUpload(); // flush events
            flushDownload && flushDownload(); // flush events
            _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
            _config.signal && _config.signal.removeEventListener('abort', onCanceled);
        }
        let request = new XMLHttpRequest();
        request.open(_config.method.toUpperCase(), _config.url, true);
        // Set the request timeout in MS
        request.timeout = _config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            const responseHeaders = (0, $0320fb55cfcd1e21$export$2e2bcd8739ae039).from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            (0, $7ab2e51391f97ede$export$2e2bcd8739ae039)(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ('onloadend' in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new (0, $8e2384e85b0a4730$export$2e2bcd8739ae039)('Request aborted', (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError(event) {
            // Browsers deliver a ProgressEvent in XHR onerror
            // (message may be empty; when present, surface it)
            // See https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/error_event
            const msg = event && event.message ? event.message : 'Network Error';
            const err = new (0, $8e2384e85b0a4730$export$2e2bcd8739ae039)(msg, (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).ERR_NETWORK, config, request);
            // attach the underlying event for consumers who want details
            err.event = event || null;
            reject(err);
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
            const transitional = _config.transitional || (0, $6a6d9fc333d212d7$export$2e2bcd8739ae039);
            if (_config.timeoutErrorMessage) timeoutErrorMessage = _config.timeoutErrorMessage;
            reject(new (0, $8e2384e85b0a4730$export$2e2bcd8739ae039)(timeoutErrorMessage, transitional.clarifyTimeoutError ? (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).ETIMEDOUT : (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ('setRequestHeader' in request) (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isUndefined(_config.withCredentials)) request.withCredentials = !!_config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== 'json') request.responseType = _config.responseType;
        // Handle progress if needed
        if (onDownloadProgress) {
            [downloadThrottled, flushDownload] = (0, $75174aac2bd6c6f8$export$c1b28109d46c3592)(onDownloadProgress, true);
            request.addEventListener('progress', downloadThrottled);
        }
        // Not all browsers support upload events
        if (onUploadProgress && request.upload) {
            [uploadThrottled, flushUpload] = (0, $75174aac2bd6c6f8$export$c1b28109d46c3592)(onUploadProgress);
            request.upload.addEventListener('progress', uploadThrottled);
            request.upload.addEventListener('loadend', flushUpload);
        }
        if (_config.cancelToken || _config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) return;
                reject(!cancel || cancel.type ? new (0, $6b9e659f0d79df29$export$2e2bcd8739ae039)(null, config, request) : cancel);
                request.abort();
                request = null;
            };
            _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
            if (_config.signal) _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
        }
        const protocol = (0, $74d9812717b82792$export$2e2bcd8739ae039)(_config.url);
        if (protocol && (0, $f62877cfffa1ea52$export$2e2bcd8739ae039).protocols.indexOf(protocol) === -1) {
            reject(new (0, $8e2384e85b0a4730$export$2e2bcd8739ae039)('Unsupported protocol ' + protocol + ':', (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};








const $79af9ac326728dc2$var$composeSignals = (signals, timeout)=>{
    const { length: length } = signals = signals ? signals.filter(Boolean) : [];
    if (timeout || length) {
        let controller = new AbortController();
        let aborted;
        const onabort = function(reason) {
            if (!aborted) {
                aborted = true;
                unsubscribe();
                const err = reason instanceof Error ? reason : this.reason;
                controller.abort(err instanceof (0, $8e2384e85b0a4730$export$2e2bcd8739ae039) ? err : new (0, $6b9e659f0d79df29$export$2e2bcd8739ae039)(err instanceof Error ? err.message : err));
            }
        };
        let timer = timeout && setTimeout(()=>{
            timer = null;
            onabort(new (0, $8e2384e85b0a4730$export$2e2bcd8739ae039)(`timeout ${timeout} of ms exceeded`, (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).ETIMEDOUT));
        }, timeout);
        const unsubscribe = ()=>{
            if (signals) {
                timer && clearTimeout(timer);
                timer = null;
                signals.forEach((signal)=>{
                    signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
                });
                signals = null;
            }
        };
        signals.forEach((signal)=>signal.addEventListener('abort', onabort));
        const { signal: signal } = controller;
        signal.unsubscribe = ()=>(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).asap(unsubscribe);
        return signal;
    }
};
var $79af9ac326728dc2$export$2e2bcd8739ae039 = $79af9ac326728dc2$var$composeSignals;


const $3d2b264fb4e45e58$export$71b051935044bd5d = function*(chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
        yield chunk;
        return;
    }
    let pos = 0;
    let end;
    while(pos < len){
        end = pos + chunkSize;
        yield chunk.slice(pos, end);
        pos = end;
    }
};
const $3d2b264fb4e45e58$export$f9f241124ee3198e = async function*(iterable, chunkSize) {
    for await (const chunk of $3d2b264fb4e45e58$var$readStream(iterable))yield* $3d2b264fb4e45e58$export$71b051935044bd5d(chunk, chunkSize);
};
const $3d2b264fb4e45e58$var$readStream = async function*(stream) {
    if (stream[Symbol.asyncIterator]) {
        yield* stream;
        return;
    }
    const reader = stream.getReader();
    try {
        for(;;){
            const { done: done, value: value } = await reader.read();
            if (done) break;
            yield value;
        }
    } finally{
        await reader.cancel();
    }
};
const $3d2b264fb4e45e58$export$b0119225647bd83 = (stream, chunkSize, onProgress, onFinish)=>{
    const iterator = $3d2b264fb4e45e58$export$f9f241124ee3198e(stream, chunkSize);
    let bytes = 0;
    let done;
    let _onFinish = (e)=>{
        if (!done) {
            done = true;
            onFinish && onFinish(e);
        }
    };
    return new ReadableStream({
        async pull (controller) {
            try {
                const { done: done, value: value } = await iterator.next();
                if (done) {
                    _onFinish();
                    controller.close();
                    return;
                }
                let len = value.byteLength;
                if (onProgress) {
                    let loadedBytes = bytes += len;
                    onProgress(loadedBytes);
                }
                controller.enqueue(new Uint8Array(value));
            } catch (err) {
                _onFinish(err);
                throw err;
            }
        },
        cancel (reason) {
            _onFinish(reason);
            return iterator.return();
        }
    }, {
        highWaterMark: 2
    });
};






const $3f16b9e9b6b27709$var$DEFAULT_CHUNK_SIZE = 65536;
const { isFunction: $3f16b9e9b6b27709$var$isFunction } = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039);
const $3f16b9e9b6b27709$var$globalFetchAPI = (({ fetch: fetch, Request: Request, Response: Response })=>({
        fetch: fetch,
        Request: Request,
        Response: Response
    }))((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).global);
const { ReadableStream: $3f16b9e9b6b27709$var$ReadableStream, TextEncoder: $3f16b9e9b6b27709$var$TextEncoder } = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).global;
const $3f16b9e9b6b27709$var$test = (fn, ...args)=>{
    try {
        return !!fn(...args);
    } catch (e) {
        return false;
    }
};
const $3f16b9e9b6b27709$var$factory = (env)=>{
    const { fetch: fetch, Request: Request, Response: Response } = Object.assign({}, $3f16b9e9b6b27709$var$globalFetchAPI, env);
    const isFetchSupported = $3f16b9e9b6b27709$var$isFunction(fetch);
    const isRequestSupported = $3f16b9e9b6b27709$var$isFunction(Request);
    const isResponseSupported = $3f16b9e9b6b27709$var$isFunction(Response);
    if (!isFetchSupported) return false;
    const isReadableStreamSupported = isFetchSupported && $3f16b9e9b6b27709$var$isFunction($3f16b9e9b6b27709$var$ReadableStream);
    const encodeText = isFetchSupported && (typeof $3f16b9e9b6b27709$var$TextEncoder === 'function' ? ((encoder)=>(str)=>encoder.encode(str))(new $3f16b9e9b6b27709$var$TextEncoder()) : async (str)=>new Uint8Array(await new Request(str).arrayBuffer()));
    const supportsRequestStream = isRequestSupported && isReadableStreamSupported && $3f16b9e9b6b27709$var$test(()=>{
        let duplexAccessed = false;
        const hasContentType = new Request((0, $f62877cfffa1ea52$export$2e2bcd8739ae039).origin, {
            body: new $3f16b9e9b6b27709$var$ReadableStream(),
            method: 'POST',
            get duplex () {
                duplexAccessed = true;
                return 'half';
            }
        }).headers.has('Content-Type');
        return duplexAccessed && !hasContentType;
    });
    const supportsResponseStream = isResponseSupported && isReadableStreamSupported && $3f16b9e9b6b27709$var$test(()=>(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isReadableStream(new Response('').body));
    const resolvers = {
        stream: supportsResponseStream && ((res)=>res.body)
    };
    isFetchSupported && (()=>{
        [
            'text',
            'arrayBuffer',
            'blob',
            'formData',
            'stream'
        ].forEach((type)=>{
            !resolvers[type] && (resolvers[type] = (res, config)=>{
                let method = res && res[type];
                if (method) return method.call(res);
                throw new (0, $8e2384e85b0a4730$export$2e2bcd8739ae039)(`Response type '${type}' is not supported`, (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).ERR_NOT_SUPPORT, config);
            });
        });
    })();
    const getBodyLength = async (body)=>{
        if (body == null) return 0;
        if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isBlob(body)) return body.size;
        if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isSpecCompliantForm(body)) {
            const _request = new Request((0, $f62877cfffa1ea52$export$2e2bcd8739ae039).origin, {
                method: 'POST',
                body: body
            });
            return (await _request.arrayBuffer()).byteLength;
        }
        if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArrayBufferView(body) || (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArrayBuffer(body)) return body.byteLength;
        if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isURLSearchParams(body)) body = body + '';
        if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isString(body)) return (await encodeText(body)).byteLength;
    };
    const resolveBodyLength = async (headers, body)=>{
        const length = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).toFiniteNumber(headers.getContentLength());
        return length == null ? getBodyLength(body) : length;
    };
    return async (config)=>{
        let { url: url, method: method, data: data, signal: signal, cancelToken: cancelToken, timeout: timeout, onDownloadProgress: onDownloadProgress, onUploadProgress: onUploadProgress, responseType: responseType, headers: headers, withCredentials: withCredentials = 'same-origin', fetchOptions: fetchOptions } = (0, $a6cae180a30e9934$export$2e2bcd8739ae039)(config);
        responseType = responseType ? (responseType + '').toLowerCase() : 'text';
        let composedSignal = (0, $79af9ac326728dc2$export$2e2bcd8739ae039)([
            signal,
            cancelToken && cancelToken.toAbortSignal()
        ], timeout);
        let request = null;
        const unsubscribe = composedSignal && composedSignal.unsubscribe && (()=>{
            composedSignal.unsubscribe();
        });
        let requestContentLength;
        try {
            if (onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
                let _request = new Request(url, {
                    method: 'POST',
                    body: data,
                    duplex: "half"
                });
                let contentTypeHeader;
                if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) headers.setContentType(contentTypeHeader);
                if (_request.body) {
                    const [onProgress, flush] = (0, $75174aac2bd6c6f8$export$d9fadd12586c18d6)(requestContentLength, (0, $75174aac2bd6c6f8$export$c1b28109d46c3592)((0, $75174aac2bd6c6f8$export$5d35863c355a22a9)(onUploadProgress)));
                    data = (0, $3d2b264fb4e45e58$export$b0119225647bd83)(_request.body, $3f16b9e9b6b27709$var$DEFAULT_CHUNK_SIZE, onProgress, flush);
                }
            }
            if (!(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isString(withCredentials)) withCredentials = withCredentials ? 'include' : 'omit';
            // Cloudflare Workers throws when credentials are defined
            // see https://github.com/cloudflare/workerd/issues/902
            const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;
            const resolvedOptions = {
                ...fetchOptions,
                signal: composedSignal,
                method: method.toUpperCase(),
                headers: headers.normalize().toJSON(),
                body: data,
                duplex: "half",
                credentials: isCredentialsSupported ? withCredentials : undefined
            };
            request = isRequestSupported && new Request(url, resolvedOptions);
            let response = await (isRequestSupported ? fetch(request, fetchOptions) : fetch(url, resolvedOptions));
            const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');
            if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
                const options = {};
                [
                    'status',
                    'statusText',
                    'headers'
                ].forEach((prop)=>{
                    options[prop] = response[prop];
                });
                const responseContentLength = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).toFiniteNumber(response.headers.get('content-length'));
                const [onProgress, flush] = onDownloadProgress && (0, $75174aac2bd6c6f8$export$d9fadd12586c18d6)(responseContentLength, (0, $75174aac2bd6c6f8$export$c1b28109d46c3592)((0, $75174aac2bd6c6f8$export$5d35863c355a22a9)(onDownloadProgress), true)) || [];
                response = new Response((0, $3d2b264fb4e45e58$export$b0119225647bd83)(response.body, $3f16b9e9b6b27709$var$DEFAULT_CHUNK_SIZE, onProgress, ()=>{
                    flush && flush();
                    unsubscribe && unsubscribe();
                }), options);
            }
            responseType = responseType || 'text';
            let responseData = await resolvers[(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).findKey(resolvers, responseType) || 'text'](response, config);
            !isStreamResponse && unsubscribe && unsubscribe();
            return await new Promise((resolve, reject)=>{
                (0, $7ab2e51391f97ede$export$2e2bcd8739ae039)(resolve, reject, {
                    data: responseData,
                    headers: (0, $0320fb55cfcd1e21$export$2e2bcd8739ae039).from(response.headers),
                    status: response.status,
                    statusText: response.statusText,
                    config: config,
                    request: request
                });
            });
        } catch (err) {
            unsubscribe && unsubscribe();
            if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) throw Object.assign(new (0, $8e2384e85b0a4730$export$2e2bcd8739ae039)('Network Error', (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).ERR_NETWORK, config, request), {
                cause: err.cause || err
            });
            throw (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).from(err, err && err.code, config, request);
        }
    };
};
const $3f16b9e9b6b27709$var$seedCache = new Map();
const $3f16b9e9b6b27709$export$3105c6651375d4fa = (config)=>{
    let env = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).merge.call({
        skipUndefined: true
    }, $3f16b9e9b6b27709$var$globalFetchAPI, config ? config.env : null);
    const { fetch: fetch, Request: Request, Response: Response } = env;
    const seeds = [
        Request,
        Response,
        fetch
    ];
    let len = seeds.length, i = len, seed, target, map = $3f16b9e9b6b27709$var$seedCache;
    while(i--){
        seed = seeds[i];
        target = map.get(seed);
        target === undefined && map.set(seed, target = i ? new Map() : $3f16b9e9b6b27709$var$factory(env));
        map = target;
    }
    return target;
};
const $3f16b9e9b6b27709$var$adapter = $3f16b9e9b6b27709$export$3105c6651375d4fa();
var $3f16b9e9b6b27709$export$2e2bcd8739ae039 = $3f16b9e9b6b27709$var$adapter;



const $68d72406d648b7cb$var$knownAdapters = {
    http: (0, $d6b24b304d49a97e$export$2e2bcd8739ae039),
    xhr: (0, $e8de8c9e63b57be8$export$2e2bcd8739ae039),
    fetch: {
        get: $3f16b9e9b6b27709$export$3105c6651375d4fa
    }
};
(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).forEach($68d72406d648b7cb$var$knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, 'name', {
                value: value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, 'adapterName', {
            value: value
        });
    }
});
const $68d72406d648b7cb$var$renderReason = (reason)=>`- ${reason}`;
const $68d72406d648b7cb$var$isResolvedHandle = (adapter)=>(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isFunction(adapter) || adapter === null || adapter === false;
var $68d72406d648b7cb$export$2e2bcd8739ae039 = {
    getAdapter: (adapters, config)=>{
        adapters = (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isArray(adapters) ? adapters : [
            adapters
        ];
        const { length: length } = adapters;
        let nameOrAdapter;
        let adapter;
        const rejectedReasons = {};
        for(let i = 0; i < length; i++){
            nameOrAdapter = adapters[i];
            let id;
            adapter = nameOrAdapter;
            if (!$68d72406d648b7cb$var$isResolvedHandle(nameOrAdapter)) {
                adapter = $68d72406d648b7cb$var$knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
                if (adapter === undefined) throw new (0, $8e2384e85b0a4730$export$2e2bcd8739ae039)(`Unknown adapter '${id}'`);
            }
            if (adapter && ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isFunction(adapter) || (adapter = adapter.get(config)))) break;
            rejectedReasons[id || '#' + i] = adapter;
        }
        if (!adapter) {
            const reasons = Object.entries(rejectedReasons).map(([id, state])=>`adapter ${id} ` + (state === false ? 'is not supported by the environment' : 'is not available in the build'));
            let s = length ? reasons.length > 1 ? 'since :\n' + reasons.map($68d72406d648b7cb$var$renderReason).join('\n') : ' ' + $68d72406d648b7cb$var$renderReason(reasons[0]) : 'as no adapter specified';
            throw new (0, $8e2384e85b0a4730$export$2e2bcd8739ae039)(`There is no suitable adapter to dispatch the request ` + s, 'ERR_NOT_SUPPORT');
        }
        return adapter;
    },
    adapters: $68d72406d648b7cb$var$knownAdapters
};


'use strict';
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function $97ea9cf8a18b30bc$var$throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new (0, $6b9e659f0d79df29$export$2e2bcd8739ae039)(null, config);
}
function $97ea9cf8a18b30bc$export$2e2bcd8739ae039(config) {
    $97ea9cf8a18b30bc$var$throwIfCancellationRequested(config);
    config.headers = (0, $0320fb55cfcd1e21$export$2e2bcd8739ae039).from(config.headers);
    // Transform request data
    config.data = (0, $77bb8e4aa580cad4$export$2e2bcd8739ae039).call(config, config.transformRequest);
    if ([
        'post',
        'put',
        'patch'
    ].indexOf(config.method) !== -1) config.headers.setContentType('application/x-www-form-urlencoded', false);
    const adapter = (0, $68d72406d648b7cb$export$2e2bcd8739ae039).getAdapter(config.adapter || (0, $f655ee9ea7d998e2$export$2e2bcd8739ae039).adapter, config);
    return adapter(config).then(function onAdapterResolution(response) {
        $97ea9cf8a18b30bc$var$throwIfCancellationRequested(config);
        // Transform response data
        response.data = (0, $77bb8e4aa580cad4$export$2e2bcd8739ae039).call(config, config.transformResponse, response);
        response.headers = (0, $0320fb55cfcd1e21$export$2e2bcd8739ae039).from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, $f95719f0d9c2f687$export$2e2bcd8739ae039)(reason)) {
            $97ea9cf8a18b30bc$var$throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = (0, $77bb8e4aa580cad4$export$2e2bcd8739ae039).call(config, config.transformResponse, reason.response);
                reason.response.headers = (0, $0320fb55cfcd1e21$export$2e2bcd8739ae039).from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}




const $1a6ac04c4ed21171$export$a4ad2735b021c132 = "1.12.0";



'use strict';
const $022113c9b39839e5$var$validators = {};
// eslint-disable-next-line func-names
[
    'object',
    'boolean',
    'number',
    'function',
    'string',
    'symbol'
].forEach((type, i)=>{
    $022113c9b39839e5$var$validators[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
});
const $022113c9b39839e5$var$deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ $022113c9b39839e5$var$validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return '[Axios v' + (0, $1a6ac04c4ed21171$export$a4ad2735b021c132) + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) throw new (0, $8e2384e85b0a4730$export$2e2bcd8739ae039)(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).ERR_DEPRECATED);
        if (version && !$022113c9b39839e5$var$deprecatedWarnings[opt]) {
            $022113c9b39839e5$var$deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
$022113c9b39839e5$var$validators.spelling = function spelling(correctSpelling) {
    return (value, opt)=>{
        // eslint-disable-next-line no-console
        console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
        return true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function $022113c9b39839e5$var$assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') throw new (0, $8e2384e85b0a4730$export$2e2bcd8739ae039)('options must be an object', (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).ERR_BAD_OPTION_VALUE);
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new (0, $8e2384e85b0a4730$export$2e2bcd8739ae039)('option ' + opt + ' must be ' + result, (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new (0, $8e2384e85b0a4730$export$2e2bcd8739ae039)('Unknown option ' + opt, (0, $8e2384e85b0a4730$export$2e2bcd8739ae039).ERR_BAD_OPTION);
    }
}
var $022113c9b39839e5$export$2e2bcd8739ae039 = {
    assertOptions: $022113c9b39839e5$var$assertOptions,
    validators: $022113c9b39839e5$var$validators
};



'use strict';
const $feab34975de79d68$var$validators = (0, $022113c9b39839e5$export$2e2bcd8739ae039).validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class $feab34975de79d68$var$Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig || {};
        this.interceptors = {
            request: new (0, $48487cdfb0a9959f$export$2e2bcd8739ae039)(),
            response: new (0, $48487cdfb0a9959f$export$2e2bcd8739ae039)()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ async request(configOrUrl, config) {
        try {
            return await this._request(configOrUrl, config);
        } catch (err) {
            if (err instanceof Error) {
                let dummy = {};
                Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
                // slice off the Error: ... line
                const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
                try {
                    if (!err.stack) err.stack = stack;
                    else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) err.stack += '\n' + stack;
                } catch (e) {
                // ignore the case where "stack" is an un-writable property
                }
            }
            throw err;
        }
    }
    _request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === 'string') {
            config = config || {};
            config.url = configOrUrl;
        } else config = configOrUrl || {};
        config = (0, $b3a2bbc0eeb29c0a$export$2e2bcd8739ae039)(this.defaults, config);
        const { transitional: transitional, paramsSerializer: paramsSerializer, headers: headers } = config;
        if (transitional !== undefined) (0, $022113c9b39839e5$export$2e2bcd8739ae039).assertOptions(transitional, {
            silentJSONParsing: $feab34975de79d68$var$validators.transitional($feab34975de79d68$var$validators.boolean),
            forcedJSONParsing: $feab34975de79d68$var$validators.transitional($feab34975de79d68$var$validators.boolean),
            clarifyTimeoutError: $feab34975de79d68$var$validators.transitional($feab34975de79d68$var$validators.boolean)
        }, false);
        if (paramsSerializer != null) {
            if ((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isFunction(paramsSerializer)) config.paramsSerializer = {
                serialize: paramsSerializer
            };
            else (0, $022113c9b39839e5$export$2e2bcd8739ae039).assertOptions(paramsSerializer, {
                encode: $feab34975de79d68$var$validators.function,
                serialize: $feab34975de79d68$var$validators.function
            }, true);
        }
        // Set config.allowAbsoluteUrls
        if (config.allowAbsoluteUrls !== undefined) ;
        else if (this.defaults.allowAbsoluteUrls !== undefined) config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
        else config.allowAbsoluteUrls = true;
        (0, $022113c9b39839e5$export$2e2bcd8739ae039).assertOptions(config, {
            baseUrl: $feab34975de79d68$var$validators.spelling('baseURL'),
            withXsrfToken: $feab34975de79d68$var$validators.spelling('withXSRFToken')
        }, true);
        // Set config.method
        config.method = (config.method || this.defaults.method || 'get').toLowerCase();
        // Flatten headers
        let contextHeaders = headers && (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).merge(headers.common, headers[config.method]);
        headers && (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).forEach([
            'delete',
            'get',
            'head',
            'post',
            'put',
            'patch',
            'common'
        ], (method)=>{
            delete headers[method];
        });
        config.headers = (0, $0320fb55cfcd1e21$export$2e2bcd8739ae039).concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) return;
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                (0, $97ea9cf8a18b30bc$export$2e2bcd8739ae039).bind(this),
                undefined
            ];
            chain.unshift(...requestInterceptorChain);
            chain.push(...responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len)promise = promise.then(chain[i++], chain[i++]);
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = (0, $97ea9cf8a18b30bc$export$2e2bcd8739ae039).call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len)promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        return promise;
    }
    getUri(config) {
        config = (0, $b3a2bbc0eeb29c0a$export$2e2bcd8739ae039)(this.defaults, config);
        const fullPath = (0, $a6379cf3ef98cc5e$export$2e2bcd8739ae039)(config.baseURL, config.url, config.allowAbsoluteUrls);
        return (0, $f86730f6895fb421$export$2e2bcd8739ae039)(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).forEach([
    'delete',
    'get',
    'head',
    'options'
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ $feab34975de79d68$var$Axios.prototype[method] = function(url, config) {
        return this.request((0, $b3a2bbc0eeb29c0a$export$2e2bcd8739ae039)(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
(0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, $b3a2bbc0eeb29c0a$export$2e2bcd8739ae039)(config || {}, {
                method: method,
                headers: isForm ? {
                    'Content-Type': 'multipart/form-data'
                } : {},
                url: url,
                data: data
            }));
        };
    }
    $feab34975de79d68$var$Axios.prototype[method] = generateHTTPMethod();
    $feab34975de79d68$var$Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
var $feab34975de79d68$export$2e2bcd8739ae039 = $feab34975de79d68$var$Axios;







'use strict';
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class $8f8ba861670e188d$var$CancelToken {
    constructor(executor){
        if (typeof executor !== 'function') throw new TypeError('executor must be a function.');
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0)token._listeners[i](cancel);
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) // Cancellation has already been requested
            return;
            token.reason = new (0, $6b9e659f0d79df29$export$2e2bcd8739ae039)(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) this._listeners.push(listener);
        else this._listeners = [
            listener
        ];
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) return;
        const index = this._listeners.indexOf(listener);
        if (index !== -1) this._listeners.splice(index, 1);
    }
    toAbortSignal() {
        const controller = new AbortController();
        const abort = (err)=>{
            controller.abort(err);
        };
        this.subscribe(abort);
        controller.signal.unsubscribe = ()=>this.unsubscribe(abort);
        return controller.signal;
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new $8f8ba861670e188d$var$CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token: token,
            cancel: cancel
        };
    }
}
var $8f8ba861670e188d$export$2e2bcd8739ae039 = $8f8ba861670e188d$var$CancelToken;






'use strict';
function $b63ecc8e6caef130$export$2e2bcd8739ae039(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}



'use strict';
function $3f86f703d2dc56eb$export$2e2bcd8739ae039(payload) {
    return (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isObject(payload) && payload.isAxiosError === true;
}




const $009b9f2b1d13f3a7$var$HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries($009b9f2b1d13f3a7$var$HttpStatusCode).forEach(([key, value])=>{
    $009b9f2b1d13f3a7$var$HttpStatusCode[value] = key;
});
var $009b9f2b1d13f3a7$export$2e2bcd8739ae039 = $009b9f2b1d13f3a7$var$HttpStatusCode;


'use strict';
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function $53c1b9125021de64$var$createInstance(defaultConfig) {
    const context = new (0, $feab34975de79d68$export$2e2bcd8739ae039)(defaultConfig);
    const instance = (0, $14d9e05617c9f7dc$export$2e2bcd8739ae039)((0, $feab34975de79d68$export$2e2bcd8739ae039).prototype.request, context);
    // Copy axios.prototype to instance
    (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).extend(instance, (0, $feab34975de79d68$export$2e2bcd8739ae039).prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    (0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return $53c1b9125021de64$var$createInstance((0, $b3a2bbc0eeb29c0a$export$2e2bcd8739ae039)(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const $53c1b9125021de64$var$axios = $53c1b9125021de64$var$createInstance((0, $f655ee9ea7d998e2$export$2e2bcd8739ae039));
// Expose Axios class to allow class inheritance
$53c1b9125021de64$var$axios.Axios = (0, $feab34975de79d68$export$2e2bcd8739ae039);
// Expose Cancel & CancelToken
$53c1b9125021de64$var$axios.CanceledError = (0, $6b9e659f0d79df29$export$2e2bcd8739ae039);
$53c1b9125021de64$var$axios.CancelToken = (0, $8f8ba861670e188d$export$2e2bcd8739ae039);
$53c1b9125021de64$var$axios.isCancel = (0, $f95719f0d9c2f687$export$2e2bcd8739ae039);
$53c1b9125021de64$var$axios.VERSION = (0, $1a6ac04c4ed21171$export$a4ad2735b021c132);
$53c1b9125021de64$var$axios.toFormData = (0, $44917dff7c4f6839$export$2e2bcd8739ae039);
// Expose AxiosError class
$53c1b9125021de64$var$axios.AxiosError = (0, $8e2384e85b0a4730$export$2e2bcd8739ae039);
// alias for CanceledError for backward compatibility
$53c1b9125021de64$var$axios.Cancel = $53c1b9125021de64$var$axios.CanceledError;
// Expose all/spread
$53c1b9125021de64$var$axios.all = function all(promises) {
    return Promise.all(promises);
};
$53c1b9125021de64$var$axios.spread = (0, $b63ecc8e6caef130$export$2e2bcd8739ae039);
// Expose isAxiosError
$53c1b9125021de64$var$axios.isAxiosError = (0, $3f86f703d2dc56eb$export$2e2bcd8739ae039);
// Expose mergeConfig
$53c1b9125021de64$var$axios.mergeConfig = (0, $b3a2bbc0eeb29c0a$export$2e2bcd8739ae039);
$53c1b9125021de64$var$axios.AxiosHeaders = (0, $0320fb55cfcd1e21$export$2e2bcd8739ae039);
$53c1b9125021de64$var$axios.formToJSON = (thing)=>(0, $6c1a49321d28d797$export$2e2bcd8739ae039)((0, $207b8ae78bfdf58d$export$2e2bcd8739ae039).isHTMLForm(thing) ? new FormData(thing) : thing);
$53c1b9125021de64$var$axios.getAdapter = (0, $68d72406d648b7cb$export$2e2bcd8739ae039).getAdapter;
$53c1b9125021de64$var$axios.HttpStatusCode = (0, $009b9f2b1d13f3a7$export$2e2bcd8739ae039);
$53c1b9125021de64$var$axios.default = $53c1b9125021de64$var$axios;
var // this module should only have a default export
$53c1b9125021de64$export$2e2bcd8739ae039 = $53c1b9125021de64$var$axios;


// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const { Axios: $66b50f0b94f1f583$export$1c00760e9e5a4e95, AxiosError: $66b50f0b94f1f583$export$c1fbed17c2f6a328, CanceledError: $66b50f0b94f1f583$export$1ab0c6b20d94fa14, isCancel: $66b50f0b94f1f583$export$3b22524397b493c6, CancelToken: $66b50f0b94f1f583$export$fd08e3cb425f0d61, VERSION: $66b50f0b94f1f583$export$a4ad2735b021c132, all: $66b50f0b94f1f583$export$84bf76cd7afc7469, Cancel: $66b50f0b94f1f583$export$848c9b7ead0df967, isAxiosError: $66b50f0b94f1f583$export$fbafdbe06a5b5a9a, spread: $66b50f0b94f1f583$export$3ae0fd4797ed47c8, toFormData: $66b50f0b94f1f583$export$10ae0d317ea97f8b, AxiosHeaders: $66b50f0b94f1f583$export$4e7d6ff0f3e6520, HttpStatusCode: $66b50f0b94f1f583$export$a972f69c851492b3, formToJSON: $66b50f0b94f1f583$export$86d7c59254d6a2c9, getAdapter: $66b50f0b94f1f583$export$17ddc20a97d669e2, mergeConfig: $66b50f0b94f1f583$export$7ec1ebcfa9d8bd6a } = (0, $53c1b9125021de64$export$2e2bcd8739ae039);


const $fe88969e812010fb$var$body = document.querySelector('body');
const $fe88969e812010fb$export$4c67a568b2e7f1af = ()=>{
    const alert = document.querySelector('.alert');
    if (alert) $fe88969e812010fb$var$body.removeChild(alert);
};
const $fe88969e812010fb$export$c8c497ba354ffdce = (status, message)=>{
    $fe88969e812010fb$export$4c67a568b2e7f1af();
    const alert = `<div class='alert ${status === 'success' ? 'alert--success' : 'alert--error'}'>${message}</div>`;
    $fe88969e812010fb$var$body.insertAdjacentHTML('afterbegin', alert);
};


const $6f862145ad694b17$export$6741169286fa782c = async (tourId)=>{
    try {
        console.log(tourId);
        const stripeLink = await (0, $53c1b9125021de64$export$2e2bcd8739ae039).post(`http://127.0.0.1:3000/api/v1/booking/checkout-session/${tourId}`);
        location.assign(stripeLink.data.url);
    } catch (err) {
        (0, $fe88969e812010fb$export$c8c497ba354ffdce)(error, err);
        window.setTimeout(()=>{
            (0, $fe88969e812010fb$export$4c67a568b2e7f1af)();
        }, 2000);
    }
};




const $83b3af8716f6203b$export$596d806903d1f59e = async (email, password)=>{
    try {
        const res = await (0, $53c1b9125021de64$export$2e2bcd8739ae039).post('http://127.0.0.1:3000/api/v1/users/login', {
            email: email,
            password: password
        });
        if (res.data.status === 'success') {
            (0, $fe88969e812010fb$export$c8c497ba354ffdce)('success', 'logged in successfully!');
            window.setTimeout(()=>{
                location.assign('/');
            }, 1000);
        }
    } catch (err) {
        (0, $fe88969e812010fb$export$c8c497ba354ffdce)('error', 'email or password incorrect');
        window.setTimeout(()=>{
            (0, $fe88969e812010fb$export$4c67a568b2e7f1af)();
        }, 1000);
        console.log(err);
    }
};
const $83b3af8716f6203b$export$a0973bcfe11b05c9 = async ()=>{
    try {
        const logout = await (0, $53c1b9125021de64$export$2e2bcd8739ae039).get('http://127.0.0.1:3000/api/v1/users/logout');
        if (logout.data.status === 'success') {
            (0, $fe88969e812010fb$export$c8c497ba354ffdce)('success', 'logged out successfully!');
            window.setTimeout(()=>{
                location.assign('/');
            // location.reload(true);
            }, 1000);
        }
    } catch (err) {
        (0, $fe88969e812010fb$export$c8c497ba354ffdce)('error', 'failed to logout!');
        window.setTimeout(()=>{
            (0, $fe88969e812010fb$export$4c67a568b2e7f1af)();
        }, 1000);
    }
};


const $cd51d635984bcf89$export$d49c9aa30b771d59 = (loca)=>{
    const map = L.map('map', {
        scrollWheelZoom: false
    }).setView([
        loca[0].coordinates[1],
        loca[0].coordinates[0]
    ], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 5,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    //looping locations
    loca.forEach((val)=>{
        const marker = L.marker([
            val.coordinates[1],
            val.coordinates[0]
        ]).addTo(map);
        marker.bindPopup(val.description).openPopup();
    });
};




const $692cc511aa95aa6d$export$8ddaddf355aae59c = async (data, type)=>{
    try {
        const link = type === 'me' ? 'http://127.0.0.1:3000/api/v1/users/updateMe' : 'http://127.0.0.1:3000/api/v1/users/updatePassword';
        const message = type === 'me' ? 'User updated successfully' : 'Password updated successfully';
        const user = await (0, $53c1b9125021de64$export$2e2bcd8739ae039).patch(link, data);
        user.data.status = 'success';
        (0, $fe88969e812010fb$export$c8c497ba354ffdce)('success', message);
        window.setTimeout(()=>{
            location.reload(true);
        }, 1000);
    } catch (err) {
        console.log(err);
        (0, $fe88969e812010fb$export$c8c497ba354ffdce)('fail', err.response.data.message);
        window.setTimeout(()=>{
            (0, $fe88969e812010fb$export$4c67a568b2e7f1af)();
        }, 1000);
    }
};


let $a85f43711575e853$var$loca = document.querySelector('#map')?.getAttribute('data-location');
let $a85f43711575e853$var$loginForm = document.querySelector('.login-form');
let $a85f43711575e853$var$logoutButton = document.querySelector('.logout');
let $a85f43711575e853$var$userFormData = document.querySelector('.form-user-data');
let $a85f43711575e853$var$userPasswordForm = document.querySelector('.form-user-settings');
let $a85f43711575e853$var$bookTour = document.querySelector('.bookTour');
if ($a85f43711575e853$var$loca) {
    $a85f43711575e853$var$loca = JSON.parse($a85f43711575e853$var$loca);
    (0, $cd51d635984bcf89$export$d49c9aa30b771d59)($a85f43711575e853$var$loca);
}
if ($a85f43711575e853$var$loginForm) $a85f43711575e853$var$loginForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const email = document.querySelector('#email.form__input').value;
    const password = document.querySelector('#password.form__input').value;
    await (0, $83b3af8716f6203b$export$596d806903d1f59e)(email, password);
});
if ($a85f43711575e853$var$logoutButton) $a85f43711575e853$var$logoutButton.addEventListener('click', async (e)=>{
    await (0, $83b3af8716f6203b$export$a0973bcfe11b05c9)();
});
if ($a85f43711575e853$var$userFormData) $a85f43711575e853$var$userFormData.addEventListener('submit', async (e)=>{
    e.preventDefault();
    //this is the old way of doint the
    // const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    //now we create key value pair of form so it is recognized by the server itself
    const data = new FormData();
    data.append('name', document.getElementById('name').value);
    data.append('email', document.getElementById('email').value);
    data.append('photo', document.getElementById('photo').files[0]); //including the file since we have upload single file so...
    //the data is absolutely fine with the ajax request to server
    await (0, $692cc511aa95aa6d$export$8ddaddf355aae59c)(data, 'me');
});
if ($a85f43711575e853$var$userPasswordForm) $a85f43711575e853$var$userPasswordForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    document.querySelector('.password-change-button').textContent = 'updating...';
    const previousPassword = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await (0, $692cc511aa95aa6d$export$8ddaddf355aae59c)({
        previousPassword: previousPassword,
        password: password,
        passwordConfirm: passwordConfirm
    }, 'password');
    document.querySelector('.password-change-button').textContent = 'SAVE PASSWORD';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
});
if ($a85f43711575e853$var$bookTour) $a85f43711575e853$var$bookTour.addEventListener('click', (e)=>{
    const { tourid: tourid } = e.target.dataset;
    (0, $6f862145ad694b17$export$6741169286fa782c)(tourid);
});

})();
//# sourceMappingURL=index.js.map
