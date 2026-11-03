export interface ITheme {
    fontFamily: string,
    monospaceFontFamily: string,
}

const FontFamily = [
    "Pretendard",
    "Inter",
    "Noto Sans KR",
    "Noto Sans JP",
    "Noto Sans",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
].map((font) => (font.includes(" ") ? `"${font}"` : font)).join(",");

const MonospaceFontFamily = [
    "monospace",
].map((font) => (font.includes(" ") ? `"${font}"` : font)).join(",");

export const LightMode: ITheme = {
    fontFamily: FontFamily,
    monospaceFontFamily: MonospaceFontFamily
}