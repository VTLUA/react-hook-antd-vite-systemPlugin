//类型守卫

// in 关键字
interface Admin {
    name: string;
    privileges: string[];
}

interface Employee {
    name: string;
    startDate: Date;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation (emp: UnknownEmployee):void {
    console.log("Name::", emp.name)
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate)
    }
}

// typeof 关键字
function padLeft (value: string, padding: string | number) {
    if (typeof padding == "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding == "string"){
        return padding + value;
    }
}

// instanceof关键字
interface Padder {
    getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) {}
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ")
    }
}

class StringPadder implements Padder {
    constructor(private value: string) {}
    getPaddingString () {
        return this.value
    }
}

const padder: Padder = new SpaceRepeatingPadder(6);
if (padder instanceof SpaceRepeatingPadder) {
    // padder的类型收窄为 'SpaceRepeatingPadder'
}

// 自定义类型保护的类型谓词
function isNumber(x: any): x is number {
    return typeof x === "number";
}

// 1.可辨识
enum CarTransmission {
    Automatic = 200,
    Manual = 300
}

interface Motorcycle {
    vType: "motorcycle";
    make: number;
}

interface Car {
    vType: "car";
    transmission: CarTransmission;
}

interface Truck {
    vType: "truck";
    capacity: number;
}

// 2.联合类型
type Vehicle = Motorcycle | Car | Truck;

const EVALUATION_FACTOR = Math.PI;
function evaluatePrice(vehicle: Vehicle) {
    switch (vehicle.vType) {
        case "car":
            return vehicle.transmission * EVALUATION_FACTOR;
        case "truck":
            return vehicle.capacity * EVALUATION_FACTOR;
        case "motorcycle":
            return vehicle.make * EVALUATION_FACTOR;
    }
}

// 5.3类型别名
// type Message = string | string[]
// let greet = (message: Message) => {}

// 6 交叉类型
type PartialPointX = {x: number};
type Point = PartialPointX & { y: number};
const point: Point =  {
    x: 1,
    y: 2
}
console.log(point)

// 6.2 同名非基础类型属性的合并
interface D { d: boolean }
interface E { e: string }
interface F { f: number }

interface A { x: D }
interface B { x: E }
interface C { x: F }

type ABC = A & B & C;
const abc: ABC = {
    x: {
        d: true,
        e: "22",
        f: 22
    }
}
console.log(abc);

// 7.3 参数类型和返回类型
function createUserId (name: string, id: number): string {
    return name + id;
}

// 7.4 函数类型
let IdGenerator: (chars: string, nums: number) => string;
IdGenerator = createUserId;

// 7.5 可选参数及默认参数
function createUseId2 (name: string = "semlinker", id: number, age?:number): string {
    return name + id + age;
}
/*
    可以通过 ? 号来定义可选参数，比如 age?: number 这种形式。在实际使用时，需要注意的是可选参数要放在普通参数的后面，不然会导致编译错误。
*/

// 7.6 剩余参数
function push (array, ...items) {
    items.forEach((item) => {
        array.push(item);
    });
}
const a = [];
push(a, 1, 2, 3);

/*
    7.7 函数重载
    (函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。)
    function add(a: number, b: number): number;
    function add(a: string, b: string): string;
    function add(a: string, b: number): string;
    function add(a: Combinable, b: Combinable) {
        // type Combinable = string | number
        if (typeof a == "string" || typeof b == "string") {
            return a.toString() + b.toString();
        }
        return a + b;
    }
*/


/*
    @成员方法重载
    class Calculator {
        add(a: number, b: number): number;
        add(a: string, b: string): string;
        add(a: string, b: number): string;
        add(a: number, b: string): string;
        add(a: Combinable, b: combinable){
            if (typeof a == "string" || typeof b == "string") {
                return a.toString() + b.toString();
            }
            return a + b;
        }
    }

    const calculator = new Calculator();
    const result = calculator.add("semlinker", "kakuqo");
*/

/*
    @8.1 数组解构
    let x: number, y: number, z: number;
    let five_array = [0,1,2,3,4];
    [x, y, z] = five_array;
*/

/*
    @8.2 数组展开运算符
    let tow_array = [0, 1];
    let five_array = [...tow_array, 2, 3, 4];
*/

/*
    @8.3 数组遍历
    let colors: string[] = ["reb", "bule", "green"];
    for (let i of colors) {
        console.log(i);
    }
*/

 /*
    @9.1 对象解构
    let person = {
        name: "semlinker",
        gender: "Male"
    };
    let { name, gender } = person;
 */

/*
    @9.2 对象展开运算符
    let person = {
        name: "semlinker",
        gender: "Male",
        address: "Xiaomen"
    }

    组装对象
    let personFix = {...person, age: 3};

    获取除了某些项外的其他项
    let { name, ...rest } = person;
*/

/**
 * 10. TypeScript 接口
 */

/*
    10.1 对象的形状
 */
interface Person {
    name: string;
    age?: number;
}

