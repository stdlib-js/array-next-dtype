/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var dtypes = require( '@stdlib/array-dtypes' );
var pkg = require( './../package.json' ).name;
var nextDataType = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = nextDataType();
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::dtype', function benchmark( b ) {
	var out;
	var dt;
	var i;

	dt = dtypes();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = nextDataType( dt[ i%dt.length ] );
		if ( typeof out !== 'string' && out !== -1 ) {
			b.fail( 'should return a string or -1' );
		}
	}
	b.toc();
	if ( !isString( out ) && out !== -1 ) {
		b.fail( 'should return a string or -1' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
