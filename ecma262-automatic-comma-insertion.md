# Automatic Comma Insertion

我有一个设想：ECMAScript 可以具有一种自动插入逗号的机制，以让源文本的编辑可以得到简化。
其设计意图类似于自动分号插入。
## 具体可以应用于：
- 数组字面量
- 对象字面量
- 逗号表达式
- 函数参数列表
- 解构赋值

## 带来的好处：
- 如同数组字面量和对象字面量里的结尾逗号一样，可以避免某些情况下源码比较工具的对比错位
- 简化代码编写

当数组元素之间不再加逗号之后，代码写法在单行与多行之间转换时，是否应该在最后一个元素后加分号这种容易让人纠结的问题不再存在。
