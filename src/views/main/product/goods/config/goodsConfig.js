/*
 * @Author: qin
 * @Date: 2022-04-05 22:38:29
 * @LastEditTime: 2022-04-05 23:54:23
 * @FilePath: \vue3_cms\src\views\main\product\goods\config\goodsConfig.js
 *  -> The best way to explain it is to do it
 */

const goodsConfig = {
  title: '商品列表',
  propsList: [
    { prop: 'name', label: '商品名称', minWidth: '100' },
    {
      prop: 'oldPrice',
      label: '原价格',
      minWidth: '70',
      slotName: 'oldPrice',
    },
    {
      prop: 'newPrice',
      label: '现价格',
      minWidth: '70',
      slotName: 'newPrice',
    },
    {
      prop: 'imgUrl',
      label: '商品图片',
      minWidth: '100',
      slotName: 'image',
    },
    {
      prop: 'status',
      label: '状态',
      minWidth: '50',
      slotName: 'status',
    },
    {
      label: '操作',
      miniWidth: '130',
      slotName: 'handler',
    },
  ],
  showIndexColumn: true,
  showSelectColumn: true,
};
export default goodsConfig;
