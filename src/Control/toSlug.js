export const toSlug = (title) => {
    const a = title.toLowerCase();
    const b = a.replaceAll(" ", "-");
    const c = b.replaceAll("?", "")
    return c;
}