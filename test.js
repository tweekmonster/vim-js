#!/usr/bin/env node

// Module test cases
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 /* comment*/ } from "module-name";
import { export1 as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 } from "module-name";
import defaultExport, { export1, export2 } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";

var promise = import("module-name");

const a = 1;
let b;
var a1, a2;
var a1 = 1, a3;
var a = { a: 1 }, c;

const a = (1 + 2) / 3;
const a = a > 0 ? a : b;

var arr = [];
var arr = [a1, 1, false, null];
var arr = [1,2];
var arr = [1,];
var arr = [, 1];
var arr = [,,];
var arr = [
	first, // Comment
	second, /* Comment */
	[1, 2, 3],
	[,,,],
];

var a1 = arr[1];

const str = tag`<div></div>`;
const str = tag()`<div></div>`;
const str2 = String.raw`hello, ${world}`;
const str2 = String().raw`hello, ${world}`;
const str2 = String['hello'].raw`hello, ${world}`;

// Functions
function test() {
	const str = "}";
	return Math.min([1, 2]);
}

function test(a = 3, b, c, ...rest, { e = 3, ...test}) {
	const a = "hello";
	function test() {
	}

	var arr = [];
	var arr = [a1, 1, false, null];
	var arr = [1,2];
	var arr = [1,];
	var arr = [, 1];
	var arr = [,,];
	var arr = [
		first, // Comment
		second, /* Comment */
		[1, 2, 3],
		[,,,],
	];
	const [a,b,...rest] = [1, 2]
	const {hello: [a = 3, b, { d }], world: {hello: world}} = {foo: foo, bar: 'ddd', test}
	// ({hello = 1, world: {hello: world}, bar} = {foo, bar: 'ddd', test})
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	// 0000000000
}

function* gen() {
	yield* gen()
	return 1;
}

const func = function(a, b) {
}

const func = function funName(a, [b, c, ...d]) {
}

test();

const a = () => {};
const b = () => 1;
const c = a => foo + bar;
const d = ({a : { d = 3}, b}, c, [a = 3, b, c]) => {
	return foo + bar;
};
const e = async (a, b) => {
};

((a, b) => {
})();

const cls = class {
};

// Classes
class Square extends Polygon {
  // Comments
  /* Comments */
  static className = 'Square';
  length = 0;
  name
  foo = bar;
  ['foo' + 'bar'] = 1

  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }

  async test() {
	  const a = 0;
  }

  static *triple(n) {
    n = n || 1;
    return n * 3;
  }

  *toString() {
    return super.toString();
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }

  foo = () => get();
  bar = a => a[0]

  getAccountIds = () => this.props.filter.get('accountsIds')
	  ? this.props.filter.get('accountIds').concat(this.props.accountFilter).toJS()
	  : this.props.accountsFilter;
}

async function test () {
  a == 3
  const b = {};
  a instanceof 3
  const a = {
    key: {
	    // Comment
	    /* comment */
	    prop1: 1, // Comment
	    "prop2": 2, /* comment */
	    33: 3,
	    shorthand,
	    [foo + bar]: `computed${hello + world}b`,
	    func: function () {
	    },
	    funcArrow: () => {
	    },
	    funcShort() {
	    },
	    async funcShort() {
	    },
	    [foo + bar]() {
		    return "computed";
	    },
	    void: new Date(),
	    delete: 'hello',
	    *generator() {},
	    *[Symbol.iterator]() {
	    },
	    get name() {
	    },
	    get [computed]() {
	    },
	    set name(a) {
	    },
	    set [computed]() {
		    // 0000
	    },
	    type: typeof 3,
	    prop: await 3,
	    ...b,
	    getAccountIds: () => this.props.filter.get('accountsIds')
	    ? this.props.filter.get('accountIds').concat(this.props.accountFilter).toJS()
	    : this.props.accountsFilter;
	  }
  };
}

a[0];
(1)[0]
a()[0];
a()()[0];
a()()()[1]();

this["hll"];

({
  a = 3,
  b = Math.min(a, 100) / 3,
}) => {
  /* ... */
}

const another = ({
	wow = (2 + x) / 10
}) => [wow, another]

const a = ({
	example: [
		x = 2 + 2,
		{
			another = ({wow = (2 + x) / 10}) => [wow, another]
		}
	]
}) => {};


function someDefault() {}
export const a = ({first: f, second: s = someDefault(), c = 3}) => {
  return f + s;
}

const myVariable = "hello world";
const func = () => {
	funcd ();
};
const f = bad => {
	console.log();
};
const func = ({a, b}) => {
};
const func = funcCall(({
  sixthVariable = `create${a + b}`
}) => {
	return fun();
}, 1);

if (a > 0) return null;

if (a > 0 && b < 0 && a[0] > 0
	|| (a() > 0) && [0, 1].length > 0
	&& a in 'string'
	&& a instanceof Date
	// ddd
	&& typeof a === 'undefined'
) {
	const a = 0;
	console.log('else');
} else if {
	const a = 0;
	console.log('else if');
} else {
	console.log('else');
}

switch (expression) {
	case 1:
		console.log('hello');
		break;
	case "hello":
		console.log('hello');
		break;
	case "world":
	case foo:
	case bar:
		break;
	default:
		break;
}

for (;;) console.log('hello');

for (var i = 0; i < 100; i++) {
	// Comment
	switch (expression) {
		case 1:
			console.log('hello');
			break;
		case "hello":
			console.log('hello');
			break;
		case "world":
		case foo:
		case bar:
			break;
		default:
			break;
	}
}

var arr = [3, 5, 7];
arr.foo = 'hello';

for (var i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (var i of arr) {
   console.log(i); // logs 3, 5, 7
}

var a = 0;
do
  console.log(a++)
while (a < 0);

do {
  const b = 0;
  console.log(a++)
} while (a < 0);

while (theMark == true) {
   doSomething();
}

label:
	const a = b;

label: {
	const hello = world;
}

var x = 0;
var z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      continue labelCancelLoops;
    }
  }
}

var i = 0;
var j = 10;
checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) == 0) {
          continue checkj;
        }
        console.log(j + ' is odd.');
      }
      console.log('i = ' + i);
      console.log('j = ' + j);
  }

const myVariable = "hello world";
const checkHightlighting = funcCall(({
  firstVariable,
  secondVariable,
  thirdVariable,
  fourthVariable,
  fifthVariable = "createdObject",
  sixthVariable = `create${myVariable}`
}) => {
  return verify => {
    const noHighlightingHere = true;
    return verify(noHighlightingHere);
  };
},
[myVariable]);

try {
  myroutine(); // may throw three types of exceptions
} catch (e if e instanceof TypeError) {
  // statements to handle TypeError exceptions
} catch (e if e instanceof RangeError) {
  // statements to handle RangeError exceptions
} catch (e if e instanceof EvalError) {
  // statements to handle EvalError exceptions
} catch (e) {
  // statements to handle any unspecified exceptions
  throw new Error();
}

var a, x, y;
var r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}

let name5;

export var name1, name2;
export var name3 = () => {}, name4 = function () {};
export function hello() {}
export class ClassName {}
export { name5, name2 as name6 };
// Exporting destructured assignments with renaming
export const { name7, name2: bar } = o;
export default function () {}
export { name as default };
export default name11 = 1;
export { default } from "other-module";

export * from "other-module";
export { name8, name9 } from "other-module";
export { import1 as name10, import2 as name12, nameN } from "other-module";

