import { EditorView } from "@codemirror/view";
import { Extension } from "@codemirror/state";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags as t } from "@lezer/highlight";

import { BLACK_COLOR, RED_COLOR, WHITE_COLOR } from "./colors";

const GRAY_LIGHT = "#6B6B6B";
const GRAY_DARK = "#2A2A2A";
const RED_LIGHT = "#C94A4A";
const RED_DARK = "#8B2828";
const WHITE_DIM = "#E0E0E0";
const GRAY_MORE_LIGHT = "#E8E8E8";
const GRAY_MID = "#C0C0C0";
const BLACK_SOFT = "#4A4A4A";

const customDarkTheme = EditorView.theme({
  "&": {
    color: WHITE_COLOR,
    backgroundColor: BLACK_COLOR,
  },
  ".cm-content": {
    caretColor: RED_COLOR,
    fontFamily: "monospace",
  },
  ".cm-cursor, .cm-dropCursor": { 
    borderLeftColor: RED_COLOR,
    borderLeftWidth: "2px",
  },
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
    backgroundColor: RED_DARK,
  },
  ".cm-activeLine": { 
    backgroundColor: GRAY_DARK,
  },
  ".cm-selectionMatch": { 
    backgroundColor: `${RED_DARK}80`,
  },
  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    backgroundColor: RED_LIGHT,
    outline: `1px solid ${RED_COLOR}`,
  },
  ".cm-gutters": {
    backgroundColor: GRAY_DARK,
    color: GRAY_LIGHT,
    border: "none",
  },
  ".cm-activeLineGutter": {
    backgroundColor: GRAY_DARK,
    color: WHITE_COLOR,
  },
  ".cm-foldPlaceholder": {
    backgroundColor: RED_DARK,
    border: `1px solid ${RED_COLOR}`,
    color: WHITE_DIM,
  },
  ".cm-tooltip": {
    border: `1px solid ${RED_COLOR}`,
    backgroundColor: BLACK_COLOR,
    color: WHITE_COLOR,
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: RED_COLOR,
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: BLACK_COLOR,
  },
  ".cm-searchMatch": {
    backgroundColor: RED_DARK,
    outline: `1px solid ${RED_COLOR}`,
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: RED_COLOR,
  },
}, { dark: true });

const customLightTheme = EditorView.theme({
  "&": {
    color: BLACK_COLOR,
    backgroundColor: WHITE_COLOR,
  },
  ".cm-content": {
    caretColor: RED_COLOR,
    fontFamily: "monospace",
  },
  ".cm-cursor, .cm-dropCursor": { 
    borderLeftColor: RED_COLOR,
    borderLeftWidth: "2px",
  },
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
    backgroundColor: `${RED_LIGHT}40`,
  },
  ".cm-activeLine": { 
    backgroundColor: GRAY_MORE_LIGHT,
  },
  ".cm-selectionMatch": { 
    backgroundColor: `${RED_LIGHT}30`,
  },
  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    backgroundColor: `${RED_LIGHT}50`,
    outline: `1px solid ${RED_COLOR}`,
  },
  ".cm-gutters": {
    backgroundColor: GRAY_MORE_LIGHT,
    color: GRAY_DARK,
    border: "none",
    borderRight: `1px solid ${GRAY_MID}`,
  },
  ".cm-activeLineGutter": {
    backgroundColor: GRAY_MID,
    color: BLACK_COLOR,
  },
  ".cm-foldPlaceholder": {
    backgroundColor: GRAY_MORE_LIGHT,
    border: `1px solid ${RED_COLOR}`,
    color: BLACK_COLOR,
  },
  ".cm-tooltip": {
    border: `1px solid ${GRAY_MID}`,
    backgroundColor: WHITE_COLOR,
    color: BLACK_COLOR,
    boxShadow: "0 2px 8px rgba(57, 57, 57, 0.15)",
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: GRAY_MID,
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: WHITE_COLOR,
  },
  ".cm-searchMatch": {
    backgroundColor: `${RED_LIGHT}40`,
    outline: `1px solid ${RED_COLOR}`,
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: `${RED_LIGHT}60`,
  },
  ".cm-line": {
    "& ::selection": {
      backgroundColor: `${RED_LIGHT}40`,
    },
  },
}, { dark: false });

const customDarkHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, color: RED_COLOR, fontWeight: "bold" },
  { tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
    color: WHITE_COLOR },
  { tag: [t.function(t.variableName), t.labelName],
    color: WHITE_DIM },
  { tag: [t.color, t.constant(t.name), t.standard(t.name)],
    color: RED_LIGHT },
  { tag: [t.definition(t.name), t.separator],
    color: WHITE_COLOR },
  { tag: [t.typeName, t.className, t.number, t.changed, t.annotation,
    t.modifier, t.self, t.namespace],
    color: RED_LIGHT },
  { tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp,
    t.link, t.special(t.string)],
    color: RED_COLOR },
  { tag: [t.meta, t.comment],
    color: GRAY_LIGHT, fontStyle: "italic" },
  { tag: t.strong,
    fontWeight: "bold" },
  { tag: t.emphasis,
    fontStyle: "italic" },
  { tag: t.strikethrough,
    textDecoration: "line-through" },
  { tag: t.link,
    color: RED_LIGHT, textDecoration: "underline" },
  { tag: t.heading,
    fontWeight: "bold", color: RED_COLOR },
  { tag: [t.atom, t.bool, t.special(t.variableName)],
    color: RED_LIGHT },
  { tag: [t.processingInstruction, t.string, t.inserted],
    color: WHITE_DIM },
  { tag: t.invalid,
    color: WHITE_COLOR, backgroundColor: RED_COLOR },
]);

const customLightHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, color: RED_DARK, fontWeight: "bold" },
  { tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
    color: BLACK_COLOR },
  { tag: [t.function(t.variableName), t.labelName],
    color: BLACK_SOFT },
  { tag: [t.color, t.constant(t.name), t.standard(t.name)],
    color: RED_COLOR },
  { tag: [t.definition(t.name), t.separator],
    color: BLACK_COLOR },
  { tag: [t.typeName, t.className, t.number, t.changed, t.annotation,
    t.modifier, t.self, t.namespace],
    color: RED_COLOR },
  { tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp,
    t.link, t.special(t.string)],
    color: RED_DARK },
  { tag: [t.meta, t.comment],
    color: GRAY_DARK, fontStyle: "italic" },
  { tag: t.strong,
    fontWeight: "bold", color: BLACK_COLOR },
  { tag: t.emphasis,
    fontStyle: "italic", color: BLACK_SOFT },
  { tag: t.strikethrough,
    textDecoration: "line-through" },
  { tag: t.link,
    color: RED_COLOR, textDecoration: "underline" },
  { tag: t.heading,
    fontWeight: "bold", color: RED_DARK },
  { tag: [t.atom, t.bool, t.special(t.variableName)],
    color: RED_COLOR },
  { tag: [t.processingInstruction, t.string, t.inserted],
    color: BLACK_SOFT },
  { tag: t.invalid,
    color: WHITE_COLOR, backgroundColor: RED_COLOR },
]);

export const darkCodeMirrorTheme: Extension = [
  customDarkTheme,
  syntaxHighlighting(customDarkHighlightStyle),
];

export const lightCodeMirrorTheme: Extension = [
  customLightTheme,
  syntaxHighlighting(customLightHighlightStyle),
];
