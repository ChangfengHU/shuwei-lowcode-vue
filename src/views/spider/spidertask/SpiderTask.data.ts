import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '更新日期',
    align:"center",
    dataIndex: 'updateTime'
   },
   {
    title: '爬虫任务标题',
    align:"center",
    dataIndex: 'title'
   },
   {
    title: '正则匹配词',
    align:"center",
    dataIndex: 'regEx'
   },
   {
    title: '关键词',
    align:"center",
    dataIndex: 'keyword'
   },
   {
    title: '状态1:待同步，2:部分同步 3:全同步',
    align:"center",
    dataIndex: 'status'
   },
   {
    title: '源码',
    align:"center",
    dataIndex: 'sourceCode'
   },
   {
    title: '源码类型 1 内容 2url',
    align:"center",
    dataIndex: 'sourceCodeType'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "更新人",
      field: 'updateBy',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "更新日期",
      field: 'updateTime',
      component: 'DatePicker',
      componentProps: {
         showTime:true,
         valueFormat: 'YYYY-MM-DD HH:mm:ss'
       },
      colProps: {span: 6},
 	},
	{
      label: "删除",
      field: 'deleted',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "爬虫任务标题",
      field: 'title',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '爬虫任务标题',
    field: 'title',
    component: 'Input',
  },
  {
    label: '正则匹配词',
    field: 'regEx',
    component: 'Input',
  },
  {
    label: '关键词',
    field: 'keyword',
    component: 'Input',
  },
  {
    label: '状态1:待同步，2:部分同步 3:全同步',
    field: 'status',
    component: 'InputNumber',
  },
  {
    label: '源码',
    field: 'sourceCode',
    component: 'InputTextArea',
  },
  {
    label: '源码类型 1 内容 2url',
    field: 'sourceCodeType',
    component: 'InputNumber',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}