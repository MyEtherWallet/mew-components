import Vue from 'vue';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import '@/assets/styles/global.scss';

import Vuetify, {
  VApp,
  VBtn,
  VCard,
  VCardText,
  VCol,
  VContainer,
  VContent,
  VDialog,
  VDivider,
  VIcon,
  VImg,
  VList,
  VListItem,
  VListItemAvatar,
  VListItemContent,
  VListItemIcon,
  VListItemTitle,
  VNavigationDrawer,
  VRow,
  VSheet,
  VSnackbar,
  VSparkline,
  VToolbar,
  VTextField,
  VLayout,
  VSelect,
  VCombobox,
  VTooltip
} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCard,
    VCardText,
    VCol,
    VContainer,
    VContent,
    VDialog,
    VDivider,
    VIcon,
    VImg,
    VList,
    VListItem,
    VListItemAvatar,
    VListItemContent,
    VListItemIcon,
    VListItemTitle,
    VNavigationDrawer,
    VRow,
    VSheet,
    VSnackbar,
    VSparkline,
    VToolbar,
    VTextField,
    VLayout,
    VSelect,
    VCombobox,
    VTooltip
  }
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: {
          base: '#05c0a5',
          lighten5: '#f5fdfb',
          lighten4: '#f2fafa', 
          lighten3: '#e4f1f1',
          lighten2: '#dcfff9',
          lighten1: '#baede6',
          darken1: '#56c5b4',
          darken2: '#00c0a5',
          darken3: '#1eb19b',
          darken4: '#0baa93',
        },
        secondary: {
          hover: '#fff',
          base: '#5a78f0',
          lighten1: '#7895f2',
          lighten2: '#7fdefb',
          lighten3: '#d6dffa',
          lighten4: '#f9fafe',
          darken1: '#184f90'
        },
        basic: {
          base: '#0b1a40',
          lighten1: '#a9bcd2',
          lighten3: '#f5f7f8',
          lighten2: '#c5ccd3'
        },
        success: '#2cc479',
        error: {
          base: '#ff445b',
          lighten1: '#ffd7dc',
          lighten2: '#fff8f9'
        },
        warning: {
          base: '#ff7700',
          lighten1: '#f5a623',
          lighten2: '#ffa'
        },
        disabled: {
          base: '#cecece',
          lighten5: 'fff',
          lighten2: '#f2f4fa',
          lighten1: '#e0e0e0',
          darken1: '#999999'
        },
        title: '#0b2840',
        text: '#667f9b'
      },
      dark: {
        primary: {
          base: '#05c0a5',
          lighten5: '#f5fdfb',
          lighten4: '#f2fafa', 
          lighten3: '#e4f1f1',
          lighten2: '#dcfff9',
          lighten1: '#baede6',
          darken1: '#56c5b4',
          darken2: '#00c0a5',
          darken3: '#1eb19b',
          darken4: '#0baa93',
        },
        secondary: {
          base: '#5c79f0',
          lighten1: '#7895f2',
          lighten2: '#7fdefb',
          lighten3: '#d6dffa',
          lighten4: '#f9fafe',
          darken1: '#184f90'
        },
        basic: {
          base: '#151A29',
          lighten1: '#a9bcd2',
          lighten2: '#f5f7f8',
          lighten3: '#c5ccd3',
          darken1: '#0d111e'
        },
        success: {
          base: '#2cc479'
        },
        error: {
          base: '#ff445b',
          lighten1: '#ffd7dc',
          lighten2: '#fff8f9'
        },
        warning: {
          base: '#ff7700',
          lighten1: '#f5a623',
          lighten2: '#ffa'
        },
        yellow: {
          base: '#ffb100'
        },
        disabled: {
          base: '#1f2b42',
          lighten5: 'fff',
          lighten2: '#f2f4fa',
          lighten1: '#e0e0e0',
          darken1: '#999999'
        },
        title: '#95aed8',
        text: '#4e5a6e'
      }
    }
  }
});
