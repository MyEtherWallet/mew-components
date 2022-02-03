export default {
  title: 'MewTypography'
};

export const All = () => ({
  data() {
    return {
      mewLabel: {
        /* size - 12px,  height - 16px */
        fontSize: '0.8571rem',
        fontWeight: 400,
      },
      mewHeading4: {
        /* size - 16px,  height - 24px */
        fontSize: '1.143rem',
        fontWeight: '400'
      },
      mewAddress: {
        fontFamily: 'PT Mono'
      },
      mewTitle: {
        /* size - 48px,  height - 64px */
        fontSize: '3.428rem',
        fontWeight: 700,
        lineHeight:'4.571rem'
      },
      mewSubtitle: {
        /* size - 32px,  height - 44px */
        fontSize: '2.285rem',
        fontWeight: 700,
        lineHeight: '3.142rem'
      },
      mewHeading1: {
        /* size - 24px,  height - 32px */
        fontSize:  '1.714rem',
        fontWeight: 700,
      },
      mewHeading2: {
        /* size - 20px,  height - 28px */
        fontSize: '1.429rem', 
        fontWeight: 700
      },
      mewHeading3: {
        /* size - 16px,  height - 24px */
        fontSize: '1.143rem',
        fontWeight: 700,
      },
      mewBody: {
        /* size - 14px ,  height - 20px */
        fontSize: '1rem',
        fontWeight: 400,
      },
      mewCaption: {
        /* size - 12px,  height - 20px */
        fontSize: '0.8571rem',
        fontWeight: 700,
        textTransform: 'uppercase'
      },
      capitalize: {
        textTransform: 'capitalize'
      },
      noDecoration: {
        textDecoration: 'none'
      },
      markupStyle: {
        color: '#cfcfcf',
        fontSize: '12px',
        fontWeight: 700
      },
      mewHeaderBlock: {
        color: 'var(--v-titlePrimary-base)',
        fontWeight: 'bold',
        marginBottom: '15px',
        paddingLeft: '10px'
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
    <div :style="{ fontWeight: 400 }">Roboto</div>
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
    <div :style="markupStyle">font-size: 3.428rem (48px); font-weight: 700; line-height: 4.571rem (64px) </div>
    <br />
    <div :style="mewSubtitle">.mew-subtitle</div>
    <div :style="markupStyle">font-size: 2.285rem (30px); font-weight: 700; line-height: 3.142rem (44px)</div>
    <br />
    <div :style="mewHeading1">.mew-heading-1</div>
    <div :style="markupStyle">font-size: 1.714rem (24px); font-weight: 700</div>
    <br />
    <div :style="mewHeading2">.mew-heading-2</div>
    <div :style="markupStyle">font-size: 1.429rem (20px); font-weight: 700</div>
    <br />
    <div :style="mewHeading3">.mew-heading-3</div>
    <div :style="markupStyle">font-size: 1.143rem (16px); font-weight: 700</div>
    <br />
    <div :style="mewHeading4">.mew-heading-4</div>
    <div :style="markupStyle">font-size: 1.143rem (16px); font-weight: 400 </div>
    <br />
    <div :style="mewBody">.mew-body</div>
    <div :style="markupStyle">font-size: 1rem (14px); font-weight: 400</div>
    <br />
    <div :style="mewCaption">.mew-caption</div>
    <div :style="markupStyle">font size: 0.8571rem (12px); font-weight: 700; text-transform: uppercase</div>
    <br />
    <div :style="mewLabel">.mew-label</div>
    <div :style="markupStyle">font-size: 0.8571rem (12px); font-weight: 400</div>
    <br />
    <div :style="capitalize">.capitalize</div>
    <div :style="markupStyle">text-transform: capitalize</div>
    <br />
    <div :style="noDecoration">.no-decoration</div>
    <div :style="markupStyle">text-decoration: none</div>
    <br />
    <div :style="mewHeaderBlock">.mew-header-block</div>
    <div :style="markupStyle">
      color: var(--v-titlePrimary-base);
      font-weight: bold;
      margin-bottom: 15px;
      padding-left: 10px;
    </div>
  </div>`
});
