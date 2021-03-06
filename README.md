<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# nextDataType

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the next larger array [data type][@stdlib/array/dtypes] of the same kind.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-next-dtype
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var nextDataType = require( '@stdlib/array-next-dtype' );
```

#### nextDataType( \[dtype] )

If provided a `dtype` argument, returns the next larger array [data type][@stdlib/array/dtypes] of the same kind.

```javascript
var out = nextDataType( 'float32' );
// returns 'float64'
```

If a [data type][@stdlib/array/dtypes] does not have a next larger [data type][@stdlib/array/dtypes] or the next larger data type is not supported, the function returns `-1`.

```javascript
var out = nextDataType( 'complex128' );
// returns -1
```

If not provided a `dtype` argument, the function returns a table.

```javascript
var out = nextDataType();
// returns {...}
```

If provided an unrecognized or unsupported `dtype`, the function returns `null`.

```javascript
var out = nextDataType( 'foo' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/array-dtypes' );
var nextDataType = require( '@stdlib/array-next-dtype' );

var DTYPES;
var dt;
var i;

// Get the list of supported array data types:
DTYPES = dtypes();

// Print the next larger data type for each supported data type...
for ( i = 0; i < DTYPES.length; i++ ) {
    dt = nextDataType( DTYPES[ i ] );
    console.log( '%s => %s', DTYPES[ i ], dt );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/dtype`][@stdlib/array/dtype]</span><span class="delimiter">: </span><span class="description">return the data type of an array.</span>
-   <span class="package-name">[`@stdlib/array/dtypes`][@stdlib/array/dtypes]</span><span class="delimiter">: </span><span class="description">list of array data types.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-next-dtype.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-next-dtype

[test-image]: https://github.com/stdlib-js/array-next-dtype/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-next-dtype/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-next-dtype/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-next-dtype?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-next-dtype.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-next-dtype/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-next-dtype/tree/deno
[umd-url]: https://github.com/stdlib-js/array-next-dtype/tree/umd
[esm-url]: https://github.com/stdlib-js/array-next-dtype/tree/esm
[branches-url]: https://github.com/stdlib-js/array-next-dtype/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-next-dtype/main/LICENSE

<!-- <related-links> -->

[@stdlib/array/dtype]: https://github.com/stdlib-js/array-dtype

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array-dtypes

<!-- </related-links> -->

</section>

<!-- /.links -->
