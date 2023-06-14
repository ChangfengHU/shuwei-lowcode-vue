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
    title: '标题',
    align:"center",
    dataIndex: 'title'
    },
   {
    title: '爬虫任务id',
    align:"center",
    dataIndex: 'taskId_dictText'
   },
   {
    title: 'url',
    align:"center",
    dataIndex: 'url',
    customRender:render.renderImage,
   },
   {
    title: '内容',
    align:"center",
    dataIndex: 'content',
    slots: { customRender: 'htmlSlot' },
   },
   {
    title: '状态1:待同步，2:部分同步 3:全同步',
    align:"center",
    dataIndex: 'status'
   },
   {
    title: 'part，image，audio，video',
    align:"center",
    dataIndex: 'type_dictText'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
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
      label: "爬虫任务id",
      field: 'taskId',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"spider_task,title,id"
      },
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '爬虫任务id',
    field: 'taskId',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"spider_task,title,id"
     },
  },
  {
    label: 'url',
    field: 'url',
     component: 'JImageUpload',
     componentProps:{
      },
  },
  {
    label: '内容',
    field: 'content',
    component: 'JEditor',
  },
  {
    label: 'part，image，audio，video',
    field: 'type',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"spider_type"
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
