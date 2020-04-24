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
  VBottomSheet,
  VSparkline,
  VToolbar,
  VTextField,
  VLayout,
  VSelect,
  VCombobox,
  VTooltip,
  VStepper,
  VStepperHeader,
  VStepperStep
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
    VBottomSheet,
    VSparkline,
    VToolbar,
    VTextField,
    VLayout,
    VSelect,
    VCombobox,
    VTooltip,
    VStepper,
    VStepperHeader,
    VStepperStep
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
        primaryHover: '#1eb19b',
        primaryActive: '#56c5b4',
        primaryOutlineActive: '#baede6',
        secondaryOutlineActive: '#d6dffa',
        errorOutlineActive: '#ffd7dc',
        basicOutlineActive: '#c5ccd3', 
        selectActive: '#dcfff9',
        selectHover: '#f0f0f0',
        superPrimary: '#f2fafa',
        superPrimaryHover: '#f5fdfb',
        inputBorder: '#e0e0e0',
        inputDisabled: '#cecece',
        dropdownBorder: '#05c0a5',
        progressBar: '#F3FAFA',
        txIn: '#7895f2',
        txOut: '#ffaf8f',
        swap: '#7fdefb',
        swapDisable: '#f8f8f8',
        captionPrimary: '#a9bcd2',
        textSecondary: '#999999',
        inputLabel: '#6d89a6',
        searchInput: '#f2f4fa',
        searchText: '#96a8b6',
        titlePrimary: '#0b2840',
        textPrimary: '#667f9b',
        white: '#ffffff',
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
          base: '#FFF2DC',
          darken1: '#f5a623',
          lighten2: '#ffa'
        },
        disabled: {
          base: '#cecece',
          lighten5: 'fff',
          lighten2: '#f2f4fa',
          lighten1: '#e0e0e0',
          darken1: '#999999'
        }
      },
      dark: {
        primaryHover: '#1eb19b',
        primaryActive: '#56c5b4',
        primaryOutlineHover: '#03292c',
        primaryOutlineActive: '#15796a',
        secondaryOutlineHover: '#182040',
        secondaryOutlineActive: '#2e3c75',
        errorOutlineHover: '#361317',
        errorOutlineActive: '#651f28',
        basicOutlineHover: '#1e2a3e',
        basicOutlineActive: '#3d4e6b',
        selectActive: '#2e3c75',
        selectHover: '#2c3448',
        superPrimary: '#f2fafa',
        superPrimaryHover: '#f5fdfb',
        inputBorder: '#667f9b',
        inputDisabled: '#3A465D',
        dropdownBorder: '#7e90a7',
        progressBar: '#151A29',
        txIn: '#7895f2',
        txOut: '#ffaf8f',
        swap: '#0f1320',
        swapDisable: '#0f1320',
        captionPrimary: '#a9bcd2',
        textSecondary: '#999999',
        inputLabel: '#4e5a6e',
        searchInput: '#f2f4fa',
        searchText: '#96a8b6',
        white: '#fff',
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
          base: '#FFF2DC',
          darken1: '#f5a623',
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
        titlePrimary: '#95aed8',
        textPrimary: '#4e5a6e'
      }
    }
  }
});
