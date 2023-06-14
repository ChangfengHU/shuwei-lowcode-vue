import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '创建人',
    align:"center",
    dataIndex: 'createBy'
   },
   {
    title: '更新日期',
    align:"center",
    dataIndex: 'updateTime'
   },
   {
    title: '提示词库名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '用户id',
    align:"center",
    dataIndex: 'userId_dictText'
   },
   {
    title: '企业码',
    align:"center",
    dataIndex: 'corpCode'
   },
   {
    title: '1: 用户 2: 企业',
    align:"center",
    dataIndex: 'type_dictText'
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
      label: "删除",
      field: 'deleted',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "提示词库名称",
      field: 'name',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "用户id",
      field: 'userId',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"sys_user,username,id"
      },
      colProps: {span: 6},
 	},
	{
      label: "企业码",
      field: 'corpCode',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "1: 用户 2: 企业",
      field: 'type',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"corp_type"
      },
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '提示词库名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '用户id',
    field: 'userId',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"sys_user,username,id"
     },
  },
  {
    label: '企业码',
    field: 'corpCode',
    component: 'Input',
  },
  {
    label: '1: 用户 2: 企业',
    field: 'type',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"corp_type"
     },
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