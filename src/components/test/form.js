import formItemId from './form-item-id';
import formItemName from './form-item-name';
import formItemDesc from './form-item-desc';
import formItemText from './form-item-text';

export default {
  formItems: [formItemId, formItemName, formItemDesc, formItemText].map(comp => comp._dynamicFormConfig),
  groups: [
    {
      label: 'Group 1',
      itemIds: [formItemId._dynamicFormConfig.component, formItemName._dynamicFormConfig.component],
      hidden(context, formVm) {
        return formVm.type === 1;
      },
    },
    {
      label: 'Group 2',
      itemIds: [formItemDesc._dynamicFormConfig.component, formItemText._dynamicFormConfig.component],
      // formGroupVm：item组件所在form group组件的vm
      hidden(context, formVm) {
        return formVm.type === 2;
      },
    },
  ],
};
