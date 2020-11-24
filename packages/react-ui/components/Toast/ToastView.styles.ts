import { css, memoizeStyle } from '../../lib/theming/Emotion';
import { Theme } from '../../lib/theming/Theme';

const styles = {
  root(t: Theme) {
    return css`
      background: ${t.toastBg};
      border-radius: ${t.toastBorderRadius};
      border: ${t.toastBorder};
      color: ${t.toastColor};
      display: inline-block;
      font-size: ${t.toastFontSize};
      line-height: ${t.toastLineHeight};
      opacity: 1;
      padding: ${t.toastPaddingY} ${t.toastPaddingX}
        ${parseInt(t.toastPaddingY) + parseInt(t.fontFamilyCompensationBaseline)}px;
      position: relative;
      top: ${t.toastTop};
    `;
  },

  wrapper() {
    return css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 0;
      text-align: center;
    `;
  },

  closeWrapper(t: Theme) {
    return css`
      display: flex;
      position: absolute;
      top: ${t.toastCloseBtnPadding};
      right: ${t.toastCloseBtnPadding};
    `;
  },

  link(t: Theme) {
    const halfPaddingX = `${Math.round(parseInt(t.toastPaddingX) / 2)}px`;
    return css`
      color: ${t.toastLinkColor};
      cursor: pointer;
      display: inline-block;
      font-weight: 600;
      margin: -${t.toastPaddingY} ${t.toastPaddingX} -${parseInt(t.toastPaddingY) +
          parseInt(t.fontFamilyCompensationBaseline)}px
        ${halfPaddingX};
      padding: ${t.toastPaddingY} ${halfPaddingX}
        ${parseInt(t.toastPaddingY) + parseInt(t.fontFamilyCompensationBaseline)}px;

      &:hover {
        text-decoration: underline;
      }
    `;
  },

  close(t: Theme) {
    return css`
      color: ${t.toastCloseColor};
      cursor: pointer;
      display: inline-block;
      height: 8px;
      line-height: 0;
      margin: -12px -8px;
      padding: 12px 8px;
      text-align: center;
      width: 8px;

      &:hover {
        color: ${t.toastCloseHoverColor};
      }
    `;
  },
};

export const jsStyles = memoizeStyle(styles);
