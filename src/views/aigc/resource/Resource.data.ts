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
    title: '创建日期',
    align:"center",
    dataIndex: 'createTime'
   },
   {
    title: '资源名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '资源id',
    align:"center",
    dataIndex: 'categoryId'
   },
   {
    title: '文件大小',
    align:"center",
    dataIndex: 'size'
   },
   {
    title: '文件类型',
    align:"center",
    dataIndex: 'type'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [


	{
      label: "删除",
      field: 'deleted',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "资源名称",
      field: 'name',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "资源id",
      field: 'categoryId',
      component: 'Input',
      colProps: {span: 6},
 	},

	{
      label: "文件类型 ",
      field: 'type',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"resource_type"
      },
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [

  {
    label: '资源名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '资源id',
    field: 'categoryId',
    component: 'JTreeSelect',
    componentProps:{
        dict:"resource_category,name,id",
        pidValue:"0",
    },
  },
  {
    label: '文件大小',
    field: 'size',
    component: 'InputNumber',
  },
  {
    label: '文件类型 1:文本2:图片 3:音频 4:视频',
    field: 'type',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"resource_type"
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
