# 关于输出json数据模板格式的设想

了解[mockjs](https://github.com/nuysoft/Mock)时，产生的想法。

语法描述格式参照了 http://www.json.org/ 和**ECMA262规范**,内容暂未完成。

## 以下是模板代码
```javascript
{
string: '?$10',
number: '?#10',
boolean: '?:true',
object: {
	key: *pattern*,
},
array: ['?-,+', '*value*'],
map: {'': '?-,+',k:'', v:''}
}

*pattern*:
'?$min,max': String,min:最小字数,最大字数,
'?#min,max': Number,min:最小数值,最大数值,
'?:true': Boolean,
{key: *pattern*}: Object,
['?min,max,index', *pattern*]: Array,min:最小重复次数,max:最大重复次数,index:起始序号,*pattern*可使用特定字符表示重复序号
{'': '?min,max,index', k:*pattern*, v:*pattern*}: map键值对,min:最小重复次数,max:最大重复次数,k键,v值
```

## 以下是语法描述

*template*
> TODO

*object*
>`{}`
>
>`{` *members* `}`

*members*
> *pair*
>
> *pair* `,` *members*

*pair*
> *string* `:` *value*

*array*
> `[]`
>
> `[` *elements* `]`

*elements*
> *value*
>
> *value* `,` *elements*

*value*
>*value-pattern*
>
>*string*
>
>*number*
>
>*object*
>
>*array*
>
>`true`
>
>`false`
>
>`null`

*value-pattern*
>*primitive-pattern*
>
>*array-pattern*
>
>*object-pattern*

*primitive-pattern*
> `'` *primitive-pattern-body* `'`
>
> `'?` *primitive-pattern-body* `'`

*primitive-pattern-body*
> *string-pattern-body*
>
> *number-pattern-body*
>
> *boolean-pattern-body*

*string-pattern-body*
>`$` *range*

*number-pattern-body*
>`#` *range*

*boolean-pattern-body*
>`:`

*range*
>*min*
>
>*min* `,`
>
>*min* `,` *max*
>
>`,` *max*

*min*
> *number*

*max*
> *number*

*string-pattern*
>`'` ? `'`

---
*string*
>`""`
>
>`"` *non-pattern-char* `"`
>
> `"` *non-pattern-char* *chars* `"`
>
>`"??`  *chars* `"`

*non-pattern-char*
>*char* **but not** *pattern-char*

*pattern-char*
>`?`

*chars*
>*char*
>
>*char* *chars*

*char*
>*any-Unicode-character-except-"-or-\\-or-control-character*
>
>`\"`
>
>`\\`
>
>`\/`
>
>`\b`
>
>`\f`
>
>`\n`
>
>`\r`
>
>`\t`
>
>`\u` *four-hex-digits*
