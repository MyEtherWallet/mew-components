export default {
  title: 'Typography'
};

export const All = () => ({
  data() {
    return {
      mewAddress: {
        fontFamily: 'PT Mono'
      },
      mewTitle: {
        fontSize: '50px',
        fontWeight: 700
      },
      mewSubtitle: {
        fontSize: '30px',
        fontWeight: 700
      },
      mewHeading1: {
        fontSize: '24px',
        fontWeight: 700
      },
      mewHeading2: {
        fontSize: '22px',
        fontWeight: 700
      },
      mewHeading3: {
        fontSize: '16px',
        fontWeight: 700
      },
      mewBody: {
        fontSize: '14px',
        fontWeight: 400
      },
      mewCaption: {
        fontSize: '12px',
        fontWeight: 700,
        textTransform: 'uppercase'
      },
      markupStyle: {
        color: '#cfcfcf',
        fontSize: '12px',
        fontWeight: 700
      },
      headerStyle: {
        color: '#05c0a5',
        textTransform: 'uppercase',
        paddingBottom: '10px'
      }
    };
  },
  template: `
    <div>
    <br/>
    <h3 :style="headerStyle">font-family:</h3>
    <div :style="{ fontWeight: 400, fontFamily: 'Roboto' }">Roboto</div>
    <div :style="markupStyle">Primary</div>
    <br />
    <div :style="{ fontWeight: 400, fontFamily: 'PT Mono' }">PT Mono</div>
    <div :style="markupStyle">Address & Coding</div>
    <br />
    <h3 :style="headerStyle">classes</h3>
    <div :style="mewAddress">.mew-address</div>
    <div :style="markupStyle">font-family: "PT Mono"</div>
    <br />
    <div :style="mewBody, { fontWeight: 400 }">.font-weight-regular</div>
    <div :style="markupStyle">font-weight: 400</div>
    <br />
    <div :style="mewBody, { fontWeight: 500 }">.font-weight-medium</div>
    <div :style="markupStyle">font-weight: 500</div>
    <br />
    <div :style="mewBody, { fontWeight: 700 }">.font-weight-bold</div>
    <div :style="markupStyle">font-weight: 700</div>
    <div :style="mewTitle">.mew-title</div>
    <div :style="markupStyle">font-size: 50px; font-weight: 700</div>
    <br />
    <div :style="mewSubtitle">.mew-subtitle</div>
    <div :style="markupStyle">font-size: 30px; font-weight: 700</div>
    <br />
    <div :style="mewHeading1">.mew-heading-1</div>
    <div :style="markupStyle">font-size: 24px; font-weight: 700</div>
    <br />
    <div :style="mewHeading2">.mew-heading-2</div>
    <div :style="markupStyle">font-size: 22px; font-weight: 700</div>
    <br />
    <div :style="mewHeading3">.mew-heading-3</div>
    <div :style="markupStyle">font-size: 16px; font-weight: 700</div>
    <br />
    <div :style="mewBody">.mew-body</div>
    <div :style="markupStyle">font-size: 14px; font-weight: 400</div>
    <br />
    <div :style="mewCaption">.mew-caption</div>
    <div :style="markupStyle">font-size: 12px; font-weight: 700; text-transform: uppercase</div>
  </div>`
});
