import tool from '../tool';
import idItemOption from './formItem1Option';
import nameItemOption from './formItem2Option';
import descItemOption from './formItem3Option';
import textItemOption from './formItem4Option';

export default {
  api: {
    create: '/create',
    update: '/update',
    copy: '/copy',
  },
  formItems: [idItemOption, nameItemOption, descItemOption, textItemOption],
  groups: [
    {
      label: 'Group 1',
      itemNames: ['id', 'name'],
      hidden: true,
    },
    {
      label: 'Group 2',
      itemNames: ['desc', 'text'],
    },
  ],

  isEdit() {
    return tool.queryToJson().ad_id;
  },

  mounted() {},
};