let semlinker:Person = {
    name: "semlinker",
    age: 3
}

/*
    @10.2 可选｜只读
    interface {
        readonly name: string;
        age?: number;
    }
    let a: number[] = [1,2,3,4];
    let ro: ReadonlyArray<number> = a;
    ro[0] = 12; // error
    ro.push(5); // error!
    ro.length = 100; // error!
    a = ro; // error!
*/

/*
    @10.3 任意属性
    有时候我们希望一个接口中除了包含必选和可选属性之外，还允许有其他的任意属性，这时我们可以使用 索引签名 的形式来满足上述要求。
    interface Person {
        name: string;
        age?:number;
        [propName: string]: any;
    }

    const p1 = { name: "semlinker" };
    const p2 = { name: "lolo", age: 5 };
    const p3 = { name: "kakuqo", sex: 1 };
*/

/*
 *  @10.4 接口与类型别名的区别
    1. Objects/Functions
    接口和类型别名都可以用来描述对象的形状或函数签名：

    @@接口
    interface Point {
        x: number;
        y: number;
    };

    interface SetPoint {
        (x: number, y: number): void;
    };

    @@类型别名
    type Point = {
        x: number;
        y: number;
    };

    type SetPoint = (x: number, y: number) => void;

    2.other Types
    与接口类型不一样，类型别名可以用于一些其他类型，比如原始类型、联合类型和元组;

    // primitive 原始类型
    type Name = string;

    // object 对象
    type PartialPointX = { x: number };
    type PartialPointY = { y: number };

    // union 联合类型
    type PartialPoint = PartialPointX | PartialPointY;

    // tuple 元组
    type Data = [number, string];

    3.Extend
    接口和类型别名都能够被扩展，但语法有所不同。此外，接口和类型别名不是互斥的。接口可以扩展类型别名，而反过来是不行的。

    // interface extends interface
    interface PritialPointX { x: number };
    interface Point extends PritialPointX {
        y: number;
    }

    // Type alias extends Type alias
    type PritialPointX = { x: number };
    type Point = PritialPointX & { y: number };

    // interface extends type alias
    type PritialPointx = { x: number };
    interface Point extends PritialPointx {
        y: number;
    }

    // type alias extends interface
    interface PritialPointx {
        x: number
    };
    type Point = PritialPointx & {
        y: number
    }

    4.Implements
    类可以以相同的方式实现接口或类型别名，但类不能实现使用类型别名定义的联合类型

    interface Point {
        x: numebr;
        y: number;
    }

    class SomePoint implements Point {
        x = 1;
        y = 2;
    }

    type Point2 = {
        x: number;
        y: number;
    }

    class SomePoint2 implements Point2{
        x = 1;
        y = 2;
    }

    type PartialPoint = { x: number; } | { y: number; };
    // A class can only implement an object type or
    // intersection of object types with statically known members.
    class SomePartialPoint implements PartialPoint { // Error
        x = 1;
        y = 2;
    }
 */

 /**
    11.1 类的属性与方法
    （通过Class关键字定义一个类）
    class Greeter {
        // 静态属性
        static cname: string = "Greeter";
        // 成员属性
        greeting: string;
        // 构造函数-执行初始化操作
        constructor (message: string) {
            this.greeting = message;
        }
        // 静态方法
        static getClassName () {
            return "Class name is Greeter";
        }

        // 成员方法
        greet () {
            return "hello," + this.greeting;
        }
    }

    let greeting = new Greeter("world");
  */
 /**
  * 11.3 访问器
  * 在typeScript中，我们可以通过getter和setter方法来实现数据的封装和有效性校验，防止出现异常数据
  * let passcode = "hello typeScript";
    class Employee {
        private _fullName: string;
        get fullName(): string {
        retutn this._fullName;
        }
        set fullName(newName: string) {
        if (passcode && passcode == "hello typeScript") {
            this._fullName = newName;
        } else {
                console.log("Error: Unauthorized update of employee!");
            }
        }
    }

    let employee = new Employee();
    employee.fullName = "Semlinker";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
  */

/**
 * 11.6 类方法重载
    class ProductService {
        getProducts(): void;
        getProducts(id: number): void;
        getProducts(id?: number) {
                if (typeof id == "number") {
                    console.log(`获取id为 ${id} 的产品信息`);
                } else {
                    console.log("获取所有的产品信息")
                }
            }
    }

    const productService = new ProductService();
    productService.getProducts(666); // 获取id为 666 的产品信息
    productService.getProducts(); // 获取所有的产品信息
 */

/**
 * 12.1 泛型
 */

function identity<T, U>(value: T, message: U) : T {
    console.log(message)
    return value;
}

identity<Number, String>(68, "Vt");
identity(68, "Vt")

/**
 *  12.2 泛型接口

    interface GenericIdentityFn<T>{
        (arg: T): T;
    }
 */

/**
 * 12.3 泛型类
 */
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x = 1, y = 2) {
    return x + y;
};

export {
    printEmployeeInformation
}