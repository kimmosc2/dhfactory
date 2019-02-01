var flist = new Vue({
    el: '#factory-body',
    data: {
        factorys: [
            { "factoryname": "上海日腾", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/上海日腾.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "苏州华硕", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/苏州华硕.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
            { "factoryname": "惠州伯恩", "salary": "3500-4500", "age": "18-45岁", "address": "上海", "img": "../assets/images/factory/惠州伯恩.jpg", "pay": "做到2月20日返2500元", "remarks": "加班多" },
        ],
        img: [
            "123", "321", "12345"
        ]

    }
})