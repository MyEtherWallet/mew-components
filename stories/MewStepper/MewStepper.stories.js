import {
  withKnobs,
  boolean,
  object,
  number
} from '@storybook/addon-knobs';
import MewStepper from '@/components/MewStepper/MewStepper.vue';
import MewStepperDoc from './MewStepperDoc.mdx';

export default {
  title: 'MewStepper',
  parameters: {
    component: MewStepper,
    docs: {
      page: MewStepperDoc
    }
  },
  decorators: [withKnobs]
};

const items = [
  { step: 1, name: 'Create password' }, 
  { step: 2, name: 'Download keystore file'},
  { step: 3, name: 'Well done'}
]

export const MEWStepper = () => ({
  components: { MewStepper },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    items: {
      default: object('items', items)
    },
    onStep: {
      default: number('on-step', 1)
    },
    compact: {
      default: boolean('compact ?', false)
    }
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  template: `
  <div class="bgStorybook pa-15">
    <mew-stepper
      :items="items"
      :on-step="onStep"
      :compact="compact"
    >
      <template v-if="onStep === 1" v-slot:stepperContent1>
        <span>1.This is step 1 content</span>
      </template>
      <template v-if="onStep === 2" v-slot:stepperContent2>
        <span>2.This is step 2 content</span>
      </template>
      <template v-if="onStep === 3" v-slot:stepperContent3>
      <span>3.This is a step 3 content</span>
    </template>
    </mew-stepper>
  </div>`
});
