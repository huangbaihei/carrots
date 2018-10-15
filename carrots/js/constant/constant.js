angular.module('myApp')
    //找职位页标签常量
    .constant('findJobs', {
        experienceJobs: [
            {
                id: 1,
                name: "产品",
                subCategory: [
                    {
                        id: 1,
                        name: "助理"
                    },
                    {
                        id: 2,
                        name: "初级"
                    },
                    {
                        id: 3,
                        name: "中级"
                    },
                    {
                        id: 4,
                        name: "高级"
                    },
                    {
                        id: 5,
                        name: "总监"
                    }
                ]
            },
            {
                id: 2,
                name: "UI",
                subCategory: [
                    {
                        id: 1,
                        name: "初级"
                    },
                    {
                        id: 2,
                        name: "中级"
                    },
                    {
                        id: 3,
                        name: "高级"
                    },
                    {
                        id: 4,
                        name: "总监"
                    }
                ]
            },
            {
                id: 3,
                name: "QA",
                subCategory: [
                    {
                        id: 1,
                        name: "初级"
                    },
                    {
                        id: 2,
                        name: "中级"
                    },
                    {
                        id: 3,
                        name: "高级"
                    }
                ]
            }
        ],
        researchJobs: [
            {
                id: 4,
                name: "Android",
                subCategory: [
                    {
                        id: 1,
                        name: "初级"
                    },
                    {
                        id: 2,
                        name: "中级"
                    },
                    {
                        id: 3,
                        name: "高级"
                    }
                ]
            },
            {
                id: 5,
                name: "IOS",
                subCategory: [
                    {
                        id: 1,
                        name: "初级"
                    },
                    {
                        id: 2,
                        name: "中级"
                    },
                    {
                        id: 3,
                        name: "高级"
                    }
                ]
            },
            {
                id: 6,
                name: "WEB",
                subCategory: [
                    {
                        id: 1,
                        name: "初级"
                    },
                    {
                        id: 2,
                        name: "中级"
                    },
                    {
                        id: 3,
                        name: "高级"
                    }
                ]
            },
            {
                id: 7,
                name: "OP",
                subCategory: [
                    {
                        id: 1,
                        name: "初级"
                    },
                    {
                        id: 2,
                        name: "中级"
                    },
                    {
                        id: 3,
                        name: "高级"
                    }
                ]
            },
            {
                id: 8,
                name: "JAVA",
                subCategory: [
                    {
                        id: 1,
                        name: "初级"
                    },
                    {
                        id: 2,
                        name: "中级"
                    },
                    {
                        id: 3,
                        name: "高级"
                    },
                    {
                        id: 4,
                        name: "总监"
                    }
                ]
            }
        ],
        dataJobs: [
            {
                id: 9,
                name: "NLP",
                subCategory: [
                    {
                        id: 1,
                        name: "初级"
                    },
                    {
                        id: 2,
                        name: "中级"
                    },
                    {
                        id: 3,
                        name: "高级"
                    }
                ]
            },
            {
                id: 10,
                name: "DM",
                subCategory: [
                    {
                        id: 1,
                        name: "初级"
                    },
                    {
                        id: 2,
                        name: "中级"
                    },
                    {
                        id: 3,
                        name: "高级"
                    }
                ]
            },
            {
                id: 11,
                name: "DL",
                subCategory: [
                    {
                        id: 1,
                        name: "初级"
                    },
                    {
                        id: 2,
                        name: "中级"
                    },
                    {
                        id: 3,
                        name: "高级"
                    }
                ]
            }
        ]
    })


    // 公司列表搜索面板
    .constant("searchPanel", {
        city: [
            {name: "不限", choose: true},
            {id: 110100, name: "北京", choose: false}
        ],
        category: [
            {name: "不限", choose: true},
            {id: 1, name: "产品", choose: false},
            {id: 2, name: "UI", choose: false},
            {id: 3, name: "QA", choose: false},
            {id: 4, name: "Android", choose: false},
            {id: 5, name: "IOS", choose: false},
            {id: 6, name: "WEB", choose: false},
            {id: 7, name: "OP", choose: false},
            {id: 8, name: "JAVA", choose: false},
            {id: 9, name: "NLP", choose: false},
            {id: 10, name: "DM", choose: false},
            {id: 11, name: "DL", choose: false}
        ],
        subCategory: [
            {
                name: "产品",
                data: [
                    {name: "不限", choose: true},
                    {id: 1, name: "助理", choose: false},
                    {id: 2, name: "初级", choose: false},
                    {id: 3, name: "中级", choose: false},
                    {id: 4, name: "高级", choose: false},
                    {id: 5, name: "总监", choose: false}
                ]
            },
            {
                name: "UI",
                data: [
                    {name: "不限", choose: true},
                    {id: 1, name: "初级", choose: false},
                    {id: 2, name: "中级", choose: false},
                    {id: 3, name: "高级", choose: false},
                    {id: 4, name: "总监", choose: false}
                ]
            },
            {
                name: "QA",
                data: [
                    {name: "不限", choose: true},
                    {id: 1, name: "初级", choose: false},
                    {id: 2, name: "中级", choose: false},
                    {id: 3, name: "高级", choose: false}
                ]
            },
            {
                name: "Android",
                data: [
                    {name: "不限", choose: true},
                    {id: 1, name: "初级", choose: false},
                    {id: 2, name: "中级", choose: false},
                    {id: 3, name: "高级", choose: false}
                ]
            },
            {
                name: "IOS",
                data: [
                    {name: "不限", choose: true},
                    {id: 1, name: "初级", choose: false},
                    {id: 2, name: "中级", choose: false},
                    {id: 3, name: "高级", choose: false}
                ]
            },
            {
                name: "WEB",
                data: [
                    {name: "不限", choose: true},
                    {id: 1, name: "初级", choose: false},
                    {id: 2, name: "中级", choose: false},
                    {id: 3, name: "高级", choose: false}
                ]
            },
            {
                name: "OP",
                data: [
                    {name: "不限", choose: true},
                    {id: 1, name: "初级", choose: false},
                    {id: 2, name: "中级", choose: false},
                    {id: 3, name: "高级", choose: false}
                ]
            },
            {
                name: "JAVA",
                data: [
                    {name: "不限", choose: true},
                    {id: 1, name: "初级", choose: false},
                    {id: 2, name: "中级", choose: false},
                    {id: 3, name: "高级", choose: false},
                    {id: 4, name: "总监", choose: false}
                ]
            },
            {
                name: "NLP",
                data: [
                    {name: "不限", choose: true},
                    {id: 1, name: "初级", choose: false},
                    {id: 2, name: "中级", choose: false},
                    {id: 3, name: "高级", choose: false}
                ]
            },
            {
                name: "DM",
                data: [
                    {name: "不限", choose: true},
                    {id: 1, name: "初级", choose: false},
                    {id: 2, name: "中级", choose: false},
                    {id: 3, name: "高级", choose: false}
                ]
            },
            {
                name: "DL",
                data: [
                    {name: "不限", choose: true},
                    {id: 1, name: "初级", choose: false},
                    {id: 2, name: "中级", choose: false},
                    {id: 3, name: "高级", choose: false}
                ]
            }
        ],
        industry: [
            {name: "不限", choose: true},
            {id: 0, name: "移动互联网", choose: false},
            {id: 1, name: "电子商务", choose: false},
            {id: 2, name: "企业服务", choose: false},
            {id: 3, name: "O2O", choose: false},
            {id: 4, name: "教育", choose: false},
            {id: 5, name: "金融", choose: false},
            {id: 6, name: "游戏", choose: false}
        ],
        education: [
            {name: "不限", choose: true},
            {id: 0, name: "大专", choose: false},
            {id: 1, name: "本科", choose: false},
            {id: 2, name: "硕士", choose: false},
            {id: 3, name: "博士及以上", choose: false}
        ],
        experience: [
            {name: "不限", choose: true},
            {id: 0, name: "应届", choose: false},
            {id: 1, name: "1-2年", choose: false},
            {id: 2, name: "3-5年", choose: false},
            {id: 3, name: "6-9年", choose: false},
            {id: 4, name: "10年及以上", choose: false}
        ],
        compensation: [
            {name: "不限", choose: true},
            {id: 0, name: "8K以下", choose: false},
            {id: 1, name: "8-15K", choose: false},
            {id: 2, name: "16-25K", choose: false},
            {id: 3, name: "26K及以上", choose: false}
        ],
        updateAt: [
            {name: "不限", choose: true},
            {id: 0, name: "24h内", choose: false},
            {id: 1, name: "三天内", choose: false},
            {id: 2, name: "七天内", choose: false}
        ],
        financing: [
            {name: "不限", choose: true},
            {id: 0, name: "无需融资", choose: false},
            {id: 1, name: "天使轮", choose: false},
            {id: 2, name: "A轮", choose: false},
            {id: 3, name: "B轮", choose: false},
            {id: 4, name: "C轮", choose: false},
            {id: 5, name: "D轮及以上", choose: false},
            {id: 6, name: "上市公司", choose: false}

        ]
    })
    //在招职位搜索
    .constant("recruitJobsType", {
        category: [
            {name: "不限", choose: true},
            {id: '1', name: "产品", choose: false},
            {id: '9,10,11', name: "运营", choose: false},
            {id: '4,5,6,7,8', name: "技术", choose: false},
            {id: '2', name: "设计", choose: false},
            {id: '3', name: "测试", choose: false}
        ]
    })
    //工资过滤器常量
    .constant('compensation', {
        0: '8K',
        1: '8~15K',
        2: '16~25K',
        3: '26K及以上'
    })
    //学历
    .constant('educationType', {
        0: '大专',
        1: '本科',
        2: '硕士',
        3: '博士及以上'
    })
    //工作经验
    .constant('experienceType', {
        0: '应届',
        1: '1~2年',
        2: '3~5年',
        3: '6~9年',
        4: '10年以上'
    })
    //行业过滤器常量
    .constant('industryList', {
        0: '移动互联网',
        1: '电子商务',
        2: '企业服务',
        3: 'O2O',
        4: '教育',
        5: '金融',
        6: '游戏'
    })
    //融资规模过滤器常量
    .constant('financing', {
        0: '无需融资',
        1: '天使轮',
        2: 'A轮',
        3: 'B轮',
        4: 'C轮',
        5: 'D轮及以上',
        6: '上市公司'
    })
    //地区过滤器常量
    .constant('region', {
        "11": {
            "name": "北京市",
            "children": {
                "110100": {
                    "name": "北京市",
                    "children": {
                        "110101": {
                            "name": "东城区"
                        },
                        "110102": {
                            "name": "西城区"
                        },
                        "110105": {
                            "name": "朝阳区"
                        },
                        "110106": {
                            "name": "丰台区"
                        },
                        "110107": {
                            "name": "石景山区"
                        },
                        "110108": {
                            "name": "海淀区"
                        },
                        "110109": {
                            "name": "门头沟区"
                        },
                        "110111": {
                            "name": "房山区"
                        },
                        "110112": {
                            "name": "通州区"
                        },
                        "110113": {
                            "name": "顺义区"
                        },
                        "110114": {
                            "name": "昌平区"
                        },
                        "110115": {
                            "name": "大兴区"
                        },
                        "110116": {
                            "name": "怀柔区"
                        },
                        "110117": {
                            "name": "平谷区"
                        },
                        "110118": {
                            "name": "密云区"
                        },
                        "110119": {
                            "name": "延庆区"
                        }
                    }
                }
            }
        },
        "12": {
            "name": "天津市",
            "children": {
                "120100": {
                    "name": "天津市",
                    "children": {
                        "120101": {
                            "name": "和平区"
                        },
                        "120102": {
                            "name": "河东区"
                        },
                        "120103": {
                            "name": "河西区"
                        },
                        "120104": {
                            "name": "南开区"
                        },
                        "120105": {
                            "name": "河北区"
                        },
                        "120106": {
                            "name": "红桥区"
                        },
                        "120110": {
                            "name": "东丽区"
                        },
                        "120111": {
                            "name": "西青区"
                        },
                        "120112": {
                            "name": "津南区"
                        },
                        "120113": {
                            "name": "北辰区"
                        },
                        "120114": {
                            "name": "武清区"
                        },
                        "120115": {
                            "name": "宝坻区"
                        },
                        "120116": {
                            "name": "滨海新区"
                        },
                        "120117": {
                            "name": "宁河区"
                        },
                        "120118": {
                            "name": "静海区"
                        },
                        "120119": {
                            "name": "蓟州区"
                        }
                    }
                }
            }
        },
        "13": {
            "name": "河北省",
            "children": {
                "130100": {
                    "name": "石家庄市",
                    "children": {
                        "130102": {
                            "name": "长安区"
                        },
                        "130104": {
                            "name": "桥西区"
                        },
                        "130105": {
                            "name": "新华区"
                        },
                        "130107": {
                            "name": "井陉矿区"
                        },
                        "130108": {
                            "name": "裕华区"
                        },
                        "130109": {
                            "name": "藁城区"
                        },
                        "130110": {
                            "name": "鹿泉区"
                        },
                        "130111": {
                            "name": "栾城区"
                        },
                        "130121": {
                            "name": "井陉县"
                        },
                        "130123": {
                            "name": "正定县"
                        },
                        "130125": {
                            "name": "行唐县"
                        },
                        "130126": {
                            "name": "灵寿县"
                        },
                        "130127": {
                            "name": "高邑县"
                        },
                        "130128": {
                            "name": "深泽县"
                        },
                        "130129": {
                            "name": "赞皇县"
                        },
                        "130130": {
                            "name": "无极县"
                        },
                        "130131": {
                            "name": "平山县"
                        },
                        "130132": {
                            "name": "元氏县"
                        },
                        "130133": {
                            "name": "赵县"
                        },
                        "130183": {
                            "name": "晋州市"
                        },
                        "130184": {
                            "name": "新乐市"
                        }
                    }
                },
                "130200": {
                    "name": "唐山市",
                    "children": {
                        "130202": {
                            "name": "路南区"
                        },
                        "130203": {
                            "name": "路北区"
                        },
                        "130204": {
                            "name": "古冶区"
                        },
                        "130205": {
                            "name": "开平区"
                        },
                        "130207": {
                            "name": "丰南区"
                        },
                        "130208": {
                            "name": "丰润区"
                        },
                        "130209": {
                            "name": "曹妃甸区"
                        },
                        "130223": {
                            "name": "滦县"
                        },
                        "130224": {
                            "name": "滦南县"
                        },
                        "130225": {
                            "name": "乐亭县"
                        },
                        "130227": {
                            "name": "迁西县"
                        },
                        "130229": {
                            "name": "玉田县"
                        },
                        "130281": {
                            "name": "遵化市"
                        },
                        "130283": {
                            "name": "迁安市"
                        }
                    }
                },
                "130300": {
                    "name": "秦皇岛市",
                    "children": {
                        "130302": {
                            "name": "海港区"
                        },
                        "130303": {
                            "name": "山海关区"
                        },
                        "130304": {
                            "name": "北戴河区"
                        },
                        "130306": {
                            "name": "抚宁区"
                        },
                        "130321": {
                            "name": "青龙满族自治县"
                        },
                        "130322": {
                            "name": "昌黎县"
                        },
                        "130324": {
                            "name": "卢龙县"
                        }
                    }
                },
                "130400": {
                    "name": "邯郸市",
                    "children": {
                        "130402": {
                            "name": "邯山区"
                        },
                        "130403": {
                            "name": "丛台区"
                        },
                        "130404": {
                            "name": "复兴区"
                        },
                        "130406": {
                            "name": "峰峰矿区"
                        },
                        "130421": {
                            "name": "邯郸县"
                        },
                        "130423": {
                            "name": "临漳县"
                        },
                        "130424": {
                            "name": "成安县"
                        },
                        "130425": {
                            "name": "大名县"
                        },
                        "130426": {
                            "name": "涉县"
                        },
                        "130427": {
                            "name": "磁县"
                        },
                        "130428": {
                            "name": "肥乡县"
                        },
                        "130429": {
                            "name": "永年县"
                        },
                        "130430": {
                            "name": "邱县"
                        },
                        "130431": {
                            "name": "鸡泽县"
                        },
                        "130432": {
                            "name": "广平县"
                        },
                        "130433": {
                            "name": "馆陶县"
                        },
                        "130434": {
                            "name": "魏县"
                        },
                        "130435": {
                            "name": "曲周县"
                        },
                        "130481": {
                            "name": "武安市"
                        }
                    }
                },
                "130500": {
                    "name": "邢台市",
                    "children": {
                        "130502": {
                            "name": "桥东区"
                        },
                        "130503": {
                            "name": "桥西区"
                        },
                        "130521": {
                            "name": "邢台县"
                        },
                        "130522": {
                            "name": "临城县"
                        },
                        "130523": {
                            "name": "内丘县"
                        },
                        "130524": {
                            "name": "柏乡县"
                        },
                        "130525": {
                            "name": "隆尧县"
                        },
                        "130526": {
                            "name": "任县"
                        },
                        "130527": {
                            "name": "南和县"
                        },
                        "130528": {
                            "name": "宁晋县"
                        },
                        "130529": {
                            "name": "巨鹿县"
                        },
                        "130530": {
                            "name": "新河县"
                        },
                        "130531": {
                            "name": "广宗县"
                        },
                        "130532": {
                            "name": "平乡县"
                        },
                        "130533": {
                            "name": "威县"
                        },
                        "130534": {
                            "name": "清河县"
                        },
                        "130535": {
                            "name": "临西县"
                        },
                        "130581": {
                            "name": "南宫市"
                        },
                        "130582": {
                            "name": "沙河市"
                        }
                    }
                },
                "130600": {
                    "name": "保定市",
                    "children": {
                        "130602": {
                            "name": "竞秀区"
                        },
                        "130606": {
                            "name": "莲池区"
                        },
                        "130607": {
                            "name": "满城区"
                        },
                        "130608": {
                            "name": "清苑区"
                        },
                        "130609": {
                            "name": "徐水区"
                        },
                        "130623": {
                            "name": "涞水县"
                        },
                        "130624": {
                            "name": "阜平县"
                        },
                        "130626": {
                            "name": "定兴县"
                        },
                        "130627": {
                            "name": "唐县"
                        },
                        "130628": {
                            "name": "高阳县"
                        },
                        "130629": {
                            "name": "容城县"
                        },
                        "130630": {
                            "name": "涞源县"
                        },
                        "130631": {
                            "name": "望都县"
                        },
                        "130632": {
                            "name": "安新县"
                        },
                        "130633": {
                            "name": "易县"
                        },
                        "130634": {
                            "name": "曲阳县"
                        },
                        "130635": {
                            "name": "蠡县"
                        },
                        "130636": {
                            "name": "顺平县"
                        },
                        "130637": {
                            "name": "博野县"
                        },
                        "130638": {
                            "name": "雄县"
                        },
                        "130681": {
                            "name": "涿州市"
                        },
                        "130683": {
                            "name": "安国市"
                        },
                        "130684": {
                            "name": "高碑店市"
                        }
                    }
                },
                "130700": {
                    "name": "张家口市",
                    "children": {
                        "130702": {
                            "name": "桥东区"
                        },
                        "130703": {
                            "name": "桥西区"
                        },
                        "130705": {
                            "name": "宣化区"
                        },
                        "130706": {
                            "name": "下花园区"
                        },
                        "130708": {
                            "name": "万全区"
                        },
                        "130709": {
                            "name": "崇礼区"
                        },
                        "130722": {
                            "name": "张北县"
                        },
                        "130723": {
                            "name": "康保县"
                        },
                        "130724": {
                            "name": "沽源县"
                        },
                        "130725": {
                            "name": "尚义县"
                        },
                        "130726": {
                            "name": "蔚县"
                        },
                        "130727": {
                            "name": "阳原县"
                        },
                        "130728": {
                            "name": "怀安县"
                        },
                        "130730": {
                            "name": "怀来县"
                        },
                        "130731": {
                            "name": "涿鹿县"
                        },
                        "130732": {
                            "name": "赤城县"
                        }
                    }
                },
                "130800": {
                    "name": "承德市",
                    "children": {
                        "130802": {
                            "name": "双桥区"
                        },
                        "130803": {
                            "name": "双滦区"
                        },
                        "130804": {
                            "name": "鹰手营子矿区"
                        },
                        "130821": {
                            "name": "承德县"
                        },
                        "130822": {
                            "name": "兴隆县"
                        },
                        "130823": {
                            "name": "平泉县"
                        },
                        "130824": {
                            "name": "滦平县"
                        },
                        "130825": {
                            "name": "隆化县"
                        },
                        "130826": {
                            "name": "丰宁满族自治县"
                        },
                        "130827": {
                            "name": "宽城满族自治县"
                        },
                        "130828": {
                            "name": "围场满族蒙古族自治县"
                        }
                    }
                },
                "130900": {
                    "name": "沧州市",
                    "children": {
                        "130902": {
                            "name": "新华区"
                        },
                        "130903": {
                            "name": "运河区"
                        },
                        "130921": {
                            "name": "沧县"
                        },
                        "130922": {
                            "name": "青县"
                        },
                        "130923": {
                            "name": "东光县"
                        },
                        "130924": {
                            "name": "海兴县"
                        },
                        "130925": {
                            "name": "盐山县"
                        },
                        "130926": {
                            "name": "肃宁县"
                        },
                        "130927": {
                            "name": "南皮县"
                        },
                        "130928": {
                            "name": "吴桥县"
                        },
                        "130929": {
                            "name": "献县"
                        },
                        "130930": {
                            "name": "孟村回族自治县"
                        },
                        "130981": {
                            "name": "泊头市"
                        },
                        "130982": {
                            "name": "任丘市"
                        },
                        "130983": {
                            "name": "黄骅市"
                        },
                        "130984": {
                            "name": "河间市"
                        }
                    }
                },
                "131000": {
                    "name": "廊坊市",
                    "children": {
                        "131002": {
                            "name": "安次区"
                        },
                        "131003": {
                            "name": "广阳区"
                        },
                        "131022": {
                            "name": "固安县"
                        },
                        "131023": {
                            "name": "永清县"
                        },
                        "131024": {
                            "name": "香河县"
                        },
                        "131025": {
                            "name": "大城县"
                        },
                        "131026": {
                            "name": "文安县"
                        },
                        "131028": {
                            "name": "大厂回族自治县"
                        },
                        "131081": {
                            "name": "霸州市"
                        },
                        "131082": {
                            "name": "三河市"
                        }
                    }
                },
                "131100": {
                    "name": "衡水市",
                    "children": {
                        "131102": {
                            "name": "桃城区"
                        },
                        "131103": {
                            "name": "冀州区"
                        },
                        "131121": {
                            "name": "枣强县"
                        },
                        "131122": {
                            "name": "武邑县"
                        },
                        "131123": {
                            "name": "武强县"
                        },
                        "131124": {
                            "name": "饶阳县"
                        },
                        "131125": {
                            "name": "安平县"
                        },
                        "131126": {
                            "name": "故城县"
                        },
                        "131127": {
                            "name": "景县"
                        },
                        "131128": {
                            "name": "阜城县"
                        },
                        "131182": {
                            "name": "深州市"
                        }
                    }
                }
            }
        },
        "14": {
            "name": "山西省",
            "children": {
                "140100": {
                    "name": "太原市",
                    "children": {
                        "140105": {
                            "name": "小店区"
                        },
                        "140106": {
                            "name": "迎泽区"
                        },
                        "140107": {
                            "name": "杏花岭区"
                        },
                        "140108": {
                            "name": "尖草坪区"
                        },
                        "140109": {
                            "name": "万柏林区"
                        },
                        "140110": {
                            "name": "晋源区"
                        },
                        "140121": {
                            "name": "清徐县"
                        },
                        "140122": {
                            "name": "阳曲县"
                        },
                        "140123": {
                            "name": "娄烦县"
                        },
                        "140181": {
                            "name": "古交市"
                        }
                    }
                },
                "140200": {
                    "name": "大同市",
                    "children": {
                        "140202": {
                            "name": "城区"
                        },
                        "140203": {
                            "name": "矿区"
                        },
                        "140211": {
                            "name": "南郊区"
                        },
                        "140212": {
                            "name": "新荣区"
                        },
                        "140221": {
                            "name": "阳高县"
                        },
                        "140222": {
                            "name": "天镇县"
                        },
                        "140223": {
                            "name": "广灵县"
                        },
                        "140224": {
                            "name": "灵丘县"
                        },
                        "140225": {
                            "name": "浑源县"
                        },
                        "140226": {
                            "name": "左云县"
                        },
                        "140227": {
                            "name": "大同县"
                        }
                    }
                },
                "140300": {
                    "name": "阳泉市",
                    "children": {
                        "140302": {
                            "name": "城区"
                        },
                        "140303": {
                            "name": "矿区"
                        },
                        "140311": {
                            "name": "郊区"
                        },
                        "140321": {
                            "name": "平定县"
                        },
                        "140322": {
                            "name": "盂县"
                        }
                    }
                },
                "140400": {
                    "name": "长治市",
                    "children": {
                        "140402": {
                            "name": "城区"
                        },
                        "140411": {
                            "name": "郊区"
                        },
                        "140421": {
                            "name": "长治县"
                        },
                        "140423": {
                            "name": "襄垣县"
                        },
                        "140424": {
                            "name": "屯留县"
                        },
                        "140425": {
                            "name": "平顺县"
                        },
                        "140426": {
                            "name": "黎城县"
                        },
                        "140427": {
                            "name": "壶关县"
                        },
                        "140428": {
                            "name": "长子县"
                        },
                        "140429": {
                            "name": "武乡县"
                        },
                        "140430": {
                            "name": "沁县"
                        },
                        "140431": {
                            "name": "沁源县"
                        },
                        "140481": {
                            "name": "潞城市"
                        }
                    }
                },
                "140500": {
                    "name": "晋城市",
                    "children": {
                        "140502": {
                            "name": "城区"
                        },
                        "140521": {
                            "name": "沁水县"
                        },
                        "140522": {
                            "name": "阳城县"
                        },
                        "140524": {
                            "name": "陵川县"
                        },
                        "140525": {
                            "name": "泽州县"
                        },
                        "140581": {
                            "name": "高平市"
                        }
                    }
                },
                "140600": {
                    "name": "朔州市",
                    "children": {
                        "140602": {
                            "name": "朔城区"
                        },
                        "140603": {
                            "name": "平鲁区"
                        },
                        "140621": {
                            "name": "山阴县"
                        },
                        "140622": {
                            "name": "应县"
                        },
                        "140623": {
                            "name": "右玉县"
                        },
                        "140624": {
                            "name": "怀仁县"
                        }
                    }
                },
                "140700": {
                    "name": "晋中市",
                    "children": {
                        "140702": {
                            "name": "榆次区"
                        },
                        "140721": {
                            "name": "榆社县"
                        },
                        "140722": {
                            "name": "左权县"
                        },
                        "140723": {
                            "name": "和顺县"
                        },
                        "140724": {
                            "name": "昔阳县"
                        },
                        "140725": {
                            "name": "寿阳县"
                        },
                        "140726": {
                            "name": "太谷县"
                        },
                        "140727": {
                            "name": "祁县"
                        },
                        "140728": {
                            "name": "平遥县"
                        },
                        "140729": {
                            "name": "灵石县"
                        },
                        "140781": {
                            "name": "介休市"
                        }
                    }
                },
                "140800": {
                    "name": "运城市",
                    "children": {
                        "140802": {
                            "name": "盐湖区"
                        },
                        "140821": {
                            "name": "临猗县"
                        },
                        "140822": {
                            "name": "万荣县"
                        },
                        "140823": {
                            "name": "闻喜县"
                        },
                        "140824": {
                            "name": "稷山县"
                        },
                        "140825": {
                            "name": "新绛县"
                        },
                        "140826": {
                            "name": "绛县"
                        },
                        "140827": {
                            "name": "垣曲县"
                        },
                        "140828": {
                            "name": "夏县"
                        },
                        "140829": {
                            "name": "平陆县"
                        },
                        "140830": {
                            "name": "芮城县"
                        },
                        "140881": {
                            "name": "永济市"
                        },
                        "140882": {
                            "name": "河津市"
                        }
                    }
                },
                "140900": {
                    "name": "忻州市",
                    "children": {
                        "140902": {
                            "name": "忻府区"
                        },
                        "140921": {
                            "name": "定襄县"
                        },
                        "140922": {
                            "name": "五台县"
                        },
                        "140923": {
                            "name": "代县"
                        },
                        "140924": {
                            "name": "繁峙县"
                        },
                        "140925": {
                            "name": "宁武县"
                        },
                        "140926": {
                            "name": "静乐县"
                        },
                        "140927": {
                            "name": "神池县"
                        },
                        "140928": {
                            "name": "五寨县"
                        },
                        "140929": {
                            "name": "岢岚县"
                        },
                        "140930": {
                            "name": "河曲县"
                        },
                        "140931": {
                            "name": "保德县"
                        },
                        "140932": {
                            "name": "偏关县"
                        },
                        "140981": {
                            "name": "原平市"
                        }
                    }
                },
                "141000": {
                    "name": "临汾市",
                    "children": {
                        "141002": {
                            "name": "尧都区"
                        },
                        "141021": {
                            "name": "曲沃县"
                        },
                        "141022": {
                            "name": "翼城县"
                        },
                        "141023": {
                            "name": "襄汾县"
                        },
                        "141024": {
                            "name": "洪洞县"
                        },
                        "141025": {
                            "name": "古县"
                        },
                        "141026": {
                            "name": "安泽县"
                        },
                        "141027": {
                            "name": "浮山县"
                        },
                        "141028": {
                            "name": "吉县"
                        },
                        "141029": {
                            "name": "乡宁县"
                        },
                        "141030": {
                            "name": "大宁县"
                        },
                        "141031": {
                            "name": "隰县"
                        },
                        "141032": {
                            "name": "永和县"
                        },
                        "141033": {
                            "name": "蒲县"
                        },
                        "141034": {
                            "name": "汾西县"
                        },
                        "141081": {
                            "name": "侯马市"
                        },
                        "141082": {
                            "name": "霍州市"
                        }
                    }
                },
                "141100": {
                    "name": "吕梁市",
                    "children": {
                        "141102": {
                            "name": "离石区"
                        },
                        "141121": {
                            "name": "文水县"
                        },
                        "141122": {
                            "name": "交城县"
                        },
                        "141123": {
                            "name": "兴县"
                        },
                        "141124": {
                            "name": "临县"
                        },
                        "141125": {
                            "name": "柳林县"
                        },
                        "141126": {
                            "name": "石楼县"
                        },
                        "141127": {
                            "name": "岚县"
                        },
                        "141128": {
                            "name": "方山县"
                        },
                        "141129": {
                            "name": "中阳县"
                        },
                        "141130": {
                            "name": "交口县"
                        },
                        "141181": {
                            "name": "孝义市"
                        },
                        "141182": {
                            "name": "汾阳市"
                        }
                    }
                }
            }
        },
        "15": {
            "name": "内蒙古自治区",
            "children": {
                "150100": {
                    "name": "呼和浩特市",
                    "children": {
                        "150102": {
                            "name": "新城区"
                        },
                        "150103": {
                            "name": "回民区"
                        },
                        "150104": {
                            "name": "玉泉区"
                        },
                        "150105": {
                            "name": "赛罕区"
                        },
                        "150121": {
                            "name": "土默特左旗"
                        },
                        "150122": {
                            "name": "托克托县"
                        },
                        "150123": {
                            "name": "和林格尔县"
                        },
                        "150124": {
                            "name": "清水河县"
                        },
                        "150125": {
                            "name": "武川县"
                        }
                    }
                },
                "150200": {
                    "name": "包头市",
                    "children": {
                        "150202": {
                            "name": "东河区"
                        },
                        "150203": {
                            "name": "昆都仑区"
                        },
                        "150204": {
                            "name": "青山区"
                        },
                        "150205": {
                            "name": "石拐区"
                        },
                        "150206": {
                            "name": "白云鄂博矿区"
                        },
                        "150207": {
                            "name": "九原区"
                        },
                        "150221": {
                            "name": "土默特右旗"
                        },
                        "150222": {
                            "name": "固阳县"
                        },
                        "150223": {
                            "name": "达尔罕茂明安联合旗"
                        }
                    }
                },
                "150300": {
                    "name": "乌海市",
                    "children": {
                        "150302": {
                            "name": "海勃湾区"
                        },
                        "150303": {
                            "name": "海南区"
                        },
                        "150304": {
                            "name": "乌达区"
                        }
                    }
                },
                "150400": {
                    "name": "赤峰市",
                    "children": {
                        "150402": {
                            "name": "红山区"
                        },
                        "150403": {
                            "name": "元宝山区"
                        },
                        "150404": {
                            "name": "松山区"
                        },
                        "150421": {
                            "name": "阿鲁科尔沁旗"
                        },
                        "150422": {
                            "name": "巴林左旗"
                        },
                        "150423": {
                            "name": "巴林右旗"
                        },
                        "150424": {
                            "name": "林西县"
                        },
                        "150425": {
                            "name": "克什克腾旗"
                        },
                        "150426": {
                            "name": "翁牛特旗"
                        },
                        "150428": {
                            "name": "喀喇沁旗"
                        },
                        "150429": {
                            "name": "宁城县"
                        },
                        "150430": {
                            "name": "敖汉旗"
                        }
                    }
                },
                "150500": {
                    "name": "通辽市",
                    "children": {
                        "150502": {
                            "name": "科尔沁区"
                        },
                        "150521": {
                            "name": "科尔沁左翼中旗"
                        },
                        "150522": {
                            "name": "科尔沁左翼后旗"
                        },
                        "150523": {
                            "name": "开鲁县"
                        },
                        "150524": {
                            "name": "库伦旗"
                        },
                        "150525": {
                            "name": "奈曼旗"
                        },
                        "150526": {
                            "name": "扎鲁特旗"
                        },
                        "150581": {
                            "name": "霍林郭勒市"
                        }
                    }
                },
                "150600": {
                    "name": "鄂尔多斯市",
                    "children": {
                        "150602": {
                            "name": "东胜区"
                        },
                        "150603": {
                            "name": "康巴什区"
                        },
                        "150621": {
                            "name": "达拉特旗"
                        },
                        "150622": {
                            "name": "准格尔旗"
                        },
                        "150623": {
                            "name": "鄂托克前旗"
                        },
                        "150624": {
                            "name": "鄂托克旗"
                        },
                        "150625": {
                            "name": "杭锦旗"
                        },
                        "150626": {
                            "name": "乌审旗"
                        },
                        "150627": {
                            "name": "伊金霍洛旗"
                        }
                    }
                },
                "150700": {
                    "name": "呼伦贝尔市",
                    "children": {
                        "150702": {
                            "name": "海拉尔区"
                        },
                        "150703": {
                            "name": "扎赉诺尔区"
                        },
                        "150721": {
                            "name": "阿荣旗"
                        },
                        "150722": {
                            "name": "莫力达瓦达斡尔族自治旗"
                        },
                        "150723": {
                            "name": "鄂伦春自治旗"
                        },
                        "150724": {
                            "name": "鄂温克族自治旗"
                        },
                        "150725": {
                            "name": "陈巴尔虎旗"
                        },
                        "150726": {
                            "name": "新巴尔虎左旗"
                        },
                        "150727": {
                            "name": "新巴尔虎右旗"
                        },
                        "150781": {
                            "name": "满洲里市"
                        },
                        "150782": {
                            "name": "牙克石市"
                        },
                        "150783": {
                            "name": "扎兰屯市"
                        },
                        "150784": {
                            "name": "额尔古纳市"
                        },
                        "150785": {
                            "name": "根河市"
                        }
                    }
                },
                "150800": {
                    "name": "巴彦淖尔市",
                    "children": {
                        "150802": {
                            "name": "临河区"
                        },
                        "150821": {
                            "name": "五原县"
                        },
                        "150822": {
                            "name": "磴口县"
                        },
                        "150823": {
                            "name": "乌拉特前旗"
                        },
                        "150824": {
                            "name": "乌拉特中旗"
                        },
                        "150825": {
                            "name": "乌拉特后旗"
                        },
                        "150826": {
                            "name": "杭锦后旗"
                        }
                    }
                },
                "150900": {
                    "name": "乌兰察布市",
                    "children": {
                        "150902": {
                            "name": "集宁区"
                        },
                        "150921": {
                            "name": "卓资县"
                        },
                        "150922": {
                            "name": "化德县"
                        },
                        "150923": {
                            "name": "商都县"
                        },
                        "150924": {
                            "name": "兴和县"
                        },
                        "150925": {
                            "name": "凉城县"
                        },
                        "150926": {
                            "name": "察哈尔右翼前旗"
                        },
                        "150927": {
                            "name": "察哈尔右翼中旗"
                        },
                        "150928": {
                            "name": "察哈尔右翼后旗"
                        },
                        "150929": {
                            "name": "四子王旗"
                        },
                        "150981": {
                            "name": "丰镇市"
                        }
                    }
                },
                "152200": {
                    "name": "兴安盟",
                    "children": {
                        "152201": {
                            "name": "乌兰浩特市"
                        },
                        "152202": {
                            "name": "阿尔山市"
                        },
                        "152221": {
                            "name": "科尔沁右翼前旗"
                        },
                        "152222": {
                            "name": "科尔沁右翼中旗"
                        },
                        "152223": {
                            "name": "扎赉特旗"
                        },
                        "152224": {
                            "name": "突泉县"
                        }
                    }
                },
                "152500": {
                    "name": "锡林郭勒盟",
                    "children": {
                        "152501": {
                            "name": "二连浩特市"
                        },
                        "152502": {
                            "name": "锡林浩特市"
                        },
                        "152522": {
                            "name": "阿巴嘎旗"
                        },
                        "152523": {
                            "name": "苏尼特左旗"
                        },
                        "152524": {
                            "name": "苏尼特右旗"
                        },
                        "152525": {
                            "name": "东乌珠穆沁旗"
                        },
                        "152526": {
                            "name": "西乌珠穆沁旗"
                        },
                        "152527": {
                            "name": "太仆寺旗"
                        },
                        "152528": {
                            "name": "镶黄旗"
                        },
                        "152529": {
                            "name": "正镶白旗"
                        },
                        "152530": {
                            "name": "正蓝旗"
                        },
                        "152531": {
                            "name": "多伦县"
                        }
                    }
                },
                "152900": {
                    "name": "阿拉善盟",
                    "children": {
                        "152921": {
                            "name": "阿拉善左旗"
                        },
                        "152922": {
                            "name": "阿拉善右旗"
                        },
                        "152923": {
                            "name": "额济纳旗"
                        }
                    }
                }
            }
        },
        "21": {
            "name": "辽宁省",
            "children": {
                "210100": {
                    "name": "沈阳市",
                    "children": {
                        "210102": {
                            "name": "和平区"
                        },
                        "210103": {
                            "name": "沈河区"
                        },
                        "210104": {
                            "name": "大东区"
                        },
                        "210105": {
                            "name": "皇姑区"
                        },
                        "210106": {
                            "name": "铁西区"
                        },
                        "210111": {
                            "name": "苏家屯区"
                        },
                        "210112": {
                            "name": "浑南区"
                        },
                        "210113": {
                            "name": "沈北新区"
                        },
                        "210114": {
                            "name": "于洪区"
                        },
                        "210115": {
                            "name": "辽中区"
                        },
                        "210123": {
                            "name": "康平县"
                        },
                        "210124": {
                            "name": "法库县"
                        },
                        "210181": {
                            "name": "新民市"
                        }
                    }
                },
                "210200": {
                    "name": "大连市",
                    "children": {
                        "210202": {
                            "name": "中山区"
                        },
                        "210203": {
                            "name": "西岗区"
                        },
                        "210204": {
                            "name": "沙河口区"
                        },
                        "210211": {
                            "name": "甘井子区"
                        },
                        "210212": {
                            "name": "旅顺口区"
                        },
                        "210213": {
                            "name": "金州区"
                        },
                        "210214": {
                            "name": "普兰店区"
                        },
                        "210224": {
                            "name": "长海县"
                        },
                        "210281": {
                            "name": "瓦房店市"
                        },
                        "210283": {
                            "name": "庄河市"
                        }
                    }
                },
                "210300": {
                    "name": "鞍山市",
                    "children": {
                        "210302": {
                            "name": "铁东区"
                        },
                        "210303": {
                            "name": "铁西区"
                        },
                        "210304": {
                            "name": "立山区"
                        },
                        "210311": {
                            "name": "千山区"
                        },
                        "210321": {
                            "name": "台安县"
                        },
                        "210323": {
                            "name": "岫岩满族自治县"
                        },
                        "210381": {
                            "name": "海城市"
                        }
                    }
                },
                "210400": {
                    "name": "抚顺市",
                    "children": {
                        "210402": {
                            "name": "新抚区"
                        },
                        "210403": {
                            "name": "东洲区"
                        },
                        "210404": {
                            "name": "望花区"
                        },
                        "210411": {
                            "name": "顺城区"
                        },
                        "210421": {
                            "name": "抚顺县"
                        },
                        "210422": {
                            "name": "新宾满族自治县"
                        },
                        "210423": {
                            "name": "清原满族自治县"
                        }
                    }
                },
                "210500": {
                    "name": "本溪市",
                    "children": {
                        "210502": {
                            "name": "平山区"
                        },
                        "210503": {
                            "name": "溪湖区"
                        },
                        "210504": {
                            "name": "明山区"
                        },
                        "210505": {
                            "name": "南芬区"
                        },
                        "210521": {
                            "name": "本溪满族自治县"
                        },
                        "210522": {
                            "name": "桓仁满族自治县"
                        }
                    }
                },
                "210600": {
                    "name": "丹东市",
                    "children": {
                        "210602": {
                            "name": "元宝区"
                        },
                        "210603": {
                            "name": "振兴区"
                        },
                        "210604": {
                            "name": "振安区"
                        },
                        "210624": {
                            "name": "宽甸满族自治县"
                        },
                        "210681": {
                            "name": "东港市"
                        },
                        "210682": {
                            "name": "凤城市"
                        }
                    }
                },
                "210700": {
                    "name": "锦州市",
                    "children": {
                        "210702": {
                            "name": "古塔区"
                        },
                        "210703": {
                            "name": "凌河区"
                        },
                        "210711": {
                            "name": "太和区"
                        },
                        "210726": {
                            "name": "黑山县"
                        },
                        "210727": {
                            "name": "义县"
                        },
                        "210781": {
                            "name": "凌海市"
                        },
                        "210782": {
                            "name": "北镇市"
                        }
                    }
                },
                "210800": {
                    "name": "营口市",
                    "children": {
                        "210802": {
                            "name": "站前区"
                        },
                        "210803": {
                            "name": "西市区"
                        },
                        "210804": {
                            "name": "鲅鱼圈区"
                        },
                        "210811": {
                            "name": "老边区"
                        },
                        "210881": {
                            "name": "盖州市"
                        },
                        "210882": {
                            "name": "大石桥市"
                        }
                    }
                },
                "210900": {
                    "name": "阜新市",
                    "children": {
                        "210902": {
                            "name": "海州区"
                        },
                        "210903": {
                            "name": "新邱区"
                        },
                        "210904": {
                            "name": "太平区"
                        },
                        "210905": {
                            "name": "清河门区"
                        },
                        "210911": {
                            "name": "细河区"
                        },
                        "210921": {
                            "name": "阜新蒙古族自治县"
                        },
                        "210922": {
                            "name": "彰武县"
                        }
                    }
                },
                "211000": {
                    "name": "辽阳市",
                    "children": {
                        "211002": {
                            "name": "白塔区"
                        },
                        "211003": {
                            "name": "文圣区"
                        },
                        "211004": {
                            "name": "宏伟区"
                        },
                        "211005": {
                            "name": "弓长岭区"
                        },
                        "211011": {
                            "name": "太子河区"
                        },
                        "211021": {
                            "name": "辽阳县"
                        },
                        "211081": {
                            "name": "灯塔市"
                        }
                    }
                },
                "211100": {
                    "name": "盘锦市",
                    "children": {
                        "211102": {
                            "name": "双台子区"
                        },
                        "211103": {
                            "name": "兴隆台区"
                        },
                        "211104": {
                            "name": "大洼区"
                        },
                        "211122": {
                            "name": "盘山县"
                        }
                    }
                },
                "211200": {
                    "name": "铁岭市",
                    "children": {
                        "211202": {
                            "name": "银州区"
                        },
                        "211204": {
                            "name": "清河区"
                        },
                        "211221": {
                            "name": "铁岭县"
                        },
                        "211223": {
                            "name": "西丰县"
                        },
                        "211224": {
                            "name": "昌图县"
                        },
                        "211281": {
                            "name": "调兵山市"
                        },
                        "211282": {
                            "name": "开原市"
                        }
                    }
                },
                "211300": {
                    "name": "朝阳市",
                    "children": {
                        "211302": {
                            "name": "双塔区"
                        },
                        "211303": {
                            "name": "龙城区"
                        },
                        "211321": {
                            "name": "朝阳县"
                        },
                        "211322": {
                            "name": "建平县"
                        },
                        "211324": {
                            "name": "喀喇沁左翼蒙古族自治县"
                        },
                        "211381": {
                            "name": "北票市"
                        },
                        "211382": {
                            "name": "凌源市"
                        }
                    }
                },
                "211400": {
                    "name": "葫芦岛市",
                    "children": {
                        "211402": {
                            "name": "连山区"
                        },
                        "211403": {
                            "name": "龙港区"
                        },
                        "211404": {
                            "name": "南票区"
                        },
                        "211421": {
                            "name": "绥中县"
                        },
                        "211422": {
                            "name": "建昌县"
                        },
                        "211481": {
                            "name": "兴城市"
                        }
                    }
                }
            }
        },
        "22": {
            "name": "吉林省",
            "children": {
                "220100": {
                    "name": "长春市",
                    "children": {
                        "220102": {
                            "name": "南关区"
                        },
                        "220103": {
                            "name": "宽城区"
                        },
                        "220104": {
                            "name": "朝阳区"
                        },
                        "220105": {
                            "name": "二道区"
                        },
                        "220106": {
                            "name": "绿园区"
                        },
                        "220112": {
                            "name": "双阳区"
                        },
                        "220113": {
                            "name": "九台区"
                        },
                        "220122": {
                            "name": "农安县"
                        },
                        "220182": {
                            "name": "榆树市"
                        },
                        "220183": {
                            "name": "德惠市"
                        }
                    }
                },
                "220200": {
                    "name": "吉林市",
                    "children": {
                        "220202": {
                            "name": "昌邑区"
                        },
                        "220203": {
                            "name": "龙潭区"
                        },
                        "220204": {
                            "name": "船营区"
                        },
                        "220211": {
                            "name": "丰满区"
                        },
                        "220221": {
                            "name": "永吉县"
                        },
                        "220281": {
                            "name": "蛟河市"
                        },
                        "220282": {
                            "name": "桦甸市"
                        },
                        "220283": {
                            "name": "舒兰市"
                        },
                        "220284": {
                            "name": "磐石市"
                        }
                    }
                },
                "220300": {
                    "name": "四平市",
                    "children": {
                        "220302": {
                            "name": "铁西区"
                        },
                        "220303": {
                            "name": "铁东区"
                        },
                        "220322": {
                            "name": "梨树县"
                        },
                        "220323": {
                            "name": "伊通满族自治县"
                        },
                        "220381": {
                            "name": "公主岭市"
                        },
                        "220382": {
                            "name": "双辽市"
                        }
                    }
                },
                "220400": {
                    "name": "辽源市",
                    "children": {
                        "220402": {
                            "name": "龙山区"
                        },
                        "220403": {
                            "name": "西安区"
                        },
                        "220421": {
                            "name": "东丰县"
                        },
                        "220422": {
                            "name": "东辽县"
                        }
                    }
                },
                "220500": {
                    "name": "通化市",
                    "children": {
                        "220502": {
                            "name": "东昌区"
                        },
                        "220503": {
                            "name": "二道江区"
                        },
                        "220521": {
                            "name": "通化县"
                        },
                        "220523": {
                            "name": "辉南县"
                        },
                        "220524": {
                            "name": "柳河县"
                        },
                        "220581": {
                            "name": "梅河口市"
                        },
                        "220582": {
                            "name": "集安市"
                        }
                    }
                },
                "220600": {
                    "name": "白山市",
                    "children": {
                        "220602": {
                            "name": "浑江区"
                        },
                        "220605": {
                            "name": "江源区"
                        },
                        "220621": {
                            "name": "抚松县"
                        },
                        "220622": {
                            "name": "靖宇县"
                        },
                        "220623": {
                            "name": "长白朝鲜族自治县"
                        },
                        "220681": {
                            "name": "临江市"
                        }
                    }
                },
                "220700": {
                    "name": "松原市",
                    "children": {
                        "220702": {
                            "name": "宁江区"
                        },
                        "220721": {
                            "name": "前郭尔罗斯蒙古族自治县"
                        },
                        "220722": {
                            "name": "长岭县"
                        },
                        "220723": {
                            "name": "乾安县"
                        },
                        "220781": {
                            "name": "扶余市"
                        }
                    }
                },
                "220800": {
                    "name": "白城市",
                    "children": {
                        "220802": {
                            "name": "洮北区"
                        },
                        "220821": {
                            "name": "镇赉县"
                        },
                        "220822": {
                            "name": "通榆县"
                        },
                        "220881": {
                            "name": "洮南市"
                        },
                        "220882": {
                            "name": "大安市"
                        }
                    }
                },
                "222400": {
                    "name": "延边朝鲜族自治州",
                    "children": {
                        "222401": {
                            "name": "延吉市"
                        },
                        "222402": {
                            "name": "图们市"
                        },
                        "222403": {
                            "name": "敦化市"
                        },
                        "222404": {
                            "name": "珲春市"
                        },
                        "222405": {
                            "name": "龙井市"
                        },
                        "222406": {
                            "name": "和龙市"
                        },
                        "222424": {
                            "name": "汪清县"
                        },
                        "222426": {
                            "name": "安图县"
                        }
                    }
                }
            }
        },
        "23": {
            "name": "黑龙江省",
            "children": {
                "230100": {
                    "name": "哈尔滨市",
                    "children": {
                        "230102": {
                            "name": "道里区"
                        },
                        "230103": {
                            "name": "南岗区"
                        },
                        "230104": {
                            "name": "道外区"
                        },
                        "230108": {
                            "name": "平房区"
                        },
                        "230109": {
                            "name": "松北区"
                        },
                        "230110": {
                            "name": "香坊区"
                        },
                        "230111": {
                            "name": "呼兰区"
                        },
                        "230112": {
                            "name": "阿城区"
                        },
                        "230113": {
                            "name": "双城区"
                        },
                        "230123": {
                            "name": "依兰县"
                        },
                        "230124": {
                            "name": "方正县"
                        },
                        "230125": {
                            "name": "宾县"
                        },
                        "230126": {
                            "name": "巴彦县"
                        },
                        "230127": {
                            "name": "木兰县"
                        },
                        "230128": {
                            "name": "通河县"
                        },
                        "230129": {
                            "name": "延寿县"
                        },
                        "230183": {
                            "name": "尚志市"
                        },
                        "230184": {
                            "name": "五常市"
                        }
                    }
                },
                "230200": {
                    "name": "齐齐哈尔市",
                    "children": {
                        "230202": {
                            "name": "龙沙区"
                        },
                        "230203": {
                            "name": "建华区"
                        },
                        "230204": {
                            "name": "铁锋区"
                        },
                        "230205": {
                            "name": "昂昂溪区"
                        },
                        "230206": {
                            "name": "富拉尔基区"
                        },
                        "230207": {
                            "name": "碾子山区"
                        },
                        "230208": {
                            "name": "梅里斯达斡尔族区"
                        },
                        "230221": {
                            "name": "龙江县"
                        },
                        "230223": {
                            "name": "依安县"
                        },
                        "230224": {
                            "name": "泰来县"
                        },
                        "230225": {
                            "name": "甘南县"
                        },
                        "230227": {
                            "name": "富裕县"
                        },
                        "230229": {
                            "name": "克山县"
                        },
                        "230230": {
                            "name": "克东县"
                        },
                        "230231": {
                            "name": "拜泉县"
                        },
                        "230281": {
                            "name": "讷河市"
                        }
                    }
                },
                "230300": {
                    "name": "鸡西市",
                    "children": {
                        "230302": {
                            "name": "鸡冠区"
                        },
                        "230303": {
                            "name": "恒山区"
                        },
                        "230304": {
                            "name": "滴道区"
                        },
                        "230305": {
                            "name": "梨树区"
                        },
                        "230306": {
                            "name": "城子河区"
                        },
                        "230307": {
                            "name": "麻山区"
                        },
                        "230321": {
                            "name": "鸡东县"
                        },
                        "230381": {
                            "name": "虎林市"
                        },
                        "230382": {
                            "name": "密山市"
                        }
                    }
                },
                "230400": {
                    "name": "鹤岗市",
                    "children": {
                        "230402": {
                            "name": "向阳区"
                        },
                        "230403": {
                            "name": "工农区"
                        },
                        "230404": {
                            "name": "南山区"
                        },
                        "230405": {
                            "name": "兴安区"
                        },
                        "230406": {
                            "name": "东山区"
                        },
                        "230407": {
                            "name": "兴山区"
                        },
                        "230421": {
                            "name": "萝北县"
                        },
                        "230422": {
                            "name": "绥滨县"
                        }
                    }
                },
                "230500": {
                    "name": "双鸭山市",
                    "children": {
                        "230502": {
                            "name": "尖山区"
                        },
                        "230503": {
                            "name": "岭东区"
                        },
                        "230505": {
                            "name": "四方台区"
                        },
                        "230506": {
                            "name": "宝山区"
                        },
                        "230521": {
                            "name": "集贤县"
                        },
                        "230522": {
                            "name": "友谊县"
                        },
                        "230523": {
                            "name": "宝清县"
                        },
                        "230524": {
                            "name": "饶河县"
                        }
                    }
                },
                "230600": {
                    "name": "大庆市",
                    "children": {
                        "230602": {
                            "name": "萨尔图区"
                        },
                        "230603": {
                            "name": "龙凤区"
                        },
                        "230604": {
                            "name": "让胡路区"
                        },
                        "230605": {
                            "name": "红岗区"
                        },
                        "230606": {
                            "name": "大同区"
                        },
                        "230621": {
                            "name": "肇州县"
                        },
                        "230622": {
                            "name": "肇源县"
                        },
                        "230623": {
                            "name": "林甸县"
                        },
                        "230624": {
                            "name": "杜尔伯特蒙古族自治县"
                        }
                    }
                },
                "230700": {
                    "name": "伊春市",
                    "children": {
                        "230702": {
                            "name": "伊春区"
                        },
                        "230703": {
                            "name": "南岔区"
                        },
                        "230704": {
                            "name": "友好区"
                        },
                        "230705": {
                            "name": "西林区"
                        },
                        "230706": {
                            "name": "翠峦区"
                        },
                        "230707": {
                            "name": "新青区"
                        },
                        "230708": {
                            "name": "美溪区"
                        },
                        "230709": {
                            "name": "金山屯区"
                        },
                        "230710": {
                            "name": "五营区"
                        },
                        "230711": {
                            "name": "乌马河区"
                        },
                        "230712": {
                            "name": "汤旺河区"
                        },
                        "230713": {
                            "name": "带岭区"
                        },
                        "230714": {
                            "name": "乌伊岭区"
                        },
                        "230715": {
                            "name": "红星区"
                        },
                        "230716": {
                            "name": "上甘岭区"
                        },
                        "230722": {
                            "name": "嘉荫县"
                        },
                        "230781": {
                            "name": "铁力市"
                        }
                    }
                },
                "230800": {
                    "name": "佳木斯市",
                    "children": {
                        "230803": {
                            "name": "向阳区"
                        },
                        "230804": {
                            "name": "前进区"
                        },
                        "230805": {
                            "name": "东风区"
                        },
                        "230811": {
                            "name": "郊区"
                        },
                        "230822": {
                            "name": "桦南县"
                        },
                        "230826": {
                            "name": "桦川县"
                        },
                        "230828": {
                            "name": "汤原县"
                        },
                        "230881": {
                            "name": "同江市"
                        },
                        "230882": {
                            "name": "富锦市"
                        },
                        "230883": {
                            "name": "抚远市"
                        }
                    }
                },
                "230900": {
                    "name": "七台河市",
                    "children": {
                        "230902": {
                            "name": "新兴区"
                        },
                        "230903": {
                            "name": "桃山区"
                        },
                        "230904": {
                            "name": "茄子河区"
                        },
                        "230921": {
                            "name": "勃利县"
                        }
                    }
                },
                "231000": {
                    "name": "牡丹江市",
                    "children": {
                        "231002": {
                            "name": "东安区"
                        },
                        "231003": {
                            "name": "阳明区"
                        },
                        "231004": {
                            "name": "爱民区"
                        },
                        "231005": {
                            "name": "西安区"
                        },
                        "231025": {
                            "name": "林口县"
                        },
                        "231081": {
                            "name": "绥芬河市"
                        },
                        "231083": {
                            "name": "海林市"
                        },
                        "231084": {
                            "name": "宁安市"
                        },
                        "231085": {
                            "name": "穆棱市"
                        },
                        "231086": {
                            "name": "东宁市"
                        }
                    }
                },
                "231100": {
                    "name": "黑河市",
                    "children": {
                        "231102": {
                            "name": "爱辉区"
                        },
                        "231121": {
                            "name": "嫩江县"
                        },
                        "231123": {
                            "name": "逊克县"
                        },
                        "231124": {
                            "name": "孙吴县"
                        },
                        "231181": {
                            "name": "北安市"
                        },
                        "231182": {
                            "name": "五大连池市"
                        }
                    }
                },
                "231200": {
                    "name": "绥化市",
                    "children": {
                        "231202": {
                            "name": "北林区"
                        },
                        "231221": {
                            "name": "望奎县"
                        },
                        "231222": {
                            "name": "兰西县"
                        },
                        "231223": {
                            "name": "青冈县"
                        },
                        "231224": {
                            "name": "庆安县"
                        },
                        "231225": {
                            "name": "明水县"
                        },
                        "231226": {
                            "name": "绥棱县"
                        },
                        "231281": {
                            "name": "安达市"
                        },
                        "231282": {
                            "name": "肇东市"
                        },
                        "231283": {
                            "name": "海伦市"
                        }
                    }
                },
                "232700": {
                    "name": "大兴安岭地区",
                    "children": {
                        "232721": {
                            "name": "呼玛县"
                        },
                        "232722": {
                            "name": "塔河县"
                        },
                        "232723": {
                            "name": "漠河县"
                        }
                    }
                }
            }
        },
        "31": {
            "name": "上海市",
            "children": {
                "310100": {
                    "name": "上海市",
                    "children": {
                        "310101": {
                            "name": "黄浦区"
                        },
                        "310104": {
                            "name": "徐汇区"
                        },
                        "310105": {
                            "name": "长宁区"
                        },
                        "310106": {
                            "name": "静安区"
                        },
                        "310107": {
                            "name": "普陀区"
                        },
                        "310109": {
                            "name": "虹口区"
                        },
                        "310110": {
                            "name": "杨浦区"
                        },
                        "310112": {
                            "name": "闵行区"
                        },
                        "310113": {
                            "name": "宝山区"
                        },
                        "310114": {
                            "name": "嘉定区"
                        },
                        "310115": {
                            "name": "浦东新区"
                        },
                        "310116": {
                            "name": "金山区"
                        },
                        "310117": {
                            "name": "松江区"
                        },
                        "310118": {
                            "name": "青浦区"
                        },
                        "310120": {
                            "name": "奉贤区"
                        },
                        "310151": {
                            "name": "崇明区"
                        }
                    }
                }
            }
        },
        "32": {
            "name": "江苏省",
            "children": {
                "320100": {
                    "name": "南京市",
                    "children": {
                        "320102": {
                            "name": "玄武区"
                        },
                        "320104": {
                            "name": "秦淮区"
                        },
                        "320105": {
                            "name": "建邺区"
                        },
                        "320106": {
                            "name": "鼓楼区"
                        },
                        "320111": {
                            "name": "浦口区"
                        },
                        "320113": {
                            "name": "栖霞区"
                        },
                        "320114": {
                            "name": "雨花台区"
                        },
                        "320115": {
                            "name": "江宁区"
                        },
                        "320116": {
                            "name": "六合区"
                        },
                        "320117": {
                            "name": "溧水区"
                        },
                        "320118": {
                            "name": "高淳区"
                        }
                    }
                },
                "320200": {
                    "name": "无锡市",
                    "children": {
                        "320205": {
                            "name": "锡山区"
                        },
                        "320206": {
                            "name": "惠山区"
                        },
                        "320211": {
                            "name": "滨湖区"
                        },
                        "320213": {
                            "name": "梁溪区"
                        },
                        "320214": {
                            "name": "新吴区"
                        },
                        "320281": {
                            "name": "江阴市"
                        },
                        "320282": {
                            "name": "宜兴市"
                        }
                    }
                },
                "320300": {
                    "name": "徐州市",
                    "children": {
                        "320302": {
                            "name": "鼓楼区"
                        },
                        "320303": {
                            "name": "云龙区"
                        },
                        "320305": {
                            "name": "贾汪区"
                        },
                        "320311": {
                            "name": "泉山区"
                        },
                        "320312": {
                            "name": "铜山区"
                        },
                        "320321": {
                            "name": "丰县"
                        },
                        "320322": {
                            "name": "沛县"
                        },
                        "320324": {
                            "name": "睢宁县"
                        },
                        "320381": {
                            "name": "新沂市"
                        },
                        "320382": {
                            "name": "邳州市"
                        }
                    }
                },
                "320400": {
                    "name": "常州市",
                    "children": {
                        "320402": {
                            "name": "天宁区"
                        },
                        "320404": {
                            "name": "钟楼区"
                        },
                        "320411": {
                            "name": "新北区"
                        },
                        "320412": {
                            "name": "武进区"
                        },
                        "320413": {
                            "name": "金坛区"
                        },
                        "320481": {
                            "name": "溧阳市"
                        }
                    }
                },
                "320500": {
                    "name": "苏州市",
                    "children": {
                        "320505": {
                            "name": "虎丘区"
                        },
                        "320506": {
                            "name": "吴中区"
                        },
                        "320507": {
                            "name": "相城区"
                        },
                        "320508": {
                            "name": "姑苏区"
                        },
                        "320509": {
                            "name": "吴江区"
                        },
                        "320581": {
                            "name": "常熟市"
                        },
                        "320582": {
                            "name": "张家港市"
                        },
                        "320583": {
                            "name": "昆山市"
                        },
                        "320585": {
                            "name": "太仓市"
                        }
                    }
                },
                "320600": {
                    "name": "南通市",
                    "children": {
                        "320602": {
                            "name": "崇川区"
                        },
                        "320611": {
                            "name": "港闸区"
                        },
                        "320612": {
                            "name": "通州区"
                        },
                        "320621": {
                            "name": "海安县"
                        },
                        "320623": {
                            "name": "如东县"
                        },
                        "320681": {
                            "name": "启东市"
                        },
                        "320682": {
                            "name": "如皋市"
                        },
                        "320684": {
                            "name": "海门市"
                        }
                    }
                },
                "320700": {
                    "name": "连云港市",
                    "children": {
                        "320703": {
                            "name": "连云区"
                        },
                        "320706": {
                            "name": "海州区"
                        },
                        "320707": {
                            "name": "赣榆区"
                        },
                        "320722": {
                            "name": "东海县"
                        },
                        "320723": {
                            "name": "灌云县"
                        },
                        "320724": {
                            "name": "灌南县"
                        }
                    }
                },
                "320800": {
                    "name": "淮安市",
                    "children": {
                        "320803": {
                            "name": "淮安区"
                        },
                        "320804": {
                            "name": "淮阴区"
                        },
                        "320812": {
                            "name": "清江浦区"
                        },
                        "320813": {
                            "name": "洪泽区"
                        },
                        "320826": {
                            "name": "涟水县"
                        },
                        "320830": {
                            "name": "盱眙县"
                        },
                        "320831": {
                            "name": "金湖县"
                        }
                    }
                },
                "320900": {
                    "name": "盐城市",
                    "children": {
                        "320902": {
                            "name": "亭湖区"
                        },
                        "320903": {
                            "name": "盐都区"
                        },
                        "320904": {
                            "name": "大丰区"
                        },
                        "320921": {
                            "name": "响水县"
                        },
                        "320922": {
                            "name": "滨海县"
                        },
                        "320923": {
                            "name": "阜宁县"
                        },
                        "320924": {
                            "name": "射阳县"
                        },
                        "320925": {
                            "name": "建湖县"
                        },
                        "320981": {
                            "name": "东台市"
                        }
                    }
                },
                "321000": {
                    "name": "扬州市",
                    "children": {
                        "321002": {
                            "name": "广陵区"
                        },
                        "321003": {
                            "name": "邗江区"
                        },
                        "321012": {
                            "name": "江都区"
                        },
                        "321023": {
                            "name": "宝应县"
                        },
                        "321081": {
                            "name": "仪征市"
                        },
                        "321084": {
                            "name": "高邮市"
                        }
                    }
                },
                "321100": {
                    "name": "镇江市",
                    "children": {
                        "321102": {
                            "name": "京口区"
                        },
                        "321111": {
                            "name": "润州区"
                        },
                        "321112": {
                            "name": "丹徒区"
                        },
                        "321181": {
                            "name": "丹阳市"
                        },
                        "321182": {
                            "name": "扬中市"
                        },
                        "321183": {
                            "name": "句容市"
                        }
                    }
                },
                "321200": {
                    "name": "泰州市",
                    "children": {
                        "321202": {
                            "name": "海陵区"
                        },
                        "321203": {
                            "name": "高港区"
                        },
                        "321204": {
                            "name": "姜堰区"
                        },
                        "321281": {
                            "name": "兴化市"
                        },
                        "321282": {
                            "name": "靖江市"
                        },
                        "321283": {
                            "name": "泰兴市"
                        }
                    }
                },
                "321300": {
                    "name": "宿迁市",
                    "children": {
                        "321302": {
                            "name": "宿城区"
                        },
                        "321311": {
                            "name": "宿豫区"
                        },
                        "321322": {
                            "name": "沭阳县"
                        },
                        "321323": {
                            "name": "泗阳县"
                        },
                        "321324": {
                            "name": "泗洪县"
                        }
                    }
                }
            }
        },
        "33": {
            "name": "浙江省",
            "children": {
                "330100": {
                    "name": "杭州市",
                    "children": {
                        "330102": {
                            "name": "上城区"
                        },
                        "330103": {
                            "name": "下城区"
                        },
                        "330104": {
                            "name": "江干区"
                        },
                        "330105": {
                            "name": "拱墅区"
                        },
                        "330106": {
                            "name": "西湖区"
                        },
                        "330108": {
                            "name": "滨江区"
                        },
                        "330109": {
                            "name": "萧山区"
                        },
                        "330110": {
                            "name": "余杭区"
                        },
                        "330111": {
                            "name": "富阳区"
                        },
                        "330122": {
                            "name": "桐庐县"
                        },
                        "330127": {
                            "name": "淳安县"
                        },
                        "330182": {
                            "name": "建德市"
                        },
                        "330185": {
                            "name": "临安市"
                        }
                    }
                },
                "330200": {
                    "name": "宁波市",
                    "children": {
                        "330203": {
                            "name": "海曙区"
                        },
                        "330204": {
                            "name": "江东区"
                        },
                        "330205": {
                            "name": "江北区"
                        },
                        "330206": {
                            "name": "北仑区"
                        },
                        "330211": {
                            "name": "镇海区"
                        },
                        "330212": {
                            "name": "鄞州区"
                        },
                        "330225": {
                            "name": "象山县"
                        },
                        "330226": {
                            "name": "宁海县"
                        },
                        "330281": {
                            "name": "余姚市"
                        },
                        "330282": {
                            "name": "慈溪市"
                        },
                        "330283": {
                            "name": "奉化市"
                        }
                    }
                },
                "330300": {
                    "name": "温州市",
                    "children": {
                        "330302": {
                            "name": "鹿城区"
                        },
                        "330303": {
                            "name": "龙湾区"
                        },
                        "330304": {
                            "name": "瓯海区"
                        },
                        "330305": {
                            "name": "洞头区"
                        },
                        "330324": {
                            "name": "永嘉县"
                        },
                        "330326": {
                            "name": "平阳县"
                        },
                        "330327": {
                            "name": "苍南县"
                        },
                        "330328": {
                            "name": "文成县"
                        },
                        "330329": {
                            "name": "泰顺县"
                        },
                        "330381": {
                            "name": "瑞安市"
                        },
                        "330382": {
                            "name": "乐清市"
                        }
                    }
                },
                "330400": {
                    "name": "嘉兴市",
                    "children": {
                        "330402": {
                            "name": "南湖区"
                        },
                        "330411": {
                            "name": "秀洲区"
                        },
                        "330421": {
                            "name": "嘉善县"
                        },
                        "330424": {
                            "name": "海盐县"
                        },
                        "330481": {
                            "name": "海宁市"
                        },
                        "330482": {
                            "name": "平湖市"
                        },
                        "330483": {
                            "name": "桐乡市"
                        }
                    }
                },
                "330500": {
                    "name": "湖州市",
                    "children": {
                        "330502": {
                            "name": "吴兴区"
                        },
                        "330503": {
                            "name": "南浔区"
                        },
                        "330521": {
                            "name": "德清县"
                        },
                        "330522": {
                            "name": "长兴县"
                        },
                        "330523": {
                            "name": "安吉县"
                        }
                    }
                },
                "330600": {
                    "name": "绍兴市",
                    "children": {
                        "330602": {
                            "name": "越城区"
                        },
                        "330603": {
                            "name": "柯桥区"
                        },
                        "330604": {
                            "name": "上虞区"
                        },
                        "330624": {
                            "name": "新昌县"
                        },
                        "330681": {
                            "name": "诸暨市"
                        },
                        "330683": {
                            "name": "嵊州市"
                        }
                    }
                },
                "330700": {
                    "name": "金华市",
                    "children": {
                        "330702": {
                            "name": "婺城区"
                        },
                        "330703": {
                            "name": "金东区"
                        },
                        "330723": {
                            "name": "武义县"
                        },
                        "330726": {
                            "name": "浦江县"
                        },
                        "330727": {
                            "name": "磐安县"
                        },
                        "330781": {
                            "name": "兰溪市"
                        },
                        "330782": {
                            "name": "义乌市"
                        },
                        "330783": {
                            "name": "东阳市"
                        },
                        "330784": {
                            "name": "永康市"
                        }
                    }
                },
                "330800": {
                    "name": "衢州市",
                    "children": {
                        "330802": {
                            "name": "柯城区"
                        },
                        "330803": {
                            "name": "衢江区"
                        },
                        "330822": {
                            "name": "常山县"
                        },
                        "330824": {
                            "name": "开化县"
                        },
                        "330825": {
                            "name": "龙游县"
                        },
                        "330881": {
                            "name": "江山市"
                        }
                    }
                },
                "330900": {
                    "name": "舟山市",
                    "children": {
                        "330902": {
                            "name": "定海区"
                        },
                        "330903": {
                            "name": "普陀区"
                        },
                        "330921": {
                            "name": "岱山县"
                        },
                        "330922": {
                            "name": "嵊泗县"
                        }
                    }
                },
                "331000": {
                    "name": "台州市",
                    "children": {
                        "331002": {
                            "name": "椒江区"
                        },
                        "331003": {
                            "name": "黄岩区"
                        },
                        "331004": {
                            "name": "路桥区"
                        },
                        "331021": {
                            "name": "玉环县"
                        },
                        "331022": {
                            "name": "三门县"
                        },
                        "331023": {
                            "name": "天台县"
                        },
                        "331024": {
                            "name": "仙居县"
                        },
                        "331081": {
                            "name": "温岭市"
                        },
                        "331082": {
                            "name": "临海市"
                        }
                    }
                },
                "331100": {
                    "name": "丽水市",
                    "children": {
                        "331102": {
                            "name": "莲都区"
                        },
                        "331121": {
                            "name": "青田县"
                        },
                        "331122": {
                            "name": "缙云县"
                        },
                        "331123": {
                            "name": "遂昌县"
                        },
                        "331124": {
                            "name": "松阳县"
                        },
                        "331125": {
                            "name": "云和县"
                        },
                        "331126": {
                            "name": "庆元县"
                        },
                        "331127": {
                            "name": "景宁畲族自治县"
                        },
                        "331181": {
                            "name": "龙泉市"
                        }
                    }
                }
            }
        },
        "34": {
            "name": "安徽省",
            "children": {
                "340100": {
                    "name": "合肥市",
                    "children": {
                        "340102": {
                            "name": "瑶海区"
                        },
                        "340103": {
                            "name": "庐阳区"
                        },
                        "340104": {
                            "name": "蜀山区"
                        },
                        "340111": {
                            "name": "包河区"
                        },
                        "340121": {
                            "name": "长丰县"
                        },
                        "340122": {
                            "name": "肥东县"
                        },
                        "340123": {
                            "name": "肥西县"
                        },
                        "340124": {
                            "name": "庐江县"
                        },
                        "340181": {
                            "name": "巢湖市"
                        }
                    }
                },
                "340200": {
                    "name": "芜湖市",
                    "children": {
                        "340202": {
                            "name": "镜湖区"
                        },
                        "340203": {
                            "name": "弋江区"
                        },
                        "340207": {
                            "name": "鸠江区"
                        },
                        "340208": {
                            "name": "三山区"
                        },
                        "340221": {
                            "name": "芜湖县"
                        },
                        "340222": {
                            "name": "繁昌县"
                        },
                        "340223": {
                            "name": "南陵县"
                        },
                        "340225": {
                            "name": "无为县"
                        }
                    }
                },
                "340300": {
                    "name": "蚌埠市",
                    "children": {
                        "340302": {
                            "name": "龙子湖区"
                        },
                        "340303": {
                            "name": "蚌山区"
                        },
                        "340304": {
                            "name": "禹会区"
                        },
                        "340311": {
                            "name": "淮上区"
                        },
                        "340321": {
                            "name": "怀远县"
                        },
                        "340322": {
                            "name": "五河县"
                        },
                        "340323": {
                            "name": "固镇县"
                        }
                    }
                },
                "340400": {
                    "name": "淮南市",
                    "children": {
                        "340402": {
                            "name": "大通区"
                        },
                        "340403": {
                            "name": "田家庵区"
                        },
                        "340404": {
                            "name": "谢家集区"
                        },
                        "340405": {
                            "name": "八公山区"
                        },
                        "340406": {
                            "name": "潘集区"
                        },
                        "340421": {
                            "name": "凤台县"
                        },
                        "340422": {
                            "name": "寿县"
                        }
                    }
                },
                "340500": {
                    "name": "马鞍山市",
                    "children": {
                        "340503": {
                            "name": "花山区"
                        },
                        "340504": {
                            "name": "雨山区"
                        },
                        "340506": {
                            "name": "博望区"
                        },
                        "340521": {
                            "name": "当涂县"
                        },
                        "340522": {
                            "name": "含山县"
                        },
                        "340523": {
                            "name": "和县"
                        }
                    }
                },
                "340600": {
                    "name": "淮北市",
                    "children": {
                        "340602": {
                            "name": "杜集区"
                        },
                        "340603": {
                            "name": "相山区"
                        },
                        "340604": {
                            "name": "烈山区"
                        },
                        "340621": {
                            "name": "濉溪县"
                        }
                    }
                },
                "340700": {
                    "name": "铜陵市",
                    "children": {
                        "340705": {
                            "name": "铜官区"
                        },
                        "340706": {
                            "name": "义安区"
                        },
                        "340711": {
                            "name": "郊区"
                        },
                        "340722": {
                            "name": "枞阳县"
                        }
                    }
                },
                "340800": {
                    "name": "安庆市",
                    "children": {
                        "340802": {
                            "name": "迎江区"
                        },
                        "340803": {
                            "name": "大观区"
                        },
                        "340811": {
                            "name": "宜秀区"
                        },
                        "340822": {
                            "name": "怀宁县"
                        },
                        "340824": {
                            "name": "潜山县"
                        },
                        "340825": {
                            "name": "太湖县"
                        },
                        "340826": {
                            "name": "宿松县"
                        },
                        "340827": {
                            "name": "望江县"
                        },
                        "340828": {
                            "name": "岳西县"
                        },
                        "340881": {
                            "name": "桐城市"
                        }
                    }
                },
                "341000": {
                    "name": "黄山市",
                    "children": {
                        "341002": {
                            "name": "屯溪区"
                        },
                        "341003": {
                            "name": "黄山区"
                        },
                        "341004": {
                            "name": "徽州区"
                        },
                        "341021": {
                            "name": "歙县"
                        },
                        "341022": {
                            "name": "休宁县"
                        },
                        "341023": {
                            "name": "黟县"
                        },
                        "341024": {
                            "name": "祁门县"
                        }
                    }
                },
                "341100": {
                    "name": "滁州市",
                    "children": {
                        "341102": {
                            "name": "琅琊区"
                        },
                        "341103": {
                            "name": "南谯区"
                        },
                        "341122": {
                            "name": "来安县"
                        },
                        "341124": {
                            "name": "全椒县"
                        },
                        "341125": {
                            "name": "定远县"
                        },
                        "341126": {
                            "name": "凤阳县"
                        },
                        "341181": {
                            "name": "天长市"
                        },
                        "341182": {
                            "name": "明光市"
                        }
                    }
                },
                "341200": {
                    "name": "阜阳市",
                    "children": {
                        "341202": {
                            "name": "颍州区"
                        },
                        "341203": {
                            "name": "颍东区"
                        },
                        "341204": {
                            "name": "颍泉区"
                        },
                        "341221": {
                            "name": "临泉县"
                        },
                        "341222": {
                            "name": "太和县"
                        },
                        "341225": {
                            "name": "阜南县"
                        },
                        "341226": {
                            "name": "颍上县"
                        },
                        "341282": {
                            "name": "界首市"
                        }
                    }
                },
                "341300": {
                    "name": "宿州市",
                    "children": {
                        "341302": {
                            "name": "埇桥区"
                        },
                        "341321": {
                            "name": "砀山县"
                        },
                        "341322": {
                            "name": "萧县"
                        },
                        "341323": {
                            "name": "灵璧县"
                        },
                        "341324": {
                            "name": "泗县"
                        }
                    }
                },
                "341500": {
                    "name": "六安市",
                    "children": {
                        "341502": {
                            "name": "金安区"
                        },
                        "341503": {
                            "name": "裕安区"
                        },
                        "341504": {
                            "name": "叶集区"
                        },
                        "341522": {
                            "name": "霍邱县"
                        },
                        "341523": {
                            "name": "舒城县"
                        },
                        "341524": {
                            "name": "金寨县"
                        },
                        "341525": {
                            "name": "霍山县"
                        }
                    }
                },
                "341600": {
                    "name": "亳州市",
                    "children": {
                        "341602": {
                            "name": "谯城区"
                        },
                        "341621": {
                            "name": "涡阳县"
                        },
                        "341622": {
                            "name": "蒙城县"
                        },
                        "341623": {
                            "name": "利辛县"
                        }
                    }
                },
                "341700": {
                    "name": "池州市",
                    "children": {
                        "341702": {
                            "name": "贵池区"
                        },
                        "341721": {
                            "name": "东至县"
                        },
                        "341722": {
                            "name": "石台县"
                        },
                        "341723": {
                            "name": "青阳县"
                        }
                    }
                },
                "341800": {
                    "name": "宣城市",
                    "children": {
                        "341802": {
                            "name": "宣州区"
                        },
                        "341821": {
                            "name": "郎溪县"
                        },
                        "341822": {
                            "name": "广德县"
                        },
                        "341823": {
                            "name": "泾县"
                        },
                        "341824": {
                            "name": "绩溪县"
                        },
                        "341825": {
                            "name": "旌德县"
                        },
                        "341881": {
                            "name": "宁国市"
                        }
                    }
                }
            }
        },
        "35": {
            "name": "福建省",
            "children": {
                "350100": {
                    "name": "福州市",
                    "children": {
                        "350102": {
                            "name": "鼓楼区"
                        },
                        "350103": {
                            "name": "台江区"
                        },
                        "350104": {
                            "name": "仓山区"
                        },
                        "350105": {
                            "name": "马尾区"
                        },
                        "350111": {
                            "name": "晋安区"
                        },
                        "350121": {
                            "name": "闽侯县"
                        },
                        "350122": {
                            "name": "连江县"
                        },
                        "350123": {
                            "name": "罗源县"
                        },
                        "350124": {
                            "name": "闽清县"
                        },
                        "350125": {
                            "name": "永泰县"
                        },
                        "350128": {
                            "name": "平潭县"
                        },
                        "350181": {
                            "name": "福清市"
                        },
                        "350182": {
                            "name": "长乐市"
                        }
                    }
                },
                "350200": {
                    "name": "厦门市",
                    "children": {
                        "350203": {
                            "name": "思明区"
                        },
                        "350205": {
                            "name": "海沧区"
                        },
                        "350206": {
                            "name": "湖里区"
                        },
                        "350211": {
                            "name": "集美区"
                        },
                        "350212": {
                            "name": "同安区"
                        },
                        "350213": {
                            "name": "翔安区"
                        }
                    }
                },
                "350300": {
                    "name": "莆田市",
                    "children": {
                        "350302": {
                            "name": "城厢区"
                        },
                        "350303": {
                            "name": "涵江区"
                        },
                        "350304": {
                            "name": "荔城区"
                        },
                        "350305": {
                            "name": "秀屿区"
                        },
                        "350322": {
                            "name": "仙游县"
                        }
                    }
                },
                "350400": {
                    "name": "三明市",
                    "children": {
                        "350402": {
                            "name": "梅列区"
                        },
                        "350403": {
                            "name": "三元区"
                        },
                        "350421": {
                            "name": "明溪县"
                        },
                        "350423": {
                            "name": "清流县"
                        },
                        "350424": {
                            "name": "宁化县"
                        },
                        "350425": {
                            "name": "大田县"
                        },
                        "350426": {
                            "name": "尤溪县"
                        },
                        "350427": {
                            "name": "沙县"
                        },
                        "350428": {
                            "name": "将乐县"
                        },
                        "350429": {
                            "name": "泰宁县"
                        },
                        "350430": {
                            "name": "建宁县"
                        },
                        "350481": {
                            "name": "永安市"
                        }
                    }
                },
                "350500": {
                    "name": "泉州市",
                    "children": {
                        "350502": {
                            "name": "鲤城区"
                        },
                        "350503": {
                            "name": "丰泽区"
                        },
                        "350504": {
                            "name": "洛江区"
                        },
                        "350505": {
                            "name": "泉港区"
                        },
                        "350521": {
                            "name": "惠安县"
                        },
                        "350524": {
                            "name": "安溪县"
                        },
                        "350525": {
                            "name": "永春县"
                        },
                        "350526": {
                            "name": "德化县"
                        },
                        "350527": {
                            "name": "金门县"
                        },
                        "350581": {
                            "name": "石狮市"
                        },
                        "350582": {
                            "name": "晋江市"
                        },
                        "350583": {
                            "name": "南安市"
                        }
                    }
                },
                "350600": {
                    "name": "漳州市",
                    "children": {
                        "350602": {
                            "name": "芗城区"
                        },
                        "350603": {
                            "name": "龙文区"
                        },
                        "350622": {
                            "name": "云霄县"
                        },
                        "350623": {
                            "name": "漳浦县"
                        },
                        "350624": {
                            "name": "诏安县"
                        },
                        "350625": {
                            "name": "长泰县"
                        },
                        "350626": {
                            "name": "东山县"
                        },
                        "350627": {
                            "name": "南靖县"
                        },
                        "350628": {
                            "name": "平和县"
                        },
                        "350629": {
                            "name": "华安县"
                        },
                        "350681": {
                            "name": "龙海市"
                        }
                    }
                },
                "350700": {
                    "name": "南平市",
                    "children": {
                        "350702": {
                            "name": "延平区"
                        },
                        "350703": {
                            "name": "建阳区"
                        },
                        "350721": {
                            "name": "顺昌县"
                        },
                        "350722": {
                            "name": "浦城县"
                        },
                        "350723": {
                            "name": "光泽县"
                        },
                        "350724": {
                            "name": "松溪县"
                        },
                        "350725": {
                            "name": "政和县"
                        },
                        "350781": {
                            "name": "邵武市"
                        },
                        "350782": {
                            "name": "武夷山市"
                        },
                        "350783": {
                            "name": "建瓯市"
                        }
                    }
                },
                "350800": {
                    "name": "龙岩市",
                    "children": {
                        "350802": {
                            "name": "新罗区"
                        },
                        "350803": {
                            "name": "永定区"
                        },
                        "350821": {
                            "name": "长汀县"
                        },
                        "350823": {
                            "name": "上杭县"
                        },
                        "350824": {
                            "name": "武平县"
                        },
                        "350825": {
                            "name": "连城县"
                        },
                        "350881": {
                            "name": "漳平市"
                        }
                    }
                },
                "350900": {
                    "name": "宁德市",
                    "children": {
                        "350902": {
                            "name": "蕉城区"
                        },
                        "350921": {
                            "name": "霞浦县"
                        },
                        "350922": {
                            "name": "古田县"
                        },
                        "350923": {
                            "name": "屏南县"
                        },
                        "350924": {
                            "name": "寿宁县"
                        },
                        "350925": {
                            "name": "周宁县"
                        },
                        "350926": {
                            "name": "柘荣县"
                        },
                        "350981": {
                            "name": "福安市"
                        },
                        "350982": {
                            "name": "福鼎市"
                        }
                    }
                }
            }
        },
        "36": {
            "name": "江西省",
            "children": {
                "360100": {
                    "name": "南昌市",
                    "children": {
                        "360102": {
                            "name": "东湖区"
                        },
                        "360103": {
                            "name": "西湖区"
                        },
                        "360104": {
                            "name": "青云谱区"
                        },
                        "360105": {
                            "name": "湾里区"
                        },
                        "360111": {
                            "name": "青山湖区"
                        },
                        "360112": {
                            "name": "新建区"
                        },
                        "360121": {
                            "name": "南昌县"
                        },
                        "360123": {
                            "name": "安义县"
                        },
                        "360124": {
                            "name": "进贤县"
                        }
                    }
                },
                "360200": {
                    "name": "景德镇市",
                    "children": {
                        "360202": {
                            "name": "昌江区"
                        },
                        "360203": {
                            "name": "珠山区"
                        },
                        "360222": {
                            "name": "浮梁县"
                        },
                        "360281": {
                            "name": "乐平市"
                        }
                    }
                },
                "360300": {
                    "name": "萍乡市",
                    "children": {
                        "360302": {
                            "name": "安源区"
                        },
                        "360313": {
                            "name": "湘东区"
                        },
                        "360321": {
                            "name": "莲花县"
                        },
                        "360322": {
                            "name": "上栗县"
                        },
                        "360323": {
                            "name": "芦溪县"
                        }
                    }
                },
                "360400": {
                    "name": "九江市",
                    "children": {
                        "360402": {
                            "name": "濂溪区"
                        },
                        "360403": {
                            "name": "浔阳区"
                        },
                        "360421": {
                            "name": "九江县"
                        },
                        "360423": {
                            "name": "武宁县"
                        },
                        "360424": {
                            "name": "修水县"
                        },
                        "360425": {
                            "name": "永修县"
                        },
                        "360426": {
                            "name": "德安县"
                        },
                        "360428": {
                            "name": "都昌县"
                        },
                        "360429": {
                            "name": "湖口县"
                        },
                        "360430": {
                            "name": "彭泽县"
                        },
                        "360481": {
                            "name": "瑞昌市"
                        },
                        "360482": {
                            "name": "共青城市"
                        },
                        "360483": {
                            "name": "庐山市"
                        }
                    }
                },
                "360500": {
                    "name": "新余市",
                    "children": {
                        "360502": {
                            "name": "渝水区"
                        },
                        "360521": {
                            "name": "分宜县"
                        }
                    }
                },
                "360600": {
                    "name": "鹰潭市",
                    "children": {
                        "360602": {
                            "name": "月湖区"
                        },
                        "360622": {
                            "name": "余江县"
                        },
                        "360681": {
                            "name": "贵溪市"
                        }
                    }
                },
                "360700": {
                    "name": "赣州市",
                    "children": {
                        "360702": {
                            "name": "章贡区"
                        },
                        "360703": {
                            "name": "南康区"
                        },
                        "360721": {
                            "name": "赣县"
                        },
                        "360722": {
                            "name": "信丰县"
                        },
                        "360723": {
                            "name": "大余县"
                        },
                        "360724": {
                            "name": "上犹县"
                        },
                        "360725": {
                            "name": "崇义县"
                        },
                        "360726": {
                            "name": "安远县"
                        },
                        "360727": {
                            "name": "龙南县"
                        },
                        "360728": {
                            "name": "定南县"
                        },
                        "360729": {
                            "name": "全南县"
                        },
                        "360730": {
                            "name": "宁都县"
                        },
                        "360731": {
                            "name": "于都县"
                        },
                        "360732": {
                            "name": "兴国县"
                        },
                        "360733": {
                            "name": "会昌县"
                        },
                        "360734": {
                            "name": "寻乌县"
                        },
                        "360735": {
                            "name": "石城县"
                        },
                        "360781": {
                            "name": "瑞金市"
                        }
                    }
                },
                "360800": {
                    "name": "吉安市",
                    "children": {
                        "360802": {
                            "name": "吉州区"
                        },
                        "360803": {
                            "name": "青原区"
                        },
                        "360821": {
                            "name": "吉安县"
                        },
                        "360822": {
                            "name": "吉水县"
                        },
                        "360823": {
                            "name": "峡江县"
                        },
                        "360824": {
                            "name": "新干县"
                        },
                        "360825": {
                            "name": "永丰县"
                        },
                        "360826": {
                            "name": "泰和县"
                        },
                        "360827": {
                            "name": "遂川县"
                        },
                        "360828": {
                            "name": "万安县"
                        },
                        "360829": {
                            "name": "安福县"
                        },
                        "360830": {
                            "name": "永新县"
                        },
                        "360881": {
                            "name": "井冈山市"
                        }
                    }
                },
                "360900": {
                    "name": "宜春市",
                    "children": {
                        "360902": {
                            "name": "袁州区"
                        },
                        "360921": {
                            "name": "奉新县"
                        },
                        "360922": {
                            "name": "万载县"
                        },
                        "360923": {
                            "name": "上高县"
                        },
                        "360924": {
                            "name": "宜丰县"
                        },
                        "360925": {
                            "name": "靖安县"
                        },
                        "360926": {
                            "name": "铜鼓县"
                        },
                        "360981": {
                            "name": "丰城市"
                        },
                        "360982": {
                            "name": "樟树市"
                        },
                        "360983": {
                            "name": "高安市"
                        }
                    }
                },
                "361000": {
                    "name": "抚州市",
                    "children": {
                        "361002": {
                            "name": "临川区"
                        },
                        "361021": {
                            "name": "南城县"
                        },
                        "361022": {
                            "name": "黎川县"
                        },
                        "361023": {
                            "name": "南丰县"
                        },
                        "361024": {
                            "name": "崇仁县"
                        },
                        "361025": {
                            "name": "乐安县"
                        },
                        "361026": {
                            "name": "宜黄县"
                        },
                        "361027": {
                            "name": "金溪县"
                        },
                        "361028": {
                            "name": "资溪县"
                        },
                        "361029": {
                            "name": "东乡县"
                        },
                        "361030": {
                            "name": "广昌县"
                        }
                    }
                },
                "361100": {
                    "name": "上饶市",
                    "children": {
                        "361102": {
                            "name": "信州区"
                        },
                        "361103": {
                            "name": "广丰区"
                        },
                        "361121": {
                            "name": "上饶县"
                        },
                        "361123": {
                            "name": "玉山县"
                        },
                        "361124": {
                            "name": "铅山县"
                        },
                        "361125": {
                            "name": "横峰县"
                        },
                        "361126": {
                            "name": "弋阳县"
                        },
                        "361127": {
                            "name": "余干县"
                        },
                        "361128": {
                            "name": "鄱阳县"
                        },
                        "361129": {
                            "name": "万年县"
                        },
                        "361130": {
                            "name": "婺源县"
                        },
                        "361181": {
                            "name": "德兴市"
                        }
                    }
                }
            }
        },
        "37": {
            "name": "山东省",
            "children": {
                "370100": {
                    "name": "济南市",
                    "children": {
                        "370102": {
                            "name": "历下区"
                        },
                        "370103": {
                            "name": "市中区"
                        },
                        "370104": {
                            "name": "槐荫区"
                        },
                        "370105": {
                            "name": "天桥区"
                        },
                        "370112": {
                            "name": "历城区"
                        },
                        "370113": {
                            "name": "长清区"
                        },
                        "370124": {
                            "name": "平阴县"
                        },
                        "370125": {
                            "name": "济阳县"
                        },
                        "370126": {
                            "name": "商河县"
                        },
                        "370181": {
                            "name": "章丘市"
                        }
                    }
                },
                "370200": {
                    "name": "青岛市",
                    "children": {
                        "370202": {
                            "name": "市南区"
                        },
                        "370203": {
                            "name": "市北区"
                        },
                        "370211": {
                            "name": "黄岛区"
                        },
                        "370212": {
                            "name": "崂山区"
                        },
                        "370213": {
                            "name": "李沧区"
                        },
                        "370214": {
                            "name": "城阳区"
                        },
                        "370281": {
                            "name": "胶州市"
                        },
                        "370282": {
                            "name": "即墨市"
                        },
                        "370283": {
                            "name": "平度市"
                        },
                        "370285": {
                            "name": "莱西市"
                        }
                    }
                },
                "370300": {
                    "name": "淄博市",
                    "children": {
                        "370302": {
                            "name": "淄川区"
                        },
                        "370303": {
                            "name": "张店区"
                        },
                        "370304": {
                            "name": "博山区"
                        },
                        "370305": {
                            "name": "临淄区"
                        },
                        "370306": {
                            "name": "周村区"
                        },
                        "370321": {
                            "name": "桓台县"
                        },
                        "370322": {
                            "name": "高青县"
                        },
                        "370323": {
                            "name": "沂源县"
                        }
                    }
                },
                "370400": {
                    "name": "枣庄市",
                    "children": {
                        "370402": {
                            "name": "市中区"
                        },
                        "370403": {
                            "name": "薛城区"
                        },
                        "370404": {
                            "name": "峄城区"
                        },
                        "370405": {
                            "name": "台儿庄区"
                        },
                        "370406": {
                            "name": "山亭区"
                        },
                        "370481": {
                            "name": "滕州市"
                        }
                    }
                },
                "370500": {
                    "name": "东营市",
                    "children": {
                        "370502": {
                            "name": "东营区"
                        },
                        "370503": {
                            "name": "河口区"
                        },
                        "370505": {
                            "name": "垦利区"
                        },
                        "370522": {
                            "name": "利津县"
                        },
                        "370523": {
                            "name": "广饶县"
                        }
                    }
                },
                "370600": {
                    "name": "烟台市",
                    "children": {
                        "370602": {
                            "name": "芝罘区"
                        },
                        "370611": {
                            "name": "福山区"
                        },
                        "370612": {
                            "name": "牟平区"
                        },
                        "370613": {
                            "name": "莱山区"
                        },
                        "370634": {
                            "name": "长岛县"
                        },
                        "370681": {
                            "name": "龙口市"
                        },
                        "370682": {
                            "name": "莱阳市"
                        },
                        "370683": {
                            "name": "莱州市"
                        },
                        "370684": {
                            "name": "蓬莱市"
                        },
                        "370685": {
                            "name": "招远市"
                        },
                        "370686": {
                            "name": "栖霞市"
                        },
                        "370687": {
                            "name": "海阳市"
                        }
                    }
                },
                "370700": {
                    "name": "潍坊市",
                    "children": {
                        "370702": {
                            "name": "潍城区"
                        },
                        "370703": {
                            "name": "寒亭区"
                        },
                        "370704": {
                            "name": "坊子区"
                        },
                        "370705": {
                            "name": "奎文区"
                        },
                        "370724": {
                            "name": "临朐县"
                        },
                        "370725": {
                            "name": "昌乐县"
                        },
                        "370781": {
                            "name": "青州市"
                        },
                        "370782": {
                            "name": "诸城市"
                        },
                        "370783": {
                            "name": "寿光市"
                        },
                        "370784": {
                            "name": "安丘市"
                        },
                        "370785": {
                            "name": "高密市"
                        },
                        "370786": {
                            "name": "昌邑市"
                        }
                    }
                },
                "370800": {
                    "name": "济宁市",
                    "children": {
                        "370811": {
                            "name": "任城区"
                        },
                        "370812": {
                            "name": "兖州区"
                        },
                        "370826": {
                            "name": "微山县"
                        },
                        "370827": {
                            "name": "鱼台县"
                        },
                        "370828": {
                            "name": "金乡县"
                        },
                        "370829": {
                            "name": "嘉祥县"
                        },
                        "370830": {
                            "name": "汶上县"
                        },
                        "370831": {
                            "name": "泗水县"
                        },
                        "370832": {
                            "name": "梁山县"
                        },
                        "370881": {
                            "name": "曲阜市"
                        },
                        "370883": {
                            "name": "邹城市"
                        }
                    }
                },
                "370900": {
                    "name": "泰安市",
                    "children": {
                        "370902": {
                            "name": "泰山区"
                        },
                        "370911": {
                            "name": "岱岳区"
                        },
                        "370921": {
                            "name": "宁阳县"
                        },
                        "370923": {
                            "name": "东平县"
                        },
                        "370982": {
                            "name": "新泰市"
                        },
                        "370983": {
                            "name": "肥城市"
                        }
                    }
                },
                "371000": {
                    "name": "威海市",
                    "children": {
                        "371002": {
                            "name": "环翠区"
                        },
                        "371003": {
                            "name": "文登区"
                        },
                        "371082": {
                            "name": "荣成市"
                        },
                        "371083": {
                            "name": "乳山市"
                        }
                    }
                },
                "371100": {
                    "name": "日照市",
                    "children": {
                        "371102": {
                            "name": "东港区"
                        },
                        "371103": {
                            "name": "岚山区"
                        },
                        "371121": {
                            "name": "五莲县"
                        },
                        "371122": {
                            "name": "莒县"
                        }
                    }
                },
                "371200": {
                    "name": "莱芜市",
                    "children": {
                        "371202": {
                            "name": "莱城区"
                        },
                        "371203": {
                            "name": "钢城区"
                        }
                    }
                },
                "371300": {
                    "name": "临沂市",
                    "children": {
                        "371302": {
                            "name": "兰山区"
                        },
                        "371311": {
                            "name": "罗庄区"
                        },
                        "371312": {
                            "name": "河东区"
                        },
                        "371321": {
                            "name": "沂南县"
                        },
                        "371322": {
                            "name": "郯城县"
                        },
                        "371323": {
                            "name": "沂水县"
                        },
                        "371324": {
                            "name": "兰陵县"
                        },
                        "371325": {
                            "name": "费县"
                        },
                        "371326": {
                            "name": "平邑县"
                        },
                        "371327": {
                            "name": "莒南县"
                        },
                        "371328": {
                            "name": "蒙阴县"
                        },
                        "371329": {
                            "name": "临沭县"
                        }
                    }
                },
                "371400": {
                    "name": "德州市",
                    "children": {
                        "371402": {
                            "name": "德城区"
                        },
                        "371403": {
                            "name": "陵城区"
                        },
                        "371422": {
                            "name": "宁津县"
                        },
                        "371423": {
                            "name": "庆云县"
                        },
                        "371424": {
                            "name": "临邑县"
                        },
                        "371425": {
                            "name": "齐河县"
                        },
                        "371426": {
                            "name": "平原县"
                        },
                        "371427": {
                            "name": "夏津县"
                        },
                        "371428": {
                            "name": "武城县"
                        },
                        "371481": {
                            "name": "乐陵市"
                        },
                        "371482": {
                            "name": "禹城市"
                        }
                    }
                },
                "371500": {
                    "name": "聊城市",
                    "children": {
                        "371502": {
                            "name": "东昌府区"
                        },
                        "371521": {
                            "name": "阳谷县"
                        },
                        "371522": {
                            "name": "莘县"
                        },
                        "371523": {
                            "name": "茌平县"
                        },
                        "371524": {
                            "name": "东阿县"
                        },
                        "371525": {
                            "name": "冠县"
                        },
                        "371526": {
                            "name": "高唐县"
                        },
                        "371581": {
                            "name": "临清市"
                        }
                    }
                },
                "371600": {
                    "name": "滨州市",
                    "children": {
                        "371602": {
                            "name": "滨城区"
                        },
                        "371603": {
                            "name": "沾化区"
                        },
                        "371621": {
                            "name": "惠民县"
                        },
                        "371622": {
                            "name": "阳信县"
                        },
                        "371623": {
                            "name": "无棣县"
                        },
                        "371625": {
                            "name": "博兴县"
                        },
                        "371626": {
                            "name": "邹平县"
                        }
                    }
                },
                "371700": {
                    "name": "菏泽市",
                    "children": {
                        "371702": {
                            "name": "牡丹区"
                        },
                        "371703": {
                            "name": "定陶区"
                        },
                        "371721": {
                            "name": "曹县"
                        },
                        "371722": {
                            "name": "单县"
                        },
                        "371723": {
                            "name": "成武县"
                        },
                        "371724": {
                            "name": "巨野县"
                        },
                        "371725": {
                            "name": "郓城县"
                        },
                        "371726": {
                            "name": "鄄城县"
                        },
                        "371728": {
                            "name": "东明县"
                        }
                    }
                }
            }
        },
        "41": {
            "name": "河南省",
            "children": {
                "410100": {
                    "name": "郑州市",
                    "children": {
                        "410102": {
                            "name": "中原区"
                        },
                        "410103": {
                            "name": "二七区"
                        },
                        "410104": {
                            "name": "管城回族区"
                        },
                        "410105": {
                            "name": "金水区"
                        },
                        "410106": {
                            "name": "上街区"
                        },
                        "410108": {
                            "name": "惠济区"
                        },
                        "410122": {
                            "name": "中牟县"
                        },
                        "410181": {
                            "name": "巩义市"
                        },
                        "410182": {
                            "name": "荥阳市"
                        },
                        "410183": {
                            "name": "新密市"
                        },
                        "410184": {
                            "name": "新郑市"
                        },
                        "410185": {
                            "name": "登封市"
                        }
                    }
                },
                "410200": {
                    "name": "开封市",
                    "children": {
                        "410202": {
                            "name": "龙亭区"
                        },
                        "410203": {
                            "name": "顺河回族区"
                        },
                        "410204": {
                            "name": "鼓楼区"
                        },
                        "410205": {
                            "name": "禹王台区"
                        },
                        "410211": {
                            "name": "金明区"
                        },
                        "410212": {
                            "name": "祥符区"
                        },
                        "410221": {
                            "name": "杞县"
                        },
                        "410222": {
                            "name": "通许县"
                        },
                        "410223": {
                            "name": "尉氏县"
                        },
                        "410225": {
                            "name": "兰考县"
                        }
                    }
                },
                "410300": {
                    "name": "洛阳市",
                    "children": {
                        "410302": {
                            "name": "老城区"
                        },
                        "410303": {
                            "name": "西工区"
                        },
                        "410304": {
                            "name": "瀍河回族区"
                        },
                        "410305": {
                            "name": "涧西区"
                        },
                        "410306": {
                            "name": "吉利区"
                        },
                        "410311": {
                            "name": "洛龙区"
                        },
                        "410322": {
                            "name": "孟津县"
                        },
                        "410323": {
                            "name": "新安县"
                        },
                        "410324": {
                            "name": "栾川县"
                        },
                        "410325": {
                            "name": "嵩县"
                        },
                        "410326": {
                            "name": "汝阳县"
                        },
                        "410327": {
                            "name": "宜阳县"
                        },
                        "410328": {
                            "name": "洛宁县"
                        },
                        "410329": {
                            "name": "伊川县"
                        },
                        "410381": {
                            "name": "偃师市"
                        }
                    }
                },
                "410400": {
                    "name": "平顶山市",
                    "children": {
                        "410402": {
                            "name": "新华区"
                        },
                        "410403": {
                            "name": "卫东区"
                        },
                        "410404": {
                            "name": "石龙区"
                        },
                        "410411": {
                            "name": "湛河区"
                        },
                        "410421": {
                            "name": "宝丰县"
                        },
                        "410422": {
                            "name": "叶县"
                        },
                        "410423": {
                            "name": "鲁山县"
                        },
                        "410425": {
                            "name": "郏县"
                        },
                        "410481": {
                            "name": "舞钢市"
                        },
                        "410482": {
                            "name": "汝州市"
                        }
                    }
                },
                "410500": {
                    "name": "安阳市",
                    "children": {
                        "410502": {
                            "name": "文峰区"
                        },
                        "410503": {
                            "name": "北关区"
                        },
                        "410505": {
                            "name": "殷都区"
                        },
                        "410506": {
                            "name": "龙安区"
                        },
                        "410522": {
                            "name": "安阳县"
                        },
                        "410523": {
                            "name": "汤阴县"
                        },
                        "410526": {
                            "name": "滑县"
                        },
                        "410527": {
                            "name": "内黄县"
                        },
                        "410581": {
                            "name": "林州市"
                        }
                    }
                },
                "410600": {
                    "name": "鹤壁市",
                    "children": {
                        "410602": {
                            "name": "鹤山区"
                        },
                        "410603": {
                            "name": "山城区"
                        },
                        "410611": {
                            "name": "淇滨区"
                        },
                        "410621": {
                            "name": "浚县"
                        },
                        "410622": {
                            "name": "淇县"
                        }
                    }
                },
                "410700": {
                    "name": "新乡市",
                    "children": {
                        "410702": {
                            "name": "红旗区"
                        },
                        "410703": {
                            "name": "卫滨区"
                        },
                        "410704": {
                            "name": "凤泉区"
                        },
                        "410711": {
                            "name": "牧野区"
                        },
                        "410721": {
                            "name": "新乡县"
                        },
                        "410724": {
                            "name": "获嘉县"
                        },
                        "410725": {
                            "name": "原阳县"
                        },
                        "410726": {
                            "name": "延津县"
                        },
                        "410727": {
                            "name": "封丘县"
                        },
                        "410728": {
                            "name": "长垣县"
                        },
                        "410781": {
                            "name": "卫辉市"
                        },
                        "410782": {
                            "name": "辉县市"
                        }
                    }
                },
                "410800": {
                    "name": "焦作市",
                    "children": {
                        "410802": {
                            "name": "解放区"
                        },
                        "410803": {
                            "name": "中站区"
                        },
                        "410804": {
                            "name": "马村区"
                        },
                        "410811": {
                            "name": "山阳区"
                        },
                        "410821": {
                            "name": "修武县"
                        },
                        "410822": {
                            "name": "博爱县"
                        },
                        "410823": {
                            "name": "武陟县"
                        },
                        "410825": {
                            "name": "温县"
                        },
                        "410882": {
                            "name": "沁阳市"
                        },
                        "410883": {
                            "name": "孟州市"
                        }
                    }
                },
                "410900": {
                    "name": "濮阳市",
                    "children": {
                        "410902": {
                            "name": "华龙区"
                        },
                        "410922": {
                            "name": "清丰县"
                        },
                        "410923": {
                            "name": "南乐县"
                        },
                        "410926": {
                            "name": "范县"
                        },
                        "410927": {
                            "name": "台前县"
                        },
                        "410928": {
                            "name": "濮阳县"
                        }
                    }
                },
                "411000": {
                    "name": "许昌市",
                    "children": {
                        "411002": {
                            "name": "魏都区"
                        },
                        "411023": {
                            "name": "许昌县"
                        },
                        "411024": {
                            "name": "鄢陵县"
                        },
                        "411025": {
                            "name": "襄城县"
                        },
                        "411081": {
                            "name": "禹州市"
                        },
                        "411082": {
                            "name": "长葛市"
                        }
                    }
                },
                "411100": {
                    "name": "漯河市",
                    "children": {
                        "411102": {
                            "name": "源汇区"
                        },
                        "411103": {
                            "name": "郾城区"
                        },
                        "411104": {
                            "name": "召陵区"
                        },
                        "411121": {
                            "name": "舞阳县"
                        },
                        "411122": {
                            "name": "临颍县"
                        }
                    }
                },
                "411200": {
                    "name": "三门峡市",
                    "children": {
                        "411202": {
                            "name": "湖滨区"
                        },
                        "411203": {
                            "name": "陕州区"
                        },
                        "411221": {
                            "name": "渑池县"
                        },
                        "411224": {
                            "name": "卢氏县"
                        },
                        "411281": {
                            "name": "义马市"
                        },
                        "411282": {
                            "name": "灵宝市"
                        }
                    }
                },
                "411300": {
                    "name": "南阳市",
                    "children": {
                        "411302": {
                            "name": "宛城区"
                        },
                        "411303": {
                            "name": "卧龙区"
                        },
                        "411321": {
                            "name": "南召县"
                        },
                        "411322": {
                            "name": "方城县"
                        },
                        "411323": {
                            "name": "西峡县"
                        },
                        "411324": {
                            "name": "镇平县"
                        },
                        "411325": {
                            "name": "内乡县"
                        },
                        "411326": {
                            "name": "淅川县"
                        },
                        "411327": {
                            "name": "社旗县"
                        },
                        "411328": {
                            "name": "唐河县"
                        },
                        "411329": {
                            "name": "新野县"
                        },
                        "411330": {
                            "name": "桐柏县"
                        },
                        "411381": {
                            "name": "邓州市"
                        }
                    }
                },
                "411400": {
                    "name": "商丘市",
                    "children": {
                        "411402": {
                            "name": "梁园区"
                        },
                        "411403": {
                            "name": "睢阳区"
                        },
                        "411421": {
                            "name": "民权县"
                        },
                        "411422": {
                            "name": "睢县"
                        },
                        "411423": {
                            "name": "宁陵县"
                        },
                        "411424": {
                            "name": "柘城县"
                        },
                        "411425": {
                            "name": "虞城县"
                        },
                        "411426": {
                            "name": "夏邑县"
                        },
                        "411481": {
                            "name": "永城市"
                        }
                    }
                },
                "411500": {
                    "name": "信阳市",
                    "children": {
                        "411502": {
                            "name": "浉河区"
                        },
                        "411503": {
                            "name": "平桥区"
                        },
                        "411521": {
                            "name": "罗山县"
                        },
                        "411522": {
                            "name": "光山县"
                        },
                        "411523": {
                            "name": "新县"
                        },
                        "411524": {
                            "name": "商城县"
                        },
                        "411525": {
                            "name": "固始县"
                        },
                        "411526": {
                            "name": "潢川县"
                        },
                        "411527": {
                            "name": "淮滨县"
                        },
                        "411528": {
                            "name": "息县"
                        }
                    }
                },
                "411600": {
                    "name": "周口市",
                    "children": {
                        "411602": {
                            "name": "川汇区"
                        },
                        "411621": {
                            "name": "扶沟县"
                        },
                        "411622": {
                            "name": "西华县"
                        },
                        "411623": {
                            "name": "商水县"
                        },
                        "411624": {
                            "name": "沈丘县"
                        },
                        "411625": {
                            "name": "郸城县"
                        },
                        "411626": {
                            "name": "淮阳县"
                        },
                        "411627": {
                            "name": "太康县"
                        },
                        "411628": {
                            "name": "鹿邑县"
                        },
                        "411681": {
                            "name": "项城市"
                        }
                    }
                },
                "411700": {
                    "name": "驻马店市",
                    "children": {
                        "411702": {
                            "name": "驿城区"
                        },
                        "411721": {
                            "name": "西平县"
                        },
                        "411722": {
                            "name": "上蔡县"
                        },
                        "411723": {
                            "name": "平舆县"
                        },
                        "411724": {
                            "name": "正阳县"
                        },
                        "411725": {
                            "name": "确山县"
                        },
                        "411726": {
                            "name": "泌阳县"
                        },
                        "411727": {
                            "name": "汝南县"
                        },
                        "411728": {
                            "name": "遂平县"
                        },
                        "411729": {
                            "name": "新蔡县"
                        }
                    }
                }
            }
        },
        "42": {
            "name": "湖北省",
            "children": {
                "420100": {
                    "name": "武汉市",
                    "children": {
                        "420102": {
                            "name": "江岸区"
                        },
                        "420103": {
                            "name": "江汉区"
                        },
                        "420104": {
                            "name": "硚口区"
                        },
                        "420105": {
                            "name": "汉阳区"
                        },
                        "420106": {
                            "name": "武昌区"
                        },
                        "420107": {
                            "name": "青山区"
                        },
                        "420111": {
                            "name": "洪山区"
                        },
                        "420112": {
                            "name": "东西湖区"
                        },
                        "420113": {
                            "name": "汉南区"
                        },
                        "420114": {
                            "name": "蔡甸区"
                        },
                        "420115": {
                            "name": "江夏区"
                        },
                        "420116": {
                            "name": "黄陂区"
                        },
                        "420117": {
                            "name": "新洲区"
                        }
                    }
                },
                "420200": {
                    "name": "黄石市",
                    "children": {
                        "420202": {
                            "name": "黄石港区"
                        },
                        "420203": {
                            "name": "西塞山区"
                        },
                        "420204": {
                            "name": "下陆区"
                        },
                        "420205": {
                            "name": "铁山区"
                        },
                        "420222": {
                            "name": "阳新县"
                        },
                        "420281": {
                            "name": "大冶市"
                        }
                    }
                },
                "420300": {
                    "name": "十堰市",
                    "children": {
                        "420302": {
                            "name": "茅箭区"
                        },
                        "420303": {
                            "name": "张湾区"
                        },
                        "420304": {
                            "name": "郧阳区"
                        },
                        "420322": {
                            "name": "郧西县"
                        },
                        "420323": {
                            "name": "竹山县"
                        },
                        "420324": {
                            "name": "竹溪县"
                        },
                        "420325": {
                            "name": "房县"
                        },
                        "420381": {
                            "name": "丹江口市"
                        }
                    }
                },
                "420500": {
                    "name": "宜昌市",
                    "children": {
                        "420502": {
                            "name": "西陵区"
                        },
                        "420503": {
                            "name": "伍家岗区"
                        },
                        "420504": {
                            "name": "点军区"
                        },
                        "420505": {
                            "name": "猇亭区"
                        },
                        "420506": {
                            "name": "夷陵区"
                        },
                        "420525": {
                            "name": "远安县"
                        },
                        "420526": {
                            "name": "兴山县"
                        },
                        "420527": {
                            "name": "秭归县"
                        },
                        "420528": {
                            "name": "长阳土家族自治县"
                        },
                        "420529": {
                            "name": "五峰土家族自治县"
                        },
                        "420581": {
                            "name": "宜都市"
                        },
                        "420582": {
                            "name": "当阳市"
                        },
                        "420583": {
                            "name": "枝江市"
                        }
                    }
                },
                "420600": {
                    "name": "襄阳市",
                    "children": {
                        "420602": {
                            "name": "襄城区"
                        },
                        "420606": {
                            "name": "樊城区"
                        },
                        "420607": {
                            "name": "襄州区"
                        },
                        "420624": {
                            "name": "南漳县"
                        },
                        "420625": {
                            "name": "谷城县"
                        },
                        "420626": {
                            "name": "保康县"
                        },
                        "420682": {
                            "name": "老河口市"
                        },
                        "420683": {
                            "name": "枣阳市"
                        },
                        "420684": {
                            "name": "宜城市"
                        }
                    }
                },
                "420700": {
                    "name": "鄂州市",
                    "children": {
                        "420702": {
                            "name": "梁子湖区"
                        },
                        "420703": {
                            "name": "华容区"
                        },
                        "420704": {
                            "name": "鄂城区"
                        }
                    }
                },
                "420800": {
                    "name": "荆门市",
                    "children": {
                        "420802": {
                            "name": "东宝区"
                        },
                        "420804": {
                            "name": "掇刀区"
                        },
                        "420821": {
                            "name": "京山县"
                        },
                        "420822": {
                            "name": "沙洋县"
                        },
                        "420881": {
                            "name": "钟祥市"
                        }
                    }
                },
                "420900": {
                    "name": "孝感市",
                    "children": {
                        "420902": {
                            "name": "孝南区"
                        },
                        "420921": {
                            "name": "孝昌县"
                        },
                        "420922": {
                            "name": "大悟县"
                        },
                        "420923": {
                            "name": "云梦县"
                        },
                        "420981": {
                            "name": "应城市"
                        },
                        "420982": {
                            "name": "安陆市"
                        },
                        "420984": {
                            "name": "汉川市"
                        }
                    }
                },
                "421000": {
                    "name": "荆州市",
                    "children": {
                        "421002": {
                            "name": "沙市区"
                        },
                        "421003": {
                            "name": "荆州区"
                        },
                        "421022": {
                            "name": "公安县"
                        },
                        "421023": {
                            "name": "监利县"
                        },
                        "421024": {
                            "name": "江陵县"
                        },
                        "421081": {
                            "name": "石首市"
                        },
                        "421083": {
                            "name": "洪湖市"
                        },
                        "421087": {
                            "name": "松滋市"
                        }
                    }
                },
                "421100": {
                    "name": "黄冈市",
                    "children": {
                        "421102": {
                            "name": "黄州区"
                        },
                        "421121": {
                            "name": "团风县"
                        },
                        "421122": {
                            "name": "红安县"
                        },
                        "421123": {
                            "name": "罗田县"
                        },
                        "421124": {
                            "name": "英山县"
                        },
                        "421125": {
                            "name": "浠水县"
                        },
                        "421126": {
                            "name": "蕲春县"
                        },
                        "421127": {
                            "name": "黄梅县"
                        },
                        "421181": {
                            "name": "麻城市"
                        },
                        "421182": {
                            "name": "武穴市"
                        }
                    }
                },
                "421200": {
                    "name": "咸宁市",
                    "children": {
                        "421202": {
                            "name": "咸安区"
                        },
                        "421221": {
                            "name": "嘉鱼县"
                        },
                        "421222": {
                            "name": "通城县"
                        },
                        "421223": {
                            "name": "崇阳县"
                        },
                        "421224": {
                            "name": "通山县"
                        },
                        "421281": {
                            "name": "赤壁市"
                        }
                    }
                },
                "421300": {
                    "name": "随州市",
                    "children": {
                        "421303": {
                            "name": "曾都区"
                        },
                        "421321": {
                            "name": "随县"
                        },
                        "421381": {
                            "name": "广水市"
                        }
                    }
                },
                "422800": {
                    "name": "恩施土家族苗族自治州",
                    "children": {
                        "422801": {
                            "name": "恩施市"
                        },
                        "422802": {
                            "name": "利川市"
                        },
                        "422822": {
                            "name": "建始县"
                        },
                        "422823": {
                            "name": "巴东县"
                        },
                        "422825": {
                            "name": "宣恩县"
                        },
                        "422826": {
                            "name": "咸丰县"
                        },
                        "422827": {
                            "name": "来凤县"
                        },
                        "422828": {
                            "name": "鹤峰县"
                        }
                    }
                }
            }
        },
        "43": {
            "name": "湖南省",
            "children": {
                "430100": {
                    "name": "长沙市",
                    "children": {
                        "430102": {
                            "name": "芙蓉区"
                        },
                        "430103": {
                            "name": "天心区"
                        },
                        "430104": {
                            "name": "岳麓区"
                        },
                        "430105": {
                            "name": "开福区"
                        },
                        "430111": {
                            "name": "雨花区"
                        },
                        "430112": {
                            "name": "望城区"
                        },
                        "430121": {
                            "name": "长沙县"
                        },
                        "430124": {
                            "name": "宁乡县"
                        },
                        "430181": {
                            "name": "浏阳市"
                        }
                    }
                },
                "430200": {
                    "name": "株洲市",
                    "children": {
                        "430202": {
                            "name": "荷塘区"
                        },
                        "430203": {
                            "name": "芦淞区"
                        },
                        "430204": {
                            "name": "石峰区"
                        },
                        "430211": {
                            "name": "天元区"
                        },
                        "430221": {
                            "name": "株洲县"
                        },
                        "430223": {
                            "name": "攸县"
                        },
                        "430224": {
                            "name": "茶陵县"
                        },
                        "430225": {
                            "name": "炎陵县"
                        },
                        "430281": {
                            "name": "醴陵市"
                        }
                    }
                },
                "430300": {
                    "name": "湘潭市",
                    "children": {
                        "430302": {
                            "name": "雨湖区"
                        },
                        "430304": {
                            "name": "岳塘区"
                        },
                        "430321": {
                            "name": "湘潭县"
                        },
                        "430381": {
                            "name": "湘乡市"
                        },
                        "430382": {
                            "name": "韶山市"
                        }
                    }
                },
                "430400": {
                    "name": "衡阳市",
                    "children": {
                        "430405": {
                            "name": "珠晖区"
                        },
                        "430406": {
                            "name": "雁峰区"
                        },
                        "430407": {
                            "name": "石鼓区"
                        },
                        "430408": {
                            "name": "蒸湘区"
                        },
                        "430412": {
                            "name": "南岳区"
                        },
                        "430421": {
                            "name": "衡阳县"
                        },
                        "430422": {
                            "name": "衡南县"
                        },
                        "430423": {
                            "name": "衡山县"
                        },
                        "430424": {
                            "name": "衡东县"
                        },
                        "430426": {
                            "name": "祁东县"
                        },
                        "430481": {
                            "name": "耒阳市"
                        },
                        "430482": {
                            "name": "常宁市"
                        }
                    }
                },
                "430500": {
                    "name": "邵阳市",
                    "children": {
                        "430502": {
                            "name": "双清区"
                        },
                        "430503": {
                            "name": "大祥区"
                        },
                        "430511": {
                            "name": "北塔区"
                        },
                        "430521": {
                            "name": "邵东县"
                        },
                        "430522": {
                            "name": "新邵县"
                        },
                        "430523": {
                            "name": "邵阳县"
                        },
                        "430524": {
                            "name": "隆回县"
                        },
                        "430525": {
                            "name": "洞口县"
                        },
                        "430527": {
                            "name": "绥宁县"
                        },
                        "430528": {
                            "name": "新宁县"
                        },
                        "430529": {
                            "name": "城步苗族自治县"
                        },
                        "430581": {
                            "name": "武冈市"
                        }
                    }
                },
                "430600": {
                    "name": "岳阳市",
                    "children": {
                        "430602": {
                            "name": "岳阳楼区"
                        },
                        "430603": {
                            "name": "云溪区"
                        },
                        "430611": {
                            "name": "君山区"
                        },
                        "430621": {
                            "name": "岳阳县"
                        },
                        "430623": {
                            "name": "华容县"
                        },
                        "430624": {
                            "name": "湘阴县"
                        },
                        "430626": {
                            "name": "平江县"
                        },
                        "430681": {
                            "name": "汨罗市"
                        },
                        "430682": {
                            "name": "临湘市"
                        }
                    }
                },
                "430700": {
                    "name": "常德市",
                    "children": {
                        "430702": {
                            "name": "武陵区"
                        },
                        "430703": {
                            "name": "鼎城区"
                        },
                        "430721": {
                            "name": "安乡县"
                        },
                        "430722": {
                            "name": "汉寿县"
                        },
                        "430723": {
                            "name": "澧县"
                        },
                        "430724": {
                            "name": "临澧县"
                        },
                        "430725": {
                            "name": "桃源县"
                        },
                        "430726": {
                            "name": "石门县"
                        },
                        "430781": {
                            "name": "津市市"
                        }
                    }
                },
                "430800": {
                    "name": "张家界市",
                    "children": {
                        "430802": {
                            "name": "永定区"
                        },
                        "430811": {
                            "name": "武陵源区"
                        },
                        "430821": {
                            "name": "慈利县"
                        },
                        "430822": {
                            "name": "桑植县"
                        }
                    }
                },
                "430900": {
                    "name": "益阳市",
                    "children": {
                        "430902": {
                            "name": "资阳区"
                        },
                        "430903": {
                            "name": "赫山区"
                        },
                        "430921": {
                            "name": "南县"
                        },
                        "430922": {
                            "name": "桃江县"
                        },
                        "430923": {
                            "name": "安化县"
                        },
                        "430981": {
                            "name": "沅江市"
                        }
                    }
                },
                "431000": {
                    "name": "郴州市",
                    "children": {
                        "431002": {
                            "name": "北湖区"
                        },
                        "431003": {
                            "name": "苏仙区"
                        },
                        "431021": {
                            "name": "桂阳县"
                        },
                        "431022": {
                            "name": "宜章县"
                        },
                        "431023": {
                            "name": "永兴县"
                        },
                        "431024": {
                            "name": "嘉禾县"
                        },
                        "431025": {
                            "name": "临武县"
                        },
                        "431026": {
                            "name": "汝城县"
                        },
                        "431027": {
                            "name": "桂东县"
                        },
                        "431028": {
                            "name": "安仁县"
                        },
                        "431081": {
                            "name": "资兴市"
                        }
                    }
                },
                "431100": {
                    "name": "永州市",
                    "children": {
                        "431102": {
                            "name": "零陵区"
                        },
                        "431103": {
                            "name": "冷水滩区"
                        },
                        "431121": {
                            "name": "祁阳县"
                        },
                        "431122": {
                            "name": "东安县"
                        },
                        "431123": {
                            "name": "双牌县"
                        },
                        "431124": {
                            "name": "道县"
                        },
                        "431125": {
                            "name": "江永县"
                        },
                        "431126": {
                            "name": "宁远县"
                        },
                        "431127": {
                            "name": "蓝山县"
                        },
                        "431128": {
                            "name": "新田县"
                        },
                        "431129": {
                            "name": "江华瑶族自治县"
                        }
                    }
                },
                "431200": {
                    "name": "怀化市",
                    "children": {
                        "431202": {
                            "name": "鹤城区"
                        },
                        "431221": {
                            "name": "中方县"
                        },
                        "431222": {
                            "name": "沅陵县"
                        },
                        "431223": {
                            "name": "辰溪县"
                        },
                        "431224": {
                            "name": "溆浦县"
                        },
                        "431225": {
                            "name": "会同县"
                        },
                        "431226": {
                            "name": "麻阳苗族自治县"
                        },
                        "431227": {
                            "name": "新晃侗族自治县"
                        },
                        "431228": {
                            "name": "芷江侗族自治县"
                        },
                        "431229": {
                            "name": "靖州苗族侗族自治县"
                        },
                        "431230": {
                            "name": "通道侗族自治县"
                        },
                        "431281": {
                            "name": "洪江市"
                        }
                    }
                },
                "431300": {
                    "name": "娄底市",
                    "children": {
                        "431302": {
                            "name": "娄星区"
                        },
                        "431321": {
                            "name": "双峰县"
                        },
                        "431322": {
                            "name": "新化县"
                        },
                        "431381": {
                            "name": "冷水江市"
                        },
                        "431382": {
                            "name": "涟源市"
                        }
                    }
                },
                "433100": {
                    "name": "湘西土家族苗族自治州",
                    "children": {
                        "433101": {
                            "name": "吉首市"
                        },
                        "433122": {
                            "name": "泸溪县"
                        },
                        "433123": {
                            "name": "凤凰县"
                        },
                        "433124": {
                            "name": "花垣县"
                        },
                        "433125": {
                            "name": "保靖县"
                        },
                        "433126": {
                            "name": "古丈县"
                        },
                        "433127": {
                            "name": "永顺县"
                        },
                        "433130": {
                            "name": "龙山县"
                        }
                    }
                }
            }
        },
        "44": {
            "name": "广东省",
            "children": {
                "440100": {
                    "name": "广州市",
                    "children": {
                        "440103": {
                            "name": "荔湾区"
                        },
                        "440104": {
                            "name": "越秀区"
                        },
                        "440105": {
                            "name": "海珠区"
                        },
                        "440106": {
                            "name": "天河区"
                        },
                        "440111": {
                            "name": "白云区"
                        },
                        "440112": {
                            "name": "黄埔区"
                        },
                        "440113": {
                            "name": "番禺区"
                        },
                        "440114": {
                            "name": "花都区"
                        },
                        "440115": {
                            "name": "南沙区"
                        },
                        "440117": {
                            "name": "从化区"
                        },
                        "440118": {
                            "name": "增城区"
                        }
                    }
                },
                "440200": {
                    "name": "韶关市",
                    "children": {
                        "440203": {
                            "name": "武江区"
                        },
                        "440204": {
                            "name": "浈江区"
                        },
                        "440205": {
                            "name": "曲江区"
                        },
                        "440222": {
                            "name": "始兴县"
                        },
                        "440224": {
                            "name": "仁化县"
                        },
                        "440229": {
                            "name": "翁源县"
                        },
                        "440232": {
                            "name": "乳源瑶族自治县"
                        },
                        "440233": {
                            "name": "新丰县"
                        },
                        "440281": {
                            "name": "乐昌市"
                        },
                        "440282": {
                            "name": "南雄市"
                        }
                    }
                },
                "440300": {
                    "name": "深圳市",
                    "children": {
                        "440303": {
                            "name": "罗湖区"
                        },
                        "440304": {
                            "name": "福田区"
                        },
                        "440305": {
                            "name": "南山区"
                        },
                        "440306": {
                            "name": "宝安区"
                        },
                        "440307": {
                            "name": "龙岗区"
                        },
                        "440308": {
                            "name": "盐田区"
                        }
                    }
                },
                "440400": {
                    "name": "珠海市",
                    "children": {
                        "440402": {
                            "name": "香洲区"
                        },
                        "440403": {
                            "name": "斗门区"
                        },
                        "440404": {
                            "name": "金湾区"
                        }
                    }
                },
                "440500": {
                    "name": "汕头市",
                    "children": {
                        "440507": {
                            "name": "龙湖区"
                        },
                        "440511": {
                            "name": "金平区"
                        },
                        "440512": {
                            "name": "濠江区"
                        },
                        "440513": {
                            "name": "潮阳区"
                        },
                        "440514": {
                            "name": "潮南区"
                        },
                        "440515": {
                            "name": "澄海区"
                        },
                        "440523": {
                            "name": "南澳县"
                        }
                    }
                },
                "440600": {
                    "name": "佛山市",
                    "children": {
                        "440604": {
                            "name": "禅城区"
                        },
                        "440605": {
                            "name": "南海区"
                        },
                        "440606": {
                            "name": "顺德区"
                        },
                        "440607": {
                            "name": "三水区"
                        },
                        "440608": {
                            "name": "高明区"
                        }
                    }
                },
                "440700": {
                    "name": "江门市",
                    "children": {
                        "440703": {
                            "name": "蓬江区"
                        },
                        "440704": {
                            "name": "江海区"
                        },
                        "440705": {
                            "name": "新会区"
                        },
                        "440781": {
                            "name": "台山市"
                        },
                        "440783": {
                            "name": "开平市"
                        },
                        "440784": {
                            "name": "鹤山市"
                        },
                        "440785": {
                            "name": "恩平市"
                        }
                    }
                },
                "440800": {
                    "name": "湛江市",
                    "children": {
                        "440802": {
                            "name": "赤坎区"
                        },
                        "440803": {
                            "name": "霞山区"
                        },
                        "440804": {
                            "name": "坡头区"
                        },
                        "440811": {
                            "name": "麻章区"
                        },
                        "440823": {
                            "name": "遂溪县"
                        },
                        "440825": {
                            "name": "徐闻县"
                        },
                        "440881": {
                            "name": "廉江市"
                        },
                        "440882": {
                            "name": "雷州市"
                        },
                        "440883": {
                            "name": "吴川市"
                        }
                    }
                },
                "440900": {
                    "name": "茂名市",
                    "children": {
                        "440902": {
                            "name": "茂南区"
                        },
                        "440904": {
                            "name": "电白区"
                        },
                        "440981": {
                            "name": "高州市"
                        },
                        "440982": {
                            "name": "化州市"
                        },
                        "440983": {
                            "name": "信宜市"
                        }
                    }
                },
                "441200": {
                    "name": "肇庆市",
                    "children": {
                        "441202": {
                            "name": "端州区"
                        },
                        "441203": {
                            "name": "鼎湖区"
                        },
                        "441204": {
                            "name": "高要区"
                        },
                        "441223": {
                            "name": "广宁县"
                        },
                        "441224": {
                            "name": "怀集县"
                        },
                        "441225": {
                            "name": "封开县"
                        },
                        "441226": {
                            "name": "德庆县"
                        },
                        "441284": {
                            "name": "四会市"
                        }
                    }
                },
                "441300": {
                    "name": "惠州市",
                    "children": {
                        "441302": {
                            "name": "惠城区"
                        },
                        "441303": {
                            "name": "惠阳区"
                        },
                        "441322": {
                            "name": "博罗县"
                        },
                        "441323": {
                            "name": "惠东县"
                        },
                        "441324": {
                            "name": "龙门县"
                        }
                    }
                },
                "441400": {
                    "name": "梅州市",
                    "children": {
                        "441402": {
                            "name": "梅江区"
                        },
                        "441403": {
                            "name": "梅县区"
                        },
                        "441422": {
                            "name": "大埔县"
                        },
                        "441423": {
                            "name": "丰顺县"
                        },
                        "441424": {
                            "name": "五华县"
                        },
                        "441426": {
                            "name": "平远县"
                        },
                        "441427": {
                            "name": "蕉岭县"
                        },
                        "441481": {
                            "name": "兴宁市"
                        }
                    }
                },
                "441500": {
                    "name": "汕尾市",
                    "children": {
                        "441502": {
                            "name": "城区"
                        },
                        "441521": {
                            "name": "海丰县"
                        },
                        "441523": {
                            "name": "陆河县"
                        },
                        "441581": {
                            "name": "陆丰市"
                        }
                    }
                },
                "441600": {
                    "name": "河源市",
                    "children": {
                        "441602": {
                            "name": "源城区"
                        },
                        "441621": {
                            "name": "紫金县"
                        },
                        "441622": {
                            "name": "龙川县"
                        },
                        "441623": {
                            "name": "连平县"
                        },
                        "441624": {
                            "name": "和平县"
                        },
                        "441625": {
                            "name": "东源县"
                        }
                    }
                },
                "441700": {
                    "name": "阳江市",
                    "children": {
                        "441702": {
                            "name": "江城区"
                        },
                        "441704": {
                            "name": "阳东区"
                        },
                        "441721": {
                            "name": "阳西县"
                        },
                        "441781": {
                            "name": "阳春市"
                        }
                    }
                },
                "441800": {
                    "name": "清远市",
                    "children": {
                        "441802": {
                            "name": "清城区"
                        },
                        "441803": {
                            "name": "清新区"
                        },
                        "441821": {
                            "name": "佛冈县"
                        },
                        "441823": {
                            "name": "阳山县"
                        },
                        "441825": {
                            "name": "连山壮族瑶族自治县"
                        },
                        "441826": {
                            "name": "连南瑶族自治县"
                        },
                        "441881": {
                            "name": "英德市"
                        },
                        "441882": {
                            "name": "连州市"
                        }
                    }
                },
                "441900": {
                    "name": "东莞市",
                    "children": {
                        "441900003": {
                            "name": "东城街道"
                        },
                        "441900004": {
                            "name": "南城街道"
                        },
                        "441900005": {
                            "name": "万江街道"
                        },
                        "441900006": {
                            "name": "莞城街道"
                        },
                        "441900101": {
                            "name": "石碣镇"
                        },
                        "441900102": {
                            "name": "石龙镇"
                        },
                        "441900103": {
                            "name": "茶山镇"
                        },
                        "441900104": {
                            "name": "石排镇"
                        },
                        "441900105": {
                            "name": "企石镇"
                        },
                        "441900106": {
                            "name": "横沥镇"
                        },
                        "441900107": {
                            "name": "桥头镇"
                        },
                        "441900108": {
                            "name": "谢岗镇"
                        },
                        "441900109": {
                            "name": "东坑镇"
                        },
                        "441900110": {
                            "name": "常平镇"
                        },
                        "441900111": {
                            "name": "寮步镇"
                        },
                        "441900112": {
                            "name": "樟木头镇"
                        },
                        "441900113": {
                            "name": "大朗镇"
                        },
                        "441900114": {
                            "name": "黄江镇"
                        },
                        "441900115": {
                            "name": "清溪镇"
                        },
                        "441900116": {
                            "name": "塘厦镇"
                        },
                        "441900117": {
                            "name": "凤岗镇"
                        },
                        "441900118": {
                            "name": "大岭山镇"
                        },
                        "441900119": {
                            "name": "长安镇"
                        },
                        "441900121": {
                            "name": "虎门镇"
                        },
                        "441900122": {
                            "name": "厚街镇"
                        },
                        "441900123": {
                            "name": "沙田镇"
                        },
                        "441900124": {
                            "name": "道滘镇"
                        },
                        "441900125": {
                            "name": "洪梅镇"
                        },
                        "441900126": {
                            "name": "麻涌镇"
                        },
                        "441900127": {
                            "name": "望牛墩镇"
                        },
                        "441900128": {
                            "name": "中堂镇"
                        },
                        "441900129": {
                            "name": "高埗镇"
                        },
                        "441900401": {
                            "name": "松山湖管委会"
                        },
                        "441900402": {
                            "name": "虎门港管委会"
                        },
                        "441900403": {
                            "name": "东莞生态园"
                        }
                    }
                },
                "442000": {
                    "name": "中山市",
                    "children": {
                        "442000001": {
                            "name": "石岐区街道"
                        },
                        "442000002": {
                            "name": "东区街道"
                        },
                        "442000003": {
                            "name": "火炬开发区街道"
                        },
                        "442000004": {
                            "name": "西区街道"
                        },
                        "442000005": {
                            "name": "南区街道"
                        },
                        "442000006": {
                            "name": "五桂山街道"
                        },
                        "442000100": {
                            "name": "小榄镇"
                        },
                        "442000101": {
                            "name": "黄圃镇"
                        },
                        "442000102": {
                            "name": "民众镇"
                        },
                        "442000103": {
                            "name": "东凤镇"
                        },
                        "442000104": {
                            "name": "东升镇"
                        },
                        "442000105": {
                            "name": "古镇镇"
                        },
                        "442000106": {
                            "name": "沙溪镇"
                        },
                        "442000107": {
                            "name": "坦洲镇"
                        },
                        "442000108": {
                            "name": "港口镇"
                        },
                        "442000109": {
                            "name": "三角镇"
                        },
                        "442000110": {
                            "name": "横栏镇"
                        },
                        "442000111": {
                            "name": "南头镇"
                        },
                        "442000112": {
                            "name": "阜沙镇"
                        },
                        "442000113": {
                            "name": "南朗镇"
                        },
                        "442000114": {
                            "name": "三乡镇"
                        },
                        "442000115": {
                            "name": "板芙镇"
                        },
                        "442000116": {
                            "name": "大涌镇"
                        },
                        "442000117": {
                            "name": "神湾镇"
                        }
                    }
                },
                "445100": {
                    "name": "潮州市",
                    "children": {
                        "445102": {
                            "name": "湘桥区"
                        },
                        "445103": {
                            "name": "潮安区"
                        },
                        "445122": {
                            "name": "饶平县"
                        }
                    }
                },
                "445200": {
                    "name": "揭阳市",
                    "children": {
                        "445202": {
                            "name": "榕城区"
                        },
                        "445203": {
                            "name": "揭东区"
                        },
                        "445222": {
                            "name": "揭西县"
                        },
                        "445224": {
                            "name": "惠来县"
                        },
                        "445281": {
                            "name": "普宁市"
                        }
                    }
                },
                "445300": {
                    "name": "云浮市",
                    "children": {
                        "445302": {
                            "name": "云城区"
                        },
                        "445303": {
                            "name": "云安区"
                        },
                        "445321": {
                            "name": "新兴县"
                        },
                        "445322": {
                            "name": "郁南县"
                        },
                        "445381": {
                            "name": "罗定市"
                        }
                    }
                }
            }
        },
        "45": {
            "name": "广西壮族自治区",
            "children": {
                "450100": {
                    "name": "南宁市",
                    "children": {
                        "450102": {
                            "name": "兴宁区"
                        },
                        "450103": {
                            "name": "青秀区"
                        },
                        "450105": {
                            "name": "江南区"
                        },
                        "450107": {
                            "name": "西乡塘区"
                        },
                        "450108": {
                            "name": "良庆区"
                        },
                        "450109": {
                            "name": "邕宁区"
                        },
                        "450110": {
                            "name": "武鸣区"
                        },
                        "450123": {
                            "name": "隆安县"
                        },
                        "450124": {
                            "name": "马山县"
                        },
                        "450125": {
                            "name": "上林县"
                        },
                        "450126": {
                            "name": "宾阳县"
                        },
                        "450127": {
                            "name": "横县"
                        }
                    }
                },
                "450200": {
                    "name": "柳州市",
                    "children": {
                        "450202": {
                            "name": "城中区"
                        },
                        "450203": {
                            "name": "鱼峰区"
                        },
                        "450204": {
                            "name": "柳南区"
                        },
                        "450205": {
                            "name": "柳北区"
                        },
                        "450206": {
                            "name": "柳江区"
                        },
                        "450222": {
                            "name": "柳城县"
                        },
                        "450223": {
                            "name": "鹿寨县"
                        },
                        "450224": {
                            "name": "融安县"
                        },
                        "450225": {
                            "name": "融水苗族自治县"
                        },
                        "450226": {
                            "name": "三江侗族自治县"
                        }
                    }
                },
                "450300": {
                    "name": "桂林市",
                    "children": {
                        "450302": {
                            "name": "秀峰区"
                        },
                        "450303": {
                            "name": "叠彩区"
                        },
                        "450304": {
                            "name": "象山区"
                        },
                        "450305": {
                            "name": "七星区"
                        },
                        "450311": {
                            "name": "雁山区"
                        },
                        "450312": {
                            "name": "临桂区"
                        },
                        "450321": {
                            "name": "阳朔县"
                        },
                        "450323": {
                            "name": "灵川县"
                        },
                        "450324": {
                            "name": "全州县"
                        },
                        "450325": {
                            "name": "兴安县"
                        },
                        "450326": {
                            "name": "永福县"
                        },
                        "450327": {
                            "name": "灌阳县"
                        },
                        "450328": {
                            "name": "龙胜各族自治县"
                        },
                        "450329": {
                            "name": "资源县"
                        },
                        "450330": {
                            "name": "平乐县"
                        },
                        "450331": {
                            "name": "荔浦县"
                        },
                        "450332": {
                            "name": "恭城瑶族自治县"
                        }
                    }
                },
                "450400": {
                    "name": "梧州市",
                    "children": {
                        "450403": {
                            "name": "万秀区"
                        },
                        "450405": {
                            "name": "长洲区"
                        },
                        "450406": {
                            "name": "龙圩区"
                        },
                        "450421": {
                            "name": "苍梧县"
                        },
                        "450422": {
                            "name": "藤县"
                        },
                        "450423": {
                            "name": "蒙山县"
                        },
                        "450481": {
                            "name": "岑溪市"
                        }
                    }
                },
                "450500": {
                    "name": "北海市",
                    "children": {
                        "450502": {
                            "name": "海城区"
                        },
                        "450503": {
                            "name": "银海区"
                        },
                        "450512": {
                            "name": "铁山港区"
                        },
                        "450521": {
                            "name": "合浦县"
                        }
                    }
                },
                "450600": {
                    "name": "防城港市",
                    "children": {
                        "450602": {
                            "name": "港口区"
                        },
                        "450603": {
                            "name": "防城区"
                        },
                        "450621": {
                            "name": "上思县"
                        },
                        "450681": {
                            "name": "东兴市"
                        }
                    }
                },
                "450700": {
                    "name": "钦州市",
                    "children": {
                        "450702": {
                            "name": "钦南区"
                        },
                        "450703": {
                            "name": "钦北区"
                        },
                        "450721": {
                            "name": "灵山县"
                        },
                        "450722": {
                            "name": "浦北县"
                        }
                    }
                },
                "450800": {
                    "name": "贵港市",
                    "children": {
                        "450802": {
                            "name": "港北区"
                        },
                        "450803": {
                            "name": "港南区"
                        },
                        "450804": {
                            "name": "覃塘区"
                        },
                        "450821": {
                            "name": "平南县"
                        },
                        "450881": {
                            "name": "桂平市"
                        }
                    }
                },
                "450900": {
                    "name": "玉林市",
                    "children": {
                        "450902": {
                            "name": "玉州区"
                        },
                        "450903": {
                            "name": "福绵区"
                        },
                        "450921": {
                            "name": "容县"
                        },
                        "450922": {
                            "name": "陆川县"
                        },
                        "450923": {
                            "name": "博白县"
                        },
                        "450924": {
                            "name": "兴业县"
                        },
                        "450981": {
                            "name": "北流市"
                        }
                    }
                },
                "451000": {
                    "name": "百色市",
                    "children": {
                        "451002": {
                            "name": "右江区"
                        },
                        "451021": {
                            "name": "田阳县"
                        },
                        "451022": {
                            "name": "田东县"
                        },
                        "451023": {
                            "name": "平果县"
                        },
                        "451024": {
                            "name": "德保县"
                        },
                        "451026": {
                            "name": "那坡县"
                        },
                        "451027": {
                            "name": "凌云县"
                        },
                        "451028": {
                            "name": "乐业县"
                        },
                        "451029": {
                            "name": "田林县"
                        },
                        "451030": {
                            "name": "西林县"
                        },
                        "451031": {
                            "name": "隆林各族自治县"
                        },
                        "451081": {
                            "name": "靖西市"
                        }
                    }
                },
                "451100": {
                    "name": "贺州市",
                    "children": {
                        "451102": {
                            "name": "八步区"
                        },
                        "451103": {
                            "name": "平桂区"
                        },
                        "451121": {
                            "name": "昭平县"
                        },
                        "451122": {
                            "name": "钟山县"
                        },
                        "451123": {
                            "name": "富川瑶族自治县"
                        }
                    }
                },
                "451200": {
                    "name": "河池市",
                    "children": {
                        "451202": {
                            "name": "金城江区"
                        },
                        "451221": {
                            "name": "南丹县"
                        },
                        "451222": {
                            "name": "天峨县"
                        },
                        "451223": {
                            "name": "凤山县"
                        },
                        "451224": {
                            "name": "东兰县"
                        },
                        "451225": {
                            "name": "罗城仫佬族自治县"
                        },
                        "451226": {
                            "name": "环江毛南族自治县"
                        },
                        "451227": {
                            "name": "巴马瑶族自治县"
                        },
                        "451228": {
                            "name": "都安瑶族自治县"
                        },
                        "451229": {
                            "name": "大化瑶族自治县"
                        },
                        "451281": {
                            "name": "宜州市"
                        }
                    }
                },
                "451300": {
                    "name": "来宾市",
                    "children": {
                        "451302": {
                            "name": "兴宾区"
                        },
                        "451321": {
                            "name": "忻城县"
                        },
                        "451322": {
                            "name": "象州县"
                        },
                        "451323": {
                            "name": "武宣县"
                        },
                        "451324": {
                            "name": "金秀瑶族自治县"
                        },
                        "451381": {
                            "name": "合山市"
                        }
                    }
                },
                "451400": {
                    "name": "崇左市",
                    "children": {
                        "451402": {
                            "name": "江州区"
                        },
                        "451421": {
                            "name": "扶绥县"
                        },
                        "451422": {
                            "name": "宁明县"
                        },
                        "451423": {
                            "name": "龙州县"
                        },
                        "451424": {
                            "name": "大新县"
                        },
                        "451425": {
                            "name": "天等县"
                        },
                        "451481": {
                            "name": "凭祥市"
                        }
                    }
                }
            }
        },
        "46": {
            "name": "海南省",
            "children": {
                "460100": {
                    "name": "海口市",
                    "children": {
                        "460105": {
                            "name": "秀英区"
                        },
                        "460106": {
                            "name": "龙华区"
                        },
                        "460107": {
                            "name": "琼山区"
                        },
                        "460108": {
                            "name": "美兰区"
                        }
                    }
                },
                "460200": {
                    "name": "三亚市",
                    "children": {
                        "460201": {
                            "name": "市辖区"
                        },
                        "460202": {
                            "name": "海棠区"
                        },
                        "460203": {
                            "name": "吉阳区"
                        },
                        "460204": {
                            "name": "天涯区"
                        },
                        "460205": {
                            "name": "崖州区"
                        }
                    }
                }
            }
        },
        "50": {
            "name": "重庆市",
            "children": {
                "500100": {
                    "name": "重庆市",
                    "children": {
                        "500101": {
                            "name": "万州区"
                        },
                        "500102": {
                            "name": "涪陵区"
                        },
                        "500103": {
                            "name": "渝中区"
                        },
                        "500104": {
                            "name": "大渡口区"
                        },
                        "500105": {
                            "name": "江北区"
                        },
                        "500106": {
                            "name": "沙坪坝区"
                        },
                        "500107": {
                            "name": "九龙坡区"
                        },
                        "500108": {
                            "name": "南岸区"
                        },
                        "500109": {
                            "name": "北碚区"
                        },
                        "500110": {
                            "name": "綦江区"
                        },
                        "500111": {
                            "name": "大足区"
                        },
                        "500112": {
                            "name": "渝北区"
                        },
                        "500113": {
                            "name": "巴南区"
                        },
                        "500114": {
                            "name": "黔江区"
                        },
                        "500115": {
                            "name": "长寿区"
                        },
                        "500116": {
                            "name": "江津区"
                        },
                        "500117": {
                            "name": "合川区"
                        },
                        "500118": {
                            "name": "永川区"
                        },
                        "500119": {
                            "name": "南川区"
                        },
                        "500120": {
                            "name": "璧山区"
                        },
                        "500151": {
                            "name": "铜梁区"
                        },
                        "500152": {
                            "name": "潼南区"
                        },
                        "500153": {
                            "name": "荣昌区"
                        },
                        "500154": {
                            "name": "开州区"
                        }
                    }
                }
            }
        },
        "51": {
            "name": "四川省",
            "children": {
                "510100": {
                    "name": "成都市",
                    "children": {
                        "510104": {
                            "name": "锦江区"
                        },
                        "510105": {
                            "name": "青羊区"
                        },
                        "510106": {
                            "name": "金牛区"
                        },
                        "510107": {
                            "name": "武侯区"
                        },
                        "510108": {
                            "name": "成华区"
                        },
                        "510112": {
                            "name": "龙泉驿区"
                        },
                        "510113": {
                            "name": "青白江区"
                        },
                        "510114": {
                            "name": "新都区"
                        },
                        "510115": {
                            "name": "温江区"
                        },
                        "510116": {
                            "name": "双流区"
                        },
                        "510121": {
                            "name": "金堂县"
                        },
                        "510124": {
                            "name": "郫县"
                        },
                        "510129": {
                            "name": "大邑县"
                        },
                        "510131": {
                            "name": "蒲江县"
                        },
                        "510132": {
                            "name": "新津县"
                        },
                        "510181": {
                            "name": "都江堰市"
                        },
                        "510182": {
                            "name": "彭州市"
                        },
                        "510183": {
                            "name": "邛崃市"
                        },
                        "510184": {
                            "name": "崇州市"
                        },
                        "510185": {
                            "name": "简阳市"
                        }
                    }
                },
                "510300": {
                    "name": "自贡市",
                    "children": {
                        "510302": {
                            "name": "自流井区"
                        },
                        "510303": {
                            "name": "贡井区"
                        },
                        "510304": {
                            "name": "大安区"
                        },
                        "510311": {
                            "name": "沿滩区"
                        },
                        "510321": {
                            "name": "荣县"
                        },
                        "510322": {
                            "name": "富顺县"
                        }
                    }
                },
                "510400": {
                    "name": "攀枝花市",
                    "children": {
                        "510402": {
                            "name": "东区"
                        },
                        "510403": {
                            "name": "西区"
                        },
                        "510411": {
                            "name": "仁和区"
                        },
                        "510421": {
                            "name": "米易县"
                        },
                        "510422": {
                            "name": "盐边县"
                        }
                    }
                },
                "510500": {
                    "name": "泸州市",
                    "children": {
                        "510502": {
                            "name": "江阳区"
                        },
                        "510503": {
                            "name": "纳溪区"
                        },
                        "510504": {
                            "name": "龙马潭区"
                        },
                        "510521": {
                            "name": "泸县"
                        },
                        "510522": {
                            "name": "合江县"
                        },
                        "510524": {
                            "name": "叙永县"
                        },
                        "510525": {
                            "name": "古蔺县"
                        }
                    }
                },
                "510600": {
                    "name": "德阳市",
                    "children": {
                        "510603": {
                            "name": "旌阳区"
                        },
                        "510623": {
                            "name": "中江县"
                        },
                        "510626": {
                            "name": "罗江县"
                        },
                        "510681": {
                            "name": "广汉市"
                        },
                        "510682": {
                            "name": "什邡市"
                        },
                        "510683": {
                            "name": "绵竹市"
                        }
                    }
                },
                "510700": {
                    "name": "绵阳市",
                    "children": {
                        "510703": {
                            "name": "涪城区"
                        },
                        "510704": {
                            "name": "游仙区"
                        },
                        "510705": {
                            "name": "安州区"
                        },
                        "510722": {
                            "name": "三台县"
                        },
                        "510723": {
                            "name": "盐亭县"
                        },
                        "510725": {
                            "name": "梓潼县"
                        },
                        "510726": {
                            "name": "北川羌族自治县"
                        },
                        "510727": {
                            "name": "平武县"
                        },
                        "510781": {
                            "name": "江油市"
                        }
                    }
                },
                "510800": {
                    "name": "广元市",
                    "children": {
                        "510802": {
                            "name": "利州区"
                        },
                        "510811": {
                            "name": "昭化区"
                        },
                        "510812": {
                            "name": "朝天区"
                        },
                        "510821": {
                            "name": "旺苍县"
                        },
                        "510822": {
                            "name": "青川县"
                        },
                        "510823": {
                            "name": "剑阁县"
                        },
                        "510824": {
                            "name": "苍溪县"
                        }
                    }
                },
                "510900": {
                    "name": "遂宁市",
                    "children": {
                        "510903": {
                            "name": "船山区"
                        },
                        "510904": {
                            "name": "安居区"
                        },
                        "510921": {
                            "name": "蓬溪县"
                        },
                        "510922": {
                            "name": "射洪县"
                        },
                        "510923": {
                            "name": "大英县"
                        }
                    }
                },
                "511000": {
                    "name": "内江市",
                    "children": {
                        "511002": {
                            "name": "市中区"
                        },
                        "511011": {
                            "name": "东兴区"
                        },
                        "511024": {
                            "name": "威远县"
                        },
                        "511025": {
                            "name": "资中县"
                        },
                        "511028": {
                            "name": "隆昌县"
                        }
                    }
                },
                "511100": {
                    "name": "乐山市",
                    "children": {
                        "511102": {
                            "name": "市中区"
                        },
                        "511111": {
                            "name": "沙湾区"
                        },
                        "511112": {
                            "name": "五通桥区"
                        },
                        "511113": {
                            "name": "金口河区"
                        },
                        "511123": {
                            "name": "犍为县"
                        },
                        "511124": {
                            "name": "井研县"
                        },
                        "511126": {
                            "name": "夹江县"
                        },
                        "511129": {
                            "name": "沐川县"
                        },
                        "511132": {
                            "name": "峨边彝族自治县"
                        },
                        "511133": {
                            "name": "马边彝族自治县"
                        },
                        "511181": {
                            "name": "峨眉山市"
                        }
                    }
                },
                "511300": {
                    "name": "南充市",
                    "children": {
                        "511302": {
                            "name": "顺庆区"
                        },
                        "511303": {
                            "name": "高坪区"
                        },
                        "511304": {
                            "name": "嘉陵区"
                        },
                        "511321": {
                            "name": "南部县"
                        },
                        "511322": {
                            "name": "营山县"
                        },
                        "511323": {
                            "name": "蓬安县"
                        },
                        "511324": {
                            "name": "仪陇县"
                        },
                        "511325": {
                            "name": "西充县"
                        },
                        "511381": {
                            "name": "阆中市"
                        }
                    }
                },
                "511400": {
                    "name": "眉山市",
                    "children": {
                        "511402": {
                            "name": "东坡区"
                        },
                        "511403": {
                            "name": "彭山区"
                        },
                        "511421": {
                            "name": "仁寿县"
                        },
                        "511423": {
                            "name": "洪雅县"
                        },
                        "511424": {
                            "name": "丹棱县"
                        },
                        "511425": {
                            "name": "青神县"
                        }
                    }
                },
                "511500": {
                    "name": "宜宾市",
                    "children": {
                        "511502": {
                            "name": "翠屏区"
                        },
                        "511503": {
                            "name": "南溪区"
                        },
                        "511521": {
                            "name": "宜宾县"
                        },
                        "511523": {
                            "name": "江安县"
                        },
                        "511524": {
                            "name": "长宁县"
                        },
                        "511525": {
                            "name": "高县"
                        },
                        "511526": {
                            "name": "珙县"
                        },
                        "511527": {
                            "name": "筠连县"
                        },
                        "511528": {
                            "name": "兴文县"
                        },
                        "511529": {
                            "name": "屏山县"
                        }
                    }
                },
                "511600": {
                    "name": "广安市",
                    "children": {
                        "511602": {
                            "name": "广安区"
                        },
                        "511603": {
                            "name": "前锋区"
                        },
                        "511621": {
                            "name": "岳池县"
                        },
                        "511622": {
                            "name": "武胜县"
                        },
                        "511623": {
                            "name": "邻水县"
                        },
                        "511681": {
                            "name": "华蓥市"
                        }
                    }
                },
                "511700": {
                    "name": "达州市",
                    "children": {
                        "511702": {
                            "name": "通川区"
                        },
                        "511703": {
                            "name": "达川区"
                        },
                        "511722": {
                            "name": "宣汉县"
                        },
                        "511723": {
                            "name": "开江县"
                        },
                        "511724": {
                            "name": "大竹县"
                        },
                        "511725": {
                            "name": "渠县"
                        },
                        "511781": {
                            "name": "万源市"
                        }
                    }
                },
                "511800": {
                    "name": "雅安市",
                    "children": {
                        "511802": {
                            "name": "雨城区"
                        },
                        "511803": {
                            "name": "名山区"
                        },
                        "511822": {
                            "name": "荥经县"
                        },
                        "511823": {
                            "name": "汉源县"
                        },
                        "511824": {
                            "name": "石棉县"
                        },
                        "511825": {
                            "name": "天全县"
                        },
                        "511826": {
                            "name": "芦山县"
                        },
                        "511827": {
                            "name": "宝兴县"
                        }
                    }
                },
                "511900": {
                    "name": "巴中市",
                    "children": {
                        "511902": {
                            "name": "巴州区"
                        },
                        "511903": {
                            "name": "恩阳区"
                        },
                        "511921": {
                            "name": "通江县"
                        },
                        "511922": {
                            "name": "南江县"
                        },
                        "511923": {
                            "name": "平昌县"
                        }
                    }
                },
                "512000": {
                    "name": "资阳市",
                    "children": {
                        "512002": {
                            "name": "雁江区"
                        },
                        "512021": {
                            "name": "安岳县"
                        },
                        "512022": {
                            "name": "乐至县"
                        }
                    }
                },
                "513200": {
                    "name": "阿坝藏族羌族自治州",
                    "children": {
                        "513201": {
                            "name": "马尔康市"
                        },
                        "513221": {
                            "name": "汶川县"
                        },
                        "513222": {
                            "name": "理县"
                        },
                        "513223": {
                            "name": "茂县"
                        },
                        "513224": {
                            "name": "松潘县"
                        },
                        "513225": {
                            "name": "九寨沟县"
                        },
                        "513226": {
                            "name": "金川县"
                        },
                        "513227": {
                            "name": "小金县"
                        },
                        "513228": {
                            "name": "黑水县"
                        },
                        "513230": {
                            "name": "壤塘县"
                        },
                        "513231": {
                            "name": "阿坝县"
                        },
                        "513232": {
                            "name": "若尔盖县"
                        },
                        "513233": {
                            "name": "红原县"
                        }
                    }
                },
                "513300": {
                    "name": "甘孜藏族自治州",
                    "children": {
                        "513301": {
                            "name": "康定市"
                        },
                        "513322": {
                            "name": "泸定县"
                        },
                        "513323": {
                            "name": "丹巴县"
                        },
                        "513324": {
                            "name": "九龙县"
                        },
                        "513325": {
                            "name": "雅江县"
                        },
                        "513326": {
                            "name": "道孚县"
                        },
                        "513327": {
                            "name": "炉霍县"
                        },
                        "513328": {
                            "name": "甘孜县"
                        },
                        "513329": {
                            "name": "新龙县"
                        },
                        "513330": {
                            "name": "德格县"
                        },
                        "513331": {
                            "name": "白玉县"
                        },
                        "513332": {
                            "name": "石渠县"
                        },
                        "513333": {
                            "name": "色达县"
                        },
                        "513334": {
                            "name": "理塘县"
                        },
                        "513335": {
                            "name": "巴塘县"
                        },
                        "513336": {
                            "name": "乡城县"
                        },
                        "513337": {
                            "name": "稻城县"
                        },
                        "513338": {
                            "name": "得荣县"
                        }
                    }
                },
                "513400": {
                    "name": "凉山彝族自治州",
                    "children": {
                        "513401": {
                            "name": "西昌市"
                        },
                        "513422": {
                            "name": "木里藏族自治县"
                        },
                        "513423": {
                            "name": "盐源县"
                        },
                        "513424": {
                            "name": "德昌县"
                        },
                        "513425": {
                            "name": "会理县"
                        },
                        "513426": {
                            "name": "会东县"
                        },
                        "513427": {
                            "name": "宁南县"
                        },
                        "513428": {
                            "name": "普格县"
                        },
                        "513429": {
                            "name": "布拖县"
                        },
                        "513430": {
                            "name": "金阳县"
                        },
                        "513431": {
                            "name": "昭觉县"
                        },
                        "513432": {
                            "name": "喜德县"
                        },
                        "513433": {
                            "name": "冕宁县"
                        },
                        "513434": {
                            "name": "越西县"
                        },
                        "513435": {
                            "name": "甘洛县"
                        },
                        "513436": {
                            "name": "美姑县"
                        },
                        "513437": {
                            "name": "雷波县"
                        }
                    }
                }
            }
        },
        "52": {
            "name": "贵州省",
            "children": {
                "520100": {
                    "name": "贵阳市",
                    "children": {
                        "520102": {
                            "name": "南明区"
                        },
                        "520103": {
                            "name": "云岩区"
                        },
                        "520111": {
                            "name": "花溪区"
                        },
                        "520112": {
                            "name": "乌当区"
                        },
                        "520113": {
                            "name": "白云区"
                        },
                        "520115": {
                            "name": "观山湖区"
                        },
                        "520121": {
                            "name": "开阳县"
                        },
                        "520122": {
                            "name": "息烽县"
                        },
                        "520123": {
                            "name": "修文县"
                        },
                        "520181": {
                            "name": "清镇市"
                        }
                    }
                },
                "520200": {
                    "name": "六盘水市",
                    "children": {
                        "520201": {
                            "name": "钟山区"
                        },
                        "520203": {
                            "name": "六枝特区"
                        },
                        "520221": {
                            "name": "水城县"
                        },
                        "520222": {
                            "name": "盘县"
                        }
                    }
                },
                "520300": {
                    "name": "遵义市",
                    "children": {
                        "520302": {
                            "name": "红花岗区"
                        },
                        "520303": {
                            "name": "汇川区"
                        },
                        "520304": {
                            "name": "播州区"
                        },
                        "520322": {
                            "name": "桐梓县"
                        },
                        "520323": {
                            "name": "绥阳县"
                        },
                        "520324": {
                            "name": "正安县"
                        },
                        "520325": {
                            "name": "道真仡佬族苗族自治县"
                        },
                        "520326": {
                            "name": "务川仡佬族苗族自治县"
                        },
                        "520327": {
                            "name": "凤冈县"
                        },
                        "520328": {
                            "name": "湄潭县"
                        },
                        "520329": {
                            "name": "余庆县"
                        },
                        "520330": {
                            "name": "习水县"
                        },
                        "520381": {
                            "name": "赤水市"
                        },
                        "520382": {
                            "name": "仁怀市"
                        }
                    }
                },
                "520400": {
                    "name": "安顺市",
                    "children": {
                        "520402": {
                            "name": "西秀区"
                        },
                        "520403": {
                            "name": "平坝区"
                        },
                        "520422": {
                            "name": "普定县"
                        },
                        "520423": {
                            "name": "镇宁布依族苗族自治县"
                        },
                        "520424": {
                            "name": "关岭布依族苗族自治县"
                        },
                        "520425": {
                            "name": "紫云苗族布依族自治县"
                        }
                    }
                },
                "520600": {
                    "name": "铜仁市",
                    "children": {
                        "520602": {
                            "name": "碧江区"
                        },
                        "520603": {
                            "name": "万山区"
                        },
                        "520621": {
                            "name": "江口县"
                        },
                        "520622": {
                            "name": "玉屏侗族自治县"
                        },
                        "520623": {
                            "name": "石阡县"
                        },
                        "520624": {
                            "name": "思南县"
                        },
                        "520625": {
                            "name": "印江土家族苗族自治县"
                        },
                        "520626": {
                            "name": "德江县"
                        },
                        "520627": {
                            "name": "沿河土家族自治县"
                        },
                        "520628": {
                            "name": "松桃苗族自治县"
                        }
                    }
                },
                "522300": {
                    "name": "黔西南布依族苗族自治州",
                    "children": {
                        "522301": {
                            "name": "兴义市"
                        },
                        "522322": {
                            "name": "兴仁县"
                        },
                        "522323": {
                            "name": "普安县"
                        },
                        "522324": {
                            "name": "晴隆县"
                        },
                        "522325": {
                            "name": "贞丰县"
                        },
                        "522326": {
                            "name": "望谟县"
                        },
                        "522327": {
                            "name": "册亨县"
                        },
                        "522328": {
                            "name": "安龙县"
                        }
                    }
                },
                "522401": {
                    "name": "毕节市",
                    "children": {
                        "520502": {
                            "name": "七星关区"
                        },
                        "520521": {
                            "name": "大方县"
                        },
                        "520522": {
                            "name": "黔西县"
                        },
                        "520523": {
                            "name": "金沙县"
                        },
                        "520524": {
                            "name": "织金县"
                        },
                        "520525": {
                            "name": "纳雍县"
                        },
                        "520526": {
                            "name": "威宁彝族回族苗族自治县"
                        },
                        "520527": {
                            "name": "赫章县"
                        }
                    }
                },
                "522600": {
                    "name": "黔东南苗族侗族自治州",
                    "children": {
                        "522601": {
                            "name": "凯里市"
                        },
                        "522622": {
                            "name": "黄平县"
                        },
                        "522623": {
                            "name": "施秉县"
                        },
                        "522624": {
                            "name": "三穗县"
                        },
                        "522625": {
                            "name": "镇远县"
                        },
                        "522626": {
                            "name": "岑巩县"
                        },
                        "522627": {
                            "name": "天柱县"
                        },
                        "522628": {
                            "name": "锦屏县"
                        },
                        "522629": {
                            "name": "剑河县"
                        },
                        "522630": {
                            "name": "台江县"
                        },
                        "522631": {
                            "name": "黎平县"
                        },
                        "522632": {
                            "name": "榕江县"
                        },
                        "522633": {
                            "name": "从江县"
                        },
                        "522634": {
                            "name": "雷山县"
                        },
                        "522635": {
                            "name": "麻江县"
                        },
                        "522636": {
                            "name": "丹寨县"
                        }
                    }
                },
                "522700": {
                    "name": "黔南布依族苗族自治州",
                    "children": {
                        "522701": {
                            "name": "都匀市"
                        },
                        "522702": {
                            "name": "福泉市"
                        },
                        "522722": {
                            "name": "荔波县"
                        },
                        "522723": {
                            "name": "贵定县"
                        },
                        "522725": {
                            "name": "瓮安县"
                        },
                        "522726": {
                            "name": "独山县"
                        },
                        "522727": {
                            "name": "平塘县"
                        },
                        "522728": {
                            "name": "罗甸县"
                        },
                        "522729": {
                            "name": "长顺县"
                        },
                        "522730": {
                            "name": "龙里县"
                        },
                        "522731": {
                            "name": "惠水县"
                        },
                        "522732": {
                            "name": "三都水族自治县"
                        }
                    }
                }
            }
        },
        "53": {
            "name": "云南省",
            "children": {
                "530100": {
                    "name": "昆明市",
                    "children": {
                        "530102": {
                            "name": "五华区"
                        },
                        "530103": {
                            "name": "盘龙区"
                        },
                        "530111": {
                            "name": "官渡区"
                        },
                        "530112": {
                            "name": "西山区"
                        },
                        "530113": {
                            "name": "东川区"
                        },
                        "530114": {
                            "name": "呈贡区"
                        },
                        "530122": {
                            "name": "晋宁县"
                        },
                        "530124": {
                            "name": "富民县"
                        },
                        "530125": {
                            "name": "宜良县"
                        },
                        "530126": {
                            "name": "石林彝族自治县"
                        },
                        "530127": {
                            "name": "嵩明县"
                        },
                        "530128": {
                            "name": "禄劝彝族苗族自治县"
                        },
                        "530129": {
                            "name": "寻甸回族彝族自治县"
                        },
                        "530181": {
                            "name": "安宁市"
                        }
                    }
                },
                "530300": {
                    "name": "曲靖市",
                    "children": {
                        "530302": {
                            "name": "麒麟区"
                        },
                        "530303": {
                            "name": "沾益区"
                        },
                        "530321": {
                            "name": "马龙县"
                        },
                        "530322": {
                            "name": "陆良县"
                        },
                        "530323": {
                            "name": "师宗县"
                        },
                        "530324": {
                            "name": "罗平县"
                        },
                        "530325": {
                            "name": "富源县"
                        },
                        "530326": {
                            "name": "会泽县"
                        },
                        "530381": {
                            "name": "宣威市"
                        }
                    }
                },
                "530400": {
                    "name": "玉溪市",
                    "children": {
                        "530402": {
                            "name": "红塔区"
                        },
                        "530403": {
                            "name": "江川区"
                        },
                        "530422": {
                            "name": "澄江县"
                        },
                        "530423": {
                            "name": "通海县"
                        },
                        "530424": {
                            "name": "华宁县"
                        },
                        "530425": {
                            "name": "易门县"
                        },
                        "530426": {
                            "name": "峨山彝族自治县"
                        },
                        "530427": {
                            "name": "新平彝族傣族自治县"
                        },
                        "530428": {
                            "name": "元江哈尼族彝族傣族自治县"
                        }
                    }
                },
                "530500": {
                    "name": "保山市",
                    "children": {
                        "530502": {
                            "name": "隆阳区"
                        },
                        "530521": {
                            "name": "施甸县"
                        },
                        "530523": {
                            "name": "龙陵县"
                        },
                        "530524": {
                            "name": "昌宁县"
                        },
                        "530581": {
                            "name": "腾冲市"
                        }
                    }
                },
                "530600": {
                    "name": "昭通市",
                    "children": {
                        "530602": {
                            "name": "昭阳区"
                        },
                        "530621": {
                            "name": "鲁甸县"
                        },
                        "530622": {
                            "name": "巧家县"
                        },
                        "530623": {
                            "name": "盐津县"
                        },
                        "530624": {
                            "name": "大关县"
                        },
                        "530625": {
                            "name": "永善县"
                        },
                        "530626": {
                            "name": "绥江县"
                        },
                        "530627": {
                            "name": "镇雄县"
                        },
                        "530628": {
                            "name": "彝良县"
                        },
                        "530629": {
                            "name": "威信县"
                        },
                        "530630": {
                            "name": "水富县"
                        }
                    }
                },
                "530700": {
                    "name": "丽江市",
                    "children": {
                        "530702": {
                            "name": "古城区"
                        },
                        "530721": {
                            "name": "玉龙纳西族自治县"
                        },
                        "530722": {
                            "name": "永胜县"
                        },
                        "530723": {
                            "name": "华坪县"
                        },
                        "530724": {
                            "name": "宁蒗彝族自治县"
                        }
                    }
                },
                "530800": {
                    "name": "普洱市",
                    "children": {
                        "530802": {
                            "name": "思茅区"
                        },
                        "530821": {
                            "name": "宁洱哈尼族彝族自治县"
                        },
                        "530822": {
                            "name": "墨江哈尼族自治县"
                        },
                        "530823": {
                            "name": "景东彝族自治县"
                        },
                        "530824": {
                            "name": "景谷傣族彝族自治县"
                        },
                        "530825": {
                            "name": "镇沅彝族哈尼族拉祜族自治县"
                        },
                        "530826": {
                            "name": "江城哈尼族彝族自治县"
                        },
                        "530827": {
                            "name": "孟连傣族拉祜族佤族自治县"
                        },
                        "530828": {
                            "name": "澜沧拉祜族自治县"
                        },
                        "530829": {
                            "name": "西盟佤族自治县"
                        }
                    }
                },
                "530900": {
                    "name": "临沧市",
                    "children": {
                        "530902": {
                            "name": "临翔区"
                        },
                        "530921": {
                            "name": "凤庆县"
                        },
                        "530922": {
                            "name": "云县"
                        },
                        "530923": {
                            "name": "永德县"
                        },
                        "530924": {
                            "name": "镇康县"
                        },
                        "530925": {
                            "name": "双江拉祜族佤族布朗族傣族自治县"
                        },
                        "530926": {
                            "name": "耿马傣族佤族自治县"
                        },
                        "530927": {
                            "name": "沧源佤族自治县"
                        }
                    }
                },
                "532300": {
                    "name": "楚雄彝族自治州",
                    "children": {
                        "532301": {
                            "name": "楚雄市"
                        },
                        "532322": {
                            "name": "双柏县"
                        },
                        "532323": {
                            "name": "牟定县"
                        },
                        "532324": {
                            "name": "南华县"
                        },
                        "532325": {
                            "name": "姚安县"
                        },
                        "532326": {
                            "name": "大姚县"
                        },
                        "532327": {
                            "name": "永仁县"
                        },
                        "532328": {
                            "name": "元谋县"
                        },
                        "532329": {
                            "name": "武定县"
                        },
                        "532331": {
                            "name": "禄丰县"
                        }
                    }
                },
                "532500": {
                    "name": "红河哈尼族彝族自治州",
                    "children": {
                        "532501": {
                            "name": "个旧市"
                        },
                        "532502": {
                            "name": "开远市"
                        },
                        "532503": {
                            "name": "蒙自市"
                        },
                        "532504": {
                            "name": "弥勒市"
                        },
                        "532523": {
                            "name": "屏边苗族自治县"
                        },
                        "532524": {
                            "name": "建水县"
                        },
                        "532525": {
                            "name": "石屏县"
                        },
                        "532527": {
                            "name": "泸西县"
                        },
                        "532528": {
                            "name": "元阳县"
                        },
                        "532529": {
                            "name": "红河县"
                        },
                        "532530": {
                            "name": "金平苗族瑶族傣族自治县"
                        },
                        "532531": {
                            "name": "绿春县"
                        },
                        "532532": {
                            "name": "河口瑶族自治县"
                        }
                    }
                },
                "532600": {
                    "name": "文山壮族苗族自治州",
                    "children": {
                        "532601": {
                            "name": "文山市"
                        },
                        "532622": {
                            "name": "砚山县"
                        },
                        "532623": {
                            "name": "西畴县"
                        },
                        "532624": {
                            "name": "麻栗坡县"
                        },
                        "532625": {
                            "name": "马关县"
                        },
                        "532626": {
                            "name": "丘北县"
                        },
                        "532627": {
                            "name": "广南县"
                        },
                        "532628": {
                            "name": "富宁县"
                        }
                    }
                },
                "532800": {
                    "name": "西双版纳傣族自治州",
                    "children": {
                        "532801": {
                            "name": "景洪市"
                        },
                        "532822": {
                            "name": "勐海县"
                        },
                        "532823": {
                            "name": "勐腊县"
                        }
                    }
                },
                "532900": {
                    "name": "大理白族自治州",
                    "children": {
                        "532901": {
                            "name": "大理市"
                        },
                        "532922": {
                            "name": "漾濞彝族自治县"
                        },
                        "532923": {
                            "name": "祥云县"
                        },
                        "532924": {
                            "name": "宾川县"
                        },
                        "532925": {
                            "name": "弥渡县"
                        },
                        "532926": {
                            "name": "南涧彝族自治县"
                        },
                        "532927": {
                            "name": "巍山彝族回族自治县"
                        },
                        "532928": {
                            "name": "永平县"
                        },
                        "532929": {
                            "name": "云龙县"
                        },
                        "532930": {
                            "name": "洱源县"
                        },
                        "532931": {
                            "name": "剑川县"
                        },
                        "532932": {
                            "name": "鹤庆县"
                        }
                    }
                },
                "533100": {
                    "name": "德宏傣族景颇族自治州",
                    "children": {
                        "533102": {
                            "name": "瑞丽市"
                        },
                        "533103": {
                            "name": "芒市"
                        },
                        "533122": {
                            "name": "梁河县"
                        },
                        "533123": {
                            "name": "盈江县"
                        },
                        "533124": {
                            "name": "陇川县"
                        }
                    }
                },
                "533300": {
                    "name": "怒江傈僳族自治州",
                    "children": {
                        "533301": {
                            "name": "泸水市"
                        },
                        "533323": {
                            "name": "福贡县"
                        },
                        "533324": {
                            "name": "贡山独龙族怒族自治县"
                        },
                        "533325": {
                            "name": "兰坪白族普米族自治县"
                        }
                    }
                },
                "533400": {
                    "name": "迪庆藏族自治州",
                    "children": {
                        "533401": {
                            "name": "香格里拉市"
                        },
                        "533422": {
                            "name": "德钦县"
                        },
                        "533423": {
                            "name": "维西傈僳族自治县"
                        }
                    }
                }
            }
        },
        "54": {
            "name": "西藏自治区",
            "children": {
                "540100": {
                    "name": "拉萨市",
                    "children": {
                        "540102": {
                            "name": "城关区"
                        },
                        "540103": {
                            "name": "堆龙德庆区"
                        },
                        "540121": {
                            "name": "林周县"
                        },
                        "540122": {
                            "name": "当雄县"
                        },
                        "540123": {
                            "name": "尼木县"
                        },
                        "540124": {
                            "name": "曲水县"
                        },
                        "540126": {
                            "name": "达孜县"
                        },
                        "540127": {
                            "name": "墨竹工卡县"
                        }
                    }
                },
                "542100": {
                    "name": "昌都地区",
                    "children": {
                        "540302": {
                            "name": "卡若区"
                        },
                        "540321": {
                            "name": "江达县"
                        },
                        "540322": {
                            "name": "贡觉县"
                        },
                        "540323": {
                            "name": "类乌齐县"
                        },
                        "540324": {
                            "name": "丁青县"
                        },
                        "540325": {
                            "name": "察雅县"
                        },
                        "540326": {
                            "name": "八宿县"
                        },
                        "540327": {
                            "name": "左贡县"
                        },
                        "540328": {
                            "name": "芒康县"
                        },
                        "540329": {
                            "name": "洛隆县"
                        },
                        "540330": {
                            "name": "边坝县"
                        }
                    }
                },
                "542200": {
                    "name": "山南地区",
                    "children": {
                        "540502": {
                            "name": "乃东区"
                        },
                        "540521": {
                            "name": "扎囊县"
                        },
                        "540522": {
                            "name": "贡嘎县"
                        },
                        "540523": {
                            "name": "桑日县"
                        },
                        "540524": {
                            "name": "琼结县"
                        },
                        "540525": {
                            "name": "曲松县"
                        },
                        "540526": {
                            "name": "措美县"
                        },
                        "540527": {
                            "name": "洛扎县"
                        },
                        "540528": {
                            "name": "加查县"
                        },
                        "540529": {
                            "name": "隆子县"
                        },
                        "540530": {
                            "name": "错那县"
                        },
                        "540531": {
                            "name": "浪卡子县"
                        }
                    }
                },
                "542300": {
                    "name": "日喀则地区",
                    "children": {
                        "540202": {
                            "name": "桑珠孜区"
                        },
                        "540221": {
                            "name": "南木林县"
                        },
                        "540222": {
                            "name": "江孜县"
                        },
                        "540223": {
                            "name": "定日县"
                        },
                        "540224": {
                            "name": "萨迦县"
                        },
                        "540225": {
                            "name": "拉孜县"
                        },
                        "540226": {
                            "name": "昂仁县"
                        },
                        "540227": {
                            "name": "谢通门县"
                        },
                        "540228": {
                            "name": "白朗县"
                        },
                        "540229": {
                            "name": "仁布县"
                        },
                        "540230": {
                            "name": "康马县"
                        },
                        "540231": {
                            "name": "定结县"
                        },
                        "540232": {
                            "name": "仲巴县"
                        },
                        "540233": {
                            "name": "亚东县"
                        },
                        "540234": {
                            "name": "吉隆县"
                        },
                        "540235": {
                            "name": "聂拉木县"
                        },
                        "540236": {
                            "name": "萨嘎县"
                        },
                        "540237": {
                            "name": "岗巴县"
                        }
                    }
                },
                "542400": {
                    "name": "那曲地区",
                    "children": {
                        "542421": {
                            "name": "那曲县"
                        },
                        "542422": {
                            "name": "嘉黎县"
                        },
                        "542423": {
                            "name": "比如县"
                        },
                        "542424": {
                            "name": "聂荣县"
                        },
                        "542425": {
                            "name": "安多县"
                        },
                        "542426": {
                            "name": "申扎县"
                        },
                        "542427": {
                            "name": "索县"
                        },
                        "542428": {
                            "name": "班戈县"
                        },
                        "542429": {
                            "name": "巴青县"
                        },
                        "542430": {
                            "name": "尼玛县"
                        },
                        "542431": {
                            "name": "双湖县"
                        }
                    }
                },
                "542500": {
                    "name": "阿里地区",
                    "children": {
                        "542521": {
                            "name": "普兰县"
                        },
                        "542522": {
                            "name": "札达县"
                        },
                        "542523": {
                            "name": "噶尔县"
                        },
                        "542524": {
                            "name": "日土县"
                        },
                        "542525": {
                            "name": "革吉县"
                        },
                        "542526": {
                            "name": "改则县"
                        },
                        "542527": {
                            "name": "措勤县"
                        }
                    }
                },
                "542600": {
                    "name": "林芝地区",
                    "children": {
                        "540402": {
                            "name": "巴宜区"
                        },
                        "540421": {
                            "name": "工布江达县"
                        },
                        "540422": {
                            "name": "米林县"
                        },
                        "540423": {
                            "name": "墨脱县"
                        },
                        "540424": {
                            "name": "波密县"
                        },
                        "540425": {
                            "name": "察隅县"
                        },
                        "540426": {
                            "name": "朗县"
                        }
                    }
                }
            }
        },
        "61": {
            "name": "陕西省",
            "children": {
                "610100": {
                    "name": "西安市",
                    "children": {
                        "610102": {
                            "name": "新城区"
                        },
                        "610103": {
                            "name": "碑林区"
                        },
                        "610104": {
                            "name": "莲湖区"
                        },
                        "610111": {
                            "name": "灞桥区"
                        },
                        "610112": {
                            "name": "未央区"
                        },
                        "610113": {
                            "name": "雁塔区"
                        },
                        "610114": {
                            "name": "阎良区"
                        },
                        "610115": {
                            "name": "临潼区"
                        },
                        "610116": {
                            "name": "长安区"
                        },
                        "610117": {
                            "name": "高陵区"
                        },
                        "610122": {
                            "name": "蓝田县"
                        },
                        "610124": {
                            "name": "周至县"
                        },
                        "610125": {
                            "name": "户县"
                        }
                    }
                },
                "610200": {
                    "name": "铜川市",
                    "children": {
                        "610202": {
                            "name": "王益区"
                        },
                        "610203": {
                            "name": "印台区"
                        },
                        "610204": {
                            "name": "耀州区"
                        },
                        "610222": {
                            "name": "宜君县"
                        }
                    }
                },
                "610300": {
                    "name": "宝鸡市",
                    "children": {
                        "610302": {
                            "name": "渭滨区"
                        },
                        "610303": {
                            "name": "金台区"
                        },
                        "610304": {
                            "name": "陈仓区"
                        },
                        "610322": {
                            "name": "凤翔县"
                        },
                        "610323": {
                            "name": "岐山县"
                        },
                        "610324": {
                            "name": "扶风县"
                        },
                        "610326": {
                            "name": "眉县"
                        },
                        "610327": {
                            "name": "陇县"
                        },
                        "610328": {
                            "name": "千阳县"
                        },
                        "610329": {
                            "name": "麟游县"
                        },
                        "610330": {
                            "name": "凤县"
                        },
                        "610331": {
                            "name": "太白县"
                        }
                    }
                },
                "610400": {
                    "name": "咸阳市",
                    "children": {
                        "610402": {
                            "name": "秦都区"
                        },
                        "610403": {
                            "name": "杨陵区"
                        },
                        "610404": {
                            "name": "渭城区"
                        },
                        "610422": {
                            "name": "三原县"
                        },
                        "610423": {
                            "name": "泾阳县"
                        },
                        "610424": {
                            "name": "乾县"
                        },
                        "610425": {
                            "name": "礼泉县"
                        },
                        "610426": {
                            "name": "永寿县"
                        },
                        "610427": {
                            "name": "彬县"
                        },
                        "610428": {
                            "name": "长武县"
                        },
                        "610429": {
                            "name": "旬邑县"
                        },
                        "610430": {
                            "name": "淳化县"
                        },
                        "610431": {
                            "name": "武功县"
                        },
                        "610481": {
                            "name": "兴平市"
                        }
                    }
                },
                "610500": {
                    "name": "渭南市",
                    "children": {
                        "610502": {
                            "name": "临渭区"
                        },
                        "610503": {
                            "name": "华州区"
                        },
                        "610522": {
                            "name": "潼关县"
                        },
                        "610523": {
                            "name": "大荔县"
                        },
                        "610524": {
                            "name": "合阳县"
                        },
                        "610525": {
                            "name": "澄城县"
                        },
                        "610526": {
                            "name": "蒲城县"
                        },
                        "610527": {
                            "name": "白水县"
                        },
                        "610528": {
                            "name": "富平县"
                        },
                        "610581": {
                            "name": "韩城市"
                        },
                        "610582": {
                            "name": "华阴市"
                        }
                    }
                },
                "610600": {
                    "name": "延安市",
                    "children": {
                        "610602": {
                            "name": "宝塔区"
                        },
                        "610603": {
                            "name": "安塞区"
                        },
                        "610621": {
                            "name": "延长县"
                        },
                        "610622": {
                            "name": "延川县"
                        },
                        "610623": {
                            "name": "子长县"
                        },
                        "610625": {
                            "name": "志丹县"
                        },
                        "610626": {
                            "name": "吴起县"
                        },
                        "610627": {
                            "name": "甘泉县"
                        },
                        "610628": {
                            "name": "富县"
                        },
                        "610629": {
                            "name": "洛川县"
                        },
                        "610630": {
                            "name": "宜川县"
                        },
                        "610631": {
                            "name": "黄龙县"
                        },
                        "610632": {
                            "name": "黄陵县"
                        }
                    }
                },
                "610700": {
                    "name": "汉中市",
                    "children": {
                        "610702": {
                            "name": "汉台区"
                        },
                        "610721": {
                            "name": "南郑县"
                        },
                        "610722": {
                            "name": "城固县"
                        },
                        "610723": {
                            "name": "洋县"
                        },
                        "610724": {
                            "name": "西乡县"
                        },
                        "610725": {
                            "name": "勉县"
                        },
                        "610726": {
                            "name": "宁强县"
                        },
                        "610727": {
                            "name": "略阳县"
                        },
                        "610728": {
                            "name": "镇巴县"
                        },
                        "610729": {
                            "name": "留坝县"
                        },
                        "610730": {
                            "name": "佛坪县"
                        }
                    }
                },
                "610800": {
                    "name": "榆林市",
                    "children": {
                        "610802": {
                            "name": "榆阳区"
                        },
                        "610803": {
                            "name": "横山区"
                        },
                        "610821": {
                            "name": "神木县"
                        },
                        "610822": {
                            "name": "府谷县"
                        },
                        "610824": {
                            "name": "靖边县"
                        },
                        "610825": {
                            "name": "定边县"
                        },
                        "610826": {
                            "name": "绥德县"
                        },
                        "610827": {
                            "name": "米脂县"
                        },
                        "610828": {
                            "name": "佳县"
                        },
                        "610829": {
                            "name": "吴堡县"
                        },
                        "610830": {
                            "name": "清涧县"
                        },
                        "610831": {
                            "name": "子洲县"
                        }
                    }
                },
                "610900": {
                    "name": "安康市",
                    "children": {
                        "610902": {
                            "name": "汉滨区"
                        },
                        "610921": {
                            "name": "汉阴县"
                        },
                        "610922": {
                            "name": "石泉县"
                        },
                        "610923": {
                            "name": "宁陕县"
                        },
                        "610924": {
                            "name": "紫阳县"
                        },
                        "610925": {
                            "name": "岚皋县"
                        },
                        "610926": {
                            "name": "平利县"
                        },
                        "610927": {
                            "name": "镇坪县"
                        },
                        "610928": {
                            "name": "旬阳县"
                        },
                        "610929": {
                            "name": "白河县"
                        }
                    }
                },
                "611000": {
                    "name": "商洛市",
                    "children": {
                        "611002": {
                            "name": "商州区"
                        },
                        "611021": {
                            "name": "洛南县"
                        },
                        "611022": {
                            "name": "丹凤县"
                        },
                        "611023": {
                            "name": "商南县"
                        },
                        "611024": {
                            "name": "山阳县"
                        },
                        "611025": {
                            "name": "镇安县"
                        },
                        "611026": {
                            "name": "柞水县"
                        }
                    }
                }
            }
        },
        "62": {
            "name": "甘肃省",
            "children": {
                "620100": {
                    "name": "兰州市",
                    "children": {
                        "620102": {
                            "name": "城关区"
                        },
                        "620103": {
                            "name": "七里河区"
                        },
                        "620104": {
                            "name": "西固区"
                        },
                        "620105": {
                            "name": "安宁区"
                        },
                        "620111": {
                            "name": "红古区"
                        },
                        "620121": {
                            "name": "永登县"
                        },
                        "620122": {
                            "name": "皋兰县"
                        },
                        "620123": {
                            "name": "榆中县"
                        }
                    }
                },
                "620200": {
                    "name": "嘉峪关市",
                    "children": {
                        "620201100": {
                            "name": "新城镇"
                        },
                        "620201101": {
                            "name": "峪泉镇"
                        },
                        "620201102": {
                            "name": "文殊镇"
                        },
                        "620201401": {
                            "name": "雄关区"
                        },
                        "620201402": {
                            "name": "镜铁区"
                        },
                        "620201403": {
                            "name": "长城区"
                        }
                    }
                },
                "620300": {
                    "name": "金昌市",
                    "children": {
                        "620302": {
                            "name": "金川区"
                        },
                        "620321": {
                            "name": "永昌县"
                        }
                    }
                },
                "620400": {
                    "name": "白银市",
                    "children": {
                        "620402": {
                            "name": "白银区"
                        },
                        "620403": {
                            "name": "平川区"
                        },
                        "620421": {
                            "name": "靖远县"
                        },
                        "620422": {
                            "name": "会宁县"
                        },
                        "620423": {
                            "name": "景泰县"
                        }
                    }
                },
                "620500": {
                    "name": "天水市",
                    "children": {
                        "620502": {
                            "name": "秦州区"
                        },
                        "620503": {
                            "name": "麦积区"
                        },
                        "620521": {
                            "name": "清水县"
                        },
                        "620522": {
                            "name": "秦安县"
                        },
                        "620523": {
                            "name": "甘谷县"
                        },
                        "620524": {
                            "name": "武山县"
                        },
                        "620525": {
                            "name": "张家川回族自治县"
                        }
                    }
                },
                "620600": {
                    "name": "武威市",
                    "children": {
                        "620602": {
                            "name": "凉州区"
                        },
                        "620621": {
                            "name": "民勤县"
                        },
                        "620622": {
                            "name": "古浪县"
                        },
                        "620623": {
                            "name": "天祝藏族自治县"
                        }
                    }
                },
                "620700": {
                    "name": "张掖市",
                    "children": {
                        "620702": {
                            "name": "甘州区"
                        },
                        "620721": {
                            "name": "肃南裕固族自治县"
                        },
                        "620722": {
                            "name": "民乐县"
                        },
                        "620723": {
                            "name": "临泽县"
                        },
                        "620724": {
                            "name": "高台县"
                        },
                        "620725": {
                            "name": "山丹县"
                        }
                    }
                },
                "620800": {
                    "name": "平凉市",
                    "children": {
                        "620802": {
                            "name": "崆峒区"
                        },
                        "620821": {
                            "name": "泾川县"
                        },
                        "620822": {
                            "name": "灵台县"
                        },
                        "620823": {
                            "name": "崇信县"
                        },
                        "620824": {
                            "name": "华亭县"
                        },
                        "620825": {
                            "name": "庄浪县"
                        },
                        "620826": {
                            "name": "静宁县"
                        }
                    }
                },
                "620900": {
                    "name": "酒泉市",
                    "children": {
                        "620902": {
                            "name": "肃州区"
                        },
                        "620921": {
                            "name": "金塔县"
                        },
                        "620922": {
                            "name": "瓜州县"
                        },
                        "620923": {
                            "name": "肃北蒙古族自治县"
                        },
                        "620924": {
                            "name": "阿克塞哈萨克族自治县"
                        },
                        "620981": {
                            "name": "玉门市"
                        },
                        "620982": {
                            "name": "敦煌市"
                        }
                    }
                },
                "621000": {
                    "name": "庆阳市",
                    "children": {
                        "621002": {
                            "name": "西峰区"
                        },
                        "621021": {
                            "name": "庆城县"
                        },
                        "621022": {
                            "name": "环县"
                        },
                        "621023": {
                            "name": "华池县"
                        },
                        "621024": {
                            "name": "合水县"
                        },
                        "621025": {
                            "name": "正宁县"
                        },
                        "621026": {
                            "name": "宁县"
                        },
                        "621027": {
                            "name": "镇原县"
                        }
                    }
                },
                "621100": {
                    "name": "定西市",
                    "children": {
                        "621102": {
                            "name": "安定区"
                        },
                        "621121": {
                            "name": "通渭县"
                        },
                        "621122": {
                            "name": "陇西县"
                        },
                        "621123": {
                            "name": "渭源县"
                        },
                        "621124": {
                            "name": "临洮县"
                        },
                        "621125": {
                            "name": "漳县"
                        },
                        "621126": {
                            "name": "岷县"
                        }
                    }
                },
                "621200": {
                    "name": "陇南市",
                    "children": {
                        "621202": {
                            "name": "武都区"
                        },
                        "621221": {
                            "name": "成县"
                        },
                        "621222": {
                            "name": "文县"
                        },
                        "621223": {
                            "name": "宕昌县"
                        },
                        "621224": {
                            "name": "康县"
                        },
                        "621225": {
                            "name": "西和县"
                        },
                        "621226": {
                            "name": "礼县"
                        },
                        "621227": {
                            "name": "徽县"
                        },
                        "621228": {
                            "name": "两当县"
                        }
                    }
                },
                "622900": {
                    "name": "临夏回族自治州",
                    "children": {
                        "622901": {
                            "name": "临夏市"
                        },
                        "622921": {
                            "name": "临夏县"
                        },
                        "622922": {
                            "name": "康乐县"
                        },
                        "622923": {
                            "name": "永靖县"
                        },
                        "622924": {
                            "name": "广河县"
                        },
                        "622925": {
                            "name": "和政县"
                        },
                        "622926": {
                            "name": "东乡族自治县"
                        },
                        "622927": {
                            "name": "积石山保安族东乡族撒拉族自治县"
                        }
                    }
                },
                "623000": {
                    "name": "甘南藏族自治州",
                    "children": {
                        "623001": {
                            "name": "合作市"
                        },
                        "623021": {
                            "name": "临潭县"
                        },
                        "623022": {
                            "name": "卓尼县"
                        },
                        "623023": {
                            "name": "舟曲县"
                        },
                        "623024": {
                            "name": "迭部县"
                        },
                        "623025": {
                            "name": "玛曲县"
                        },
                        "623026": {
                            "name": "碌曲县"
                        },
                        "623027": {
                            "name": "夏河县"
                        }
                    }
                }
            }
        },
        "63": {
            "name": "青海省",
            "children": {
                "630100": {
                    "name": "西宁市",
                    "children": {
                        "630102": {
                            "name": "城东区"
                        },
                        "630103": {
                            "name": "城中区"
                        },
                        "630104": {
                            "name": "城西区"
                        },
                        "630105": {
                            "name": "城北区"
                        },
                        "630121": {
                            "name": "大通回族土族自治县"
                        },
                        "630122": {
                            "name": "湟中县"
                        },
                        "630123": {
                            "name": "湟源县"
                        }
                    }
                },
                "630200": {
                    "name": "海东市",
                    "children": {
                        "630202": {
                            "name": "乐都区"
                        },
                        "630203": {
                            "name": "平安区"
                        },
                        "630222": {
                            "name": "民和回族土族自治县"
                        },
                        "630223": {
                            "name": "互助土族自治县"
                        },
                        "630224": {
                            "name": "化隆回族自治县"
                        },
                        "630225": {
                            "name": "循化撒拉族自治县"
                        }
                    }
                },
                "632200": {
                    "name": "海北藏族自治州",
                    "children": {
                        "632221": {
                            "name": "门源回族自治县"
                        },
                        "632222": {
                            "name": "祁连县"
                        },
                        "632223": {
                            "name": "海晏县"
                        },
                        "632224": {
                            "name": "刚察县"
                        }
                    }
                },
                "632300": {
                    "name": "黄南藏族自治州",
                    "children": {
                        "632321": {
                            "name": "同仁县"
                        },
                        "632322": {
                            "name": "尖扎县"
                        },
                        "632323": {
                            "name": "泽库县"
                        },
                        "632324": {
                            "name": "河南蒙古族自治县"
                        }
                    }
                },
                "632500": {
                    "name": "海南藏族自治州",
                    "children": {
                        "632521": {
                            "name": "共和县"
                        },
                        "632522": {
                            "name": "同德县"
                        },
                        "632523": {
                            "name": "贵德县"
                        },
                        "632524": {
                            "name": "兴海县"
                        },
                        "632525": {
                            "name": "贵南县"
                        }
                    }
                },
                "632600": {
                    "name": "果洛藏族自治州",
                    "children": {
                        "632621": {
                            "name": "玛沁县"
                        },
                        "632622": {
                            "name": "班玛县"
                        },
                        "632623": {
                            "name": "甘德县"
                        },
                        "632624": {
                            "name": "达日县"
                        },
                        "632625": {
                            "name": "久治县"
                        },
                        "632626": {
                            "name": "玛多县"
                        }
                    }
                },
                "632700": {
                    "name": "玉树藏族自治州",
                    "children": {
                        "632701": {
                            "name": "玉树市"
                        },
                        "632722": {
                            "name": "杂多县"
                        },
                        "632723": {
                            "name": "称多县"
                        },
                        "632724": {
                            "name": "治多县"
                        },
                        "632725": {
                            "name": "囊谦县"
                        },
                        "632726": {
                            "name": "曲麻莱县"
                        }
                    }
                },
                "632800": {
                    "name": "海西蒙古族藏族自治州",
                    "children": {
                        "632801": {
                            "name": "格尔木市"
                        },
                        "632802": {
                            "name": "德令哈市"
                        },
                        "632821": {
                            "name": "乌兰县"
                        },
                        "632822": {
                            "name": "都兰县"
                        },
                        "632823": {
                            "name": "天峻县"
                        }
                    }
                }
            }
        },
        "64": {
            "name": "宁夏回族自治区",
            "children": {
                "640100": {
                    "name": "银川市",
                    "children": {
                        "640104": {
                            "name": "兴庆区"
                        },
                        "640105": {
                            "name": "西夏区"
                        },
                        "640106": {
                            "name": "金凤区"
                        },
                        "640121": {
                            "name": "永宁县"
                        },
                        "640122": {
                            "name": "贺兰县"
                        },
                        "640181": {
                            "name": "灵武市"
                        }
                    }
                },
                "640200": {
                    "name": "石嘴山市",
                    "children": {
                        "640202": {
                            "name": "大武口区"
                        },
                        "640205": {
                            "name": "惠农区"
                        },
                        "640221": {
                            "name": "平罗县"
                        }
                    }
                },
                "640300": {
                    "name": "吴忠市",
                    "children": {
                        "640302": {
                            "name": "利通区"
                        },
                        "640303": {
                            "name": "红寺堡区"
                        },
                        "640323": {
                            "name": "盐池县"
                        },
                        "640324": {
                            "name": "同心县"
                        },
                        "640381": {
                            "name": "青铜峡市"
                        }
                    }
                },
                "640400": {
                    "name": "固原市",
                    "children": {
                        "640402": {
                            "name": "原州区"
                        },
                        "640422": {
                            "name": "西吉县"
                        },
                        "640423": {
                            "name": "隆德县"
                        },
                        "640424": {
                            "name": "泾源县"
                        },
                        "640425": {
                            "name": "彭阳县"
                        }
                    }
                },
                "640500": {
                    "name": "中卫市",
                    "children": {
                        "640502": {
                            "name": "沙坡头区"
                        },
                        "640521": {
                            "name": "中宁县"
                        },
                        "640522": {
                            "name": "海原县"
                        }
                    }
                }
            }
        },
        "65": {
            "name": "新疆维吾尔自治区",
            "children": {
                "650100": {
                    "name": "乌鲁木齐市",
                    "children": {
                        "650102": {
                            "name": "天山区"
                        },
                        "650103": {
                            "name": "沙依巴克区"
                        },
                        "650104": {
                            "name": "新市区"
                        },
                        "650105": {
                            "name": "水磨沟区"
                        },
                        "650106": {
                            "name": "头屯河区"
                        },
                        "650107": {
                            "name": "达坂城区"
                        },
                        "650109": {
                            "name": "米东区"
                        },
                        "650121": {
                            "name": "乌鲁木齐县"
                        }
                    }
                },
                "650200": {
                    "name": "克拉玛依市",
                    "children": {
                        "650202": {
                            "name": "独山子区"
                        },
                        "650203": {
                            "name": "克拉玛依区"
                        },
                        "650204": {
                            "name": "白碱滩区"
                        },
                        "650205": {
                            "name": "乌尔禾区"
                        }
                    }
                },
                "652100": {
                    "name": "吐鲁番地区",
                    "children": {
                        "650402": {
                            "name": "高昌区"
                        },
                        "650421": {
                            "name": "鄯善县"
                        },
                        "650422": {
                            "name": "托克逊县"
                        }
                    }
                },
                "652200": {
                    "name": "哈密地区",
                    "children": {
                        "650502": {
                            "name": "伊州区"
                        },
                        "650521": {
                            "name": "巴里坤哈萨克自治县"
                        },
                        "650522": {
                            "name": "伊吾县"
                        }
                    }
                },
                "652300": {
                    "name": "昌吉回族自治州",
                    "children": {
                        "652301": {
                            "name": "昌吉市"
                        },
                        "652302": {
                            "name": "阜康市"
                        },
                        "652323": {
                            "name": "呼图壁县"
                        },
                        "652324": {
                            "name": "玛纳斯县"
                        },
                        "652325": {
                            "name": "奇台县"
                        },
                        "652327": {
                            "name": "吉木萨尔县"
                        },
                        "652328": {
                            "name": "木垒哈萨克自治县"
                        }
                    }
                },
                "652700": {
                    "name": "博尔塔拉蒙古自治州",
                    "children": {
                        "652701": {
                            "name": "博乐市"
                        },
                        "652702": {
                            "name": "阿拉山口市"
                        },
                        "652722": {
                            "name": "精河县"
                        },
                        "652723": {
                            "name": "温泉县"
                        }
                    }
                },
                "652800": {
                    "name": "巴音郭楞蒙古自治州",
                    "children": {
                        "652801": {
                            "name": "库尔勒市"
                        },
                        "652822": {
                            "name": "轮台县"
                        },
                        "652823": {
                            "name": "尉犁县"
                        },
                        "652824": {
                            "name": "若羌县"
                        },
                        "652825": {
                            "name": "且末县"
                        },
                        "652826": {
                            "name": "焉耆回族自治县"
                        },
                        "652827": {
                            "name": "和静县"
                        },
                        "652828": {
                            "name": "和硕县"
                        },
                        "652829": {
                            "name": "博湖县"
                        }
                    }
                },
                "652900": {
                    "name": "阿克苏地区",
                    "children": {
                        "652901": {
                            "name": "阿克苏市"
                        },
                        "652922": {
                            "name": "温宿县"
                        },
                        "652923": {
                            "name": "库车县"
                        },
                        "652924": {
                            "name": "沙雅县"
                        },
                        "652925": {
                            "name": "新和县"
                        },
                        "652926": {
                            "name": "拜城县"
                        },
                        "652927": {
                            "name": "乌什县"
                        },
                        "652928": {
                            "name": "阿瓦提县"
                        },
                        "652929": {
                            "name": "柯坪县"
                        }
                    }
                },
                "653000": {
                    "name": "克孜勒苏柯尔克孜自治州",
                    "children": {
                        "653001": {
                            "name": "阿图什市"
                        },
                        "653022": {
                            "name": "阿克陶县"
                        },
                        "653023": {
                            "name": "阿合奇县"
                        },
                        "653024": {
                            "name": "乌恰县"
                        }
                    }
                },
                "653100": {
                    "name": "喀什地区",
                    "children": {
                        "653101": {
                            "name": "喀什市"
                        },
                        "653121": {
                            "name": "疏附县"
                        },
                        "653122": {
                            "name": "疏勒县"
                        },
                        "653123": {
                            "name": "英吉沙县"
                        },
                        "653124": {
                            "name": "泽普县"
                        },
                        "653125": {
                            "name": "莎车县"
                        },
                        "653126": {
                            "name": "叶城县"
                        },
                        "653127": {
                            "name": "麦盖提县"
                        },
                        "653128": {
                            "name": "岳普湖县"
                        },
                        "653129": {
                            "name": "伽师县"
                        },
                        "653130": {
                            "name": "巴楚县"
                        },
                        "653131": {
                            "name": "塔什库尔干塔吉克自治县"
                        }
                    }
                },
                "653200": {
                    "name": "和田地区",
                    "children": {
                        "653201": {
                            "name": "和田市"
                        },
                        "653221": {
                            "name": "和田县"
                        },
                        "653222": {
                            "name": "墨玉县"
                        },
                        "653223": {
                            "name": "皮山县"
                        },
                        "653224": {
                            "name": "洛浦县"
                        },
                        "653225": {
                            "name": "策勒县"
                        },
                        "653226": {
                            "name": "于田县"
                        },
                        "653227": {
                            "name": "民丰县"
                        }
                    }
                },
                "654000": {
                    "name": "伊犁哈萨克自治州",
                    "children": {
                        "654002": {
                            "name": "伊宁市"
                        },
                        "654003": {
                            "name": "奎屯市"
                        },
                        "654004": {
                            "name": "霍尔果斯市"
                        },
                        "654021": {
                            "name": "伊宁县"
                        },
                        "654022": {
                            "name": "察布查尔锡伯自治县"
                        },
                        "654023": {
                            "name": "霍城县"
                        },
                        "654024": {
                            "name": "巩留县"
                        },
                        "654025": {
                            "name": "新源县"
                        },
                        "654026": {
                            "name": "昭苏县"
                        },
                        "654027": {
                            "name": "特克斯县"
                        },
                        "654028": {
                            "name": "尼勒克县"
                        }
                    }
                },
                "654200": {
                    "name": "塔城地区",
                    "children": {
                        "654201": {
                            "name": "塔城市"
                        },
                        "654202": {
                            "name": "乌苏市"
                        },
                        "654221": {
                            "name": "额敏县"
                        },
                        "654223": {
                            "name": "沙湾县"
                        },
                        "654224": {
                            "name": "托里县"
                        },
                        "654225": {
                            "name": "裕民县"
                        },
                        "654226": {
                            "name": "和布克赛尔蒙古自治县"
                        }
                    }
                },
                "654300": {
                    "name": "阿勒泰地区",
                    "children": {
                        "654301": {
                            "name": "阿勒泰市"
                        },
                        "654321": {
                            "name": "布尔津县"
                        },
                        "654322": {
                            "name": "富蕴县"
                        },
                        "654323": {
                            "name": "福海县"
                        },
                        "654324": {
                            "name": "哈巴河县"
                        },
                        "654325": {
                            "name": "青河县"
                        },
                        "654326": {
                            "name": "吉木乃县"
                        }
                    }
                }
            }
        },
        "70": {
            "name": "港澳台",
            "children": {
                "710100": {
                    "name": "台湾"
                },
                "810100": {
                    "name": "香港特别行政区"
                },
                "820100": {
                    "name": "澳门特别行政区"
                }
            }
        }
    });