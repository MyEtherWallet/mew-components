import {
  withKnobs,
  boolean,
  object,
  number
} from '@storybook/addon-knobs';
import MewStepper from '@/components/MewStepper/MewStepper.vue';

export default {
  title: 'MewStepper',
  parameters: {
    component: MewStepper
  },
  decorators: [withKnobs]
};

const items = [
  { step: 1, name: 'STEP 1. Create password' }, 
  { step: 2 , name: 'STEP 2. Download keystore file'},
  { step: 3, name: 'STEP 3. Well done'}
]

export const MEWStepper = () => ({
  components: { 'mew-stepper': MewStepper },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    items: {
      default: object('items', items)
    },
    onStep: {
      default: number('on-step', 1)
    }
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  template: `
    <div>
    <br />
    <mew-stepper
      :items="items"
      :on-step="onStep"
    >
      <template v-if="onStep === 1" v-slot:outsideStepContent1>
        <span>1.This is a placeholder outside</span>
      </template>
      <template v-if="onStep === 2" v-slot:outsideStepContent2>
        <span>2.This is a placeholder outside</span>
      </template>
      <template v-if="onStep === 3" v-slot:outsideStepContent3>
      <span>3.This is a placeholder outside</span>
    </template>
    </mew-stepper>
  </div>`
});
