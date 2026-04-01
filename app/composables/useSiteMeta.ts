
export const siteTitle = "网站" // 标题副标题
export const hyphen = " - " // 标题连字符

export function useTitleMeta(title: string) {
    return title + hyphen + siteTitle
}