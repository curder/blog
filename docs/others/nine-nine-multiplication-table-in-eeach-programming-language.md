# 九九乘法表

使用 for 循环在各语言中打印出九九乘法表。

### JS

```
let str = "";
for (let x = 1; x <= 9; x++) {
    for (let y = 1; y <= x; y++) {
        str += `${y} * ${x} = ${y * x} `;
    }
    str += "\n"
}
console.log(str);
```

### PHP

```
<?php

for ($x = 1; $x <= 9; ++$x) {
    for ($y = 1; $y <= $x; ++$y) {
        echo sprintf('%d * %d = %d  ', $y, $x, $x * $y);
    }
    echo "\n";
}
```

### GoLang

```
for x := 1; x <= 9 ; x++  {
    for y := 1; y <= x ; y++  {
        fmt.Printf("%d * %d = %d " , x, y, x * y )
    }
    fmt.Println()
}
```
