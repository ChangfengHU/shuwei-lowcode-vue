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
    title: '标题',
    align:"center",
    dataIndex: 'title'
   },
   {
    title: '内容',
    align:"center",
    dataIndex: 'content'
   },
   {
    title: '用户ID',
    align:"center",
    dataIndex: 'userId_dictText'
   },
   {
    title: '盘（1，个人盘；2，共享盘；3，回收站',
    align:"center",
    dataIndex: 'drive'
   },
   {
    title: '状态（1，草稿；2，流转中；3，待发布；4，已发布；5，回收站）',
    align:"center",
    dataIndex: 'status'
   },
   {
    title: '渠道',
    align:"center",
    dataIndex: 'source'
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
      label: "标题",
      field: 'title',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "用户ID",
      field: 'userId',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"prompt_thesaurus,name,id"
      },
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '标题',
    field: 'title',
    component: 'Input',
  },
  {
    label: '内容',
    field: 'content',
    component: 'Input',
  },
  {
    label: '用户ID',
    field: 'userId',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"prompt_thesaurus,name,id"
     },
  },
  {
    label: '盘（1，个人盘；2，共享盘；3，回收站',
    field: 'drive',
    component: 'InputNumber',
  },
  {
    label: '状态（1，草稿；2，流转中；3，待发布；4，已发布；5，回收站）',
    field: 'status',
    component: 'InputNumber',
  },
  {
    label: '渠道',
    field: 'source',
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