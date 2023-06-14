import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '参数code',
    align:"center",
    dataIndex: 'paramCode'
   },
   {
    title: '参数value',
    align:"center",
    dataIndex: 'paramValue'
   },
   {
    title: '描述',
    align:"center",
    dataIndex: 'paramDesc'
   },
   {
    title: '删除表示',
    align:"center",
    dataIndex: 'deleted'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '参数code',
    field: 'paramCode',
    component: 'Input',
  },
  {
    label: '参数value',
    field: 'paramValue',
    component: 'Input',
  },
  {
    label: '描述',
    field: 'paramDesc',
    component: 'InputNumber',
  },
  {
    label: '删除表示',
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