{\rtf1\ansi\ansicpg936\cocoartf1504\cocoasubrtf810
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 var array = [4,1,3,4,5,6,2,3,5,3,9];\
var arr2 = [11,11,11,11];\
function qsort(arr) \{\
    let temp = arr[0];\
    let small = [];\
    let large = [];\
    let center = [];\
    if(arr.length <= 1) \{\
        return arr;\
    \}\
    if(arr.length == 2 && arr[0] >= arr[1])\{\
           let a = arr[0];\
           arr[0] = arr[1];\
           arr[1] = a;\
           return arr;\
        \}\
    for(let i = 0; i < arr.length; i++) \{\
        if (temp > arr[i]) \{\
            small.push(arr[i]);\
        \} else if (temp < arr[i]) \{\
            large.push(arr[i]);\
        \} else \{\
            center.push(arr[i]);\
        \}\
    \}\
  \
    return qsort(small).concat(center, qsort(large));\
\}\
qsort(array);\
\
\
}