import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '类目名称',
    align: 'left',
    dataIndex: 'name'
   },
   {
    title: '层级',
    align: 'center',
    dataIndex: 'level'
   },
   {
    title: '父级节点',
    align: 'center',
    dataIndex: 'pid'
   },
   {
    title: '盘类型 1：个人盘,2：共享盘',
    align: 'center',
    dataIndex: 'drive_dictText'
   },
   {
    title: '用户id',
    align: 'center',
    dataIndex: 'userId_dictText'
   },
   {
    title: '企业码',
    align: 'center',
    dataIndex: 'corpCode'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "删除",
      field: "deleted",
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"delete_status"
      },
      colProps: {span: 6},
     },
	{
      label: "类目名称",
      field: "name",
      component: 'Input',
      colProps: {span: 6},
     },
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '类目名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '层级',
    field: 'level',
    component: 'InputNumber',
  },
  {
    label: '父级节点',
    field: 'pid',
    component: 'JTreeSelect',
    componentProps: {
      dict: "resource_category,name,id",
      pidField: "pid",
      pidValue: "0",
      hasChildField: "has_child",
    },
  },
  {
    label: '盘类型 1：个人盘,2：共享盘',
    field: 'drive',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"drive_type"
     },
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
