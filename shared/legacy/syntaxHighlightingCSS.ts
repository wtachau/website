import { css } from "@emotion/react";

const docsSyntaxHighlightingCSS = css`
  pre.shiki {
    overflow-x: auto;
  }

  pre.shiki div.dim {
    opacity: 0.8;
    transition: all 0.3s;
    &:hover {
      opacity: 1;
    }
  }
  pre.shiki div.dim,
  pre.shiki div.highlight {
    margin: 0;
    padding: 0;
  }
  pre.shiki div.highlight {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.05);
  }
  pre.shiki div.line {
    min-height: 1rem;
  }

  /* Visually differentiates twoslash code samples  */
  pre.twoslash {
    border-color: #719af4;
  }

  /** When you mouse over the pre, show the underlines */
  pre.twoslash:hover data-lsp {
    border-color: #747474;
  }

  /** The tooltip-like which provides the LSP response */
  pre.twoslash data-lsp:hover::before {
    content: attr(lsp);
    position: absolute;
    transform: translate(0, 1rem);

    background-color: #3f3f3f;
    color: #fff;
    text-align: left;
    padding: 5px 8px;
    border-radius: 2px;
    font-family: "JetBrains Mono", Menlo, Monaco, Consolas, Courier New,
      monospace;
    font-size: 14px;
    white-space: pre-wrap;
    z-index: 100;
  }

  pre .code-container {
    overflow: auto;
  }
  /* The try button */
  pre .code-container > a {
    position: absolute;
    right: 8px;
    bottom: 8px;
    border-radius: 4px;
    border: 1px solid #719af4;
    padding: 0 8px;
    color: #719af4;
    text-decoration: none;
    opacity: 0;
    transition-timing-function: ease;
    transition: opacity 0.3s;
  }
  /* Respect no animations */
  @media (prefers-reduced-motion: reduce) {
    pre .code-container > a {
      transition: none;
    }
  }
  pre .code-container > a:hover {
    color: white;
    background-color: #719af4;
  }
  pre .code-container:hover a {
    opacity: 1;
  }

  pre code {
    font-size: 14px;
    font-family: "JetBrains Mono", Menlo, Monaco, Consolas, Courier New,
      monospace;
    white-space: pre-wrap; // this fixes an issue of the code element not shrinking width and breaking layout
    -webkit-overflow-scrolling: touch;
  }
  pre code a {
    text-decoration: none;
  }
  pre data-err {
    /* Extracted from VS Code */
    background: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%206%203'%20enable-background%3D'new%200%200%206%203'%20height%3D'3'%20width%3D'6'%3E%3Cg%20fill%3D'%23c94824'%3E%3Cpolygon%20points%3D'5.5%2C0%202.5%2C3%201.1%2C3%204.1%2C0'%2F%3E%3Cpolygon%20points%3D'4%2C0%206%2C2%206%2C0.6%205.4%2C0'%2F%3E%3Cpolygon%20points%3D'0%2C2%201%2C3%202.4%2C3%200%2C0.6'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")
      repeat-x bottom left;
    padding-bottom: 3px;
  }
  pre .query {
    margin-bottom: 10px;
    color: #137998;
    display: inline-block;
  }

  /* In order to have the 'popped out' style design and to not break the layout
  /* we need to place a fake and un-selectable copy of the error which _isn't_ broken out
  /* behind the actual error message.

  /* This sections keeps both of those two in in sync  */

  pre .error,
  pre .error-behind {
    margin-left: -14px;
    margin-top: 8px;
    margin-bottom: 4px;
    padding: 6px;
    padding-left: 14px;
    width: calc(100% - 20px);
    white-space: pre-wrap;
    display: block;
  }
  pre .error {
    position: absolute;
    background-color: #fee;
    border-left: 2px solid #bf1818;
    /* Give the space to the error code */
    display: flex;
    align-items: center;
    color: black;
  }
  pre .error .code {
    display: none;
  }
  pre .error-behind {
    user-select: none;
    visibility: transparent;
    color: #fee;
  }
  /* Queries */
  pre .arrow {
    /* Transparent background */
    background-color: #eee;
    position: relative;
    top: -7px;
    margin-left: 0.1rem;
    /* Edges */
    border-left: 1px solid #eee;
    border-top: 1px solid #eee;
    transform: translateY(25%) rotate(45deg);
    /* Size */
    height: 8px;
    width: 8px;
  }
  pre .popover {
    margin-bottom: 10px;
    background-color: #eee;
    display: inline-block;
    padding: 0 0.5rem 0.3rem;
    margin-top: 10px;
    border-radius: 3px;
  }
  /* Completion */
  pre .inline-completions ul.dropdown {
    display: inline-block;
    position: absolute;
    width: 240px;
    background-color: gainsboro;
    color: grey;
    padding-top: 4px;
    font-family: var(--code-font);
    font-size: 0.8rem;
    margin: 0;
    padding: 0;
    border-left: 4px solid #4b9edd;
  }
  pre .inline-completions ul.dropdown::before {
    background-color: #4b9edd;
    width: 2px;
    position: absolute;
    top: -1.2rem;
    left: -3px;
    content: " ";
  }
  pre .inline-completions ul.dropdown li {
    overflow-x: hidden;
    padding-left: 4px;
    margin-bottom: 4px;
  }
  pre .inline-completions ul.dropdown li.deprecated {
    text-decoration: line-through;
  }
  pre .inline-completions ul.dropdown li span.result-found {
    color: #4b9edd;
  }
  pre .inline-completions ul.dropdown li span.result {
    width: 100px;
    color: black;
    display: inline-block;
  }
  .dark-theme .markdown pre {
    background-color: #d8d8d8;
    border-color: #ddd;
    filter: invert(98%) hue-rotate(180deg);
  }
  data-lsp {
    /* Ensures there's no 1px jump when the hover happens */
    border-bottom: 1px dotted transparent;
    /* Fades in unobtrusively */
    transition-timing-function: ease;
    transition: border-color 0.3s;
  }
  /* Respect people's wishes to not have animations */
  @media (prefers-reduced-motion: reduce) {
    data-lsp {
      transition: none;
    }
  }

  /** Annotations support, providing a tool for meta commentary */
  .tag-container {
    position: relative;
  }
  .tag-container .twoslash-annotation {
    position: absolute;
    font-family: "JetBrains Mono", Menlo, Monaco, Consolas, Courier New,
      monospace;
    right: -10px;
    /** Default annotation text to 200px */
    width: 200px;
    color: #187abf;
    background-color: #fcf3d9 bb;
  }
  .tag-container .twoslash-annotation p {
    text-align: left;
    font-size: 0.8rem;
    line-height: 0.9rem;
  }
  .tag-container .twoslash-annotation svg {
    float: left;
    margin-left: -44px;
  }
  .tag-container .twoslash-annotation.left {
    right: auto;
    left: -200px;
  }
  .tag-container .twoslash-annotation.left svg {
    float: right;
    margin-right: -5px;
  }

  /** Support for showing console log/warn/errors inline */
  pre .logger {
    display: grid;
    grid-template-columns: 15px 1fr;
    grid-gap: 10px;

    align-items: center;
    color: black;
    padding: 4px 6px;
    padding-left: 8px;
    width: calc(100% - 19px);
    white-space: pre-wrap;
    /* font-size: 12px; */
    margin: 5px 0 10px;
    opacity: 0.3;
    cursor: default;
    transition: all 0.3s;
    &:hover {
      opacity: 0.8;
    }
  }
  pre .logger.error-log {
    background-color: #fee;
    border-left: 2px solid #bf1818;
  }
  pre .logger.warn-log {
    background-color: #ffe;
    border-left: 2px solid #eae662;
  }
  pre .logger.log-log {
    background: #090a12;
    border-left: 2px solid #ababab;
    color: #fff;
  }
  pre .logger.log-log svg {
    margin-left: 6px;
    margin-right: 9px;
    height: 10px;
  }
`;

export default docsSyntaxHighlightingCSS;
