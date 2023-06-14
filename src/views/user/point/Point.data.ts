import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '用户id',
    align:"center",
    dataIndex: 'userId'
   },
   {
    title: '积分',
    align:"center",
    dataIndex: 'point'
   },
   {
    title: '删除',
    align:"center",
    dataIndex: 'deleted'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "创建人",
      field: 'createBy',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "创建日期",
      field: 'createTime',
      component: 'DatePicker',
      componentProps: {
         showTime:true,
         valueFormat: 'YYYY-MM-DD HH:mm:ss'
       },
      colProps: {span: 6},
 	},
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
      label: "用户id",
      field: 'userId',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "积分",
      field: 'point',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "删除",
      field: 'deleted',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '用户id',
    field: 'userId',
    component: 'Input',
  },
  {
    label: '积分',
    field: 'point',
    component: 'InputNumber',
  },
  {
    label: '删除',
    field: 'deleted',
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