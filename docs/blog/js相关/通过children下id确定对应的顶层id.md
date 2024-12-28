---
title: 通过children下id确定对应的顶层id
createTime: 2024/12/28 23:16:40
permalink: /article/k0igzpvh/
tags:
    - js
---

```js
 let data = {
      "base": "",
      "menu": [
       {
          "title": "一级菜单",
          "iconClass": "el-icon-menu",
          "children": [
            {
              "menuid": "admin01",
              "pmid": "0",
              "sortnum": 0,
              "title": "二级菜单1",
              "iconClass": "1",
              "children": [
                {
                  "menuid": "admin0101",
                  "pmid": "admin01",
                  "sortnum": 0,
                  "title": "三级菜单0101",
                  "iconClass": "1",
                  "children": [
                    {
                      "menuid": "admin010102",
                      "pmid": "admin0101",
                      "sortnum": 0,
                      "title": "四级菜单010102",
                      "route": "B050232D-AAFE-0B1B-6255-7CB9B6788EC6",
                      "iconClass": "1",
                      "uuid": "B050232D-AAFE-0B1B-6255-7CB9B6788EC6"
                    },
                    {
                      "menuid": "admin010103",
                      "pmid": "admin0101",
                      "sortnum": 1,
                      "title": "四级菜单010103",
                      "route": "23CB6322-592A-2C90-D0BD-C1C46ED5C5D3",
                      "iconClass": "1",
                      "uuid": "23CB6322-592A-2C90-D0BD-C1C46ED5C5D3"
                    },
                    {
                      "menuid": "admin010104",
                      "pmid": "admin0101",
                      "sortnum": 2,
                      "title": "四级菜单010104",
                      "route": "62E459DA-8431-783E-8692-04ED39ED905A",
                      "iconClass": "1",
                      "uuid": "62E459DA-8431-783E-8692-04ED39ED905A"
                    }
                  ]
                },
                {
                  "menuid": "admin0102",
                  "pmid": "admin01",
                  "sortnum": 1,
                  "title": "三级菜单0102",
                  "iconClass": "1",
                  "children": [
                    {
                      "menuid": "admin010202",
                      "pmid": "admin0102",
                      "sortnum": 0,
                      "title": "四级菜单010202",
                      "route": "3351C4CC-CE1D-5C76-BA15-C853738D2121",
                      "iconClass": "1",
                      "uuid": "3351C4CC-CE1D-5C76-BA15-C853738D2121"
                    },
                    {
                      "menuid": "admin010205",
                      "pmid": "admin0102",
                      "sortnum": 1,
                      "title": "四级菜单010205",
                      "route": "A07C2B33-DA6E-5F8B-00BA-24B3AAB921BB",
                      "iconClass": "1",
                      "uuid": "A07C2B33-DA6E-5F8B-00BA-24B3AAB921BB"
                    },
                    {
                      "menuid": "admin010206",
                      "pmid": "admin0102",
                      "sortnum": 2,
                      "title": "四级菜单010206",
                      "route": "0C4991C0-2BCE-9AAB-B146-D8532EFE0A24",
                      "iconClass": "1",
                      "uuid": "0C4991C0-2BCE-9AAB-B146-D8532EFE0A24"
                    },
                    {
                      "menuid": "admin010207",
                      "pmid": "admin0102",
                      "sortnum": 3,
                      "title": "四级菜单010206",
                      "route": "836550BA-3B13-E47D-A918-77CFDA2169C9",
                      "iconClass": "1",
                      "uuid": "836550BA-3B13-E47D-A918-77CFDA2169C9"
                    }
                  ]
                },
                {
                  "menuid": "admin0103",
                  "pmid": "admin01",
                  "sortnum": 2,
                  "title": "三级菜单3",
                  "iconClass": "1",
                  "children": [
                    {
                      "menuid": "admin010303",
                      "pmid": "admin0103",
                      "sortnum": 0,
                      "title": "四级级菜单010303",
                      "route": "1D152038-CE24-5CF5-7979-50B74B7D5FCF",
                      "iconClass": "1",
                      "uuid": "1D152038-CE24-5CF5-7979-50B74B7D5FCF"
                    },
                    {
                      "menuid": "admin010304",
                      "pmid": "admin0103",
                      "sortnum": 1,
                      "title": "四级级菜单010304",
                      "route": "AFD6B272-72D4-E7B9-C64A-E66950D3790E",
                      "iconClass": "1",
                      "uuid": "AFD6B272-72D4-E7B9-C64A-E66950D3790E"
                    }
                  ]
                }
              ]
            },
            {
              "menuid": "admp01",
              "pmid": "0",
              "sortnum": 1,
              "title": "»二级菜单2",
              "iconClass": "1",
              "children": [
                {
                  "menuid": "admp0101",
                  "pmid": "admp01",
                  "sortnum": 0,
                  "title": "admp0101",
                  "iconClass": "1",
                  "children": [
                    {
                      "menuid": "admp010101",
                      "pmid": "admp0101",
                      "sortnum": 0,
                      "title": "admp010101",
                      "route": "319EED8D-EF69-B02B-4431-6D08648FE380",
                      "iconClass": "1",
                      "uuid": "319EED8D-EF69-B02B-4431-6D08648FE380"
                    },
                    {
                      "menuid": "admp010103",
                      "pmid": "admp0101",
                      "sortnum": 1,
                      "title": "admp010103",
                      "route": "E57BFAD4-87F8-48E5-9DEB-98B4D68D2DF5",
                      "iconClass": "1",
                      "uuid": "E57BFAD4-87F8-48E5-9DEB-98B4D68D2DF5"
                    },
                    {
                      "menuid": "admp010104",
                      "pmid": "admp0101",
                      "sortnum": 2,
                      "title": "admp010104",
                      "route": "74359456-AF32-46C8-7C9F-08A7FAD609E5",
                      "iconClass": "1",
                      "uuid": "74359456-AF32-46C8-7C9F-08A7FAD609E5"
                    },
                    {
                      "menuid": "admp010102",
                      "pmid": "admp0101",
                      "sortnum": 3,
                      "title": "admp010102",
                      "route": "87D2381E-8633-3AEC-9CAE-9FC1BBA0D237",
                      "iconClass": "1",
                      "uuid": "87D2381E-8633-3AEC-9CAE-9FC1BBA0D237"
                    },
                    {
                      "menuid": "admp010105",
                      "pmid": "admp0101",
                      "sortnum": 4,
                      "title": "admp010105",
                      "route": "7ACD6A98-F389-0739-2334-A72C4922C8E5",
                      "iconClass": "1",
                      "uuid": "7ACD6A98-F389-0739-2334-A72C4922C8E5"
                    }
                  ]
                },
                {
                  "menuid": "admp0102",
                  "pmid": "admp01",
                  "sortnum": 1,
                  "title": "admp010201",
                  "iconClass": "1",
                  "children": [
                    {
                      "menuid": "admp010201",
                      "pmid": "admp0102",
                      "sortnum": 0,
                      "title": "admp010201",
                      "route": "CD6085A0-D173-800B-E1D3-D95821F7C4D5",
                      "iconClass": "1",
                      "uuid": "CD6085A0-D173-800B-E1D3-D95821F7C4D5"
                    },
                    {
                      "menuid": "admp010202",
                      "pmid": "admp0102",
                      "sortnum": 1,
                      "title": "admp010202",
                      "route": "34C4E200-D182-E8F5-8146-E73E28896013",
                      "iconClass": "1",
                      "uuid": "34C4E200-D182-E8F5-8146-E73E28896013"
                    },
                    {
                      "menuid": "admp010203",
                      "pmid": "admp0102",
                      "sortnum": 2,
                      "title": "admp010203",
                      "route": "CF9D3DB6-076D-67CD-0239-1CB8A4F1EE94",
                      "iconClass": "1",
                      "uuid": "CF9D3DB6-076D-67CD-0239-1CB8A4F1EE94"
                    }
                  ]
                }
              ]
            }
          ]
        },
      ]
    }


    function parentlist(formFolders, id) {
      let parentKey = "";
      let parentsKeys = [];
      // 合并children数据
      let combine = (arr, childIds) => {
        childIds.push(arr.menuid);
        if (arr.children) {
          arr.children.forEach((item) => {
            combine(item, childIds);
          })
        } else {
          return childIds;
        }
        return childIds;
      }
      for (let i in formFolders) {
        let obj = {
          id: formFolders[i].menuid,
          children: [],
        }
        let childIdDatas = combine(formFolders[i], obj["children"]);
        obj["children"] = childIdDatas;
        parentsKeys.push(obj);
      };
      parentsKeys.forEach((item, index) => {
        if (item.children.includes(id)) {
          parentKey = item.id;
          return
        }
      })
      return parentKey
    }
// 传递侧边栏数据和点击的侧边栏id，返回顶层id
   parentlist(data.menu[0].children,"admin010202")
    console.log(q); // 返回顶层id admin01
```
