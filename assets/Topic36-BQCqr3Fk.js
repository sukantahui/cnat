import{r as i,j as c}from"./index-CRiz6zY8.js";import{J as u}from"./JavaScriptProjectAnswerTemplate-DgybDBrR.js";import"./CodeBlock-CXiH8Y1W.js";import"./prism-BvF-w-Cc.js";import"./prism-json-D0UlpdKh.js";import"./file-code-C3NGmQnN.js";import"./copy-BknYEKcl.js";import"./download-tHUdtA5g.js";import"./play-DYY1utPs.js";import"./graduation-cap-DEDeKsC6.js";import"./code-BkP-EDWu.js";import"./eye-off-CUnZm4af.js";import"./eye-D94467VC.js";import"./lightbulb-IqmPUYgk.js";import"./terminal-DQWXhpJo.js";const g=`// Object Literals Basics\r
const person = {\r
    name: 'Alice',\r
    age: 30,\r
    greet() {\r
        return \`Hi, I'm \${this.name}\`;\r
    }\r
};\r
\r
console.log('Dot notation:', person.name, person.age);\r
console.log('Bracket notation:', person['name'], person['age']);\r
console.log('Greeting:', person.greet());\r
\r
// Using bracket with variable\r
const key = 'name';\r
console.log('Dynamic key:', person[key]);\r
`,m=`// Dot vs Bracket Notation\r
const user = {\r
    name: 'John',\r
    'favorite color': 'blue'\r
};\r
\r
// Dot notation (works for valid identifiers)\r
console.log('Dot name:', user.name);\r
\r
// Bracket notation (always works)\r
console.log('Bracket name:', user['name']);\r
console.log('Bracket favorite color:', user['favorite color']);\r
\r
// Dynamic key\r
const prop = 'name';\r
console.log('Dynamic key:', user[prop]);\r
`,b=`// Adding, Updating, Deleting Properties\r
let obj = {};\r
\r
// Add properties\r
obj.name = 'John';\r
obj.age = 25;\r
console.log('After adding:', obj);\r
\r
// Update property\r
obj.name = 'Jane';\r
console.log('After update:', obj);\r
\r
// Delete property\r
delete obj.age;\r
console.log('After delete:', obj);\r
\r
// Check existence\r
console.log('"name" in obj:', 'name' in obj);\r
console.log('obj.hasOwnProperty("age"):', obj.hasOwnProperty('age'));\r
`,h=`// Nested Objects and Arrays\r
const company = {\r
    name: 'TechCorp',\r
    address: {\r
        city: 'San Francisco',\r
        zip: '94105'\r
    },\r
    employees: [\r
        { name: 'Alice', role: 'Developer' },\r
        { name: 'Bob', role: 'Designer' }\r
    ]\r
};\r
\r
console.log('Company:', company.name);\r
console.log('City:', company.address.city);\r
console.log('First employee:', company.employees[0].name);\r
\r
// Modify nested property\r
company.address.zip = '94107';\r
console.log('Updated zip:', company.address.zip);\r
\r
// Loop through employees\r
company.employees.forEach(emp => {\r
    console.log(\`\${emp.name} - \${emp.role}\`);\r
});\r
`,f=`// Accessing Deeply Nested Values\r
const data = {\r
    user: {\r
        profile: {\r
            name: 'Alice'\r
        }\r
    }\r
};\r
\r
// Traditional way (throws error if missing)\r
try {\r
    console.log('Traditional:', data.user.profile.name);\r
} catch (e) {\r
    console.log('Traditional error:', e.message);\r
}\r
\r
// Using optional chaining (safe)\r
console.log('Optional chaining:', data.user?.profile?.name);\r
console.log('Optional chaining missing:', data.user?.address?.city); // undefined\r
`,j=`// The this Keyword Inside Objects\r
const obj = {\r
    name: 'Test',\r
    regularFunc() {\r
        console.log('regularFunc this:', this.name);\r
    },\r
    arrowFunc: () => {\r
        console.log('arrowFunc this:', this.name);\r
    }\r
};\r
\r
obj.regularFunc(); // 'Test'\r
obj.arrowFunc();   // undefined (or global object)\r
\r
// Standalone function\r
function standalone() {\r
    console.log('standalone this (non-strict):', this);\r
}\r
standalone();\r
`,y=`// Arrow vs Normal Functions: this\r
const counter = {\r
    count: 0,\r
    normalMethod() {\r
        this.count++;\r
        console.log('normalMethod count:', this.count);\r
    },\r
    arrowMethod: () => {\r
        // Arrow functions don't have their own this; they inherit from outer scope.\r
        // Here, outer scope is global (or module). So this.count is undefined.\r
        console.log('arrowMethod this:', this);\r
        // this.count would be undefined, so can't increment.\r
    }\r
};\r
\r
counter.normalMethod(); // count becomes 1\r
counter.arrowMethod();   // logs global object (or undefined in strict mode)\r
`,O=`// Iterating Objects: for...in\r
const obj = { a: 1, b: 2 };\r
// Add inherited property\r
Object.prototype.inherited = 'inherited';\r
\r
console.log('All enumerable properties (including inherited):');\r
for (let key in obj) {\r
    console.log(\`\${key}: \${obj[key]}\`);\r
}\r
\r
console.log('\\nOnly own properties:');\r
for (let key in obj) {\r
    if (obj.hasOwnProperty(key)) {\r
        console.log(\`\${key}: \${obj[key]}\`);\r
    }\r
}\r
\r
// Clean up\r
delete Object.prototype.inherited;\r
`,w=`// Object.keys, Object.values, Object.entries\r
const car = {\r
    brand: 'Toyota',\r
    model: 'Camry',\r
    year: 2020\r
};\r
\r
const keys = Object.keys(car);\r
console.log('Keys:', keys);\r
\r
const values = Object.values(car);\r
console.log('Values:', values);\r
\r
const entries = Object.entries(car);\r
console.log('Entries:', entries);\r
\r
// Iterating with forEach\r
entries.forEach(([key, value]) => {\r
    console.log(\`\${key} -> \${value}\`);\r
});\r
`,x=`// Looping Arrays of Objects with map, filter, reduce\r
const users = [\r
    { name: 'Alice', age: 25 },\r
    { name: 'Bob', age: 17 },\r
    { name: 'Charlie', age: 20 }\r
];\r
\r
// Filter adults\r
const adults = users.filter(user => user.age > 18);\r
console.log('Adults:', adults);\r
\r
// Map to names\r
const adultNames = adults.map(user => user.name);\r
console.log('Adult names:', adultNames);\r
\r
// Reduce to sum ages\r
const totalAge = users.reduce((sum, user) => sum + user.age, 0);\r
console.log('Total age:', totalAge);\r
`,v=`// Objects as Reference Types\r
let obj1 = { a: 1, b: 2 };\r
let obj2 = obj1; // obj2 references the same object\r
\r
console.log('obj1:', obj1);\r
console.log('obj2:', obj2);\r
\r
obj2.a = 99;\r
console.log('After modifying obj2.a = 99:');\r
console.log('obj1:', obj1);\r
console.log('obj2:', obj2);\r
\r
// Equality comparison\r
let obj3 = { a: 1, b: 2 };\r
console.log('obj1 === obj2:', obj1 === obj2); // true\r
console.log('obj1 === obj3:', obj1 === obj3); // false\r
`,_=`// Shallow Copy: Spread and Object.assign\r
const original = {\r
    a: 1,\r
    b: { c: 2, d: 3 }\r
};\r
\r
// Spread operator\r
const copySpread = { ...original };\r
console.log('Spread copy:', copySpread);\r
\r
// Object.assign\r
const copyAssign = Object.assign({}, original);\r
console.log('Object.assign copy:', copyAssign);\r
\r
// Modify nested property in copy\r
copySpread.b.c = 999;\r
console.log('\\nAfter copySpread.b.c = 999:');\r
console.log('original.b.c:', original.b.c); // 999 (changed!)\r
console.log('copySpread.b.c:', copySpread.b.c);\r
`,J=`// Deep Copy: JSON and structuredClone\r
const original = {\r
    a: 1,\r
    b: { c: 2, d: 3 }\r
};\r
\r
// JSON method\r
const deepCopyJSON = JSON.parse(JSON.stringify(original));\r
console.log('Deep copy (JSON):', deepCopyJSON);\r
\r
// structuredClone (modern)\r
const deepCopyClone = structuredClone(original);\r
console.log('Deep copy (structuredClone):', deepCopyClone);\r
\r
// Modify nested property in copies\r
deepCopyJSON.b.c = 999;\r
deepCopyClone.b.c = 888;\r
\r
console.log('\\nAfter modifications:');\r
console.log('original.b.c:', original.b.c); // 2 (unchanged)\r
console.log('JSON copy b.c:', deepCopyJSON.b.c);\r
console.log('structuredClone copy b.c:', deepCopyClone.b.c);\r
`,B=`// Shorthand Properties and Computed Names\r
const name = 'Alice';\r
const age = 30;\r
const key = 'city';\r
const city = 'New York';\r
\r
// Shorthand\r
const person = { name, age };\r
console.log('Shorthand:', person);\r
\r
// Computed property name\r
const obj = { [key]: city };\r
console.log('Computed:', obj);\r
\r
// Combined\r
const combined = { name, age, [key]: city };\r
console.log('Combined:', combined);\r
`,k=`// Object Destructuring\r
const user = {\r
    name: 'Alice',\r
    address: {\r
        city: 'NYC',\r
        zip: '10001'\r
    },\r
    age: undefined\r
};\r
\r
// Basic destructuring with default\r
const { name, age = 25 } = user;\r
console.log('Name:', name);\r
console.log('Age (with default):', age);\r
\r
// Nested destructuring\r
const { address: { city, zip } } = user;\r
console.log('City:', city);\r
console.log('Zip:', zip);\r
\r
// Default for missing nested property\r
const { address: { country = 'USA' } } = user;\r
console.log('Country (default):', country);\r
`,S=`// Spread and Rest Operator for Objects\r
const obj1 = { a: 1, b: 2 };\r
const obj2 = { c: 3, d: 4 };\r
\r
// Spread to merge\r
const merged = { ...obj1, ...obj2 };\r
console.log('Merged:', merged);\r
\r
// Rest in destructuring\r
const { a, ...rest } = merged;\r
console.log('a:', a);\r
console.log('rest:', rest);\r
`,C=`// Default Values in Destructuring\r
const user = { name: 'Alice' };\r
\r
const { name, age = 25, city = 'Unknown' } = user;\r
console.log('Name:', name);\r
console.log('Age:', age);\r
console.log('City:', city);\r
\r
// Also works with nested destructuring\r
const data = { user: { name: 'Bob' } };\r
const { user: { name: userName, age: userAge = 30 } } = data;\r
console.log('User name:', userName);\r
console.log('User age (default):', userAge);\r
`,E=`// Getters and Setters\r
const person = {\r
    firstName: 'John',\r
    lastName: 'Doe',\r
    _age: 30,\r
\r
    get fullName() {\r
        return \`\${this.firstName} \${this.lastName}\`;\r
    },\r
\r
    set fullName(value) {\r
        const [first, last] = value.split(' ');\r
        this.firstName = first;\r
        this.lastName = last;\r
    },\r
\r
    get age() {\r
        return this._age;\r
    },\r
\r
    set age(value) {\r
        if (value < 0) {\r
            console.log('Age cannot be negative');\r
        } else {\r
            this._age = value;\r
        }\r
    }\r
};\r
\r
console.log('Full name:', person.fullName);\r
person.fullName = 'Jane Smith';\r
console.log('After setter:', person.fullName);\r
\r
person.age = 35;\r
console.log('Age:', person.age);\r
person.age = -5; // triggers validation\r
`,A=`// Optional Chaining and Nullish Coalescing\r
const user = {\r
    profile: {\r
        name: 'Alice'\r
        // address is missing\r
    }\r
};\r
\r
// Without optional chaining would throw error\r
// const city = user.profile.address.city; // Error!\r
\r
// With optional chaining\r
const city = user.profile?.address?.city ?? 'Unknown';\r
console.log('City:', city); // 'Unknown'\r
\r
// With existing property\r
const name = user.profile?.name ?? 'Anonymous';\r
console.log('Name:', name); // 'Alice'\r
\r
// Nullish coalescing only for null/undefined\r
const score = 0 ?? 100;\r
console.log('Score:', score); // 0 (not replaced)\r
`,T=`// Object.freeze, Object.seal, Object.preventExtensions\r
const frozen = { a: 1 };\r
Object.freeze(frozen);\r
frozen.a = 2;        // ignored in non-strict, error in strict\r
frozen.b = 3;        // ignored\r
console.log('Frozen:', frozen); // { a: 1 }\r
\r
const sealed = { a: 1 };\r
Object.seal(sealed);\r
sealed.a = 2;        // works\r
sealed.b = 3;        // ignored\r
delete sealed.a;     // ignored\r
console.log('Sealed:', sealed); // { a: 2 }\r
\r
const noExtend = { a: 1 };\r
Object.preventExtensions(noExtend);\r
noExtend.a = 2;      // works\r
noExtend.b = 3;      // ignored\r
console.log('PreventExtensions:', noExtend); // { a: 2 }\r
`,I=`// Constructor Functions\r
function Person(name, age) {\r
    this.name = name;\r
    this.age = age;\r
}\r
\r
const alice = new Person('Alice', 30);\r
const bob = new Person('Bob', 25);\r
\r
console.log(alice);\r
console.log(bob);\r
console.log('alice instanceof Person:', alice instanceof Person);\r
`,N=`// Prototype and Prototype Chain\r
const parent = {\r
    greet() {\r
        return 'Hello from parent';\r
    },\r
    type: 'parent'\r
};\r
\r
const child = Object.create(parent);\r
child.type = 'child';\r
child.sayHi = function() {\r
    return 'Hi from child';\r
};\r
\r
console.log(child.greet()); // inherited from parent\r
console.log(child.type);    // own property\r
console.log(child.sayHi()); // own method\r
\r
// Prototype chain\r
console.log('child.__proto__ === parent:', child.__proto__ === parent);\r
console.log('parent.isPrototypeOf(child):', parent.isPrototypeOf(child));\r
`,P=`// Adding Methods Using Prototypes\r
function Person(name) {\r
    this.name = name;\r
}\r
\r
// Add method to prototype\r
Person.prototype.greet = function() {\r
    return \`Hello, I'm \${this.name}\`;\r
};\r
\r
const alice = new Person('Alice');\r
const bob = new Person('Bob');\r
\r
console.log(alice.greet()); // Hello, I'm Alice\r
console.log(bob.greet());   // Hello, I'm Bob\r
\r
// Method is shared\r
console.log(alice.greet === bob.greet); // true\r
`,F=`// ES6 Class Syntax\r
class Circle {\r
    constructor(radius) {\r
        this.radius = radius;\r
    }\r
\r
    // Instance method\r
    area() {\r
        return Math.PI * this.radius ** 2;\r
    }\r
\r
    // Static method\r
    static describe() {\r
        return 'A circle is a shape with all points equidistant from center.';\r
    }\r
}\r
\r
const c = new Circle(5);\r
console.log('Radius:', c.radius);\r
console.log('Area:', c.area());\r
console.log('Static:', Circle.describe());\r
\r
// Instance method not available on class\r
// Circle.area(); // TypeError\r
`,D=`// Class Inheritance using extends\r
class Rectangle {\r
    constructor(width, height) {\r
        this.width = width;\r
        this.height = height;\r
    }\r
\r
    area() {\r
        return this.width * this.height;\r
    }\r
}\r
\r
class Square extends Rectangle {\r
    constructor(side) {\r
        super(side, side);\r
    }\r
}\r
\r
const sq = new Square(4);\r
console.log('Square area:', sq.area()); // 16\r
console.log('sq instanceof Square:', sq instanceof Square);\r
console.log('sq instanceof Rectangle:', sq instanceof Rectangle);\r
`,M=`// super Keyword and Method Overriding\r
class Vehicle {\r
    constructor(brand) {\r
        this.brand = brand;\r
    }\r
\r
    start() {\r
        return \`\${this.brand} vehicle started.\`;\r
    }\r
}\r
\r
class Car extends Vehicle {\r
    constructor(brand, model) {\r
        super(brand); // call parent constructor\r
        this.model = model;\r
    }\r
\r
    start() {\r
        // Override method but also call parent\r
        return super.start() + \` It's a \${this.model}.\`;\r
    }\r
}\r
\r
const myCar = new Car('Toyota', 'Camry');\r
console.log(myCar.start()); // Toyota vehicle started. It's a Camry.\r
`,U=`// JSON.parse and JSON.stringify\r
const obj = {\r
    name: 'Alice',\r
    age: 30,\r
    hobbies: ['reading', 'gaming'],\r
    address: { city: 'NYC', zip: '10001' }\r
};\r
\r
const jsonString = JSON.stringify(obj);\r
console.log('JSON string:', jsonString);\r
\r
const parsedObj = JSON.parse(jsonString);\r
console.log('Parsed object:', parsedObj);\r
\r
// Compare content (they are equal but not same reference)\r
console.log('Content equal?', JSON.stringify(obj) === JSON.stringify(parsedObj));\r
console.log('Same reference?', obj === parsedObj);\r
`,q=`// Storing Objects in LocalStorage\r
const user = {\r
    name: 'Alice',\r
    age: 30,\r
    preferences: { theme: 'dark', language: 'en' }\r
};\r
\r
// Store\r
localStorage.setItem('user', JSON.stringify(user));\r
\r
// Retrieve (after page reload, you can still get it)\r
const stored = localStorage.getItem('user');\r
if (stored) {\r
    const retrievedUser = JSON.parse(stored);\r
    console.log('Retrieved user:', retrievedUser);\r
    console.log('Same object?', retrievedUser === user); // false\r
} else {\r
    console.log('No user in localStorage');\r
}\r
\r
// For demo, clear after showing\r
// localStorage.removeItem('user');\r
`,R=`// Merging Objects\r
const obj1 = { a: 1, b: 2 };\r
const obj2 = { b: 3, c: 4 };\r
\r
// Using spread\r
const mergedSpread = { ...obj1, ...obj2 };\r
console.log('Merged with spread:', mergedSpread); // { a:1, b:3, c:4 }\r
\r
// Using Object.assign\r
const mergedAssign = Object.assign({}, obj1, obj2);\r
console.log('Merged with assign:', mergedAssign);\r
`,z=`// Checking Object Equality\r
const objA = { a: 1, b: 2 };\r
const objB = { a: 1, b: 2 };\r
const objC = objA;\r
\r
console.log('objA === objB (reference):', objA === objB); // false\r
console.log('objA === objC (reference):', objA === objC); // true\r
\r
// Content equality (shallow, using JSON)\r
function isEqual(obj1, obj2) {\r
    return JSON.stringify(obj1) === JSON.stringify(obj2);\r
}\r
\r
console.log('Content equality (objA, objB):', isEqual(objA, objB)); // true\r
console.log('Content equality (objA, objC):', isEqual(objA, objC)); // true\r
`,L=`// Combining Object Methods: Filter, Map, Reduce on Objects\r
const obj = { a: 1, b: null, c: 3, d: 0, e: 5 };\r
\r
// Filter out falsy values (excluding 0? Let's remove only null/undefined)\r
const filtered = Object.fromEntries(\r
    Object.entries(obj).filter(([_, value]) => value !== null && value !== undefined)\r
);\r
console.log('Filtered (remove null/undefined):', filtered);\r
\r
// Map: double all numeric values\r
const doubled = Object.fromEntries(\r
    Object.entries(obj).map(([key, value]) => [key, typeof value === 'number' ? value * 2 : value])\r
);\r
console.log('Doubled numbers:', doubled);\r
\r
// Reduce: sum all numeric values\r
const sum = Object.values(obj).reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);\r
console.log('Sum of numbers:', sum);\r
`,G=`// Property Descriptors: Enumerable, Writable, Configurable\r
const obj = { visible: 'I am visible' };\r
\r
// Define a property with custom descriptor\r
Object.defineProperty(obj, 'hidden', {\r
    value: 42,\r
    enumerable: false,  // won't appear in for...in or Object.keys\r
    writable: false,    // cannot change\r
    configurable: false // cannot delete or redefine\r
});\r
\r
console.log('obj.hidden:', obj.hidden); // 42\r
\r
// Check descriptor\r
const desc = Object.getOwnPropertyDescriptor(obj, 'hidden');\r
console.log('Descriptor:', desc);\r
\r
// for...in only shows enumerable properties\r
for (const key in obj) {\r
    console.log(\`for...in: \${key}\`);\r
}\r
// Output: "visible"\r
\r
// Object.keys also only enumerable\r
console.log('Object.keys:', Object.keys(obj)); // ['visible']\r
\r
// Trying to modify a non-writable property\r
obj.hidden = 100; // ignored (in non-strict) or throws in strict\r
console.log('obj.hidden after assignment:', obj.hidden); // 42\r
`,H=`// Object.create and Custom Prototypes\r
const animal = {\r
    speak() {\r
        console.log(\`\${this.name} makes a sound.\`);\r
    }\r
};\r
\r
const dog = Object.create(animal);\r
dog.name = 'Rex';\r
dog.bark = function() {\r
    console.log('Woof!');\r
};\r
\r
dog.speak(); // Rex makes a sound.\r
dog.bark();  // Woof!\r
\r
console.log('dog.__proto__ === animal:', dog.__proto__ === animal);\r
console.log('animal.isPrototypeOf(dog):', animal.isPrototypeOf(dog));\r
`,$=`// Mixins: Copying Methods from Multiple Sources\r
const flyer = {\r
    fly() {\r
        return \`\${this.name} is flying.\`;\r
    }\r
};\r
\r
const swimmer = {\r
    swim() {\r
        return \`\${this.name} is swimming.\`;\r
    }\r
};\r
\r
function mixin(target, ...sources) {\r
    Object.assign(target, ...sources);\r
}\r
\r
const duck = { name: 'Donald' };\r
mixin(duck, flyer, swimmer);\r
\r
console.log(duck.fly());  // Donald is flying.\r
console.log(duck.swim()); // Donald is swimming.\r
`,W=`// Object.keys with Sorting and Grouping\r
const scores = {\r
    Alice: 85,\r
    Bob: 92,\r
    Charlie: 78,\r
    Diana: 88\r
};\r
\r
// Sort keys alphabetically\r
const sortedKeys = Object.keys(scores).sort();\r
console.log('Sorted keys:', sortedKeys);\r
\r
// Group scores: pass (>80) vs fail\r
const grouped = Object.entries(scores).reduce((acc, [name, score]) => {\r
    if (score > 80) acc.pass.push(name);\r
    else acc.fail.push(name);\r
    return acc;\r
}, { pass: [], fail: [] });\r
\r
console.log('Pass (score > 80):', grouped.pass);\r
console.log('Fail (score <= 80):', grouped.fail);\r
`,V=`// The delete Operator and Property Removal\r
const obj = { a: 1, b: 2, c: 3 };\r
\r
console.log('Before delete:', obj);\r
\r
delete obj.b;\r
console.log('After delete obj.b:', obj);\r
\r
// delete returns true if property existed and was removed\r
console.log('delete obj.c:', delete obj.c); // true\r
console.log('delete obj.d (non-existent):', delete obj.d); // true (no error)\r
\r
// Deleting a non-configurable property fails in strict mode\r
const frozen = Object.freeze({ x: 1 });\r
// delete frozen.x; // would fail (ignored in non-strict)\r
console.log('After delete on frozen object:', frozen);\r
`,K=`// Checking if Object is Empty\r
function isEmpty(obj) {\r
    return Object.keys(obj).length === 0;\r
}\r
\r
console.log('isEmpty({}):', isEmpty({})); // true\r
console.log('isEmpty({ a: 1 }):', isEmpty({ a: 1 })); // false\r
console.log('isEmpty({ length: 0 }):', isEmpty({ length: 0 })); // false (has property)\r
`,Y=`// Nested Destructuring with Defaults\r
const data = {\r
    user: {\r
        name: 'Alice'\r
        // age is missing\r
    }\r
};\r
\r
const {\r
    user: {\r
        name,\r
        age = 30,\r
        address: { city = 'Unknown' } = {} // default empty object to avoid error\r
    }\r
} = data;\r
\r
console.log('Name:', name);\r
console.log('Age (default):', age);\r
console.log('City (default):', city);\r
`,Z=`// Object.fromEntries: Converting Arrays to Objects\r
const entries = [\r
    ['a', 1],\r
    ['b', 2],\r
    ['c', 3]\r
];\r
\r
const obj = Object.fromEntries(entries);\r
console.log('Object.fromEntries result:', obj);\r
\r
// Useful for reversing Object.entries\r
const original = { x: 10, y: 20 };\r
const back = Object.fromEntries(Object.entries(original));\r
console.log('Back to object:', back);\r
console.log('Same reference?', original === back); // false (new object)\r
`,Q=`// Comprehensive Object Practice: Library Manager\r
// HTML: <div id="library"></div>\r
// A simple library manager\r
\r
let library = [];\r
\r
function addBook(title, author, year) {\r
    library.push({ id: Date.now(), title, author, year });\r
    saveToLocalStorage();\r
    renderLibrary();\r
}\r
\r
function removeBook(id) {\r
    library = library.filter(book => book.id !== id);\r
    saveToLocalStorage();\r
    renderLibrary();\r
}\r
\r
function searchBooks(term) {\r
    return library.filter(book =>\r
        book.title.toLowerCase().includes(term.toLowerCase()) ||\r
        book.author.toLowerCase().includes(term.toLowerCase())\r
    );\r
}\r
\r
function saveToLocalStorage() {\r
    localStorage.setItem('library', JSON.stringify(library));\r
}\r
\r
function loadFromLocalStorage() {\r
    const stored = localStorage.getItem('library');\r
    if (stored) {\r
        library = JSON.parse(stored);\r
    }\r
    renderLibrary();\r
}\r
\r
function renderLibrary(filteredBooks = null) {\r
    const container = document.getElementById('library');\r
    if (!container) return;\r
\r
    const booksToShow = filteredBooks || library;\r
    container.innerHTML = booksToShow.map(book => \`\r
        <div class="book">\r
            <strong>\${book.title}</strong> by \${book.author} (\${book.year})\r
            <button onclick="removeBook(\${book.id})">Delete</button>\r
        </div>\r
    \`).join('') || '<p>No books in library.</p>';\r
}\r
\r
// For console testing\r
console.log('Library manager loaded. Use addBook(title, author, year), removeBook(id), searchBooks(term)');\r
\r
// Uncomment to test in console:\r
// addBook('1984', 'George Orwell', 1949);\r
// addBook('Brave New World', 'Aldous Huxley', 1932);\r
// console.log(searchBooks('world'));\r
\r
// If you want to attach to HTML buttons, you'd need to expose functions globally.\r
window.addBook = addBook;\r
window.removeBook = removeBook;\r
window.searchBooks = searchBooks;\r
\r
loadFromLocalStorage();\r
`,X="JavaScript Objects – 40 Practical Projects",ee="Web Development (JavaScript)",ne="General",re=["Browser Console","VS Code","Any modern browser"],te={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},oe=JSON.parse('[{"projectId":"OBJ001","title":"Object Literals Basics","difficulty":"Beginner","description":"Create an object literal with properties and a method. Access properties using dot and bracket notation.","exampleText":"const person = { name: \'Alice\', age: 30, greet() { return `Hi, I\'m ${this.name}`; } };","exampleOutput":"Name: Alice; Age: 30; Greeting: Hi, I\'m Alice; Also using bracket: Alice","answerFile":"./answers/OBJ001.js","learningOutcome":"Understanding object literals, property access, and methods.","logicExplanation":"Object literals are the simplest way to create objects. They consist of key-value pairs, where keys are strings (or Symbols) and values can be any data type, including functions (methods).","codeExplanation":"This code creates an object `person` with properties (name, age) and a method `greet`. It demonstrates accessing properties with dot and bracket notation, and calling the method."},{"projectId":"OBJ002","title":"Dot vs Bracket Notation","difficulty":"Beginner","description":"Demonstrate accessing properties using dot notation and bracket notation, including dynamic keys.","exampleText":"const user = { name: \'John\', \'favorite color\': \'blue\' };","exampleOutput":"Dot: John; Bracket (static): John; Bracket (dynamic with variable): John; Bracket for property with space: blue","answerFile":"./answers/OBJ002.js","learningOutcome":"Differences between dot and bracket notation.","logicExplanation":"Dot notation is cleaner but only works with valid identifier names. Bracket notation allows any string, including those with spaces or dynamic keys (using variables).","codeExplanation":"The script shows accessing the same property using both notations, and demonstrates bracket notation with a variable key."},{"projectId":"OBJ003","title":"Adding, Updating, Deleting Properties","difficulty":"Beginner","description":"Add new properties, update existing ones, delete a property, and check for property existence using `in` and `hasOwnProperty()`.","exampleText":"let obj = {};","exampleOutput":"After adding: { name: \'John\' }; After update: { name: \'Jane\' }; After delete: {}; hasOwnProperty check: false","answerFile":"./answers/OBJ003.js","learningOutcome":"Mutating objects, property existence checks.","logicExplanation":"Objects are mutable. You can add new properties by assignment, update existing ones, and delete properties with the `delete` operator. The `in` operator checks for a property in the object or its prototype chain, while `hasOwnProperty` checks only the object\'s own properties.","codeExplanation":"The script starts with an empty object, then adds properties, updates one, deletes another, and shows how to check for existence using `in` and `hasOwnProperty`."},{"projectId":"OBJ004","title":"Nested Objects and Arrays","difficulty":"Intermediate","description":"Create an object with nested objects and arrays. Access deeply nested values and modify them.","exampleText":"const company = { name: \'TechCorp\', address: { city: \'SF\', zip: \'94105\' }, employees: [{ name: \'Alice\' }, { name: \'Bob\' }] };","exampleOutput":"City: SF; First employee: Alice; Modify nested value: zip changed to \'94107\'.","answerFile":"./answers/OBJ004.js","learningOutcome":"Working with nested structures.","logicExplanation":"Objects can contain other objects or arrays as property values. Accessing deeply nested values requires chaining dot or bracket notation. Safe navigation can be done with optional chaining (covered later).","codeExplanation":"The code defines a `user` object with a nested `address` object and an array of `hobbies`. It demonstrates accessing properties at multiple levels, modifying nested values, and iterating over the array."},{"projectId":"OBJ005","title":"Accessing Deeply Nested Values","difficulty":"Intermediate","description":"Access deeply nested values using traditional chaining and optional chaining to avoid errors.","exampleText":"const data = { user: { profile: { name: \'Alice\' } } };","exampleOutput":"Traditional: Alice; Optional chaining: Alice (if exists), otherwise undefined.","answerFile":"./answers/OBJ005.js","learningOutcome":"Safe navigation with optional chaining.","logicExplanation":"Accessing deeply nested values can be done by chaining dot or bracket notation. However, if any intermediate property is missing, an error occurs. Optional chaining (`?.`) provides a safer way.","codeExplanation":"This script shows both the traditional way and the safe way using optional chaining to access a deeply nested property that may not exist."},{"projectId":"OBJ006","title":"The this Keyword Inside Objects","difficulty":"Intermediate","description":"Demonstrate how `this` works inside object methods, and compare regular functions vs arrow functions regarding `this` binding.","exampleText":"const obj = { name: \'Test\', regular() { console.log(this.name); }, arrow: () => { console.log(this.name); } };","exampleOutput":"regular: \'Test\'; arrow: undefined (or global object).","answerFile":"./answers/OBJ006.js","learningOutcome":"Understanding `this` in different contexts.","logicExplanation":"Inside object methods, `this` refers to the object that called the method. Arrow functions do not have their own `this`; they inherit from the enclosing scope. Understanding this distinction is crucial for object behavior.","codeExplanation":"The script defines an object with a regular method and an arrow function method. It logs the output of each, showing how `this` behaves differently. It also shows a standalone function to demonstrate global `this`."},{"projectId":"OBJ007","title":"Arrow vs Normal Functions: this","difficulty":"Intermediate","description":"Show how arrow functions capture the surrounding `this` while normal functions have their own.","exampleText":"const counter = { count: 0, normal: function() { this.count++; }, arrow: () => { this.count++; } };","exampleOutput":"normal works; arrow fails because `this` is not the counter.","answerFile":"./answers/OBJ007.js","learningOutcome":"Key difference in `this` binding.","logicExplanation":"General object manipulation project covering Arrow vs Normal Functions: this.","codeExplanation":"The JavaScript code implements Arrow vs Normal Functions: this as described in the example."},{"projectId":"OBJ008","title":"Iterating Objects: for...in","difficulty":"Beginner","description":"Use `for...in` to iterate over object properties, and filter own properties with `hasOwnProperty`.","exampleText":"const obj = { a: 1, b: 2 };","exampleOutput":"a:1, b:2 (only own properties).","answerFile":"./answers/OBJ008.js","learningOutcome":"Iterating over enumerable properties.","logicExplanation":"`for...in` iterates over enumerable properties (including inherited). To iterate only own properties, combine with `hasOwnProperty`.","codeExplanation":"The script shows `for...in` with and without `hasOwnProperty` to filter inherited properties."},{"projectId":"OBJ009","title":"Object.keys, Object.values, Object.entries","difficulty":"Beginner","description":"Extract keys, values, and key-value pairs from an object using the static methods.","exampleText":"const car = { brand: \'Toyota\', model: \'Camry\', year: 2020 };","exampleOutput":"Keys: [\'brand\',\'model\',\'year\']; Values: [\'Toyota\',\'Camry\',2020]; Entries: [[\'brand\',\'Toyota\'], ...]","answerFile":"./answers/OBJ009.js","learningOutcome":"Using Object static methods to convert objects to arrays.","logicExplanation":"General object manipulation project covering Object.keys, Object.values, Object.entries.","codeExplanation":"The JavaScript code implements Object.keys, Object.values, Object.entries as described in the example."},{"projectId":"OBJ010","title":"Looping Arrays of Objects with map, filter, reduce","difficulty":"Intermediate","description":"Apply higher-order functions on an array of objects: filter adults, map to names, reduce to sum ages.","exampleText":"[{name:\'Alice\',age:25},{name:\'Bob\',age:17},{name:\'Charlie\',age:20}]","exampleOutput":"Adult names: [\'Alice\',\'Charlie\']; Sum of ages: 62","answerFile":"./answers/OBJ010.js","learningOutcome":"Combining array methods on object arrays.","logicExplanation":"When working with arrays of objects, `map()`, `filter()`, and `reduce()` are powerful. `map` transforms each object into something else, `filter` selects a subset, and `reduce` aggregates values.","codeExplanation":"The script creates an array of user objects. It filters users older than 18, maps to their names, and reduces to sum ages. All operations are shown in sequence."},{"projectId":"OBJ011","title":"Objects as Reference Types","difficulty":"Beginner","description":"Show that objects are reference types: assign one object to another, modify, and both change.","exampleText":"let obj1 = { a: 1 }; let obj2 = obj1; obj2.a = 2;","exampleOutput":"obj1.a = 2, obj2.a = 2; obj1 === obj2 is true","answerFile":"./answers/OBJ011.js","learningOutcome":"Understanding reference vs value.","logicExplanation":"Objects are reference types; variables store a reference to the object, not the object itself. Assigning an object to another variable copies the reference.","codeExplanation":"The code shows reference behaviour by modifying an object through a second variable, and demonstrates that strict equality (`===`) compares references, not content."},{"projectId":"OBJ012","title":"Shallow Copy: Spread and Object.assign","difficulty":"Intermediate","description":"Create a shallow copy using spread and Object.assign. Show that nested objects are shared.","exampleText":"const original = { a: 1, b: { c: 2 } };","exampleOutput":"Copy\'s nested change affects original.","answerFile":"./answers/OBJ012.js","learningOutcome":"Shallow copying and its limitations.","logicExplanation":"A shallow copy duplicates top-level properties, but nested objects are still shared. Shallow copies can be created with the spread operator (`...`) or `Object.assign()`.","codeExplanation":"The script creates a shallow copy using spread and `Object.assign`, and shows that modifying a nested property in the copy affects the original."},{"projectId":"OBJ013","title":"Deep Copy: JSON and structuredClone","difficulty":"Intermediate","description":"Create a deep copy using JSON methods and structuredClone. Show that changes don\'t affect the original.","exampleText":"const original = { a: 1, b: { c: 2 } };","exampleOutput":"Copy\'s nested change does NOT affect original.","answerFile":"./answers/OBJ013.js","learningOutcome":"Deep copying methods.","logicExplanation":"A deep copy creates a fully independent copy, including all nested objects. Two common methods: `JSON.parse(JSON.stringify(obj))` (works for JSON-serializable data) and `structuredClone()` (modern, handles more types).","codeExplanation":"The code creates a deep copy using both methods, then modifies nested properties in the copies to show they don\'t affect the original."},{"projectId":"OBJ014","title":"Shorthand Properties and Computed Names","difficulty":"Beginner","description":"Use shorthand property syntax and computed property names when creating objects.","exampleText":"const name = \'Alice\', age = 30; const key = \'city\';","exampleOutput":"Object { name: \'Alice\', age: 30, city: \'New York\' }","answerFile":"./answers/OBJ014.js","learningOutcome":"Modern object literal enhancements.","logicExplanation":"Object literal shorthand allows you to write `{ name, age }` when variable names match property names. Computed property names let you use expressions inside brackets, e.g., `{ [key]: value }`.","codeExplanation":"The code uses shorthand to create an object from variables, and demonstrates a computed property name with a dynamic key."},{"projectId":"OBJ015","title":"Object Destructuring","difficulty":"Intermediate","description":"Extract properties using destructuring, including nested objects and default values.","exampleText":"const user = { name: \'Alice\', address: { city: \'NYC\' }, age: undefined };","exampleOutput":"name: Alice, city: NYC, age: 25 (default)","answerFile":"./answers/OBJ015.js","learningOutcome":"Destructuring patterns.","logicExplanation":"Destructuring extracts properties from an object into variables. Nested destructuring digs into nested objects. Default values can be provided for missing properties.","codeExplanation":"The script destructures a user object, including nested address properties, and shows default values for optional fields."},{"projectId":"OBJ016","title":"Spread and Rest Operator for Objects","difficulty":"Intermediate","description":"Use spread to merge objects, and rest to collect remaining properties during destructuring.","exampleText":"const obj1 = { a: 1, b: 2 }; const obj2 = { c: 3 };","exampleOutput":"Merged: { a:1, b:2, c:3 }; Rest: { a:1 } from { a:1, b:2, c:3 }","answerFile":"./answers/OBJ016.js","learningOutcome":"Using ... for object manipulation.","logicExplanation":"General object manipulation project covering Spread and Rest Operator for Objects.","codeExplanation":"The JavaScript code implements Spread and Rest Operator for Objects as described in the example."},{"projectId":"OBJ017","title":"Default Values in Destructuring","difficulty":"Intermediate","description":"Provide default values when destructuring to handle missing properties.","exampleText":"const { name = \'Anonymous\', age = 18 } = {};","exampleOutput":"name: Anonymous, age: 18","answerFile":"./answers/OBJ017.js","learningOutcome":"Handling defaults in destructuring.","logicExplanation":"General object manipulation project covering Default Values in Destructuring.","codeExplanation":"The JavaScript code implements Default Values in Destructuring as described in the example."},{"projectId":"OBJ018","title":"Getters and Setters","difficulty":"Intermediate","description":"Define a getter and setter for an object property to add logic.","exampleText":"person = { firstName: \'John\', lastName: \'Doe\', get fullName() { ... }, set age(value) { ... } };","exampleOutput":"fullName: \'John Doe\'; set age(30) triggers validation.","answerFile":"./answers/OBJ018.js","learningOutcome":"Encapsulation with getters/setters.","logicExplanation":"Getters and setters allow you to define computed properties or add validation when reading/writing a property. They are defined using `get` and `set` keywords.","codeExplanation":"The script defines a `person` object with a getter for full name (combining first and last) and a setter for age with validation."},{"projectId":"OBJ019","title":"Optional Chaining and Nullish Coalescing","difficulty":"Intermediate","description":"Use `?.` to safely access nested properties and `??` to provide fallback values.","exampleText":"const user = { profile: { name: \'Alice\' } };","exampleOutput":"user.profile?.address?.city ?? \'Unknown\' -> \'Unknown\'","answerFile":"./answers/OBJ019.js","learningOutcome":"Safe property access and default values.","logicExplanation":"Optional chaining (`?.`) safely accesses nested properties without throwing an error if a reference is null or undefined. Nullish coalescing (`??`) provides a default value only when the left side is `null` or `undefined`.","codeExplanation":"The code demonstrates safe access to a deeply nested property that may not exist, using `?.`, and uses `??` to supply a fallback."},{"projectId":"OBJ020","title":"Object.freeze, Object.seal, Object.preventExtensions","difficulty":"Advanced","description":"Demonstrate the effects of freezing, sealing, and preventing extensions on an object.","exampleText":"const obj = { a: 1 };","exampleOutput":"Frozen: cannot modify; Sealed: can modify but not add/delete; PreventExtensions: cannot add.","answerFile":"./answers/OBJ020.js","learningOutcome":"Object immutability levels.","logicExplanation":"General object manipulation project covering Object.freeze, Object.seal, Object.preventExtensions.","codeExplanation":"The JavaScript code implements Object.freeze, Object.seal, Object.preventExtensions as described in the example."},{"projectId":"OBJ021","title":"Constructor Functions","difficulty":"Intermediate","description":"Create a constructor function to generate multiple objects.","exampleText":"function Person(name, age) { this.name = name; this.age = age; }","exampleOutput":"alice = new Person(\'Alice\', 30); alice.name = \'Alice\'","answerFile":"./answers/OBJ021.js","learningOutcome":"Constructor pattern.","logicExplanation":"Constructor functions are a classic way to create multiple similar objects. They are called with `new`, which creates a new object, sets its prototype, and binds `this` to the new object.","codeExplanation":"The code defines a `Person` constructor with `name` and `age`. It creates two instances and shows their properties."},{"projectId":"OBJ022","title":"Prototype and Prototype Chain","difficulty":"Intermediate","description":"Show how prototype chain works by creating an object that inherits from another using `Object.create()`.","exampleText":"const parent = { greet() { return \'Hello\'; } }; const child = Object.create(parent);","exampleOutput":"child.greet() -> \'Hello\'; child.__proto__ === parent","answerFile":"./answers/OBJ022.js","learningOutcome":"Understanding prototypes and inheritance.","logicExplanation":"Every JavaScript object has a prototype (an internal link to another object). When you access a property, the engine walks up the prototype chain until it finds it or reaches `null`. This enables inheritance.","codeExplanation":"The code creates a parent object with a method, then creates a child using `Object.create(parent)`. It demonstrates property lookup through the prototype chain and checks the prototype with `isPrototypeOf`."},{"projectId":"OBJ023","title":"Adding Methods Using Prototypes","difficulty":"Intermediate","description":"Add a method to a constructor\'s prototype so all instances share it.","exampleText":"function Person(name) { this.name = name; } Person.prototype.sayHi = function() { return `Hi ${this.name}`; };","exampleOutput":"new Person(\'Alice\').sayHi() -> \'Hi Alice\'","answerFile":"./answers/OBJ023.js","learningOutcome":"Prototype method sharing.","logicExplanation":"Methods can be added to a constructor\'s prototype to be shared across instances, saving memory.","codeExplanation":"The script extends a `Person` constructor by adding a `greet` method to the prototype, then creates instances that can use it."},{"projectId":"OBJ024","title":"ES6 Class Syntax","difficulty":"Intermediate","description":"Define a class with a constructor, instance method, and static method.","exampleText":"class Circle { constructor(radius) { this.radius = radius; } area() { ... } static describe() { ... } }","exampleOutput":"c = new Circle(5); c.area(); Circle.describe();","answerFile":"./answers/OBJ024.js","learningOutcome":"Modern class syntax.","logicExplanation":"ES6 classes provide a cleaner syntax for constructors and inheritance. A class has a `constructor` method, instance methods (defined without `function`), and static methods (called on the class itself).","codeExplanation":"The script defines a `Rectangle` class with `constructor`, `area` instance method, and a static `describe` method. It creates an instance and calls both types of methods."},{"projectId":"OBJ025","title":"Class Inheritance using extends","difficulty":"Advanced","description":"Create a subclass that extends a parent class using `extends`.","exampleText":"class Square extends Rectangle { constructor(side) { super(side, side); } }","exampleOutput":"Square inherits methods from Rectangle.","answerFile":"./answers/OBJ025.js","learningOutcome":"Inheritance with classes.","logicExplanation":"Classes can inherit from another class using `extends`. The `super()` call in the child constructor runs the parent constructor. Methods can be overridden by defining them again in the child class.","codeExplanation":"The script defines a `Rectangle` class and a `Square` class that extends it. It uses `super` to call the parent constructor, overrides the `area` method, and adds a new method."},{"projectId":"OBJ026","title":"super Keyword and Method Overriding","difficulty":"Advanced","description":"Use `super()` in the child constructor and override a parent method.","exampleText":"class Square extends Rectangle { constructor(side) { super(side, side); } area() { return super.area(); } }","exampleOutput":"Square overrides area but calls parent.","answerFile":"./answers/OBJ026.js","learningOutcome":"super usage and method overriding.","logicExplanation":"`super` is used in child classes to call the parent constructor or parent methods. It is required in the child constructor before using `this`.","codeExplanation":"The code shows a `Vehicle` class and a `Car` class that extends it. The `Car` constructor calls `super` with brand and model, and the `start` method uses `super.start()` to call the parent method."},{"projectId":"OBJ027","title":"JSON.parse and JSON.stringify","difficulty":"Beginner","description":"Convert an object to a JSON string and back.","exampleText":"const obj = { name: \'Alice\', age: 30 };","exampleOutput":"JSON string: \'{\\"name\\":\\"Alice\\",\\"age\\":30}\'; parsed object equal to original.","answerFile":"./answers/OBJ027.js","learningOutcome":"Serialization/deserialization.","logicExplanation":"`JSON.stringify()` converts an object to a JSON string, and `JSON.parse()` converts back. This is used for data exchange and storage.","codeExplanation":"The code stringifies an object, logs the JSON, then parses it back into a new object, showing they are equal but not the same reference."},{"projectId":"OBJ028","title":"Storing Objects in LocalStorage","difficulty":"Intermediate","description":"Save an object to localStorage and retrieve it after page reload.","exampleText":"const user = { name: \'Alice\', age: 30 };","exampleOutput":"After refresh, retrieved object matches original.","answerFile":"./answers/OBJ028.js","learningOutcome":"Persistence with localStorage.","logicExplanation":"General object manipulation project covering Storing Objects in LocalStorage.","codeExplanation":"The JavaScript code implements Storing Objects in LocalStorage as described in the example."},{"projectId":"OBJ029","title":"Merging Objects","difficulty":"Beginner","description":"Merge two objects using spread operator or Object.assign.","exampleText":"obj1 = { a: 1, b: 2 }; obj2 = { b: 3, c: 4 };","exampleOutput":"Merged: { a:1, b:3, c:4 }","answerFile":"./answers/OBJ029.js","learningOutcome":"Object merging.","logicExplanation":"Objects can be merged using spread (`{ ...obj1, ...obj2 }`) or `Object.assign()`. When merging, later properties overwrite earlier ones.","codeExplanation":"The script merges two objects with overlapping keys and shows the result."},{"projectId":"OBJ030","title":"Checking Object Equality","difficulty":"Intermediate","description":"Compare objects by reference and by content (shallow) using JSON.stringify.","exampleText":"objA = { a: 1, b: 2 }; objB = { a: 1, b: 2 };","exampleOutput":"Reference false, content true.","answerFile":"./answers/OBJ030.js","learningOutcome":"Equality checks.","logicExplanation":"Comparing objects with `===` checks reference equality. To compare content (shallow), you can stringify or implement a deep comparison function.","codeExplanation":"The code shows reference equality vs. content equality using JSON stringification, and notes that this works only for JSON-serializable data."},{"projectId":"OBJ031","title":"Combining Object Methods: Filter, Map, Reduce on Objects","difficulty":"Advanced","description":"Use Object.entries and array methods to transform an object (e.g., filter out properties with falsy values, map values).","exampleText":"const obj = { a: 1, b: null, c: 3, d: 0 };","exampleOutput":"Filtered: { a:1, c:3 }","answerFile":"./answers/OBJ031.js","learningOutcome":"Transforming objects with array methods.","logicExplanation":"General object manipulation project covering Combining Object Methods: Filter, Map, Reduce on Objects.","codeExplanation":"The JavaScript code implements Combining Object Methods: Filter, Map, Reduce on Objects as described in the example."},{"projectId":"OBJ032","title":"Property Descriptors: Enumerable, Writable, Configurable","difficulty":"Advanced","description":"Explore property descriptors using `Object.getOwnPropertyDescriptor` and `Object.defineProperty`.","exampleText":"Object.defineProperty(obj, \'hidden\', { enumerable: false, value: 42 });","exampleOutput":"for...in does not show \'hidden\', but obj.hidden exists.","answerFile":"./answers/OBJ032.js","learningOutcome":"Fine-grained property control.","logicExplanation":"General object manipulation project covering Property Descriptors: Enumerable, Writable, Configurable.","codeExplanation":"The JavaScript code implements Property Descriptors: Enumerable, Writable, Configurable as described in the example."},{"projectId":"OBJ033","title":"Object.create and Custom Prototypes","difficulty":"Intermediate","description":"Use Object.create to set a custom prototype for an object.","exampleText":"const proto = { greet() { return \'Hi\'; } }; const obj = Object.create(proto);","exampleOutput":"obj.greet() -> \'Hi\'","answerFile":"./answers/OBJ033.js","learningOutcome":"Manual prototype setting.","logicExplanation":"General object manipulation project covering Object.create and Custom Prototypes.","codeExplanation":"The JavaScript code implements Object.create and Custom Prototypes as described in the example."},{"projectId":"OBJ034","title":"Mixins: Copying Methods from Multiple Sources","difficulty":"Advanced","description":"Implement a mixin pattern by copying methods from multiple objects into a target using Object.assign.","exampleText":"const flyer = { fly() { return \'Flying\'; } }; const swimmer = { swim() { return \'Swimming\'; } }; const duck = {};","exampleOutput":"duck can fly and swim.","answerFile":"./answers/OBJ034.js","learningOutcome":"Composition with mixins.","logicExplanation":"General object manipulation project covering Mixins: Copying Methods from Multiple Sources.","codeExplanation":"The JavaScript code implements Mixins: Copying Methods from Multiple Sources as described in the example."},{"projectId":"OBJ035","title":"Object.keys with Sorting and Grouping","difficulty":"Advanced","description":"Extract keys, sort them, and group values by some condition.","exampleText":"const scores = { Alice: 85, Bob: 92, Charlie: 78 };","exampleOutput":"Sorted keys: [\'Alice\',\'Bob\',\'Charlie\']; Pass (>80): { Alice:85, Bob:92 }","answerFile":"./answers/OBJ035.js","learningOutcome":"Advanced object processing.","logicExplanation":"General object manipulation project covering Object.keys with Sorting and Grouping.","codeExplanation":"The JavaScript code implements Object.keys with Sorting and Grouping as described in the example."},{"projectId":"OBJ036","title":"The delete Operator and Property Removal","difficulty":"Beginner","description":"Use `delete` to remove a property and understand its effects.","exampleText":"const obj = { a: 1, b: 2 }; delete obj.a;","exampleOutput":"obj -> { b: 2 }","answerFile":"./answers/OBJ036.js","learningOutcome":"Removing properties.","logicExplanation":"General object manipulation project covering The delete Operator and Property Removal.","codeExplanation":"The JavaScript code implements The delete Operator and Property Removal as described in the example."},{"projectId":"OBJ037","title":"Checking if Object is Empty","difficulty":"Beginner","description":"Write a function to check if an object has no own enumerable properties.","exampleText":"isEmpty({}) => true; isEmpty({ a: 1 }) => false","exampleOutput":"true, false","answerFile":"./answers/OBJ037.js","learningOutcome":"Object emptiness check.","logicExplanation":"General object manipulation project covering Checking if Object is Empty.","codeExplanation":"The JavaScript code implements Checking if Object is Empty as described in the example."},{"projectId":"OBJ038","title":"Nested Destructuring with Defaults","difficulty":"Intermediate","description":"Combine nested destructuring and default values for complex objects.","exampleText":"const data = { user: { name: \'Alice\' } }; const { user: { name, age = 18 } } = data;","exampleOutput":"name: Alice, age: 18","answerFile":"./answers/OBJ038.js","learningOutcome":"Complex destructuring patterns.","logicExplanation":"General object manipulation project covering Nested Destructuring with Defaults.","codeExplanation":"The JavaScript code implements Nested Destructuring with Defaults as described in the example."},{"projectId":"OBJ039","title":"Object.fromEntries: Converting Arrays to Objects","difficulty":"Intermediate","description":"Use `Object.fromEntries` to convert an array of key-value pairs back to an object.","exampleText":"const entries = [[\'a\',1], [\'b\',2]]; const obj = Object.fromEntries(entries);","exampleOutput":"{ a:1, b:2 }","answerFile":"./answers/OBJ039.js","learningOutcome":"Reversing Object.entries.","logicExplanation":"General object manipulation project covering Object.fromEntries: Converting Arrays to Objects.","codeExplanation":"The JavaScript code implements Object.fromEntries: Converting Arrays to Objects as described in the example."},{"projectId":"OBJ040","title":"Comprehensive Object Practice","difficulty":"Advanced","description":"Combine multiple object concepts: create a library of books (array of objects), add/remove books, search by title, save to localStorage, etc.","exampleText":"Library app with add, remove, search.","exampleOutput":"A working library manager.","answerFile":"./answers/OBJ040.js","learningOutcome":"Integrating many object concepts.","logicExplanation":"General object manipulation project covering Comprehensive Object Practice.","codeExplanation":"The JavaScript code implements Comprehensive Object Practice as described in the example."}]'),l={projectCategory:X,subject:ee,board:ne,class:"Beginner / Intermediate / Advanced",tools:re,institute:te,projects:oe};function Oe(){const[r,d]=i.useState(null);return i.useEffect(()=>{const t=Object.assign({"./topic36_files/answers/OBJ001.js":g,"./topic36_files/answers/OBJ002.js":m,"./topic36_files/answers/OBJ003.js":b,"./topic36_files/answers/OBJ004.js":h,"./topic36_files/answers/OBJ005.js":f,"./topic36_files/answers/OBJ006.js":j,"./topic36_files/answers/OBJ007.js":y,"./topic36_files/answers/OBJ008.js":O,"./topic36_files/answers/OBJ009.js":w,"./topic36_files/answers/OBJ010.js":x,"./topic36_files/answers/OBJ011.js":v,"./topic36_files/answers/OBJ012.js":_,"./topic36_files/answers/OBJ013.js":J,"./topic36_files/answers/OBJ014.js":B,"./topic36_files/answers/OBJ015.js":k,"./topic36_files/answers/OBJ016.js":S,"./topic36_files/answers/OBJ017.js":C,"./topic36_files/answers/OBJ018.js":E,"./topic36_files/answers/OBJ019.js":A,"./topic36_files/answers/OBJ020.js":T,"./topic36_files/answers/OBJ021.js":I,"./topic36_files/answers/OBJ022.js":N,"./topic36_files/answers/OBJ023.js":P,"./topic36_files/answers/OBJ024.js":F,"./topic36_files/answers/OBJ025.js":D,"./topic36_files/answers/OBJ026.js":M,"./topic36_files/answers/OBJ027.js":U,"./topic36_files/answers/OBJ028.js":q,"./topic36_files/answers/OBJ029.js":R,"./topic36_files/answers/OBJ030.js":z,"./topic36_files/answers/OBJ031.js":L,"./topic36_files/answers/OBJ032.js":G,"./topic36_files/answers/OBJ033.js":H,"./topic36_files/answers/OBJ034.js":$,"./topic36_files/answers/OBJ035.js":W,"./topic36_files/answers/OBJ036.js":V,"./topic36_files/answers/OBJ037.js":K,"./topic36_files/answers/OBJ038.js":Y,"./topic36_files/answers/OBJ039.js":Z,"./topic36_files/answers/OBJ040.js":Q}),o={};Object.keys(t).forEach(e=>{const s=e.split("/").pop();o[s]=t[e]});const p=l.projects.map(e=>{const n=(e.answerFile||"").split("/").pop(),a=o[n];return a||console.warn(`⚠ Missing code file: ${n}`),{...e,answer:a||`// File "${n}" not found in answers folder`}});d({...l,projects:p})},[]),r?c.jsx(u,{data:r}):c.jsx("div",{className:"p-6 text-slate-400",children:"Loading projects..."})}export{Oe as default};
