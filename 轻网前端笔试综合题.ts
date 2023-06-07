/**
 * 使用ts 写一个简易版的学生成绩录入系统
 * 要求：
 * 1、使用 es6 class 编写构造函数；
 * 2、可以通过调用方法向系统内存入学生数据（例如语数英，注意可扩展性）；
 * 3、可以通过调用方法获取每门科目的平均值；
 * 4、可以根据学生的总分或者单科分数进行排序；（选做）
 * 5、可以查询某个学生的成绩，以及总分；（选做）
 * 6、可以删除某个学生的成绩；（选做）
 * 7、ts 不可使用 any
 * 
 * 提示：
 * 1、请尽可能多的使用 ts 的特性，例如：泛型、接口、枚举等
 * 2、请尽可能多的使用 es6 的特性，例如：箭头函数、解构赋值、模板字符串等（如有必要可使用，非强制要求）
 * 3、尽可能地考虑代码的可读性、可扩展性、可维护性
 * 重要事情说三遍：
 * 注意代码的可读性、可扩展性、可维护性
 * 注意代码的可读性、可扩展性、可维护性
 * 注意代码的可读性、可扩展性、可维护性
 */

// 学生类
class Student {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// 成绩系统类
class ScoreSystem {
  // 此处不一定限制为数组，可自行修改
  students: Student[];
  constructor() {
    this.students = [];
  }

  /**
   * 必做
   * @description: 向系统内存入学生数据
   * @param {Student} student
   * @return {void}
   */  
  addStudent(student: Student) {
    // 请在此处完善代码
  }

  /**
   * 必做
   * @description: 获取每门科目和总分的平均值
   * @return {Object} {科目|总分: 平均分}
   */  
  getAverageScore() {
    // 请在此处完善代码
  }

  /**
   * 选做
   * @description: 根据学生的总分或者单科分数进行排序
   * @return {Array}  {Student[]}
   */
  sortScore(subject = 'totalScore') {
    // 请在此处完善代码
  }


  /**
   * 选做
   * @description: 查询某个学生的各科成绩，以及总分
   * @param {string} name
   * @return {Object | null}  {科目|总分: 分数}
   */
  findStudentScore(name: string) {
    // 请在此处完善代码
  }

  /**
   * 选做
   * @description: 删除某个学生
   * @param {string} name
   * @return {Boolean | Error}
   * */
  deleteStudent(name: string) {
    // 请在此处完善代码
  }
}


const scoreSystem = new ScoreSystem();

// 在下方调用方法，测试你的代码